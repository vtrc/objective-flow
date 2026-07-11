# Objective Flow implementation checklist

## 1. Automatic startup

- [x] Codex plugin manifest exists.
- [x] Claude project file exists.
- [x] Project-level agent instructions exist.
- [ ] Confirm Codex loads the plugin automatically.
- [ ] Confirm Claude starts with `CLAUDE.md` as expected.
- [ ] Confirm OpenCode loads the repo instructions as expected.

## 2. Subagent-driven development

- [x] Parallel agent dispatch skill exists.
- [x] Subagent coordination skill exists.
- [ ] Test a split objective with two independent branches.
- [ ] Confirm each branch gets a single responsibility.
- [ ] Confirm branch outputs are merged or compared cleanly.

## 3. Git worktrees

- [x] Worktree guidance exists in the coordination skill.
- [x] Worktree rules exist in the lifecycle reference.
- [ ] Test a Git-backed parallel split with separate worktrees.
- [ ] Confirm worktree naming is readable and consistent.
- [ ] Confirm cleanup happens after merge or abandonment.

## 4. Behavior parity

- [x] Objective Flow routes non-trivial work automatically.
- [x] The lifecycle is explicit and strict.
- [x] The parallel path is part of the workflow.
- [ ] Validate that the right skill is chosen in realistic prompts.
- [ ] Tighten any gaps where the agent can still improvise outside the flow.

