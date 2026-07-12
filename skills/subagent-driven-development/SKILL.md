---
name: subagent-driven-development
description: "Trigger: subagent workflow, split execution, collect results, compare, consolidate, and review. Orchestrate full split-to-finish agent work."
---

# Subagent-Driven Development

## Activation Contract
Use this skill when an approved objective will be executed through multiple agent tracks and needs an end-to-end operating loop: split, assign, execute, collect, compare, consolidate, review, and hand off. It applies to substantial standard or full workflow work across software, documentation, research, operations, or mixed deliverables.

## When Not To Use
Do not use this skill before a split is justified by `dispatch-parallel-agents`. Do not use it for trivial work, single-owner sequential work, or option exploration where the goal is to compare possible strategies before assigning execution tracks.

## Required Input
- Objective, success criteria, and accepted scope.
- Approved Split Decision.
- Track owners, boundaries, forbidden overlap, and output contract.
- Worktree or workspace decision.
- Validation expectations for every track.
- Merge or consolidation owner.
- Required review gates and completion path.

## Hard Gate
Do not start until split boundaries, owners, output contracts, worktree/workspace decisions, merge strategy, and review gates are explicit. Do not consolidate if outputs are not comparable. Do not finish until both mandatory reviews pass or risks are explicitly accepted by the owner: **Spec Compliance Review** and **Quality Review**.

## Process
1. **Split**: confirm the Split Decision, independence evidence, dependencies, forbidden overlap, coordination cost, and worktree/workspace need.
2. **Assign**: give each owner one track, input packet, expected output, validation evidence, stop rules, and checkpoint requirements.
3. **Execute**: keep tracks inside scope; route blockers, scope drift, and ownership conflicts to the consolidation owner.
4. **Collect**: require comparable outputs from every track: scope completed, artifacts changed, decisions, evidence, validation, risks, blockers, and merge readiness.
5. **Compare**: check outputs against the objective and against each other; identify conflicts, duplicates, gaps, missing evidence, and changed assumptions.
6. **Consolidate**: merge, select, combine, defer, reject, or block outputs according to the planned consolidation strategy. Preserve evidence for every accepted and rejected output.
7. **Spec Compliance Review**: verify every track stayed within assigned scope, met its acceptance criteria, respected forbidden overlap, and produced required evidence.
8. **Quality Review**: verify the consolidated result is coherent, maintainable, validated, low-risk enough to hand off, and not merely a pile of track outputs.
9. Hand off branch outcome decisions to `finish-development-branch` and final completion decisions to `confirm-completion`.

## Required Artifact
Produce a **Consolidation Report** with these fields:

- Objective, scope, and Split Decision reference.
- Track assignments and worktree/workspace map.
- Input and output contracts.
- Execution checkpoint summary.
- Collected branch or track outputs in comparable format.
- Comparison results: agreements, conflicts, duplicates, gaps, missing evidence.
- Consolidation decision and rationale.
- Spec Compliance Review result with findings and required fixes.
- Quality Review result with findings and required fixes.
- Rejected, deferred, or preserved work.
- Merge or branch outcome recommendation.
- Residual risks and next handoff.

## Quality Checklist
- Split, assignment, execution, collection, comparison, consolidation, and review all occurred in order.
- Every track output uses the same output contract.
- No non-comparable output was consolidated.
- Spec Compliance Review is separate from Quality Review.
- Review findings include evidence and owners.
- Consolidation preserves decisions, rejected outputs, and risks.
- Branch, cleanup, and completion handoffs are named.

## Stop Rules
Stop when the Split Decision is missing, an owner is absent, a track changes scope, output fields differ, evidence is missing, outputs are not comparable, merge ownership is unclear, Spec Compliance Review fails, or Quality Review fails. Do not consolidate until comparability and evidence are restored.

## Handoff
- Use `dispatch-parallel-agents` before this skill when split value is not yet proven.
- Use `coordinate-subagents` for operational assignment and checkpoint management inside the loop.
- Use `manage-worktrees` when isolated Git-backed workspaces reduce real risk.
- Use `receive-review-feedback` when Spec Compliance Review or Quality Review produces required fixes.
- Use `finish-development-branch` for merge, PR, keep, discard, split, and cleanup decisions.
- Use `confirm-completion` only after reviews and branch outcomes are explicit.

## Smoke Flow
Input: “Run routing, planning, and review improvements via subagents.”

Expected behavior: confirm Split Decision, assign two or more independent tracks, collect comparable outputs, block a track that lacks evidence, compare remaining outputs, consolidate only comparable work, run Spec Compliance Review, run Quality Review, and hand off branch closure.

Expected artifact: Consolidation Report.

Expected gate: fail if outputs are not comparable, if either mandatory review is skipped, or if consolidation discards evidence.

Expected handoff: `receive-review-feedback` for failed review findings or `finish-development-branch` when branch outcome is ready.

## Anti-Patterns
- Calling ordinary parallel work “subagent-driven” without a Split Decision.
- Assigning broad missions instead of bounded tracks.
- Letting agents use different output formats.
- Consolidating before comparing evidence.
- Treating Spec Compliance Review and Quality Review as one vague approval.
- Dropping rejected work or unresolved risk because it is inconvenient.
- Claiming completion while branch outcomes or cleanup are undecided.

## Acceptance Criteria
- The Consolidation Report contains all required fields.
- The process follows split -> assign -> execute -> collect -> compare -> consolidate -> review.
- Outputs are comparable before consolidation.
- Spec Compliance Review and Quality Review are both present with evidence.
- Failed reviews or missing evidence block completion and name the next owner.
