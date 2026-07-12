---
name: troubleshoot
description: "Trigger: broken, failing, flaky, unexpected behavior, incident. Isolate the failure, verify the cause, and prevent recurrence."
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

# Troubleshoot

## Activation Contract
Use when behavior is broken, flaky, degraded, blocked, or unexpectedly different and the next step requires investigation before a fix. Applies to software, docs, operations, data, environments, and workflow failures.

## When Not To Use
Do not use for broad retrospective cause analysis after evidence is already gathered; use `diagnose-cause`. Do not use for ordinary execution with a known fix; use `execute-plan`.

## Required Input
- Concrete symptom, expected behavior, observed behavior, and impact.
- Reproduction attempt or reason reproduction is not yet possible.
- Known-good baseline or last confirmed working state.
- Recent changes, inputs, environment, dependencies, and constraints.
- Safety or rollback needs before touching the system.

## Hard Gate
Do not apply a fix until the symptom is reproducible or bounded, a baseline is established, and at least one falsifiable hypothesis has been tested or explicitly blocked by missing evidence.

## Process
1. Baseline the situation: symptom, expected result, impact, urgency, safety, and rollback path.
2. Reproduce or bound the failure; record exact inputs, environment, timing, data, and recent changes.
3. Compare failing state with known-good baseline and isolate one variable at a time.
4. Trace the path from trigger to input, routing, state, dependency, output, and failure point.
5. Rank hypotheses by evidence, risk, and ease of falsification.
6. Run the smallest diagnostic check that can disprove the leading hypothesis.
7. Confirm the immediate cause and root cause, or record the next evidence needed.
8. Apply the minimum safe fix only after cause confidence is sufficient.
9. Verify original, baseline, nearby, regression, and rollback scenarios.
10. Add defense-in-depth: guardrail, validation, monitor, fallback, doc, or review check.

## Required Artifact
Produce a Root Cause Report with:
- symptom
- expected behavior
- reproduction or bounded failure
- known-good baseline
- trigger
- failure point
- hypotheses tested
- immediate cause
- root cause or explicit uncertainty
- minimal fix or next diagnostic
- verification results
- prevention / defense-in-depth
- rollback path
- confidence

## Quality Checklist
- Reproduction or bounded failure is clear enough for another agent.
- Baseline comparison narrows the search space.
- Hypotheses are falsifiable and tested one variable at a time.
- Fix is no broader than the confirmed cause.
- Verification proves both the fix and the prevention path.

## Stop Rules
Stop when the symptom is too vague, reproduction cannot be bounded, baseline is unknown, evidence contradicts the leading cause, safety/rollback is unclear, or the proposed fix exceeds the confirmed cause.

## Handoff
Hand off to `diagnose-cause` for broader post-incident analysis, `choose-option` when remedies compete, `execute-plan` for the controlled fix, `review-quality` before accepting the result, and `capture-learning` after prevention is validated.

## Smoke Flow
Input: "The build is flaky; patch whatever makes it pass."
Expected behavior: capture failure pattern, compare passing and failing baselines, test one hypothesis, refuse broad patching without cause, produce a Root Cause Report, and propose defense-in-depth.
Failure looks like: changing files until one run passes without baseline, hypothesis, verification, or prevention.

## Anti-Patterns
- Treating a workaround as root cause.
- Testing multiple variables at once.
- Using a passing run as proof without reproducing the original failure.
- Expanding the fix beyond the confirmed cause.
- Skipping rollback, regression, or prevention because the symptom disappeared.

## Acceptance Criteria
- Root Cause Report includes all required fields.
- Cause confidence is backed by tested evidence or uncertainty is explicit.
- Minimal fix and verification cover original and nearby scenarios.
- Defense-in-depth reduces recurrence or explains why none is appropriate.
