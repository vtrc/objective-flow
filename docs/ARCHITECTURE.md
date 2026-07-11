# Architecture

Objective Flow is a modular skill system. It uses one startup skill, one lifecycle router, and focused specialist skills.

## Layers

| Layer | Skill | Responsibility |
| --- | --- | --- |
| Startup | `using-objective-flow` | Establish the discipline, decide whether the request needs the workflow, and route into the system. |
| Router | `objective-flow` | Classify the current phase and select the next specialist skill. |
| Specialists | `frame-objective`, `explore-options`, `shape-approach`, `plan-work`, `execute-plan`, `review-quality`, `confirm-completion`, `capture-learning`, `diagnose-cause`, `choose-option` | Execute one phase of the workflow with clear gates and handoffs. |
| Reference | `skills/objective-flow/references/lifecycle.md` | Defines phases, mandatory gates, scale rules, and backtracking rules. |

## Control Model

Objective Flow is intentionally gate-based. Each skill answers three questions:

1. What input is required before this phase can start?
2. What evidence proves the phase is complete?
3. Which skill owns the next step?

This keeps the system strict without making it domain-specific.

## Core Gates

| Gate | Purpose |
| --- | --- |
| Objective gate | Prevents planning or action before the objective and success condition are clear. |
| Direction gate | Prevents commitment before credible options have been compared. |
| Shape gate | Prevents execution before scope, workflow, risks, and validation are understood. |
| Plan gate | Prevents multi-step execution without actions, validation, risks, and stop conditions. |
| Evidence gate | Prevents continuing execution when observations no longer match the plan. |
| Review gate | Prevents closure while material gaps remain. |
| Completion gate | Prevents claiming success without checking against the original objective. |

## Why This Is General

The system avoids software-specific primitives. It does not require code, tests, branches, commits, pull requests, CI, or deployment. Those can still appear when the objective is software-related, but the default language is neutral:

- objective instead of ticket
- evidence instead of test result
- review instead of code review
- handoff instead of pull request
- completion check instead of merge

## Backtracking

The workflow is not linear when evidence changes:

- Return to `frame-objective` when the objective changes.
- Return to `explore-options` when the chosen direction weakens.
- Return to `shape-approach` when the solution shape changes.
- Return to `plan-work` when execution no longer matches the plan.
- Use `diagnose-cause` when failure repeats or the cause is unclear.
- Use `review-quality` again after meaningful correction.
