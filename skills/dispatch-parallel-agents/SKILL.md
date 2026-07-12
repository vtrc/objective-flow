---
name: dispatch-parallel-agents
description: "Trigger: parallel agents, split work, concurrent tracks. Decide if parallelization is worth it, then define tracks, owners, outputs, merge path, and worktree need."
---

# Dispatch Parallel Agents

## Activation Contract
Use this skill before assigning concurrent agents, asking multiple people to work in parallel, or deciding whether one objective should be split into independent tracks. It applies to standard or full workflow work where parallelism might reduce time, improve comparison, or isolate risk.

## When Not To Use
Do not use this skill for trivial single-step work, work that clearly needs one sequential owner, or open-ended direction selection that first belongs in `explore-options`. Do not dispatch just because multiple agents are available.

## Required Input
- Objective and success criteria.
- Known constraints, deadline pressure, and acceptable coordination cost.
- Candidate tracks or areas of work.
- Expected final deliverable or decision.
- Known shared files, data, artifacts, tools, or operational resources.
- Available owners and whether isolated workspaces are possible.

## Hard Gate
Do not dispatch parallel work unless the Split Decision proves all of these: parallelization is worth the coordination cost, tracks can start independently, outputs are comparable, ownership is exclusive, the merge or consolidation path is explicit, and the worktree decision is recorded as `yes` or `no` with evidence.

## Process
1. Restate the objective, success criteria, constraints, and why parallelization is being considered.
2. Decide whether parallelization is worth it by comparing expected speed, coverage, or risk reduction against coordination cost, merge cost, and review overhead.
3. Define independent tracks with one owner, one scope boundary, required inputs, forbidden overlap, and expected output for each track.
4. Define a comparable output contract shared by every track: scope handled, artifact or files changed, decisions made, evidence gathered, risks, blockers, validation, and merge readiness.
5. Identify shared-state risks and assign exclusive ownership for any file, artifact, customer segment, data source, decision area, or operational resource that could collide.
6. Choose worktree need: `yes` when isolated Git-backed work reduces real collision or rollback risk; `no` when it adds overhead without reducing risk; `not applicable` when there is no Git-backed workspace.
7. Define the merge or consolidation path: merge owner, order of review, conflict path, comparison criteria, final validation, and handoff.
8. Return `split`, `split with controls`, or `keep serial`. If serial, record the reason and next owning skill.

## Required Artifact
Produce a **Split Decision** with these fields:

- Objective and success criteria.
- Decision: `split`, `split with controls`, or `keep serial`.
- Worth-it rationale: benefit, coordination cost, and merge cost.
- Tracks: owner, scope, inputs, forbidden overlap, expected output, and start condition.
- Independence evidence and dependency risks.
- Comparable output contract for all tracks.
- Ownership map for shared files, artifacts, data, decisions, or resources.
- Worktree decision: `yes`, `no`, or `not applicable`, with reason.
- Merge or consolidation path, including owner, order, conflict path, validation, and review gate.
- Risks, blockers, and next handoff.

## Quality Checklist
- The decision explicitly says whether parallelization is worth it.
- Every track can start without waiting on another track.
- Every track has exactly one owner and clear forbidden overlap.
- Outputs are comparable because they use the same output fields.
- Shared-state ownership is explicit.
- Coordination cost and merge cost are recorded, not assumed away.
- Worktree need is justified by real risk reduction, not habit.
- The consolidation path is known before dispatch starts.

## Stop Rules
Stop and do not dispatch when the objective is fuzzy, success criteria are missing, track boundaries overlap without controls, outputs would not be comparable, owner or merge owner is missing, coordination cost exceeds likely benefit, or the worktree decision cannot be justified. Hand the work to `frame-objective`, `explore-options`, or `plan-work` as appropriate.

## Handoff
- Hand to `coordinate-subagents` when the split is approved and operational coordination is needed.
- Hand to `manage-worktrees` when the Split Decision says worktrees are needed.
- Hand to `subagent-driven-development` when split execution, collection, comparison, consolidation, and review must run end to end.
- Hand to `plan-work` when the correct decision is to keep the work serial.

## Smoke Flow
Input: “Improve routing, planning, and review skills in parallel.”

Expected behavior: identify three candidate tracks, reject or control any track with overlapping artifacts, decide whether parallelization is worth the coordination cost, define comparable output fields, assign owners, choose worktree `yes/no`, and define the consolidation path.

Expected artifact: Split Decision.

Expected gate: fail if tracks touch the same artifact without ownership, if outputs use different formats, or if the merge owner is missing.

Expected handoff: `coordinate-subagents` or `subagent-driven-development`; `manage-worktrees` only if isolation reduces real risk.

## Anti-Patterns
- Dispatching agents because capacity exists, not because parallelism reduces time or risk.
- Splitting dependent work and pretending it is independent.
- Giving multiple owners the same file, artifact, data source, decision, or operational resource without conflict rules.
- Asking for different output formats and then comparing them by intuition.
- Skipping merge ownership until after tracks finish.
- Creating worktrees automatically for tiny or low-risk work.
- Treating parallel output as complete without review and consolidation.

## Acceptance Criteria
- The Split Decision contains all required fields.
- The decision is auditable as `split`, `split with controls`, or `keep serial`.
- Parallel tracks have independent start conditions and comparable output contracts.
- Ownership, merge path, worktree need, coordination cost, and validation gate are explicit.
- The smoke flow can fail when outputs are not comparable or merge ownership is missing.
