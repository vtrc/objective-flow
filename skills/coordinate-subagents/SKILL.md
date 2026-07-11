---
name: coordinate-subagents
description: Coordinate multiple agents on independent branches of the same objective. Use when parallel work is justified and results need to be merged, compared, or reviewed together.
---

# Coordinate Subagents

Use this skill when one objective can be split into separate tracks and those tracks should move forward at the same time.

## Start Here

1. Confirm the objective is clear enough to split.
2. Identify the tracks that can proceed independently.
3. Decide whether Git worktrees should be used.
4. Assign one track per subagent.
5. If worktrees are needed, use `manage-worktrees` before the branches start.

## Use Git Worktrees When Git Is Available

If the project is backed by Git and the branches would otherwise share the same working directory, prefer worktrees.

Use a separate worktree when:

- the branches will edit different parts of the repo,
- the work could collide if done in one directory,
- or you want each subagent to have a clean local context.

Avoid worktrees when:

- the task is too small to justify the setup cost,
- the project is not Git-backed,
- or the work must stay in one shared filesystem view.

### Suggested worktree convention

- Name the worktree after the branch or branch purpose.
- Keep the path short and readable.
- Remove the worktree once the branch is merged or the branch is abandoned.
- Never let two subagents share the same worktree when they may edit the same files.

## Orchestration Rules

- Give each subagent a single track and a single responsibility.
- Tell each subagent what it should not duplicate.
- Ask for results in a form that can be compared or merged.
- Keep merge criteria explicit before the work starts.
- Do not start a branch if the merge path is not known.
- Do not keep branches running after the merge decision is possible.

## Merge And Review

1. Collect the outputs from every branch.
2. Compare them against the original objective.
3. Resolve conflicts or competing recommendations.
4. Run review before closing the objective.

## Handoff

- Use `dispatch-parallel-agents` when deciding whether a split is worth it.
- Use `explore-options` before splitting if the open question is still the best direction.
- Use `choose-option` if the branches disagree on the answer.
- Use `manage-worktrees` when the split needs isolated Git branch spaces.
- Use `review-quality` once the branch outputs are ready.
