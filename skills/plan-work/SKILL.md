---
name: plan-work
description: Turn an approved approach shape into a domain-neutral, executable plan. Use when an objective has an approved direction and needs ordered phases, actions, outputs, validation, dependencies, risks, and stop conditions before execution.
---

# Plan Work

## Hard Gate

Do not execute multi-step or consequential work until the plan states actions, validation, dependencies, risks, and stop conditions.

## Process

1. Read the approved approach shape, objective, constraints, success criteria, and decisions already made.
2. Stop and obtain clarification or approval when the approach shape is missing, ambiguous, conflicting, or no longer credible.
3. Define the smallest useful phases in dependency order.
4. For each phase, specify:
   - purpose and completion condition
   - concrete actions in order
   - expected outputs
   - validation method and evidence to collect
   - dependencies, assumptions, and responsible parties when known
   - risks, mitigations, and stop conditions
5. Identify cross-phase dependencies, irreversible actions, external waits, decision gates, and fallback paths.
6. Make actions observable and sized so progress can be checked without guessing.
7. End with the first executable action, its prerequisites, the evidence to collect, and the condition for replanning.
8. Hand off to `execute-plan` when the plan is ready, `shape-approach` when the shape is incomplete, or `review-quality` when the plan itself needs approval.

Do not add scope that the approved approach does not support. Surface gaps and tradeoffs explicitly instead of hiding them in the plan.
