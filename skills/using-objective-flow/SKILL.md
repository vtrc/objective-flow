---
name: using-objective-flow
description: "Trigger: conversation start, resumed work, routing, or coordination for any non-trivial objective. Auto-enter Objective Flow from the user's first message, select one primary skill, enforce gates, and hand off explicitly."

---

# Using Objective Flow

Use this skill to start Objective Flow automatically instead of improvising. Its job is the first routing decision: decide whether the request is tiny enough to answer directly or meaningful enough to enter the lifecycle, then select exactly one primary skill for the current phase.

## Activation Contract

Activate from the user's first message, resumed context, or coordination request when the work is non-trivial, consequential, ambiguous, multi-step, blocked, creative, user-facing, evidence-sensitive, or likely to require a handoff.

Use the smallest mode that preserves safety:

- **Trivial mode:** tiny, reversible requests with obvious evidence can be answered directly after stating the objective and evidence check.
- **Standard mode:** meaningful work routes to exactly one primary skill and produces the Routing Decision artifact.
- **Full mode:** multi-phase, high-risk, blocked, or resumed work routes into `objective-flow` after the initial Routing Decision.

## When Not To Use

Do not use this skill as the primary executor when another Objective Flow skill has already been selected for the active phase and its required artifact is in progress. Continue that owning skill instead.

Do not use this skill to bypass missing inputs, review, validation, or approval. If the next action is already a clear execution step under an approved plan, hand off to `execute-plan` instead of rerouting repeatedly.

## Required Input

Before routing, collect or infer only what is necessary for the next safe move:

- user's request or resumed objective
- known context, constraints, and affected audience
- visible risk level and reversibility
- current artifact, if one exists
- approval state for consequential direction or scope
- evidence needed to verify the next move

If any missing input would change the selected skill or next action, ask one blocking question and stop.

## Hard Gate

Stop before action unless a Routing Decision can name exactly one primary skill, the required artifact for that skill, the evidence needed, and the next stop gate. If two skills could own the same next step, or if consequential work lacks approval, do not proceed.

## Auto-Routing Process

1. Read the first user message or resumed context as the routing input.
2. Identify the immediate objective, current phase, affected audience, constraints, and risk level.
3. Decide whether the request is trivial, standard, or full mode.
4. Find the missing artifact that blocks progress.
5. Select exactly one primary skill that owns that artifact.
6. State one blocking question only when the answer would change the selected skill, approval state, or next action.
7. Produce the Routing Decision artifact before any meaningful work begins.
8. Hand off explicitly with the next skill, reason, required artifact, evidence, and stop gate.

## Routing Rules

| Condition | Primary skill |
| --- | --- |
| Objective, audience, constraints, success signal, non-goals, or decisions are unclear | `frame-objective` |
| Several credible paths exist or criteria are unclear | `explore-options` |
| Options are known but criteria conflict | `choose-option` |
| Direction exists but scope, flow, validation, or dependencies are not shaped | `shape-approach` |
| Work is multi-step, dependency-heavy, resumable, or consequential | `plan-work` |
| Independent tracks can run in parallel with clear merge boundaries | `dispatch-parallel-agents` |
| Branch outputs need comparison, consolidation, or handoff | `coordinate-subagents` |
| Work needs split, execute, merge, and review as one loop | `subagent-driven-development` |
| Git-backed parallel work needs isolated filesystem contexts | `manage-worktrees` |
| Approved plan or tiny reversible action is ready | `execute-plan` |
| Behavior is wrong, unstable, or unexplained | `troubleshoot` |
| Deliverable, branch, decision, or output needs judgment | `review-quality` |
| Review comments must be triaged and addressed | `receive-review-feedback` |
| Git-backed development branch is ready to close | `finish-development-branch` |
| Reviewed work is ready to close | `confirm-completion` |
| Reusable lesson exists | `capture-learning` |
| Objective Flow skills must be created or revised | `write-skills` |

## Required Artifact: Routing Decision

For standard or full mode, produce a Routing Decision with these fields:

```markdown
Objective: ...
Mode: trivial | standard | full
Current phase: ...
Selected primary skill: ...
Why this skill owns the next move: ...
Required artifact: ...
Evidence needed: ...
Approval state: approved | missing | not needed
Stop gate: ...
Next handoff: ...
```

For trivial mode, include at minimum the objective, evidence check, and closure condition in the response.

## Quality Checklist

- [ ] The user's first meaningful message was routed without waiting for workflow opt-in.
- [ ] Exactly one primary skill is selected.
- [ ] The selected skill matches the current missing artifact.
- [ ] The Routing Decision names the evidence needed and approval state.
- [ ] Any blocking question is limited to one question and changes the next action.
- [ ] The stop gate is observable enough to block progress.
- [ ] The handoff names the next owning skill or the closure path.

## Stop Rules

- Stop if the selected skill is unclear or multiple skills would drive the same phase.
- Stop if missing objective, audience, constraints, success signal, or current artifact would change the route.
- Stop before shaping, planning, execution, or closure when consequential direction lacks approval.
- Stop if evidence contradicts the objective, selected phase, or constraints.
- Stop when review finds a critical gap or ownership is unclear.
- Stop if the Routing Decision cannot name a required artifact, evidence, stop gate, and handoff.
- Never claim completion from effort, intent, partial progress, or an unrouted next step.

## Handoff

- Normal path: hand off to the selected primary skill from the Routing Rules table.
- Full lifecycle path: hand off to `objective-flow` when the work needs phase sequencing beyond the first selected skill.
- Blocker path: hand off to `frame-objective` when missing objective context blocks routing, or ask one blocking question and stop.
- Review path: hand off to `review-quality` before consequential closure.
- Completion path: hand off to `confirm-completion` only after review and evidence are available.

## Smoke Flow

Input:

> "Improve our onboarding emails; I have a few ideas but no clear direction."

Expected behavior:

- Select standard or full mode, not direct execution.
- Choose `frame-objective` if audience, success signals, and constraints are unclear; choose `explore-options` only if those inputs are already clear and several paths need comparison.
- Produce a Routing Decision naming the required artifact and evidence needed.
- Stop if the agent cannot choose between `frame-objective` and `explore-options` without one blocking question.

Expected artifact: Routing Decision.

Expected handoff: `frame-objective` or one blocking question, not execution.

Failure looks like: writing the emails immediately, selecting multiple primary skills, skipping approval state, or saying only "use Objective Flow" without an artifact.

## Anti-Patterns

- Asking the user whether to use Objective Flow for meaningful work.
- Selecting several primary skills at once.
- Treating routing as a prose explanation instead of a concrete artifact.
- Executing consequential work before approval, evidence, or the owning skill is clear.
- Rerouting repeatedly when a phase skill already owns the active artifact.
- Claiming completion without review, validation, or a named closure path.

## Acceptance Criteria

This skill is complete only when all are true:

- Every meaningful request yields exactly one selected primary skill or one blocking question.
- The Routing Decision includes all required fields for standard and full mode.
- The hard gate blocks ambiguous ownership and missing approval.
- The smoke flow can fail when routing is skipped, multi-skill ownership is claimed, or the artifact is missing.
- The handoff names the next owning skill, blocker path, review path, or completion path.

## Output Contract

Return the Routing Decision for standard or full mode. For trivial mode, return the direct answer plus objective, evidence check, and closure condition.
