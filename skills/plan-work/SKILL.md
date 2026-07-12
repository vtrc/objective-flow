---
name: plan-work
description: "Trigger: an approved approach shape needs a living executable plan with checkboxes, prerequisites, actions, outputs, evidence, checkpoints, stop rules, and dependencies before execution."

---

# Plan Work

Turn an approved approach into an executable, trackable Living Plan.

## Activation Contract

Use this skill when the objective has an approved frame and shape, and the work needs ordered phases, dependencies, validation evidence, or resumable execution.

Applies to standard and full workflow mode. In trivial mode, use this skill only when the request still has sequencing, dependency, evidence, or ownership risk.

## When Not To Use

Do not use this skill when:

- The objective, success signals, or approved approach are still unclear; use `frame-objective`, `explore-options`, or `shape-approach` first.
- The work is a single low-risk, reversible action that can be completed with direct evidence and no plan state.
- A Living Plan already exists and the next batch is ready; use `execute-plan` instead.
- The request is review, feedback resolution, troubleshooting, or completion validation; hand off to the owning skill for that phase.

## Required Input

Before planning, confirm these inputs are present:

- Objective and success signals.
- Approved approach or Design Artifact.
- Scope, non-scope, constraints, and known dependencies.
- Current state or baseline evidence.
- Validation method for meaningful outputs.
- Ownership or decision owner for blocked prerequisites.
- Required review or approval gates.

If any input would change task order, scope, validation, or ownership, stop and get the missing input before creating the plan.

## Hard Gate

Do not execute multi-step or consequential work until the Living Plan states tasks, prerequisites, outputs, evidence, dependencies, checkpoints, stop rules, and status.

Stop when the approved approach, prerequisite state, owner, validation method, evidence source, dependency order, or first executable batch is unclear.

## Process

1. Read the objective, success signals, approved approach, constraints, decisions, and current state evidence.
2. Verify the approach is approved, current, and specific enough to plan. Stop if it is missing, ambiguous, conflicting, stale, or no longer credible.
3. Identify dependencies, approvals, blockers, and validation methods before listing tasks.
4. Define the smallest useful phases in dependency order.
5. For each phase, specify prerequisite, action, output, evidence, checkpoint, stop rule, dependency, and status.
6. Mark what can start now, what must wait, and what requires approval or review.
7. Make every task observable and small enough to verify independently.
8. Create or update the Living Plan artifact.
9. Identify the first executable batch and the exact evidence required to complete it.
10. Run the quality checklist before handoff.
11. Hand off to `execute-plan` only when the first batch is ready; otherwise hand off to `shape-approach`, `review-quality`, or the blocker owner.

## Required Artifact: Living Plan

Use checkboxes or equivalent status markers. Keep the plan current; a stale plan is a blocker.

```markdown
# Living Plan

Objective: ...
Success signals: ...
Approved approach: ...
Scope: ...
Non-scope: ...
Constraints: ...
Current checkpoint: ...
Global stop rules: ...
Replan triggers: ...
Review gates: ...

## Phase 1: ...
Status: not-started | ready | blocked | in-progress | done
Prerequisite: ...
Dependency: ...
Owner or decision owner: ...
Checkpoint: ...
Phase stop rule: ...

- [ ] Task: ...
  - Prerequisite: ...
  - Action: ...
  - Output: ...
  - Evidence: ...
  - Validation: ...
  - Dependency: ...
  - Status: ...
  - Stop rule: ...

## First executable batch
Plan reference: ...
Status: ready | blocked
Prerequisite: ...
Action: ...
Output: ...
Evidence: ...
Validation: ...
Checkpoint: ...
Stop rule: ...
Dependency: ...
Next handoff: execute-plan | shape-approach | review-quality | blocker-owner

## Progress Log
- YYYY-MM-DD: ...
```

## Quality Checklist

- [ ] The objective, success signals, and approved approach are named.
- [ ] Every phase has a prerequisite, dependency state, checkpoint, stop rule, and status.
- [ ] Every task has an action, visible output, validation method, and concrete evidence.
- [ ] Blocked tasks name the dependency, missing input, or decision owner.
- [ ] The first batch is ready, small enough to verify safely, and has exact evidence.
- [ ] Replan triggers and review gates are explicit.
- [ ] No task requires hidden assumptions or unowned approvals.
- [ ] Handoff names the next owning skill or blocker owner.

## Stop Rules

- Stop if the approved approach is missing, stale, or contradicted by current evidence.
- Stop if objective, success signals, scope, non-scope, or constraints are unclear enough to change the plan.
- Stop if prerequisites are not true and no dependency or decision owner is named.
- Stop if validation evidence cannot be collected or would be subjective only.
- Stop if tasks are too broad to verify independently.
- Stop if the first executable batch is unclear, unsafe, or not actually ready.
- Stop if planning reveals new product or architecture decisions; return to `shape-approach`.
- Stop if ownership conflicts with another active worker or file boundary.

## Handoff

- Normal path: hand off to `execute-plan` with the first ready batch and Living Plan reference.
- Missing approach path: hand off to `shape-approach` with the missing planning input.
- Quality path: hand off to `review-quality` when the plan changes a meaningful contract or needs independent review.
- Blocker path: hand off to the named decision owner and keep the affected task blocked.
- Completion path: planning never claims completion; execution and review own completion evidence.

## Smoke Flow

Input:

> Implement the approved artifact workflow, but the next task has no validation evidence.

Expected behavior:

- Create or update a Living Plan with tasks, prerequisites, outputs, evidence, dependencies, checkpoints, stop rules, and status.
- Mark the task without validation evidence as blocked.
- Stop before execution because the first executable batch is not ready.
- Hand off to the blocker owner or `shape-approach` if the missing evidence changes the approved approach.

Expected artifact:

```markdown
# Living Plan
...
- [ ] Task: create artifact workflow
  - Evidence: missing
  - Status: blocked
  - Stop rule: do not execute until validation evidence is defined

## First executable batch
Status: blocked
Next handoff: blocker-owner
```

Failure looks like:

- A vague checklist without per-task evidence.
- Starting execution from a blocked task.
- Marking a batch ready without prerequisite, validation, or dependency status.
- Handoff that says only “continue” without naming the owning phase.

## Anti-Patterns

- Planning from a desired implementation before the problem and approved approach are clear.
- Using a checklist of actions without outputs, evidence, or status.
- Grouping unrelated work into one unverifiable batch.
- Treating missing dependencies as assumptions instead of blockers.
- Creating a plan that cannot be resumed by another agent.
- Letting the plan go stale after reality changes.
- Claiming execution readiness from confidence instead of observable prerequisites.

## Acceptance Criteria

The skill is acceptable only when all are true:

- A Living Plan artifact is produced or updated for consequential multi-step work.
- The Living Plan includes tasks, prerequisites, outputs, evidence, dependencies, checkpoints, stop rules, and status.
- The first executable batch is either marked `ready` with concrete evidence or `blocked` with a named blocker.
- Every blocked task names the missing input, dependency, or owner.
- The smoke flow fails if validation evidence is missing but execution proceeds.
- Handoff names `execute-plan`, `shape-approach`, `review-quality`, or the blocker owner.

## Output Contract

Return the Living Plan, first executable batch, prerequisites, dependencies, expected outputs, validation evidence, checkpoint cadence, stop rules, replanning triggers, quality-checklist result, and explicit handoff.
