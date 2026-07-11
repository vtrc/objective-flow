# Smoke flows

These are the shortest end-to-end checks for the workflow.

## 1. Simple request

Prompt: "Summarize this in one paragraph."

Expected behavior:

- answer directly,
- do not split work,
- do a quick completion check before closing.

## 2. Ambiguous objective

Prompt: "Help me improve this project."

Expected behavior:

- enter `objective-flow`,
- frame the objective,
- ask one clarifying question if needed,
- avoid planning too early.

## 3. Parallel objective

Prompt: "Compare two different ways to structure this repository."

Expected behavior:

- detect that options may split cleanly,
- use `dispatch-parallel-agents` if useful,
- coordinate the results,
- merge or choose one direction.

## 4. Git-backed split objective

Prompt: "Implement two independent improvements in parallel."

Expected behavior:

- split the work only if the branches are truly independent,
- create worktrees when Git isolation helps,
- run `subagent-driven-development`,
- review the combined result before completion.

## 5. Failure or recurring issue

Prompt: "This keeps breaking when I try to run it."

Expected behavior:

- switch to `diagnose-cause`,
- avoid jumping straight to a solution,
- come back to `execute-plan` only after the cause is understood.

