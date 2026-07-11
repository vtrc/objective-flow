# Routing discipline

Objective Flow should choose the narrowest skill that still preserves correctness.

## Core rule

Use one primary next skill at a time.

## Preferred order

1. `frame-objective`
2. `explore-options`
3. `choose-option`
4. `shape-approach`
5. `plan-work`
6. `dispatch-parallel-agents`
7. `coordinate-subagents`
8. `subagent-driven-development`
9. `manage-worktrees`
10. `execute-plan`
11. `review-quality`
12. `confirm-completion`
13. `capture-learning`

## Guardrails

- Do not jump into parallelism unless the split is justified.
- Do not use subagent orchestration when a single branch is enough.
- Do not use worktrees unless Git isolation is actually useful.
- Do not skip review just because the task looks familiar.

