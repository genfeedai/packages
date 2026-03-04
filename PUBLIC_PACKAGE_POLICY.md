# Public Package Policy

This repository hosts both publishable OSS packages and internal workspace packages.

## Package tiers

1. Public OSS (npmjs)
- Intended for external consumers.
- Must be stable, documented, semver-versioned, and free of private runtime assumptions.

2. Internal Shared (workspace private)
- Reused within Genfeed repositories and services.
- Not intended for external consumers.

3. App/Infra Private
- Product/runtime-specific packages, integrations, or deployment concerns.

## Required rules for public packages

A package is considered public when `private` is omitted or set to `false`.

Public packages MUST:
- Use `main`, `types`, and `exports` entries that point to `dist/*` artifacts (not `src/*`).
- Include `license`, `repository`, and `files` metadata.
- Avoid `workspace:*` and `file:` dependency specifiers in `dependencies`.
- Use npmjs as the publish target if `publishConfig.registry` is set.

Public packages SHOULD:
- Keep side effects explicit (`sideEffects` where applicable).
- Include a package-level README.

## Workflow architecture policy

For workflow packages:
- Public core contracts and portable workflow logic belong in public packages.
- Cloud-private node implementations stay in private packages.
- Private nodes extend core registries via extension packs; they do not fork core contracts.

## CI enforcement

CI enforces these rules via `scripts/check-public-package-manifests.mjs`.
