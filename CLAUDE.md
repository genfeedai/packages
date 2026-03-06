# Packages Repo — Genfeed.ai

Shared package workspace for constants, enums, interfaces, workflows, prompts, and tools.

## Rules

- Maintain strict TypeScript contracts; do not introduce `any`.
- Keep exported APIs stable and document any intentional breaking changes.
- Centralize shared primitives here instead of duplicating definitions in app repos.
- Do not include secrets or environment credentials in package artifacts.

## CI

- Keep package governance/publish workflows healthy.
- Add lint/type-check/test scripts per package when package complexity grows.
