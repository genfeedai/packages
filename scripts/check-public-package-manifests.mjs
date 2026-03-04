#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const packageDirs = fs
  .readdirSync(root)
  .map((d) => path.join(root, d))
  .filter((d) => fs.existsSync(path.join(d, 'package.json')) && fs.statSync(d).isDirectory());

const violations = [];
const warnings = [];

const isPublic = (pkg) => pkg.private !== true;
const isSrcPath = (value) => typeof value === 'string' && value.includes('src/');
const isAllowedSrcAsset = (value) =>
  typeof value === 'string' && (value.endsWith('.css') || value.endsWith('.json'));

for (const dir of packageDirs) {
  const packagePath = path.join(dir, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  if (!isPublic(pkg)) continue;

  const rel = path.relative(root, packagePath);

  if (!pkg.license) violations.push(`${rel}: missing \"license\"`);
  if (!pkg.repository) violations.push(`${rel}: missing \"repository\"`);
  if (!Array.isArray(pkg.files) || pkg.files.length === 0) {
    violations.push(`${rel}: missing/empty \"files\"`);
  }

  if (pkg.main && isSrcPath(pkg.main)) {
    violations.push(`${rel}: \"main\" points to src path (${pkg.main})`);
  }
  if (pkg.types && isSrcPath(pkg.types)) {
    violations.push(`${rel}: \"types\" points to src path (${pkg.types})`);
  }

  if (pkg.exports) {
    const stack = [pkg.exports];
    while (stack.length) {
      const current = stack.pop();
      if (typeof current === 'string') {
        if (isSrcPath(current) && !isAllowedSrcAsset(current)) {
          violations.push(`${rel}: \"exports\" contains source-code src path (${current})`);
        }
        continue;
      }
      if (current && typeof current === 'object') {
        for (const value of Object.values(current)) stack.push(value);
      }
    }
  }

  if (pkg.publishConfig?.registry && pkg.publishConfig.registry !== 'https://registry.npmjs.org/') {
    violations.push(`${rel}: public package uses non-npm registry (${pkg.publishConfig.registry})`);
  }

  const deps = pkg.dependencies || {};
  for (const [name, version] of Object.entries(deps)) {
    if (typeof version !== 'string') continue;
    if (version.startsWith('file:')) {
      violations.push(`${rel}: dependencies.${name} uses non-publishable file specifier (${version})`);
    }
    if (version.startsWith('workspace:')) {
      warnings.push(`${rel}: dependencies.${name} uses workspace specifier (${version}); ensure publish pipeline rewrites it`);
    }
  }
}

if (warnings.length > 0) {
  console.warn('Public package warnings:\n');
  for (const w of warnings) console.warn(`- ${w}`);
  console.warn('');
}

if (violations.length > 0) {
  console.error('Public package policy violations found:\n');
  for (const v of violations) console.error(`- ${v}`);
  process.exit(1);
}

console.log(`Public package policy check passed for ${packageDirs.length} package directories.`);
