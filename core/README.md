# @genfeedai/core

Core utilities for the Genfeed workflow engine including pricing, validation, and topological sorting.

## Installation

```bash
npm install @genfeedai/core
# or
bun add @genfeedai/core
```

## Usage

### Workflow Validation

```typescript
import { validateWorkflow, isValidConnection, detectCycles } from '@genfeedai/core';

const result = validateWorkflow(nodes, edges);
if (!result.valid) {
  console.error(result.errors);
}
```

### Topological Sort

```typescript
import { topologicalSort, buildDependencyMap } from '@genfeedai/core/topological-sort';

const executionOrder = topologicalSort(nodes, edges);
```

### Pricing

```typescript
import { PRICING, RESOLUTIONS, VIDEO_DURATIONS } from '@genfeedai/core';

const cost = PRICING['flux-dev'].perImage;
```

## API

| Export | Description |
|--------|-------------|
| `validateWorkflow` | Validate workflow nodes and edges |
| `isValidConnection` | Check if a connection between handles is valid |
| `detectCycles` | Detect cycles in workflow graph |
| `topologicalSort` | Sort nodes in execution order |
| `PRICING` | Per-model pricing constants |
| `RESOLUTIONS` | Available image resolutions |

## License

AGPL-3.0
