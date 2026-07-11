---
name: using-objective-flow
description: Establish the Objective Flow discipline at the start of a conversation or objective. Use when beginning, resuming, routing, or coordinating any non-trivial objective so the agent selects the right skill, obeys gates, and does not skip review or completion checks.
---

# Using Objective Flow

Use this skill to keep the agent inside the method instead of improvising.

## Required Startup

1. Identify the user's immediate objective and current phase.
2. If the request is non-trivial, consequential, creative, multi-step, blocked, or ambiguous, invoke `objective-flow` immediately. Do not ask the user whether to use the workflow; use it.
3. If the request is simple, answer directly but still check that the answer satisfies the request before closing.
4. Announce the selected skill only when it changes the action being taken or pauses work.

## Routing Rules

- Classify the request with one primary next skill before taking action.
- Prefer the first matching specialized skill instead of stacking several at once.
- If the objective could fit multiple routing rules, choose the narrowest one that still preserves correctness.
- If two skills seem equally plausible, stop and resolve the ambiguity before continuing.
- Use `frame-objective` before advice, planning, or action when the objective or success condition is unclear.
- Use `explore-options` before choosing a path when several paths could work.
- Use `shape-approach` before planning or execution when a direction has been chosen but the shape is not agreed.
- Use `plan-work` before executing multi-step or consequential work.
- Use `dispatch-parallel-agents` when the objective splits cleanly into separate tracks that can move forward at the same time.
- Use `coordinate-subagents` when parallel tracks need a managed handoff, merge, or review step.
- Use `subagent-driven-development` when the work needs a full split-execute-merge-review loop.
- Use `manage-worktrees` when parallel Git branches need isolated filesystem contexts.
- Default to the smallest skill that preserves correctness; do not escalate to parallelism unless the split is justified.
- Use `execute-plan` only when there is an approved plan or the work is clearly small and reversible.
- Use `review-quality` before approval, handoff, release, or completion of meaningful work.
- Use `confirm-completion` only after review passes.
- Use `capture-learning` when the result creates a reusable lesson.
- Do not continue into a second skill until the first primary skill has produced its required output.

## Routing Priority

When several paths seem possible, prefer this order:

1. `frame-objective`
2. `explore-options`
3. `choose-option`
4. `shape-approach`
5. `plan-work`
6. `dispatch-parallel-agents`
7. `coordinate-subagents`
8. `subagent-driven-development`
9. `manage-worktrees`
10. `execute-plan`
11. `review-quality`
12. `confirm-completion`
13. `capture-learning`

## Hard Gates

- Stop if a missing answer would materially change the next action; ask one question.
- Stop if the user has not approved a consequential direction or approach shape.
- Stop if more than one primary skill would be active at the same time.
- Stop and ask before splitting into parallel agents if a single branch would still keep the work clear enough.
- Stop if execution evidence contradicts the plan, objective, or constraints.
- Stop if review finds a material gap; correct or explicitly transfer the gap before completion.
- Never claim completion from effort, intent, or partial progress.

## Scale

Use the smallest path that preserves correctness. A small task may compress phases into a few sentences, but it may not skip evidence, review, or completion checking.
