# Example plan artifact

## Objective

Make Objective Flow behave like a strict, reusable workflow across supported harnesses without turning the repo into duplicated instructions.

## Success criteria

- The repo has a shared bootstrap layer.
- Each supported harness has its own adapter or entrypoint.
- The planning flow creates a living artifact and updates it as work progresses.
- Parallel work is only used when the split is justified.
- The worktree path is used only when Git isolation helps.

## Scope

- Harness bootstrap files
- Routing discipline
- Subagent orchestration
- Worktree management
- Plan artifact creation and progress tracking

## Non-goals

- Support for every possible agent client
- Copying wording from another project literally
- Overloading every file with the same instructions

## Phases

- [x] Define the shared workflow
  - Purpose: establish a single Objective Flow core
  - Prerequisite state: none
  - Steps: define lifecycle, routing, and bootstrap docs
  - Output: core docs and skills
  - Validation: core docs exist and are coherent
  - Risks: duplicated instructions can drift
  - Stop condition: if the core cannot be expressed once, stop and simplify

- [x] Add harness adapters
  - Purpose: make the workflow available in Codex, Claude, and OpenCode
  - Prerequisite state: shared bootstrap and routing docs exist
  - Steps: create adapter files for each supported harness
  - Output: adapter files for each supported harness
  - Validation: each harness has a clear entrypoint
  - Risks: too many client-specific variants
  - Stop condition: if an adapter cannot be justified, do not add it

- [x] Add parallel branch orchestration
  - Purpose: support split work when it is truly independent
  - Prerequisite state: a split objective exists
  - Steps: define parallel, coordination, and subagent skills
  - Output: orchestration skills
  - Validation: branch rules and merge rules are explicit
  - Risks: parallelism without need adds noise
  - Stop condition: if the split is not justified, stay single-track

- [x] Add worktree handling
  - Purpose: isolate Git-backed parallel branches when needed
  - Prerequisite state: Git-backed split objective and merge path
  - Steps: define worktree rules and lifecycle
  - Output: worktree skill and rules
  - Validation: the split path mentions when to create and remove worktrees
  - Risks: worktree overhead can exceed the benefit
  - Stop condition: if the branches do not need isolation, do not use a worktree

- [x] Add plan artifacts and live progress tracking
  - Purpose: make planning and execution visible as work progresses
  - Prerequisite state: a meaningful multi-step objective
  - Steps: create a plan artifact and keep it updated
  - Output: a living plan with checkboxes, checkpoints, and current status
  - Validation: the artifact stays understandable after progress updates
  - Risks: stale status or duplicated notes
  - Stop condition: if the artifact stops reflecting reality, update it before continuing

- [ ] Validate the behavior in real harnesses
  - Purpose: confirm the workflow actually starts and routes as intended
  - Prerequisite state: the files are in place
  - Steps: run smoke flows in the target client
  - Output: observed behavior in Codex, Claude, and OpenCode
  - Validation: smoke-flow checks pass in the target client
  - Risks: harness-specific quirks
  - Stop condition: if an entrypoint is unclear, return to bootstrap design

## Dependencies

- Shared docs must stay in sync with client-specific files.
- The plan artifact should be updated after meaningful progress.
- Review must happen before completion.

## Risks

- Too many repeated instructions can make the repo harder to maintain.
- Adding more clients before the current ones are stable could create noise.
- Planning without updating the artifact defeats the purpose of the tracking layer.

## Stop conditions

- If a harness entrypoint is unclear, return to bootstrap design.
- If two skills appear equally valid, resolve routing before continuing.
- If the split is not justified, do not create parallel branches or worktrees.

## Current status

The core workflow, bootstrap layer, routing discipline, orchestration skills, worktree handling, and planning artifacts are in place.

## Open decisions

- Which additional harnesses, if any, should be supported next.
- Whether to add a separate machine-readable install manifest for every adapter folder.

