# Objective Flow Lifecycle

This workflow is strict by default and compressed only when the task is clear, low-risk, and reversible. Compression means doing a phase briefly, not pretending the phase does not exist.

## Phases

| Phase | Purpose | Required Input | Output | Gate | Next Phase |
| --- | --- | --- | --- | --- | --- |
| Frame | Define the real objective and success condition. | Request and available context. | Problem frame. | The next action is clear. | Explore, decide, diagnose, plan, or answer. |
| Explore | Compare viable directions. | Problem frame. | Options and selected direction. | User approves the direction when the work is consequential. | Shape. |
| Shape | Define the solution before doing it. | Selected direction. | Approach shape with scope, workflow, risks, and validation. | User approves the shape for multi-step or consequential work. | Plan. |
| Plan | Define how progress will happen. | Approved approach shape. | Phased plan with validation and stop conditions. | The immediate next action is executable. | Execute. |
| Execute | Perform the plan with evidence and adaptation. | Plan. | Checkpoints and result. | Each phase meets its validation condition. | Review, diagnose, or decide. |
| Review | Check fitness for purpose. | Result and original objective. | Corrections or ready decision. | Material gaps are corrected or accepted explicitly. | Complete. |
| Complete | Verify the request is satisfied. | Reviewed result and original objective. | Completion status with caveats. | Review has passed and success criteria are met, or the result is honestly partial. | Learn or close. |
| Learn | Convert evidence into a future rule. | Meaningful result or failure. | Tested principle and next experiment. | The rule is specific enough to apply later. | Close or frame a new objective. |

## Mandatory Gates

| Gate | Required Before | Pass Condition |
| --- | --- | --- |
| Objective gate | Explore, shape, plan, or action | Objective, constraints, and observable success condition are clear enough for the next move. |
| Direction gate | Shape or consequential commitment | Viable options were compared and a direction was selected or approved. |
| Shape gate | Planning or consequential execution | Scope, workflow, risks, validation, and out-of-scope boundaries are understood. |
| Plan gate | Multi-step execution | Actions, validation, dependencies, risks, and stop conditions are explicit. |
| Evidence gate | Continuing execution | The latest result matches the plan's validation condition or the plan is adapted. |
| Review gate | Completion, approval, handoff, or release | `review-quality` finds no material unresolved gap. |
| Completion gate | Closure | `confirm-completion` verifies the reviewed result against the original objective and constraints. |

## Scale Rules

- **Light path:** use for clear, reversible, low-risk requests. Compress phases that add no decision value, but keep a lightweight review before completion.
- **Standard path:** use framing, a relevant specialist, plan, execution checkpoints, review, and completion check.
- **Full path:** use every phase for complex, consequential, uncertain, or multi-party objectives.

## Backtracking Rules

- If new facts change the objective, return to Frame.
- If an option proves weak before execution, return to Explore.
- If the solution shape changes materially, return to Shape and re-approve it.
- If the plan no longer explains how progress will happen, update the Plan before continuing.
- If execution fails or repeats a failure, enter Root Cause Analysis before changing the intervention.
- If review finds a material gap, correct the work before completion.
