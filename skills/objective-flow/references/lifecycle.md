# Objective Flow Lifecycle

This workflow is strict by default and compressed only when the task is clear, low-risk, and reversible. Compression means doing a phase briefly, not pretending the phase does not exist.

## Phases

| Phase | Purpose | Required Input | Output | Gate | Next Phase |
| --- | --- | --- | --- | --- | --- |
| Frame | Define the real objective and success condition. | Request and available context. | Problem frame. | The next action is clear. | Explore, decide, diagnose, plan, or answer. |
| Explore | Compare viable directions. | Problem frame. | Options and selected direction. | User approves the direction when the work is consequential. | Shape. |
| Shape | Define the solution before doing it. | Selected direction. | Approach shape with scope, workflow, risks, and validation. | User approves the shape for multi-step or consequential work. | Plan. |
| Parallel Dispatch | Split independent branches across agents when it helps. | Clear objective and independent branches. | Parallel branch assignments and merge path. | Branches are independent and a merge path exists. | Explore, shape, plan, or execute per branch. |
| Subagent Coordination | Manage multiple agents, worktrees, and merge/review steps. | Parallel branches and merge criteria. | Coordinated branch outputs and merged outcome. | Each branch has a clear responsibility and merge plan. | Review. |
| Subagent-Driven Development | Run the full split-execute-merge-review loop. | Split objective with branch plan. | Consolidated multi-branch result. | Branch outputs are collected and reconciled. | Review. |
| Worktree Management | Create and remove isolated Git worktree spaces for parallel branches. | Git-backed split objective. | Separate filesystem context per branch. | Each branch has a worktree only when isolation helps. | Coordination or review. |
| Troubleshoot | Investigate a failure with controlled reproduction and one hypothesis at a time. | Reproducible symptom and observations. | Confirmed cause and verified fix. | Each test narrows the cause or disproves a hypothesis. | Execute or review. |
| Plan | Define how progress will happen. | Approved approach shape. | Phased plan with validation and stop conditions. | The immediate next action is executable. | Execute. |
| Execute | Perform the plan with evidence and adaptation. | Plan. | Checkpoints and result. | Each phase meets its validation condition. | Review, diagnose, or decide. |
| Review | Check fitness for purpose. | Result and original objective. | Corrections or ready decision. | Material gaps are corrected or accepted explicitly. | Feedback, finish, or complete. |
| Receive Review Feedback | Triage and address review comments. | Review comments and original objective. | Accepted, disputed, deferred, and validated feedback groups. | Feedback decisions are explicit and revalidated. | Review or complete. |
| Finish Development Branch | Resolve branch outcome and cleanup. | Git-backed branch result and validation evidence. | Merge, PR, keep, split, or discard decision with cleanup state. | Branch state, review status, and cleanup are explicit. | Complete. |
| Complete | Verify the request is satisfied. | Reviewed result and original objective. | Completion status with caveats. | Review has passed and success criteria are met, or the result is honestly partial. | Learn or close. |
| Learn | Convert evidence into a future rule. | Meaningful result or failure. | Tested principle and next experiment. | The rule is specific enough to apply later. | Close or frame a new objective. |

## Mandatory Gates

| Gate | Required Before | Pass Condition |
| --- | --- | --- |
| Objective gate | Explore, shape, plan, or action | Objective, constraints, and observable success condition are clear enough for the next move. |
| Direction gate | Shape or consequential commitment | Viable options were compared and a direction was selected or approved. |
| Shape gate | Planning or consequential execution | Scope, workflow, risks, validation, and out-of-scope boundaries are understood. |
| Parallel gate | Splitting work across agents | Branches are independent, coordination cost is justified, and a merge path is explicit. |
| Coordination gate | Managing multiple agents on one objective | Each subagent has a clear track, no duplicate work, and a reviewable merge path. |
| Plan gate | Multi-step execution | Actions, validation, dependencies, risks, and stop conditions are explicit. |
| Evidence gate | Continuing execution | The latest result matches the plan's validation condition or the plan is adapted. |
| Feedback gate | Applying review feedback | Feedback is grouped, accepted/disputed/deferred, and checked against the original objective. |
| Branch finish gate | Merging, PR, discard, or branch closure | Branch scope, validation, review status, and cleanup decision are explicit. |
| Review gate | Completion, approval, handoff, or release | `review-quality` finds no material unresolved gap. |
| Completion gate | Closure | `confirm-completion` verifies the reviewed result against the original objective and constraints. |

## Scale Rules

- **Light path:** use for clear, reversible, low-risk requests. Compress phases that add no decision value, but keep a lightweight review before completion.
- **Standard path:** use framing, a relevant specialist, plan, execution checkpoints, review, and completion check.
- **Full path:** use every phase for complex, consequential, uncertain, or multi-party objectives.
- **Parallel path:** use `dispatch-parallel-agents` when the objective splits into independent branches and parallel work lowers the overall cost.
- **Coordination path:** use `coordinate-subagents` when multiple branches need managed worktree separation, merging, or a single reviewed outcome.
- **Orchestration path:** use `subagent-driven-development` when the objective needs the full split-execute-merge-review loop.
- **Worktree path:** use `manage-worktrees` when Git-backed parallel branches need isolated filesystem contexts.
- **Debugging path:** use `troubleshoot` when a failure needs controlled reproduction and hypothesis-driven testing.
- **Feedback path:** use `receive-review-feedback` when review comments need triage, response, and revalidation.
- **Branch finishing path:** use `finish-development-branch` before closing Git-backed branch work.
- **Skill authoring path:** use `write-skills` when Objective Flow skills are created or revised.

## Worktree Rules

- Prefer a worktree for each parallel Git branch.
- Keep the worktree name tied to the branch purpose.
- Remove the worktree when the branch is merged or no longer needed.
- Do not share one worktree across branches that may edit the same files.
- Do not use worktrees when the split is too small or the branches do not need isolation.

## Backtracking Rules

- If new facts change the objective, return to Frame.
- If an option proves weak before execution, return to Explore.
- If the solution shape changes materially, return to Shape and re-approve it.
- If the plan no longer explains how progress will happen, update the Plan before continuing.
- If execution fails or repeats a failure, enter Troubleshoot before changing the intervention.
- If review finds a material gap, correct the work before completion.

## Enforcement Rules

- Do not widen into parallel work unless the split is justified.
- Do not allow two primary skills to run the same phase.
- If two skills seem equally valid, resolve the ambiguity before moving on.
- Do not chain into a second skill family before the first family has produced its output.
- Do not change code blindly when the symptom can be reproduced and tested.
- Do not add worktrees unless isolation is genuinely useful.
- Do not bypass the lifecycle just because the task feels familiar.
- Do not apply feedback without triage.
- Do not close a branch without validation, review status, and cleanup state.
- Do not close a task without the matching review and completion checks.
