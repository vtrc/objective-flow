---
name: frame-objective
description: "Trigger: objective is vague, overloaded, stuck, proposed-solution-first, or missing audience, constraints, success signals, non-goals, decisions, or the real problem before exploring, shaping, planning, or acting."

---

# Frame Objective

Turn vague intent into an Objective Frame before advice, option comparison, design, planning, or action.

## Activation Contract

Use this skill when the request is unclear, overloaded, proposed-solution-first, stuck, or missing the real problem, audience, constraints, non-goals, success signals, decision owner, or next handoff.

Mode routing:

- Trivial mode: use a compact frame in the response when the work is clear, reversible, low-risk, and needs no option comparison.
- Standard mode: produce an Objective Frame before comparing options or shaping an approach.
- Full mode: produce an Objective Frame before any multi-step, user-facing, costly-to-reverse, or multi-stakeholder work.

## When Not To Use

Do not use this skill when:

- the objective, success signals, constraints, non-goals, and next owner are already explicit in a prior Objective Frame;
- the user asks for direct execution of a tiny, reversible change and the success condition is observable;
- a selected and approved direction already exists and the missing work is scope or design detail; use `shape-approach` instead;
- several credible directions are already framed and the decision is the main issue; use `explore-options` instead.

## Required Input

Before this skill can complete, collect or explicitly mark unknown:

- user request or current situation;
- real problem or pain;
- proposed solution, if any;
- audience, affected people, owner, or decision maker;
- constraints, non-goals, and unacceptable outcomes;
- success signals or evidence of improvement;
- known dependencies, risks, and open decisions.

## Hard Gate

Do not advise, choose, design, plan, or act until an Objective Frame names the real problem, success signals, constraints, non-goals, and next handoff, or explicitly records the missing field as a blocker.

Ask one blocking question and stop when the answer could change the real problem, audience, constraint, success signal, non-goal, decision, or next handoff.

## Process

1. Restate the current situation in one sentence.
2. Separate facts, assumptions, unknowns, preferences, constraints, and already-made decisions.
3. Identify the real problem behind the request, not only the proposed solution.
4. Capture the proposed solution, if the user already has one, and test whether it fits the problem.
5. Identify the audience, users, affected people, owner, or decision maker.
6. Define constraints, non-goals, unacceptable outcomes, and external dependencies.
7. Define success signals and evidence that would show progress or completion.
8. Identify irreversible, expensive, or policy-level decisions that need explicit approval.
9. Classify work size: trivial, standard, or full.
10. Produce the Objective Frame.
11. Hand off to `explore-options` when multiple credible directions remain, to `shape-approach` when one direction is already selected, or to `plan-work` only when the frame and direction are already sufficient.

## Required Artifact: Objective Frame

Produce this artifact for standard or full work:

```markdown
# Objective Frame

Situation: ...
Real problem: ...
Proposed solution: ...
Audience / affected people: ...
Owner / decision maker: ...
Current state: ...
Target outcome: ...
Constraints: ...
Non-goals: ...
Unacceptable outcomes: ...
Success signals: ...
Evidence needed: ...
Decisions already made: ...
Open decisions: ...
Dependencies: ...
Risks: ...
Work size: trivial / standard / full
Blocking unknowns: ...
Next handoff: explore-options / shape-approach / plan-work / review-quality / stop
```

For trivial work, a compact Objective Frame is enough only if it includes real problem, success signal, constraint, and next handoff.

## Quality Checklist

- [ ] The real problem is distinct from the proposed solution.
- [ ] Audience or affected party is named or explicitly not relevant.
- [ ] Constraints, non-goals, and unacceptable outcomes are explicit.
- [ ] Success signals are observable, not just “better” or “done”.
- [ ] Decisions made and open decisions are separated.
- [ ] Blocking unknowns are named instead of hidden.
- [ ] Work size matches risk, reversibility, and number of affected people.
- [ ] The next handoff is explicit and justified.

## Stop Rules

- Stop if the real problem is unclear.
- Stop if the proposed solution may solve the wrong problem.
- Stop if audience, constraints, non-goals, or success signals would change the next phase.
- Stop if an irreversible or expensive decision is hidden or unapproved.
- Stop if non-goals are missing and scope could expand materially.
- Stop if the next handoff is uncertain; ask one blocking question instead of guessing.
- Return to `frame-objective` from later phases when new evidence changes the real problem, audience, success signal, or non-goal.

## Handoff

- Normal path: Objective Frame -> `explore-options` when more than one credible approach exists.
- Direct design path: Objective Frame -> `shape-approach` only when one approach is already selected or approved.
- Planning path: Objective Frame -> `plan-work` only when both the frame and direction are already settled.
- Blocker path: ask one blocking question and stop.
- Review path: hand off to `review-quality` when the frame is used as evidence for meaningful work.

## Smoke Flow

Input:

> Add a new skill that forces agents to always create worktrees.

Expected behavior:

1. Identify “always create worktrees” as a proposed solution, not the real problem.
2. Produce an Objective Frame with open decisions about isolation benefit, overhead, and when worktrees are actually needed.
3. Stop before creating or planning the skill because the real problem and tradeoff are unclear.
4. Hand off to `explore-options` to compare always-worktree, conditional-worktree, and no-worktree approaches.

Failure looks like:

- creating the skill directly;
- accepting the proposed solution as the problem;
- omitting constraints, non-goals, or success signals;
- handing off to planning before the Objective Frame is complete.

## Anti-Patterns

- Treating the user's first proposed solution as the real problem.
- Asking a bundle of questions instead of the one blocking question that changes the next move.
- Framing success as effort, intent, or “looks good” instead of observable evidence.
- Omitting non-goals because they feel negative.
- Hiding unresolved decisions inside assumptions.
- Jumping from vague intent to planning because the task sounds familiar.

## Acceptance Criteria

This skill is complete only when:

- every standard or full run produces an Objective Frame with all required fields;
- any missing required field is listed under `Blocking unknowns` and triggers a stop;
- the next handoff is one of `explore-options`, `shape-approach`, `plan-work`, `review-quality`, or `stop`;
- the smoke flow fails if the proposed solution is accepted without identifying the real problem;
- no consequential advice, design, plan, or action happens before the Objective Frame exists.

## Output Contract

Return the Objective Frame, work size, blocking unknowns, decision status, stop rule if any, and explicit handoff to the next owning skill.
