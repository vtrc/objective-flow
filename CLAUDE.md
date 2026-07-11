# Objective Flow for Claude

Use Objective Flow as the default workflow for any non-trivial objective.

For the shared bootstrap and routing rules, see:

- `docs/HARNESS-BOOTSTRAP.md`
- `docs/ROUTING-DISCIPLINE.md`

## Startup behavior
Follow the shared bootstrap guidance and keep the lifecycle strict.

## Working style

- Ask one question at a time when a missing answer would change the next step.
- Do not skip review or completion checks.
- Keep the workflow domain-neutral unless the user asks for a domain-specific approach.
