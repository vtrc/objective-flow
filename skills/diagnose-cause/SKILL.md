---
name: diagnose-cause
description: "Trigger: diagnose cause, recurring gap, unexpected result, escaped issue. Trace evidence from symptom to prevention."
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

# Diagnose Cause

## Activation Contract
Use when a failure, recurring gap, missed expectation, incident, or surprising result needs cause analysis before selecting corrective action. Use for broad root-cause tracing across software, docs, operations, research, and workflow outcomes.

## When Not To Use
Do not use for live step-by-step break/fix work that needs reproduction and isolation now; use `troubleshoot`. Do not use when the cause is already proven and only execution remains; use `plan-work` or `execute-plan`.

## Required Input
- Symptom or gap between expected and actual result.
- Trigger or conditions under which it appeared.
- Evidence timeline, artifacts, logs, reviews, user reports, or observations.
- Impact, scope, and recurrence pattern.
- Candidate causes and what would falsify them.

## Hard Gate
Do not recommend or apply a fix until at least one hypothesis is testable against evidence and the report distinguishes symptom, failure point, immediate cause, root cause, and prevention.

## Process
1. State expected result, actual result, scope, impact, and trigger.
2. Build an evidence timeline from first known good state to observed failure.
3. Identify the failure point where reality first diverged from expectation.
4. Separate immediate cause from deeper root cause and contributing conditions.
5. Test candidate causes against evidence; record ruled-out causes and remaining uncertainty.
6. Explain why the issue escaped existing checks, reviews, process, or safeguards.
7. Propose the smallest corrective action plus prevention and verification.
8. Route competing remedies through `choose-option` before committing.

## Required Artifact
Produce a Root Cause Report with:
- symptom
- expected result
- trigger
- failure point
- immediate cause
- root cause
- contributing conditions
- evidence and ruled-out causes
- why it escaped
- corrective action
- verification method
- prevention
- confidence and remaining uncertainty

## Quality Checklist
- The root cause explains the symptom and the trigger.
- Immediate cause and root cause are not conflated.
- At least one alternative cause was considered or ruled out.
- Prevention targets the class of failure, not only the instance.
- Confidence level matches the evidence.

## Stop Rules
Stop when the symptom is vague, evidence is secondhand only, no hypothesis is falsifiable, causes conflict with evidence, impact scope is unknown, or the proposed fix is broader than the confirmed cause.

## Handoff
Hand off to `troubleshoot` for reproduction/isolation, `choose-option` for competing remedies, `plan-work` for corrective work, `review-quality` for diagnosis review, and `capture-learning` after prevention is validated.

## Smoke Flow
Input: "Users say the report is wrong; change the calculation."
Expected behavior: define expected vs actual, identify trigger and failure point, test whether calculation, source data, filtering, or interpretation caused the issue, and stop before changing anything if no hypothesis is verified.
Failure looks like: editing the calculation from intuition without a Root Cause Report.

## Anti-Patterns
- Calling the symptom the cause.
- Jumping from correlation to root cause.
- Fixing the visible failure while ignoring why it escaped.
- Recording only one favored hypothesis.
- Letting urgency erase verification.

## Acceptance Criteria
- Root Cause Report includes all required fields.
- Corrective action is tied to a verified or explicitly uncertain hypothesis.
- Escape analysis and prevention are documented.
- The skill blocks fixes when evidence cannot support the cause.
