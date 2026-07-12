---
name: confirm-completion
description: "Trigger: done, complete, close, final handoff. Decide complete, partial, or blocked from evidence."

---

# Confirm Completion

## Activation Contract
Use at the closure point for an objective, deliverable, change set, review cycle, or follow-up when someone wants to say the work is done, partially done, or blocked.

Use this skill in standard and full workflow mode. In trivial mode, use a lightweight Completion Decision when the work is reversible and low-risk.

## When Not To Use
Do not use this skill to review quality from scratch; use `review-quality` first when approval evidence is missing. Do not use it to resolve feedback; use `receive-review-feedback` first.

Do not use it while execution is still in progress, while the objective is unclear, or when the accepted scope has changed without a current plan or artifact owner.

## Required Input
Before deciding, identify:

- original objective and accepted scope
- acceptance criteria and constraints
- promised outputs and required artifacts
- validation evidence
- Review Report or approval status, when required
- Feedback Resolution Table, when feedback exists
- residual risks, owners, and follow-ups
- cleanup state for temporary artifacts or branches of work

## Hard Gate
Do not declare success from effort, intent, elapsed time, confidence, or absence of complaints. Completion must be backed by current evidence mapped to the original objective, constraints, promised outputs, review state, and feedback state.

Missing required evidence produces `partial` or `blocked`, never `complete`.

## Status Gates
| Evidence state | Status |
| --- | --- |
| All required outputs present, validated, reviewed when required, feedback resolved or explicitly accepted, and risks handled | `complete` |
| Some outputs are valid but accepted scope remains unfinished, evidence is incomplete, or follow-up work is required and safe to carry | `partial` |
| Critical/High issue, missing required evidence, unresolved dependency, failed validation, unclear owner, or unsafe cleanup | `blocked` |

## Process
1. Build a **Completion Decision** with the original objective, accepted scope, constraints, promised outputs, required artifacts, and decision owner.
2. Map direct evidence to each acceptance criterion and promised output.
3. Verify required review status, validation results, feedback resolution, and cleanup state.
4. Identify missing evidence, residual risks, owners, deferred work, and out-of-scope decisions.
5. Choose exactly one status: `complete`, `partial`, or `blocked`; do not soften the status.
6. Record the next step for every missing item, risk, or follow-up.
7. Hand reusable lessons to `capture-learning`; hand unresolved findings to `receive-review-feedback`, `review-quality`, `troubleshoot`, or the artifact-owning phase.

## Required Artifact: Completion Decision
Must include:

- status: `complete`, `partial`, or `blocked`
- original objective and accepted scope
- acceptance criteria and evidence map
- promised outputs and artifact evidence
- validation state
- review state
- feedback state
- missing evidence
- residual risks and owners
- deferred follow-ups with revisit triggers
- cleanup state
- final handoff or closure path

## Quality Checklist
- Original objective, accepted scope, and constraints are explicitly checked.
- Every promised output has evidence or a named gap.
- Required artifacts are present and named.
- Validation evidence is current, relevant, and not contradicted by current state.
- Review and feedback states are included when applicable.
- Critical/High findings are closed or explicitly accepted by an owner; Critical findings cannot be accepted as complete.
- Follow-ups have owners and revisit triggers.
- Cleanup is done, unnecessary, or assigned.
- Final handoff names the owning phase.

## Stop Rules
Stop as `blocked` when:

- required evidence is unavailable or contradictory
- required review failed or was not performed
- feedback exists without a Feedback Resolution Table
- validation failed or was not run when required
- ownership of remaining work is unclear
- cleanup may lose work or hide state
- the requested completion claim excludes part of the accepted scope without approval

Return `partial` instead of `complete` when safe work remains and the owner accepts the remaining scope.

## Handoff
- `complete`: close with the Completion Decision and send reusable lessons to `capture-learning` when there is something worth preserving.
- `partial`: hand remaining accepted work to `execute-plan` or the artifact-owning phase with owners and revisit triggers.
- `blocked`: hand unresolved findings to `receive-review-feedback`, `review-quality`, or `troubleshoot` based on the blocker.
- Missing review evidence: hand to `review-quality`.
- Missing feedback resolution: hand to `receive-review-feedback`.

## Smoke Flow
Input: "We finished the audits but did not run the smoke tests. Mark it done."

Expected behavior:

1. Build a Completion Decision with the audit objective and required evidence.
2. Map completed audit files as evidence.
3. Detect missing smoke-test evidence.
4. Return `partial` if audits are valid but smoke tests are still safe remaining work, or `blocked` if completion requires smoke evidence now.
5. Hand remaining validation to `execute-plan` or the artifact owner.

Failure looks like: returning `complete`, hiding missing smoke tests as vague follow-up, or omitting owner and next step.

## Anti-Patterns
- Saying "done" because work was attempted.
- Treating no complaints as approval.
- Collapsing `partial` and `blocked` into optimistic completion.
- Ignoring the original objective after late feedback.
- Calling validation optional when it is part of acceptance.
- Hiding missing evidence in caveats.
- Closing while cleanup, ownership, or feedback state is unclear.

## Acceptance Criteria
This skill is complete only when a closure run can show:

- one Completion Decision with exact status
- evidence mapped to every acceptance criterion and promised output
- missing evidence listed explicitly
- validation, review, feedback, risk, and cleanup states recorded when applicable
- `complete` is impossible with missing required evidence
- `partial` includes owner and next step for remaining accepted work
- `blocked` includes blocker, owner, and owning phase for resolution
- final handoff names `capture-learning`, `execute-plan`, `review-quality`, `receive-review-feedback`, `troubleshoot`, or the artifact-owning phase

## Output Contract
Return the Completion Decision, evidence map, missing evidence, review state, feedback state, validation state, residual risks, owners, cleanup state, status, and final handoff.
