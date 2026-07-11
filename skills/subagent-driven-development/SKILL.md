---
name: subagent-driven-development
description: "Run a split objective through a full subagent loop: divide the work, assign branches, collect outcomes, compare results, and consolidate the final answer. Use when parallel tracks need an explicit end-to-end orchestration flow."
---

# Subagent-Driven Development

Use this skill when the objective should be handled by multiple agents and the work needs a full orchestration loop, not just a parallel start.

## Flow

1. Confirm the objective can be split.
2. Decide the branch boundaries.
3. If Git worktrees will help, use `manage-worktrees` before the branches start.
4. Assign one branch per subagent.
5. Capture branch outputs in a comparable form.
6. Merge, compare, or choose between branch results.
7. Review the combined result before completion.

## Hard requirements

- Do not start the split until the branch boundaries are explicit.
- Do not run the branches without a merge plan.
- Do not let one subagent own two unrelated tracks.
- Do not skip review after the branches finish.

## Branch design

- Keep each branch small enough to be understandable on its own.
- Give each branch one responsibility.
- Avoid overlapping file ownership unless the merge plan is explicit.
- If the branches disagree, stop and route to `choose-option`.

## Worktree policy

If the project uses Git and the branches may touch the same repo at the same time, create separate worktrees before starting the subagents.

Use worktrees when:

- the branches are independent,
- the work will last long enough to justify setup,
- and isolation reduces file collision risk.

Do not use worktrees when:

- the task is too small,
- the project is not Git-backed,
- or the branches already live in distinct files with low collision risk.

## Output contract

Each subagent should return:

- what it changed or found,
- what assumptions it used,
- what remains unclear,
- and whether the result is ready to merge or review.

## Handoff

- Use `dispatch-parallel-agents` to decide whether to split.
- Use `coordinate-subagents` to manage the split execution.
- Use `manage-worktrees` when the branches need isolated Git contexts.
- Use `review-quality` on the combined result.
- Use `confirm-completion` only after review passes.
