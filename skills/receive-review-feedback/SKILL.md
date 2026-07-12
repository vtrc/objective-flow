---
name: receive-review-feedback
description: "Trigger: review comments, quality feedback, validation notes, stakeholder feedback. Triage, resolve, and revalidate feedback."

---

# Receive Review Feedback

## Activation Contract
Use when review comments, quality notes, validation notes, or stakeholder feedback must be converted into controlled actions instead of reactive edits.

Use this skill after `review-quality` returns findings, after a user gives correction feedback, or when multiple feedback items need classification, ownership, and revalidation.

## When Not To Use
Do not use this skill to perform the original review; use `review-quality` first. Do not use it to claim final completion; use `confirm-completion` after feedback is resolved or explicitly carried forward.

Do not use it for a single obvious typo when the correction is reversible, within scope, and needs no decision. Apply the trivial fix and record lightweight evidence instead.

## Required Input
Before acting, identify:

- original objective and accepted scope
- feedback source and full feedback list
- related Review Report, if available
- acceptance criteria or quality standard
- artifact or change set affected by each item
- current evidence and validation state
- owner for decisions, changes, disputes, and deferred work

## Hard Gate
Do not change work until every feedback item is captured and classified. Do not mark feedback resolved until accepted work is revalidated, or non-accepted work has evidence, owner, rationale, risk, and revisit trigger.

Feedback that conflicts with the quality standard or accepted scope must stop as `clarify`, `dispute`, or `defer`; it must not be applied silently.

## Decision Gates
| Decision | Required action |
| --- | --- |
| `accept` | Apply the smallest scoped fix and revalidate it. |
| `accept-batch` | Group related items, name the batch owner, apply together, and revalidate together. |
| `clarify` | Stop on that item and ask for the missing decision, evidence, or scope boundary. |
| `dispute` | Provide evidence, cite the relevant constraint or standard, and keep the item open unless the reviewer accepts. |
| `defer` | Record owner, reason, risk, revisit trigger, and why deferral does not invalidate current handoff. |

## Process
1. Copy every feedback item into a **Feedback Resolution Table** before editing.
2. Group items by artifact, theme, severity, dependency, and owner.
3. Classify each group as `accept`, `accept-batch`, `clarify`, `dispute`, or `defer`.
4. Check each group against the original objective, accepted scope, non-goals, and quality standard.
5. Stop on conflicts, missing decisions, or scope expansion before making changes.
6. Apply only accepted items, in the smallest safe batch.
7. Revalidate each accepted item or batch against both the feedback and the original criteria.
8. Update the Feedback Resolution Table with changes, evidence, unresolved items, and risks.
9. Hand changed work to `review-quality`; hand resolved completion evidence to `confirm-completion`.

## Required Artifact: Feedback Resolution Table
Must include one row per feedback group with:

- feedback group and source item ids or summaries
- affected artifact or change set
- decision: `accept`, `accept-batch`, `clarify`, `dispute`, or `defer`
- rationale tied to objective, scope, or quality standard
- owner
- change made or reason no change was made
- revalidation evidence or required revalidation
- residual risk
- revisit trigger for deferred work
- next handoff

## Quality Checklist
- No feedback item is lost, rewritten to be easier, or silently ignored.
- Every item has a decision, rationale, owner, and evidence need.
- Accepted changes stay within accepted scope and do not break original criteria.
- Disputed items cite concrete evidence or a standard, not preference.
- Deferred items have owner, risk, and revisit trigger.
- Revalidation proves both feedback closure and original objective safety.
- The handoff separates resolved, disputed, deferred, and blocked items.

## Stop Rules
Stop when:

- feedback list is incomplete or ambiguous
- feedback conflicts with the objective, accepted scope, or quality standard
- a requested change expands scope or changes the decision owner
- a dispute lacks evidence
- a deferral lacks owner, risk, or revisit trigger
- accepted work cannot be revalidated
- validation fails after an accepted fix
- the next handoff would hide unresolved feedback

## Handoff
- Accepted and revalidated changes: hand to `review-quality` for recheck.
- Resolved work with completion evidence: hand to `confirm-completion`.
- Clarification needed: hand to the decision owner with the exact question.
- Disputed or deferred feedback: hand to `review-quality` with evidence, risk, owner, and revisit trigger.
- Failed validation: hand to `troubleshoot` or the artifact-owning phase.

## Smoke Flow
Input: "Reviewer says remove the stop rules because they make the skill too strict."

Expected behavior:

1. Capture the feedback in the Feedback Resolution Table.
2. Classify it as `dispute` because the quality standard requires actionable stop rules.
3. Cite the standard as evidence and record rationale, owner, residual risk, and revalidation need.
4. Do not remove stop rules.
5. Hand the disputed item to `review-quality` for recheck.

Failure looks like: removing stop rules, arguing without evidence, omitting owner or risk, or marking the item resolved without reviewer acceptance.

## Anti-Patterns
- Editing before all feedback is classified.
- Treating every comment as mandatory without checking scope or standard.
- Treating every comment as optional without evidence.
- Losing comments during grouping.
- Resolving feedback from explanation alone without revalidation.
- Deferring hard problems without owner, risk, and revisit trigger.
- Hiding disputed feedback in a generic summary.

## Acceptance Criteria
This skill is complete only when a feedback run can show:

- all feedback items captured in the Feedback Resolution Table
- every group has decision, rationale, owner, change or no-change reason, and evidence need
- accepted items have revalidation evidence
- disputed items cite evidence or standard and remain open until accepted
- deferred items have owner, risk, and revisit trigger
- unresolved items are visible in the handoff
- next handoff names `review-quality`, `confirm-completion`, `troubleshoot`, or the artifact-owning phase

## Output Contract
Return the Feedback Resolution Table, changes made, revalidation evidence, disputed items, deferred items, clarification questions, unresolved risks, and next handoff.
