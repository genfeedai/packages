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
| [`@genfeedai/cli`](./cli) | CLI tool for Genfeed.ai | [![npm](https://img.shields.io/npm/v/@genfeedai/cli)](https://www.npmjs.com/package/@genfeedai/cli) |

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
bun run --cwd cli build
```

## Publishing

Packages are published to npm via GitHub Releases. Only the package matching the tag gets published — the other jobs skip automatically.

### Steps

1. Bump the version in `{package}/package.json`
2. Commit: `git commit -m "chore: bump {package} to {version}"`
3. Go to **GitHub > Releases > Create a new release**
4. Create a new tag: `{package}-v{version}` (e.g. `types-v0.1.2`, `cli-v0.3.0`)
5. Add release notes
6. Hit **Publish release**

The CI workflow validates that the tag version matches `package.json`, builds workspace dependencies, resolves `workspace:*` references, and publishes to npm with provenance.

### Tag format

| Package | Tag example |
|---------|-------------|
| `@genfeedai/types` | `types-v0.1.2` |
| `@genfeedai/core` | `core-v0.1.2` |
| `@genfeedai/workflows` | `workflows-v0.1.2` |
| `@genfeedai/prompts` | `prompts-v0.1.2` |
| `@genfeedai/workflow-ui` | `workflow-ui-v0.1.6` |
| `@genfeedai/cli` | `cli-v0.3.0` |

### Manual publish

You can also trigger a publish from the **Actions** tab using `workflow_dispatch` and selecting which package (or "all").

## License

Core packages (types, core, workflows, prompts, workflow-ui) are licensed under [AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.html).

CLI is licensed under [MIT](https://opensource.org/licenses/MIT).
