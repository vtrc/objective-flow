---
name: shape-approach
description: "Trigger: an approach is selected or approved but scope, non-scope, flow, risks, validation, dependencies, irreversible decisions, or chunk approval are not explicit before planning or execution."

---

# Shape Approach

Turn a selected direction into a Design Artifact before planning or execution.

## Activation Contract

Use this skill after an Objective Frame and selected direction exist, and before planning or execution when the work needs explicit scope, non-scope, workflow, validation, dependencies, risks, irreversible decisions, or approval boundaries.

Mode routing:

- Trivial mode: use a compact design note only when the action is clear, reversible, and directly executable.
- Standard mode: produce a Design Artifact before planning.
- Full mode: require approval status for scope, risk, validation, dependencies, and irreversible decisions before planning multi-step, user-facing, or costly-to-reverse work.

## When Not To Use

Do not use this skill when:

- the Objective Frame is missing or the real problem is still unclear; return to `frame-objective`;
- no direction has been selected and multiple credible paths remain; use `explore-options`;
- the request is a tiny reversible action with clear scope, evidence, and no design tradeoff;
- a current Design Artifact already covers scope, non-scope, flow, risks, validation, dependencies, and approval status.

## Required Input

Before this skill can complete, collect or reference:

- Objective Frame;
- selected direction or Options Matrix recommendation;
- decision owner and approval status;
- scope and non-scope boundaries;
- success signals and validation evidence;
- dependencies, assumptions, risks, and owners;
- irreversible or expensive-to-reverse decisions;
- chunk approval need for large or risky work.

## Hard Gate

Do not plan or execute consequential work until a Design Artifact records scope, non-scope, flow, risks, validation, dependencies, irreversible decisions, and approval status.

Stop when any missing design field could change execution, validation, ownership, or approval boundaries.

## Process

1. Confirm the Objective Frame, selected direction, decision owner, constraints, non-goals, and success signals.
2. Verify the selected direction is approved or record that approval is not needed.
3. Define scope and non-scope in concrete terms.
4. Describe the flow: ordered steps, user or operator journey, handoffs, decisions, and dependencies.
5. Identify dependencies, assumptions, owners, risks, mitigations, and fallback paths.
6. Identify irreversible or expensive-to-reverse decisions and require explicit approval for them.
7. Define validation: what evidence proves the design works and what evidence rejects it.
8. Split the approach into approval chunks when the work is large, risky, or stakeholder-facing.
9. Produce the Design Artifact.
10. Ask for approval when scope, flow, risk, chunk boundary, or irreversible decisions are material.
11. Hand off to `plan-work`, to `execute-plan` only for tiny reversible actions, or back to `explore-options` if the design exposes a weak direction.

## Required Artifact: Design Artifact

```markdown
# Design Artifact

Objective Frame reference: ...
Options Matrix reference: ...
Selected direction: ...
Decision owner: ...
Approval status: approved / not approved / blocked / not needed
Audience / affected people: ...
Scope: ...
Non-scope: ...
Workflow: ...
Dependencies: ...
Assumptions: ...
Risks and mitigations: ...
Fallback path: ...
Validation plan: ...
Evidence that rejects this design: ...
Irreversible decisions: ...
Approval chunks: ...
Open questions: ...
Blocking unknowns: ...
Next handoff: plan-work / execute-plan / explore-options / frame-objective / review-quality / stop
```

## Quality Checklist

- [ ] Objective Frame and selected direction are referenced.
- [ ] Scope and non-scope are explicit.
- [ ] Workflow includes ordered steps, decisions, handoffs, and dependencies.
- [ ] Risks have mitigations, fallback paths, or stop rules.
- [ ] Validation is observable and tied to success signals.
- [ ] Dependencies, assumptions, and owners are visible.
- [ ] Irreversible decisions are named and approved or blocked.
- [ ] Chunk approval is defined for large or risky work.
- [ ] Next handoff is explicit and justified.

## Stop Rules

- Stop if the Objective Frame is missing or contradicted by the selected direction.
- Stop if no direction has been selected or approval status is missing for consequential work.
- Stop if scope or non-scope is ambiguous.
- Stop if validation cannot prove the success signals.
- Stop if a dependency, owner, or approval requirement is missing.
- Stop if an irreversible decision lacks approval.
- Stop if a large chunk needs approval before planning.
- Return to `explore-options` if shaping reveals the selected direction is weak or violates constraints.

## Handoff

- Normal path: Objective Frame -> Options Matrix -> Design Artifact -> `plan-work`.
- Tiny action path: hand off to `execute-plan` only when the Design Artifact shows the action is clear, reversible, and directly validated.
- Repair path: return to `explore-options` when the direction is weak; return to `frame-objective` when the real problem or success signals changed.
- Blocker path: ask one blocking question and stop.
- Review path: hand off to `review-quality` when the Design Artifact is used as evidence for meaningful work.

## Smoke Flow

Input:

> We selected repository files for artifacts, but we have not decided lifecycle, validation, or ownership.

Expected behavior:

1. Reference the Objective Frame and selected direction.
2. Produce a Design Artifact with scope, non-scope, workflow, dependencies, risks, validation, irreversible decisions, and approval chunks.
3. Stop before planning because lifecycle, validation, and ownership are missing design fields.
4. Hand off to `plan-work` only after those blockers are resolved and approval status is recorded.

Failure looks like:

- planning file changes immediately;
- treating selected direction as sufficient design;
- omitting rejection evidence or dependencies;
- handing off to execution while approval status is blocked or unknown.

## Anti-Patterns

- Treating a recommendation as an execution-ready design.
- Writing scope without non-scope.
- Listing risks without mitigation, fallback, or stop behavior.
- Defining validation that does not prove the success signals.
- Burying irreversible decisions inside implementation details.
- Planning work while dependencies, owners, or approval chunks are unknown.

## Acceptance Criteria

This skill is complete only when:

- every standard or full run produces a Design Artifact with all required fields;
- scope, non-scope, workflow, validation, dependencies, risks, and irreversible decisions are explicit;
- approval status is recorded before planning;
- blockers are listed when any required field is missing;
- the smoke flow fails if the skill moves to planning without lifecycle, validation, or ownership decisions;
- handoff is one of `plan-work`, `execute-plan`, `explore-options`, `frame-objective`, `review-quality`, or `stop`.

## Output Contract

Return the Design Artifact, approval state, unresolved decisions, required validation, dependency status, stop rule if any, and explicit handoff.
