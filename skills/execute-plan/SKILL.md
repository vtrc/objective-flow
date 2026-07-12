---
name: execute-plan
description: "Trigger: an approved living plan has a ready batch. Execute only the next batch with evidence, generic RED/GREEN/REFACTOR, checkpoints, plan updates, blockers, and explicit handoff to review."

---

# Execute Plan

Execute only the next validated slice of the Living Plan.

## Activation Contract

Use this skill when an approved Living Plan exists and exactly one next batch is ready. Tiny reversible actions may use a minimal batch, but still require evidence.

Applies to standard and full workflow mode. In trivial mode, use this skill only when the action still needs a checkpoint, plan update, or handoff evidence.

## When Not To Use

Do not use this skill when:

- There is no Living Plan, the plan is stale, or no batch is marked ready; use `plan-work` first.
- The approved approach itself is unclear or disputed; use `shape-approach` first.
- The task is primarily review, feedback triage, root-cause diagnosis, or completion confirmation.
- The requested action is outside the plan, ownership boundary, or approved scope.
- Validation cannot be observed; stop instead of executing from trust.

## Required Input

Before execution, confirm these inputs are present:

- Living Plan reference and current checkpoint.
- Next ready batch with prerequisite, action, output, evidence, validation, dependency, and stop rule.
- Approved scope, constraints, and ownership boundaries.
- Current state evidence that matches the plan.
- Review or approval gate for the batch outcome.
- Known blockers or changed assumptions from previous progress.

If any input contradicts the plan or would change the batch, stop and replan before acting.

## Hard Gate

Do not execute beyond the next validated batch. Stop when evidence, constraints, prerequisites, approvals, dependencies, ownership, or current reality no longer match the Living Plan.

If the Living Plan is missing, stale, contradicted, or lacks a ready batch, update or replan before continuing.

## Batch Process

1. Read the Living Plan, objective, constraints, current checkpoint, progress log, and next ready batch.
2. Verify the batch prerequisite, dependency state, expected output, validation method, evidence source, ownership boundary, checkpoint, and stop rule.
3. Compare current reality with the plan. Stop when evidence contradicts plan state.
4. State the RED condition: missing evidence, failing condition, unmet requirement, or behavior not yet satisfied.
5. Execute the smallest useful batch: one task or tightly related tasks with one validation point.
6. State the GREEN evidence: concrete output and validation result that satisfies the RED condition.
7. Apply REFACTOR only to improve structure, wording, duplication, or process while preserving passing evidence.
8. Record action taken, output produced, evidence collected, validation result, blockers, decisions, and skipped steps with reasons.
9. Update the Living Plan checkboxes, task status, checkpoint, and progress log after each meaningful action or failed validation.
10. Respect stop rules and escalation gates before selecting any next batch.
11. Select the next ready batch only after validation passes and the plan is updated.
12. When planned work appears finished, hand off to `review-quality`; never claim final completion directly from execution.

## Generic RED / GREEN / REFACTOR

Use this as execution discipline, not as a formal testing methodology unless the project explicitly requires one.

- **RED**: name the missing evidence, failing condition, unmet requirement, or behavior that is not yet satisfied.
- **GREEN**: make the smallest safe change or action that satisfies that condition and collect evidence.
- **REFACTOR**: improve structure, wording, duplication, or process while preserving passing evidence.

Skip the cycle only when the action has no meaningful observable behavior. If skipped, state why and record the alternate evidence.

## Required Artifact: Batch Execution Record

```markdown
# Batch Execution Record

Plan reference: ...
Batch: ...
Batch status: ready | blocked | completed | failed
Prerequisite checked: pass | fail + evidence
Dependency checked: pass | fail + evidence
Ownership/scope checked: pass | fail + evidence
Current reality check: matches plan | contradicts plan + evidence
RED / missing evidence: ...
GREEN / evidence collected: ...
REFACTOR / cleanup: ...
Action taken: ...
Output produced: ...
Validation result: pass | fail
Plan update: ...
Blocked or changed assumptions: ...
Next gate: execute-plan | plan-work | troubleshoot | review-quality | blocker-owner
Next ready batch: ...
```

