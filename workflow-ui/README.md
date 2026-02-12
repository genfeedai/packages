# @genfeedai/workflow-ui

Shared UI components for the Genfeed workflow editor built on React Flow.

## Installation

```bash
npm install @genfeedai/workflow-ui
# or
bun add @genfeedai/workflow-ui
```

### Peer Dependencies

```bash
npm install @xyflow/react react react-dom zustand zundo next
```

## Usage

```typescript
import { WorkflowCanvas } from '@genfeedai/workflow-ui/canvas';
import { useWorkflowStore } from '@genfeedai/workflow-ui/stores';
import { WorkflowProvider } from '@genfeedai/workflow-ui/provider';
```

### Subpath Exports

| Export | Description |
|--------|-------------|
| `@genfeedai/workflow-ui` | Main entry (re-exports all) |
| `@genfeedai/workflow-ui/canvas` | Workflow canvas components |
| `@genfeedai/workflow-ui/nodes` | Node type components |
| `@genfeedai/workflow-ui/panels` | Side panels (inspector, settings) |
| `@genfeedai/workflow-ui/toolbar` | Toolbar components |
| `@genfeedai/workflow-ui/hooks` | React hooks |
| `@genfeedai/workflow-ui/stores` | Zustand stores |
| `@genfeedai/workflow-ui/provider` | Context providers |
| `@genfeedai/workflow-ui/ui` | Primitive UI components |
| `@genfeedai/workflow-ui/lib` | Utility functions |
| `@genfeedai/workflow-ui/styles` | CSS stylesheet |

### Styles

Import the stylesheet in your app:

```typescript
import '@genfeedai/workflow-ui/styles';
```

## License

AGPL-3.0
