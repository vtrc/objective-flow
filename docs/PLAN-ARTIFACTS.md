# Plan artifacts

Objective Flow should use a living planning artifact when the work is substantial enough to benefit from persistent tracking.

## When to create one

Create a plan artifact when the work is:

- multi-step
- consequential
- likely to pause and resume
- likely to involve coordination
- likely to be reviewed by someone else later

## What it should contain

1. Objective
2. Success criteria
3. Scope and non-goals
4. Phases
5. Dependencies
6. Validation checkpoints
7. Risks and mitigations
8. Stop conditions
9. Current status
10. Open decisions
11. What can start now
12. What must wait

## Recommended shape

Use a short title, then organize the plan into phases with checkboxes:

- [ ] Phase name
  - Purpose
  - Steps
  - Output
  - Prerequisite state
  - Validation
  - Risks
  - Stop condition

For a concrete example, see `docs/EXAMPLE-PLAN.md`.

## Update rule

After each meaningful action:

- check off completed items
- update the current status
- record blockers or changes
- keep the next action visible
- keep the ready-now / must-wait split explicit

## Review rule

Before closing, the plan artifact should still make the work understandable without relying on memory alone.
