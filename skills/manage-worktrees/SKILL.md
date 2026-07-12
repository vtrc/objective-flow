---
name: manage-worktrees
description: "Trigger: worktree, isolated branch, parallel Git tracks. Create, assign, validate, merge/keep/discard, and clean up worktrees only when they reduce real risk."
---

# Manage Worktrees

## Activation Contract
Use this skill when a Git-backed project may need isolated filesystem contexts for parallel, risky, conflicting, or reviewable branch work. It applies only when worktree isolation could reduce real collision, rollback, validation, or cleanup risk.

## When Not To Use
Do not use this skill for trivial edits, non-Git work, one-owner sequential changes that are safe in the current workspace, or work where the overhead of an extra worktree is higher than the risk it removes.

## Required Input
- Objective and track name.
- Repository and base branch state.
- Owner and purpose.
- Expected output and validation needs.
- Isolation risk being reduced.
- Cleanup condition and preservation rule.
- Merge, PR, keep, discard, or split path owner.

## Hard Gate
Do not create a worktree if it does not reduce real risk. Do not create or keep a worktree unless owner, objective, branch, base, purpose, expected output, validation, cleanup condition, and preservation rule are explicit. Never clean up when unpreserved work might be lost.

## Process
1. Confirm the project is Git-backed and the current branch/workspace state is understood.
2. Decide whether a worktree reduces real risk: collision avoidance, independent validation, safe rollback, branch isolation, or clean review scope.
3. Name the pair using the contract: worktree path `wt/<objective>/<track>` and branch `codex/<objective>-<track>`.
4. Create only after the owner, base branch, purpose, expected output, validation, and cleanup condition are recorded.
5. Assign exactly one owner and one objective slice per worktree.
6. Validate active worktree state at checkpoints: branch matches, owner matches, scope remains bounded, and output evidence exists.
7. Route branch outcome through `finish-development-branch`: merge, PR, keep, discard, or split.
8. Clean up only after the outcome is safe: merged, preserved elsewhere, intentionally kept with owner, or intentionally discarded with evidence.
9. Record final lifecycle state and any remaining cleanup owner.

## Required Artifact
Produce a **Worktree Lifecycle Record** with these fields:

- Objective, track, owner, and purpose.
- Worktree path: `wt/<objective>/<track>`.
- Branch name: `codex/<objective>-<track>`.
- Base branch and creation condition.
- Risk reduced by isolation.
- Expected output and validation.
- Lifecycle status: `planned`, `active`, `validated`, `review`, `merged`, `pr`, `kept`, `discarded`, or `cleaned`.
- Outcome path: merge, PR, keep, discard, or split.
- Cleanup condition, preservation rule, cleanup action, and cleanup owner.
- Remaining risks or blockers.

## Quality Checklist
- Worktree path follows `wt/<objective>/<track>`.
- Branch name follows `codex/<objective>-<track>`.
- Objective and track use readable lowercase kebab-case.
- The record names the real risk reduced by isolation.
- Owner, base branch, expected output, validation, and cleanup condition are explicit.
- No two active owners share the same worktree.
- Cleanup never deletes unpreserved or misunderstood work.
- Final lifecycle state is recorded.

## Stop Rules
Stop when Git state is unclear, the worktree would not reduce real risk, naming would collide, owner is missing, base branch is uncertain, uncommitted work might be lost, cleanup safety cannot be proven, or the branch outcome has not been decided by `finish-development-branch`.

## Handoff
- Use `dispatch-parallel-agents` when deciding whether tracks should exist at all.
- Use `coordinate-subagents` or `subagent-driven-development` to assign and operate parallel tracks.
- Use `finish-development-branch` before merge, PR, keep, discard, split, or cleanup.
- Use `confirm-completion` only after cleanup state and remaining risks are explicit.

## Smoke Flow
Input: “Fix one typo in README in a new worktree.”

Expected behavior: reject automatic worktree creation because it does not reduce real risk; record that the right path is light execution unless the user explicitly accepts overhead and supplies cleanup ownership.

Expected artifact: no Worktree Lifecycle Record if rejected; if forced, a Worktree Lifecycle Record with `wt/<objective>/<track>`, `codex/<objective>-<track>`, owner, purpose, risk rationale, validation, and cleanup condition.

Expected gate: fail if a worktree is created only because Git exists or without cleanup condition.

Expected handoff: light execution path for the typo, or `finish-development-branch` if a branch/worktree is actually created.

## Anti-Patterns
- Creating worktrees as ceremony for low-risk work.
- Using unclear names that hide objective or track.
- Reusing one worktree for multiple owners.
- Creating branches without cleanup conditions.
- Cleaning up before merge, preservation, or discard is proven safe.
- Losing evidence about why the worktree existed.
- Leaving kept worktrees without owner or revisit trigger.

## Acceptance Criteria
- The Worktree Lifecycle Record contains all required fields for every created worktree.
- Naming follows `wt/<objective>/<track>` and `codex/<objective>-<track>`.
- The create decision names the real risk reduced by isolation.
- Lifecycle covers create, assign, validate, merge/PR/keep/discard/split, and cleanup.
- Cleanup is safe, assigned, and recorded; unnecessary worktrees are rejected.
