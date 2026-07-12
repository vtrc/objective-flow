---
name: coordinate-subagents
description: "Trigger: coordinate multiple agents after a split is approved. Assign tracks, enforce input/output contracts, checkpoints, comparable outputs, evidence, and consolidation."
---

# Coordinate Subagents

## Activation Contract
Use this skill after `dispatch-parallel-agents` approves a split and the work needs operational coordination across multiple agents, branches, workspaces, documents, research streams, or operational tracks. It is for standard or full workflow work where outputs must later be compared or consolidated.

## When Not To Use
Do not use this skill to decide whether a split is worth it; use `dispatch-parallel-agents` first. Do not use it for one-owner sequential work, exploratory option generation without committed tracks, or unmanaged background work with no consolidation path.

## Required Input
- Approved Split Decision.
- Objective and success criteria.
- Track list with owners, scopes, forbidden overlap, and start conditions.
- Shared input packet every subagent must receive.
- Output contract every subagent must return.
- Checkpoint cadence or checkpoint triggers.
- Worktree or workspace decision.
- Consolidation owner and review path.

## Hard Gate
Do not start coordination until every track has one owner, one input packet, one comparable output contract, explicit forbidden overlap, a checkpoint rule, and a consolidation path. Block consolidation if outputs are not comparable or evidence is missing.

## Process
1. Confirm the Split Decision is current and still worth the coordination cost.
2. Build a shared input packet: objective, success criteria, constraints, scope, non-scope, relevant artifacts, evidence requirements, and stop rules.
3. Assign each track one owner, one workspace or branch if needed, one scope boundary, and one output contract.
4. State what each track must not duplicate or modify without escalation.
5. Set checkpoints: start confirmation, blocker escalation, output-ready signal, and final collection.
6. Monitor for drift, overlap, missing evidence, or changed assumptions. Pause affected tracks instead of letting divergence grow.
7. Collect outputs in the same structure: scope completed, artifacts changed, decisions, evidence, validation, risks, blockers, and merge readiness.
8. Compare outputs against the objective and against each other. Normalize missing fields before any merge or final decision.
9. Consolidate without losing evidence: preserve rejected alternatives, conflicts, validation results, unresolved risks, and the rationale for selected work.
10. Hand consolidated evidence to review and branch finishing or completion.

## Required Artifact
Produce a **Branch Assignment and Consolidation Report** with these fields:

- Objective and Split Decision reference.
- Shared input packet.
- Track assignments: owner, scope, forbidden overlap, workspace or branch, expected output, start condition.
- Output contract and checkpoint rules.
- Checkpoint results and escalations.
- Collected outputs in comparable structure.
- Comparison table: agreements, conflicts, duplicates, gaps, and missing evidence.
- Consolidation decision: merge, select, combine, defer, reject, or block.
- Evidence preserved from each track.
- Review handoff, remaining risks, and cleanup needs.

## Quality Checklist
- Every subagent received the same shared context plus track-specific scope.
- Every output uses the same required fields.
- Checkpoints caught blockers, drift, and overlap early.
- No output was consolidated without evidence.
- Conflicts and rejected outputs remain traceable.
- Consolidation preserves why decisions were made, not only the final result.
- Review and cleanup owners are named.

## Stop Rules
Stop when the Split Decision is missing or stale, outputs are not comparable, evidence is absent, a track changes scope, two tracks claim the same ownership, a checkpoint exposes unresolved dependency, or consolidation would discard evidence. Return to `dispatch-parallel-agents`, `plan-work`, or the track owner before continuing.

## Handoff
- Use `manage-worktrees` before track execution when the Split Decision requires isolated Git-backed workspaces.
- Use `subagent-driven-development` when this coordination is part of a full split-execute-collect-review loop.
- Use `choose-option` when comparable outputs produce competing recommendations and a decision is needed.
- Use `review-quality` after consolidation evidence is complete.
- Use `finish-development-branch` when branch outcomes or cleanup decisions remain.

## Smoke Flow
Input: “Coordinate three tracks for routing, planning, and review updates.”

Expected behavior: create shared input, assign one owner per track, define comparable outputs, set checkpoints, collect outputs, block one output that omits validation evidence, normalize or return it to the owner, then consolidate only comparable evidence.

Expected artifact: Branch Assignment and Consolidation Report.

Expected gate: fail if a subagent output cannot be compared or lacks evidence.

Expected handoff: `review-quality` after consolidation; `manage-worktrees` or `finish-development-branch` if branch isolation or cleanup applies.

## Anti-Patterns
- Starting subagents from different context packets.
- Letting every subagent choose its own output format.
- Treating checkpoint silence as success.
- Consolidating the most polished answer instead of the best evidenced answer.
- Dropping rejected alternatives, conflicts, or risks from the final report.
- Allowing two owners to edit or decide the same thing without an escalation rule.
- Continuing after a track drifts outside its assignment.

## Acceptance Criteria
- The Branch Assignment and Consolidation Report contains all required fields.
- Every track has one owner, explicit scope, forbidden overlap, checkpoint rule, and comparable output contract.
- Non-comparable or evidence-free outputs are blocked before consolidation.
- Consolidation preserves evidence, conflicts, rejected work, and remaining risks.
- Review and cleanup handoffs are explicit.
