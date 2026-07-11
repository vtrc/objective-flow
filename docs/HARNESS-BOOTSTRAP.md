# Harness bootstrap

Objective Flow should start from the first meaningful message in every supported harness.

## Codex

- Use `.codex-plugin/plugin.json` as the plugin entrypoint.
- Keep the startup prompt short and explicit.
- Route non-trivial work into `objective-flow` automatically.

## Claude

- Use `CLAUDE.md` as the project-level startup instruction file.
- Keep the entry instructions focused on the workflow, not on the repository history.
- Use the same shared skills as the other harnesses.

## OpenCode

- Use `AGENTS.md` as the project-level instruction file.
- Keep the instructions generic and reusable.
- Prefer the shared `skills/` directory for the workflow itself.

## Shared behavior

- Start with the objective, not with implementation details.
- Switch to the workflow automatically for non-trivial work.
- Use the same core phases and subagent rules across harnesses.
- Keep the wording adapted to the harness, but preserve the same method.

