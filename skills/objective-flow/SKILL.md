---
name: objective-flow
description: "Trigger: route any vague, consequential, multi-step, creative, blocked, resumed, or evidence-sensitive objective through a strict domain-neutral lifecycle from framing to learning."

---

# Objective Flow

Guide meaningful work through the smallest lifecycle that preserves clarity, consent, evidence, review, and completion integrity.

## Activation Contract

Activate after `using-objective-flow` routes a non-trivial request here, or whenever the current phase is unclear and the objective needs disciplined progression across more than one artifact.

Use the smallest valid lifecycle:

- **Standard mode:** select the current phase, produce its artifact, then hand off.
- **Full mode:** sequence multiple phases when the objective is high-risk, ambiguous, blocked, resumed, or likely to need review and completion discipline.
- **Light mode:** only for clear, low-risk, reversible objectives with a visible evidence check; still name the phase and closure condition.

## When Not To Use

Do not use this skill to perform the phase work directly when a specific primary skill already owns the missing artifact. Route to that skill and let it run.

Do not use this skill for tiny reversible answers that can close with a visible evidence check, unless the user asks for lifecycle coordination. Do not use it to skip review, approval, validation, or completion checks.

## Required Input

Before selecting a lifecycle phase, know or identify:

- objective and current user intent
- existing artifact or missing artifact
- audience, constraints, non-goals, and success signals when relevant
- approval state for direction, scope, and consequential actions
- evidence or validation needed for the next phase
- blocker, review, or completion state if work is resumed

If a missing input changes the lifecycle phase or owning skill, stop and route back to `using-objective-flow` or `frame-objective`.

## Hard Gate

Do not advise, shape, plan, execute, review, or close meaningful work until one lifecycle phase, one primary skill, one required artifact, and one observable stop gate are selected. If any of those four cannot be named, stop.

## Lifecycle Process

1. Read the user's request, known context, and any existing artifact.
2. Identify the missing or stale artifact that currently blocks safe progress.
3. Classify the lifecycle phase by that artifact.
4. Select exactly one primary skill for the phase.
5. Confirm that required input and approval are present for that phase.
6. Run or hand off to the selected skill until its required artifact is produced or a stop rule blocks progress.
7. Check the artifact against its quality checklist before moving forward.
8. Hand off explicitly to the next skill only after the active artifact is usable.
9. Return to an earlier phase when evidence changes the objective, direction, scope, plan, or validation.
10. Route to review before completion and to learning capture only when reusable knowledge exists.

## Phase Routing

| Missing or current need | Skill | Required artifact |
| --- | --- | --- |
| Real problem, proposed solution, audience, constraints, non-goals, signals, or decisions are unclear | `frame-objective` | Objective Frame |
| Credible paths need comparison | `explore-options` | Options Matrix |
| Known options need a final decision | `choose-option` | Decision Record |
| Direction exists but scope, flow, risks, validation, dependencies, or irreversible decisions are not explicit | `shape-approach` | Design Artifact |
| Approved shape needs ordered work, evidence, checkpoints, and stop rules | `plan-work` | Living Plan |
| Approved plan has a ready batch | `execute-plan` | Batch Execution Record |
| Work can split safely into independent tracks | `dispatch-parallel-agents` or `subagent-driven-development` | Split Decision or Consolidation Report |
| Parallel outputs need merge discipline | `coordinate-subagents` | Consolidation Report |
| Git-backed parallel work needs isolation | `manage-worktrees` | Worktree Lifecycle Record |
| Something fails or behaves unexpectedly | `troubleshoot` | Root Cause Report |
| Output needs judgment before approval or closure | `review-quality` | Review Report |
| Review feedback must be handled | `receive-review-feedback` | Feedback Resolution Table |
| Branch is ready to close | `finish-development-branch` | Branch Finish Decision |
| Reviewed objective appears complete | `confirm-completion` | Completion Decision |
| A reusable lesson should persist | `capture-learning` | Learning Capture |

