# Debugging artifacts

Objective Flow should use a small, evidence-first note when a failure requires systematic investigation.

## When to create one

Create a debugging artifact when the issue is:

- reproducible
- recurring
- unclear in cause
- costly to guess about
- likely to need several test cycles

## What it should contain

1. Symptom
2. Expected behavior
3. Reproduction steps
4. Environment
5. Observations
6. Hypotheses
7. Tests run
8. Confirmed cause
9. Fix applied
10. Verification
11. Follow-up prevention

## Working rule

Move one test at a time. Record what changed, what the test showed, and what the result means before moving on.

## Review rule

Before closing, the artifact should make the diagnosis understandable without relying on memory.
