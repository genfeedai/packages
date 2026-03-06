# @genfeedai/tools

Canonical Genfeed tool registry shared across Cloud, MCP, and CLI.

## Goals

- Single source of truth for tool names and schemas
- Canonical tool names only (no legacy aliases)
- Surface filtering (`agent`, `mcp`, `cli`)

## Usage

```ts
import { getToolsForSurface, toMcpTools } from '@genfeedai/tools';

const mcpTools = toMcpTools(getToolsForSurface('mcp'));
```

