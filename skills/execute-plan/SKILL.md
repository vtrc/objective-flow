---
name: execute-plan
description: Execute a domain-neutral plan step by step with evidence, validation, and explicit adaptation. Use when an approved plan exists and work must progress reliably through actions, checks, blockers, changes, and completion.
---

# Execute Plan

## Hard Gate

Do not execute beyond the next validated action. Stop when evidence, constraints, or approvals no longer match the plan.

## Process

1. Read the plan, objective, constraints, current state, and next action before acting.
2. Confirm that prerequisites and approvals for the next action are satisfied; stop when they are not.
3. Perform one planned action at a time.
4. Record the action taken, output produced, validation performed, and evidence observed.
5. Compare each result with the phase completion condition and success criteria before proceeding.
6. When evidence reveals a blocker, failed validation, changed constraint, new dependency, or invalid assumption:
   - pause the affected work
   - state the impact and available options
   - make the smallest approved adaptation or return to planning when the plan no longer fits
   - update the plan and evidence record before resuming
7. Respect every stop condition and escalation gate; do not bypass them to preserve momentum.
8. At phase completion, verify required outputs and validations, then select the next ready action.
9. When planned work appears finished, hand off to `review-quality`; never finish directly from execution.

Keep progress reports factual: distinguish completed work, observed evidence, pending work, risks, and decisions needed.