## Quality Checklist

- [ ] Only the next approved batch was executed.
- [ ] Prerequisites, dependencies, scope, ownership, and current reality were checked before action.
- [ ] RED/GREEN/REFACTOR was used or the skip was justified with alternate evidence.
- [ ] Evidence is concrete, current, and tied to the expected output.
- [ ] Failed or contradictory validation led to stop, diagnosis, or replanning.
- [ ] The Living Plan was updated with status, checkbox, checkpoint, and progress evidence.
- [ ] No out-of-plan task was started without returning to planning.
- [ ] Finished planned work hands off to `review-quality`, not direct completion.

## Stop Rules

- Stop if validation fails or evidence is missing.
- Stop if current evidence contradicts the Living Plan.
- Stop if prerequisites are not true.
- Stop if dependencies, ownership, or approvals are missing.
- Stop if the next task is not in the plan or not marked ready.
- Stop if scope expands beyond the approved shape.
- Stop if the batch requires touching files or responsibilities outside ownership.
- Stop if REFACTOR would change behavior without a fresh RED/GREEN evidence loop.
- Stop before completion until review passes.

## Handoff

- Normal path: hand off to `execute-plan` with the next ready batch after the current batch passes and the plan is updated.
- Stale-plan path: hand off to `plan-work` when plan state, dependencies, or batch order no longer match reality.
- Failure path: hand off to `troubleshoot` when validation fails and the cause is unknown.
- Quality path: hand off to `review-quality` when planned work appears complete or the batch changes meaningful behavior.
- Blocker path: hand off to the named blocker owner when approvals, dependencies, or ownership are missing.

## Smoke Flow

Input:

> Continue the plan; the last validation says the artifact exists, but the file is missing.

Expected behavior:

- Read the Living Plan and next ready batch.
- Record a Batch Execution Record with current reality contradicting the plan.
- Stop before executing or marking the task complete.
- Hand off to `plan-work` if the plan is stale, or `troubleshoot` if the missing artifact is unexplained.

Expected artifact:

```markdown
# Batch Execution Record

Plan reference: Living Plan / artifact workflow
Batch: verify artifact exists
Batch status: failed
Current reality check: contradicts plan + file is missing
RED / missing evidence: artifact existence evidence is absent
GREEN / evidence collected: none; stopped before execution
Validation result: fail
Plan update: mark batch blocked or stale
Next gate: plan-work | troubleshoot
```

Failure looks like:

- Proceeding as if previous validation is enough.
- Updating checkboxes without current evidence.
- Executing a new batch while contradiction is unresolved.
- Claiming completion directly from execution.

## Anti-Patterns

- Executing multiple batches because the plan “looks obvious.”
- Trusting stale notes instead of current evidence.
- Updating the Living Plan to match desired progress rather than observed results.
- Treating RED/GREEN/REFACTOR as ceremony without recording evidence.
- Expanding scope during execution instead of returning to planning.
- Hiding failed validation as a minor follow-up.
- Claiming final completion without review.

## Acceptance Criteria

The skill is acceptable only when all are true:

- A Batch Execution Record is produced for every consequential batch.
- The record includes plan reference, batch, RED/GREEN/REFACTOR evidence, validation, plan update, and next gate.
- Execution is limited to the next ready batch.
- Contradictory or missing evidence stops execution and records a failed validation.
- The Living Plan is updated after pass, fail, or blocker outcomes.
- The smoke flow fails if the agent proceeds when the artifact is missing.
- Completion handoff names `review-quality`; stale-plan handoff names `plan-work`; unknown failure handoff names `troubleshoot`.

## Output Contract

Return the Batch Execution Record, batches completed, evidence collected, validation results, plan updates made, blockers or failed checks, next ready batch, stop rule status, and explicit handoff to review when planned work is complete.
