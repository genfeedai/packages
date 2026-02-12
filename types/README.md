# @genfeedai/types

Type definitions for the Genfeed workflow engine.

## Installation

```bash
npm install @genfeedai/types
# or
bun add @genfeedai/types
```

## Usage

```typescript
import type { WorkflowFile, WorkflowNode, WorkflowEdge } from '@genfeedai/types';
import type { NodeType, HandleType } from '@genfeedai/types';
```

### Subpath Exports

```typescript
// Node type definitions
import type { ImageNodeData, VideoNodeData } from '@genfeedai/types/nodes';

// Workflow file schema
import type { WorkflowFile } from '@genfeedai/types/workflow';

// ComfyUI integration types
import type { ComfyUIWorkflow } from '@genfeedai/types/comfyui';

// Replicate model schemas
import type { ReplicateModel } from '@genfeedai/types/replicate';
```

## Key Exports

- **Workflow types**: `WorkflowFile`, `WorkflowNode`, `WorkflowEdge`, `NodeGroup`
- **Node types**: Data interfaces for all 36 node types (image, video, audio, text)
- **Enums**: `NodeCategory`, `HandleType`, `EdgeStyle`
- **ComfyUI types**: ComfyUI workflow and prompt schemas
- **Replicate types**: Replicate model input/output schemas

## License

AGPL-3.0
