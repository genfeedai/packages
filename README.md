# @genfeedai/packages

Published npm packages for the [Genfeed.ai](https://genfeed.ai) platform.

## Packages

| Package | Description | npm |
|---------|-------------|-----|
| [`@genfeedai/types`](./types) | Type definitions for Genfeed workflow engine | [![npm](https://img.shields.io/npm/v/@genfeedai/types)](https://www.npmjs.com/package/@genfeedai/types) |
| [`@genfeedai/core`](./core) | Core utilities for Genfeed workflow engine | [![npm](https://img.shields.io/npm/v/@genfeedai/core)](https://www.npmjs.com/package/@genfeedai/core) |
| [`@genfeedai/workflows`](./workflows) | Pre-built workflow definitions and ComfyUI integrations | [![npm](https://img.shields.io/npm/v/@genfeedai/workflows)](https://www.npmjs.com/package/@genfeedai/workflows) |
| [`@genfeedai/prompts`](./prompts) | Prompt templates for AI content generation | [![npm](https://img.shields.io/npm/v/@genfeedai/prompts)](https://www.npmjs.com/package/@genfeedai/prompts) |
| [`@genfeedai/workflow-ui`](./workflow-ui) | Shared UI components for Genfeed workflow editor | [![npm](https://img.shields.io/npm/v/@genfeedai/workflow-ui)](https://www.npmjs.com/package/@genfeedai/workflow-ui) |
| [`@genfeedai/deserializer`](./deserializer) | JSON:API deserializer for Genfeed API responses | [![npm](https://img.shields.io/npm/v/@genfeedai/deserializer)](https://www.npmjs.com/package/@genfeedai/deserializer) |

Note: `@genfeedai/cli` is published from the standalone [`genfeedai/cli`](https://github.com/genfeedai/cli) repository.

## Development

```bash
# Install dependencies
bun install

# Build all packages (in dependency order)
bun run --cwd types build
bun run --cwd core build
bun run --cwd workflows build
bun run --cwd prompts build
bun run --cwd workflow-ui build
bun run --cwd deserializer build
```

## Publishing

Packages are published to npm via GitHub Releases. Only the package matching the tag gets published.

### Steps

1. Bump the version in `{package}/package.json`
2. Commit: `git commit -m "chore: bump {package} to {version}"`
3. Create a release with a tag: `{package}-v{version}`
4. Publish release notes

The CI workflow validates tag/package versions, builds dependencies, rewrites `workspace:*` references where needed, and publishes with provenance.

### Tag format

| Package | Tag example |
|---------|-------------|
| `@genfeedai/types` | `types-v0.1.2` |
| `@genfeedai/core` | `core-v0.1.2` |
| `@genfeedai/workflows` | `workflows-v0.1.2` |
| `@genfeedai/prompts` | `prompts-v0.1.2` |
| `@genfeedai/workflow-ui` | `workflow-ui-v0.1.6` |
| `@genfeedai/deserializer` | `deserializer-v1.0.1` |

### Manual publish

You can trigger publishing from the **Actions** tab with `workflow_dispatch` and choose a package (or `all`).

## License

Public package licenses are declared per package in each `package.json`.