## Required Artifact: Lifecycle Routing Record

Produce or update a Lifecycle Routing Record before handing off:

```markdown
Objective: ...
Lifecycle mode: light | standard | full
Current phase: ...
Primary skill: ...
Required artifact: ...
Required input present: yes | no
Approval state: approved | missing | not needed
Evidence or validation required: ...
Stop gate: ...
Next handoff: ...
Return path if evidence changes: ...
Completion path: review-quality -> confirm-completion
```

## Ordered Lifecycle

```text
frame -> explore -> choose -> shape -> plan -> execute -> review -> complete -> learn
```

Skip a phase only when its artifact is already present, current, and sufficient for the next gate.

## Quality Checklist

- [ ] One lifecycle phase and one primary skill are selected.
- [ ] The selected phase matches the missing or stale artifact.
- [ ] The required artifact is named and fielded.
- [ ] Objective, audience, constraints, non-goals, success signals, and decisions are clear enough for the next move.
- [ ] Consequential direction or scope has approval before planning or execution.
- [ ] Execution has a plan, validation evidence, checkpoints, and stop rules.
- [ ] Review happens before completion.
- [ ] Completion is checked against the original objective and evidence.
- [ ] The handoff names the next owning skill or a blocker path.

## Stop Rules

- Stop if phase selection depends on missing information.
- Stop if no required artifact can be named for the current phase.
- Stop if a consequential decision lacks approval.
- Stop if planning starts before the approach is shaped.
- Stop if execution starts before a valid plan exists, except for a tiny reversible action.
- Stop if validation fails, evidence is missing, or the artifact fails its checklist.
- Stop if closure is requested before review and completion checks.
- Stop if ownership is unclear between two phase skills; return to `using-objective-flow` for a Routing Decision.

## Handoff

- Normal path: hand off to the primary skill selected in the Phase Routing table.
- Earlier-phase path: hand off to `frame-objective`, `explore-options`, `choose-option`, or `shape-approach` when evidence invalidates later work.
- Execution path: hand off from `plan-work` to `execute-plan` only when the Living Plan is approved and has validation evidence.
- Review path: hand off to `review-quality` before any consequential completion claim.
- Completion path: hand off to `confirm-completion` after review passes; then to `capture-learning` only when reusable knowledge exists.
- Blocker path: stop and report the missing input, failed gate, or unclear ownership.

## Smoke Flow

Input:

> "We chose a direction for the onboarding cleanup, but there is no plan yet. Implement it."

Expected behavior:

- Select the planning phase, not execution.
- Choose `plan-work` because the Living Plan is missing.
- Produce a Lifecycle Routing Record with required artifact `Living Plan`, approval state, evidence needed, and stop gate.
- Stop before `execute-plan` until the Living Plan exists and is approved.

Expected artifact: Lifecycle Routing Record.

Expected handoff: `plan-work`.

Failure looks like: implementing immediately, skipping the required artifact, claiming the direction is enough for execution, or closing without review.

## Anti-Patterns

- Treating the lifecycle as a checklist after work is already done.
- Skipping phase ownership because the next action feels obvious.
- Planning without a shaped approach or executing without an approved plan.
- Moving forward with stale artifacts after evidence changes.
- Claiming completion before review and completion checks.
- Capturing learning when there is no reusable lesson.
- Using this skill as a substitute for the selected phase skill's required artifact.

## Acceptance Criteria

This skill is complete only when all are true:

- Every meaningful objective has one current phase, one primary skill, and one required artifact.
- The Lifecycle Routing Record includes all required fields.
- The hard gate blocks missing phase, missing artifact, missing stop gate, and unclear ownership.
- The smoke flow can fail when execution starts without a Living Plan.
- Review and completion handoffs are explicit for consequential work.
- Earlier-phase return paths are named when evidence invalidates assumptions.

## Output Contract

Return the Lifecycle Routing Record, then run or hand off to the selected primary skill. For light mode, return the selected phase, evidence check, and closure condition.
