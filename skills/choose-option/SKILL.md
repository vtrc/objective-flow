---
name: choose-option
description: 'Trigger: choose option, decide path, compare alternatives, accept tradeoff. Make evidence-based decisions reversible when possible.'
---

# Choose Option

## Activation Contract

Use before committing to a consequential direction when there are real alternatives, scarce resources, competing criteria, uncertainty, or tradeoffs. Use in standard and full workflow mode; in light mode, record a compact decision if the choice affects future work.

## When Not To Use

Do not use when there is only one valid action, when the objective is still unclear, when options need exploration first, or when the problem is actually a failure needing `diagnose-cause` or `troubleshoot`.

## Required Input

- Decision statement, objective, owner, deadline, and consequence of delay.
- At least two real alternatives, including keeping current course when credible.
- Stable criteria ranked by importance.
- Minimum evidence for each option and known unknowns.
- Reversibility, cost, risk, and approval constraints.

## Hard Gate

Do not choose if there is no explicit criterion, no real alternative, no minimum evidence, or no stated tradeoff the decision accepts.

## Process

1. Frame the decision and why it must be made now.
2. Separate facts, assumptions, constraints, preferences, and unknowns.
3. Define stable criteria before scoring options; do not move criteria to justify a favorite.
4. Compare each option against criteria, evidence, risks, costs, and reversibility.
5. Name the recommended option, accepted tradeoff, rejected alternatives, and why they lost.
6. Define reversal condition, review date or signal, and first next action.
7. Request review or user approval when the decision is high-risk, irreversible, or outside delegated authority.

## Required Artifact

Produce an Options Decision with:

- decision statement
- objective and owner
- alternatives considered
- decision criteria and weights/order
- evidence per option
- selected option
- tradeoff accepted
- rejected alternatives and reasons
- reversal condition
- review signal
- next action and handoff

## Quality Checklist

- Criteria are stable and visible before the recommendation.
- Every option is real enough to execute or deliberately reject.
- The selected option explains what is sacrificed.
- Reversal condition is observable.
- Approval need is explicit.

## Stop Rules

Stop when criteria conflict with the objective, alternatives are fake, evidence is missing for the leading option, the choice hides an unresolved cause, or the decision exceeds authority.

## Handoff

Hand off to `explore-options` when alternatives are missing, `shape-approach` when the selected path needs design, `plan-work` when execution can be planned, `review-quality` for high-impact decisions, and `capture-learning` after results are known.

## Smoke Flow

Input: "Pick the fastest way to finish, but quality must not drop."
Expected behavior: reject speed as the only criterion, define quality and time criteria, compare real alternatives, select one with an accepted tradeoff and reversal signal, or stop if criteria cannot be reconciled.
Failure looks like: choosing the first option without criteria, tradeoff, evidence, or reversal condition.

## Anti-Patterns

- Deciding from preference before criteria.
- Presenting one option as a comparison.
- Treating assumptions as evidence.
- Omitting the cost of the selected path.
- Making irreversible choices without approval.

## Acceptance Criteria

- Options Decision includes all required fields.
- Choice is traceable to criteria and evidence.
- Accepted tradeoff and reversal condition are explicit.
- Missing criteria, alternatives, or authority blocks the decision.
