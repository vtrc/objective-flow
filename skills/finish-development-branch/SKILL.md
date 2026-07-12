---
name: finish-development-branch
description: "Trigger: finish branch, merge, PR, keep, discard, split, cleanup. Decide final branch outcome from diff, validation, review, worktree state, and risks."
---

# Finish Development Branch

## Activation Contract
Use this skill before deciding what happens to a Git-backed development branch or equivalent isolated change track: merge it, open a PR/review request, keep it, discard it, split it, or clean it up. It applies after work has produced a diff or branch outcome decision is needed.

## When Not To Use
Do not use this skill before there is a branch, diff, or isolated change track to finish. Do not use it to perform broad quality review; use `review-quality` first when validation or review evidence is missing.

## Required Input
- Branch or track name, owner, purpose, and base/target branch.
- Diff summary and changed artifacts.
- Validation evidence and date/source of validation.
- Review status and unresolved findings.
- Feedback resolution status.
- Worktree state and cleanup needs.
- Residual risks and follow-up owners.

## Hard Gate
Do not choose `merge`, `pr`, `keep`, `discard`, or `split` until the diff is understood, validation has passed or failed explicitly, review findings are resolved or accepted by the owner, target/base branch is known, worktrees are clean or assigned, and risks are documented.

## Process
1. Identify branch or track purpose, owner, base/target branch, worktree state, and related objective.
2. Inspect the diff against the stated purpose. Separate intended changes, unrelated changes, generated artifacts, temporary files, and risky unknowns.
3. Confirm required outputs, validation evidence, review status, feedback state, and cleanup state.
4. Choose one final decision:
   - `merge` when diff matches purpose, validation passed, review is resolved, and cleanup is safe.
   - `pr` when human review or remote review is needed and evidence/risk is documented.
   - `keep` when work is valuable but not ready; record owner, next action, and revisit trigger.
   - `discard` when work is not needed and no required evidence or output will be lost.
   - `split` when the diff mixes scopes, owners, risks, or review paths.
5. For `split`, define child boundaries, owners, target branches, validation expectations, and cleanup order.
6. Resolve or assign worktree cleanup through `manage-worktrees`; never delete unclear local work.
7. Run the smallest meaningful final validation for the chosen outcome.
8. Produce the Branch Finish Decision and hand off completion or remaining work.

## Required Artifact
Produce a **Branch Finish Decision** with these fields:

- Branch or track, owner, purpose, base branch, and target branch.
- Diff summary: intended, unrelated, generated/temporary, risky unknowns.
- Validation evidence and result.
- Review status, unresolved findings, and accepted risks.
- Feedback resolution state.
- Final decision: `merge`, `pr`, `keep`, `discard`, or `split`.
- Decision rationale and required next action.
- Worktree cleanup state, cleanup actions, and cleanup owner.
- Split boundaries, child owners, and validation expectations when relevant.
- Residual risks, follow-ups, and next handoff.

## Quality Checklist
- Diff is understood before outcome is chosen.
- Validation passed, failed, or is explicitly recorded as missing.
- Critical or high review findings are resolved or accepted by the right owner.
- Worktrees are clean, intentionally kept, or assigned for cleanup.
- Merge/PR/keep/discard/split decision is explicit and justified.
- Discard decisions prove no needed work or evidence will be lost.
- Split decisions name child boundaries and owners.
- Residual risks are documented instead of hidden.

## Stop Rules
Stop when diff scope is unknown, validation evidence is missing, review failed, feedback remains unresolved, target/base branch is unclear, cleanup could lose work, worktrees are dirty without owner, discard safety is unproven, or split boundaries are not named.

## Handoff
- Use `review-quality` when review evidence is missing or findings need severity judgment.
- Use `receive-review-feedback` when review comments remain unresolved.
- Use `manage-worktrees` when cleanup, preservation, discard, or kept-worktree state is unclear.
- Use `plan-work` when the branch must be split into new planned tracks.
- Use `confirm-completion` only after final decision, validation, review state, cleanup, and risks are explicit.

## Smoke Flow
Input: “Finish this feature branch.”

Expected behavior: inspect purpose, diff, validation, review, and worktree state; detect mixed scope; choose `split`; name two child boundaries and owners; block merge until validation and review are resolved for each child.

Expected artifact: Branch Finish Decision.

Expected gate: fail if merge is chosen with unknown diff scope, missing validation, unresolved review, dirty worktree, or undocumented risk.

Expected handoff: `plan-work` for split child tracks, `manage-worktrees` for cleanup, or `confirm-completion` after a safe final outcome.

## Anti-Patterns
- Merging because the work “looks done” without understanding the diff.
- Opening a PR with hidden validation or review gaps.
- Discarding a branch before proving no needed work will be lost.
- Keeping stale branches without owner or revisit trigger.
- Cleaning a worktree before preservation is clear.
- Bundling unrelated scopes into one final branch.
- Treating risk documentation as optional after review.

## Acceptance Criteria
- The Branch Finish Decision contains all required fields.
- Final decision is exactly one of `merge`, `pr`, `keep`, `discard`, or `split`.
- Diff, validation, review, feedback, worktree cleanup, and risks are explicitly addressed.
- Unsafe merge/discard/cleanup decisions are blocked by stop rules.
- Handoff names the next owner for completion, cleanup, feedback, or split work.
