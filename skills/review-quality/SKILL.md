---
name: review-quality
description: "Trigger: review, approval, quality check, artifact check, decision check. Judge quality with severity-ranked evidence."

---

# Review Quality

## Activation Contract
Use when a plan, deliverable, change set, skill, decision, or completion claim needs independent approval before handoff, closure, or further execution.

Use this skill in standard or full workflow mode. In trivial mode, use it only when the claim affects a public contract, critical skill, irreversible decision, or user-facing completion statement.

## When Not To Use
Do not use this skill to implement fixes, triage incoming feedback, or declare final completion. Use `receive-review-feedback` for feedback triage and `confirm-completion` for final completion decisions.

Do not use it when there is no artifact, criteria, or evidence to inspect; first return to the owning phase to produce reviewable work.

## Required Input
Before reviewing, identify:

- objective and accepted scope
- review type: `plan`, `deliverable`, `change-set`, `skill`, `decision`, or `completion-readiness`
- acceptance criteria or quality standard
- artifact or change set being reviewed
- evidence provided by the owner
- known constraints, non-goals, risks, and owner
- requested handoff or approval need

## Hard Gate
Do not approve if any Critical or High finding is unresolved, acceptance evidence is missing, ownership is unclear, or risk is unaccepted. Approval must be explicit and evidence-linked.

A missing required artifact is a blocking finding, not a style comment.

## Review Types
| Type | Focus |
| --- | --- |
| `plan` | objective, scope, dependencies, sequencing, stop rules, evidence per task |
| `deliverable` | promised output, correctness, completeness, constraints, evidence |
| `change-set` | changed surface, allowed ownership, validation, handoff readiness |
| `skill` | activation, boundaries, hard gate, process, required artifact, handoff, smoke flow |
| `decision` | options, tradeoffs, reversibility, owner, risk, evidence |
| `completion-readiness` | evidence map, validation state, feedback state, residual risk |

## Severity
- **Critical**: violates objective, safety, correctness, data integrity, required artifact, or handoff readiness; blocks approval.
- **High**: materially harms success, maintainability, trust, or auditability; blocks unless an accountable owner explicitly accepts the risk.
- **Medium**: should be fixed before handoff when practical; record owner and recheck method.
- **Low**: clarity, polish, or minor maintainability issue; record if it affects future work.

## Process
1. Build a **Review Request** before judging: objective, review type, scope, artifact under review, criteria, supplied evidence, constraints, risk owner, and requested decision.
2. Reject the request as `blocked` if the artifact, criteria, or supplied evidence is missing.
3. Map evidence to every criterion; mark unsupported claims as evidence gaps.
4. Inspect correctness, completeness, consistency, maintainability, risk, ownership, and handoff readiness.
5. Record each finding with severity, evidence, impact, required fix, owner, and recheck method.
6. Decide exactly one approval status: `approved`, `approved-with-risk`, or `blocked`.
7. Produce a **Review Report** and hand unresolved findings to `receive-review-feedback`; hand approved completion-readiness to `confirm-completion`.

## Required Artifacts

### Review Request
Must include:

- objective
- review type
- accepted scope and non-scope
- artifact or change set under review
- acceptance criteria or quality standard
- supplied evidence
- known risks and owner
- requested decision

### Review Report
Must include:

- review type
- approval status: `approved`, `approved-with-risk`, or `blocked`
- evidence reviewed
- findings grouped by severity
- required fixes and owners
- evidence gaps
- residual risks and accepted risks
- recheck method
- next handoff

## Quality Checklist
- Original objective is addressed, not only the latest comment.
- Review Request is complete before judgment starts.
- All required artifacts are present and named.
- Every acceptance criterion has direct evidence or an explicit gap.
- Critical and High findings block approval unless High risk is explicitly accepted by an accountable owner.
- Findings are actionable: evidence, impact, required fix, owner, and recheck method are present.
- The next owner can continue without hidden context.

## Stop Rules
Stop and return `blocked` when:

- objective, scope, criteria, artifact, or evidence is missing
- ownership is outside the allowed area or unclear
- a required artifact is absent
- severity cannot be ranked from available evidence
- validation evidence is stale, contradictory, or not reproducible enough for the claim
- Critical or High risk has no accountable owner
- requested approval would skip feedback resolution or completion confirmation

## Handoff
- Approved non-final work: hand to the next owning phase named in the Review Report.
- Blocked or approved-with-risk work: hand findings to `receive-review-feedback`.
- Completion-ready work: hand the Review Report to `confirm-completion`.
- Missing artifact or criteria: hand back to the phase that owns that artifact.

## Smoke Flow
Input: "Review this skill change. It adds a hard gate but no output artifact."

Expected behavior:

1. Build a Review Request with review type `skill` and the skill-quality criteria.
2. Detect the missing required artifact.
3. Produce a Review Report with approval status `blocked`.
4. Rank the missing artifact as Critical or High because the quality standard rejects vague output.
5. Hand off to the artifact owner or `receive-review-feedback` for correction.

Failure looks like: approving because the hard gate exists, treating the missing artifact as Low severity, or omitting required fix and recheck method.

## Anti-Patterns
- Saying "looks good" without an evidence map.
- Approving effort, intent, or explanation instead of artifacts.
- Treating missing required artifacts as polish.
- Collapsing Critical and High findings into vague suggestions.
- Reviewing only changed text while ignoring the original objective.
- Hiding risk by using `approved-with-risk` without an accountable owner.
- Handing off with "continue" instead of naming the owning phase.

## Acceptance Criteria
This skill is complete only when a real review can show:

- one complete Review Request
- one Review Report with explicit approval status
- every finding has severity, evidence, impact, required fix, owner, and recheck method
- Critical findings always block approval
- High findings block unless risk acceptance names an owner
- missing required artifacts are blocking findings
- handoff names `receive-review-feedback`, `confirm-completion`, or the artifact-owning phase

## Output Contract
Return the Review Request, Review Report, approval status, evidence reviewed, findings by severity, required fixes, owners, evidence gaps, residual risks, and next handoff.
