---
name: dispatch-parallel-agents
description: Evaluate whether an objective should be split across concurrent agent branches. Use when separate lines of work can move forward without waiting on each other.
---

# Dispatch Parallel Agents

Use this skill when the work can be divided into separate tracks and doing them together is cleaner than doing them one after another.

## Before splitting

Check whether parallel work is actually worth it.

Parallel branches make sense when:

- each branch can finish on its own,
- one branch does not need the output of another to start,
- and the coordination overhead stays small.

Keep it as one branch when:

- the work is still fuzzy,
- one step clearly depends on another,
- or splitting would just create extra chatter.

If Git is available and the split will produce separate lines of work, prefer assigning each line to its own worktree before the subagents start.

## How to split

1. Name the separate tracks.
2. Give each track a clear finish line.
3. Say what must not be duplicated.
4. Define how the results will come back together.

## Guardrails

- Do not split work just to make it look faster.
- Do not branch before the objective and success condition are clear.
- Do not allow parallel results to drift without a merge rule.
- Return to `choose-option` if branches point to different directions.

## Handoff

- Use `explore-options` when the open question is still which direction to take.
- Use `shape-approach` when the direction is known but each branch still needs a shape.
- Use `plan-work` when each branch has several steps.
- Use `review-quality` once the branches finish.
