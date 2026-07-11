---
name: manage-worktrees
description: Create, name, use, and remove Git worktrees for parallel agent branches. Use when subagents need isolated filesystem contexts in a Git-backed project.
---

# Manage Worktrees

Use this skill when a Git-backed project needs isolated spaces for parallel branches.

## When to create a worktree

Create a worktree only when:

- the objective has been split into separate branches,
- those branches may edit overlapping parts of the repo,
- and isolation will reduce collision or merge risk.

Do not create a worktree when:

- the task is tiny,
- the repository is not Git-backed,
- or the branches can safely stay in one tree.

## Naming

Use a short, readable name that reflects the branch purpose.

Recommended shape:

- `wt-<branch-purpose>`
- `wt-<objective>-<branch>`

Keep names stable enough to recognize later and specific enough to avoid confusion.

## Lifecycle

1. Create the worktree before the branch starts.
2. Point one subagent at one worktree.
3. Keep branch ownership narrow.
4. Review the branch output.
5. Remove the worktree when the branch is merged, discarded, or no longer needed.

## Guardrails

- Never let two active branches share the same worktree if they may touch the same files.
- Never leave a stale worktree around after the work is done.
- Never create a worktree just because Git is available; use it only when separation actually helps.

## Handoff

- Use `dispatch-parallel-agents` to decide whether the split is worth it.
- Use `coordinate-subagents` to run the split.
- Use `subagent-driven-development` when the work needs the full split-execute-merge-review loop.

