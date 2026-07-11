# Usage

Start with `using-objective-flow` when beginning or resuming a non-trivial objective.

Example prompt:

```text
Use using-objective-flow to help me plan and execute this objective: ...
```

## Typical Flow

1. `using-objective-flow` decides whether the workflow is needed.
2. `objective-flow` routes to the current phase.
3. A specialist skill performs the phase.
4. The specialist hands off to the next skill.
5. `review-quality` checks meaningful work.
6. `confirm-completion` verifies closure.
7. `capture-learning` records lessons when useful.

## Simple Requests

For simple, reversible requests, the agent may compress the flow. It should still check the answer or result before closing.

## Consequential Requests

For multi-step, risky, irreversible, user-facing, or expensive work, use the full path:

```text
frame -> explore -> shape -> plan -> execute -> review -> complete -> learn
```
