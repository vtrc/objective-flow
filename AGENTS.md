# Repository guidance

This repository defines a portable **Agent Skills** system. Keep changes small, explicit, and easy to review.

## Harness support

- **Codex**: `.codex-plugin/plugin.json`
- **Claude**: `CLAUDE.md`
- **OpenCode**: `OPENCODE.md`
- Shared rules: `docs/HARNESS-BOOTSTRAP.md` and `docs/ROUTING-DISCIPLINE.md`

## Startup behavior
Follow the shared bootstrap guidance and keep the lifecycle strict from frame through learn.

## What this repo is

- `skills/` contains the actual skills, one folder per skill.
- Each skill folder must contain a top-level `SKILL.md`.
- `README.md` is the main English entrypoint.
- `README-es.md` is the Spanish companion README.

## Working rules

1. Preserve the existing skill names and folder structure unless there is a clear reason to change them.
2. Keep documentation concise, scannable, and example-driven.
3. Prefer additive changes over rewrites when possible.
4. If you update a skill, make sure the folder name and the `name:` field in `SKILL.md` stay aligned.
5. Do not add commit metadata such as Co-Authored-By or AI attribution.

## Documentation style

- Lead with the outcome or purpose first.
- Use short sections and tables when they make scanning easier.
- Explain lifecycle steps, workflow stages, and installation paths clearly.
- Keep examples copyable.

## Before publishing

- Check that markdown renders cleanly.
- Confirm any new or renamed skill still matches the expected `skill-name/` + `SKILL.md` shape.
- Update the README files if the user-facing workflow changes.
