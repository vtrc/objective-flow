---
name: explore-options
description: "Trigger: after framing, several credible approaches could work or the direction is not selected. Compare options against value, risk, cost, reversibility, maintenance, dependencies, and success signals before approval."

---

# Explore Options

Turn an Objective Frame into an Options Matrix before committing to a direction.

## Activation Contract

Use this skill when an Objective Frame exists and several credible approaches could satisfy it, or when the direction is not selected, justified, or approved.

Mode routing:

- Trivial mode: skip this skill only when the frame has exactly one obvious, reversible path and no meaningful tradeoff.
- Standard mode: compare two or three credible options before shaping an approach.
- Full mode: require explicit recommendation and approval status before any user-facing, costly, risky, or hard-to-reverse direction.

## When Not To Use

Do not use this skill when:

- no Objective Frame exists or the real problem, constraints, non-goals, or success signals are still unclear; return to `frame-objective`;
- the direction is already selected and the remaining work is scope, flow, risk, or validation detail; use `shape-approach`;
- the work is a tiny reversible action with no meaningful option tradeoff;
- the user explicitly approved a direction and only asks for execution-ready design.

## Required Input

Before this skill can complete, collect or reference:

- Objective Frame;
- decision to make;
- success signals from the frame;
- constraints and non-goals;
- decision owner or approval requirement;
- at least two meaningfully different options, unless stopping because only one viable option exists;
- comparison criteria and rejection conditions.

## Hard Gate

Do not shape, plan, execute, or recommend a consequential commitment until an Options Matrix compares meaningful options against explicit criteria and records recommendation, rejection conditions, approval need, and approval status.

Stop when criteria are missing, options are not meaningfully different, or the recommendation cannot be tied to success signals.

## Criteria

Compare every option against:

- value;
- risk;
- cost;
- reversibility;
- maintenance;
- dependencies;
- timing;
- evidence confidence;
- fit with constraints and non-goals;
- rejection condition.

## Process

1. Start from the Objective Frame.
2. Confirm the decision to make and the criteria that matter most.
3. Ask one blocking question if criteria, constraints, non-goals, or decision owner are ambiguous.
4. Propose two or three genuinely different approaches.
5. For each option, state value, risk, cost, reversibility, maintenance burden, dependencies, evidence needed, and rejection condition.
6. Compare options against the criteria, not personal preference.
7. Reject options that violate constraints, non-goals, or success signals.
8. Recommend one direction and tie the reason to the real problem and success signals.
9. Identify what must be validated before or during shaping.
10. Record approval need and approval status.
11. Hand off to `shape-approach` when a direction is selected, to `choose-option` when the decision owner must choose between close options, or back to `frame-objective` if the frame is weak.

## Required Artifact: Options Matrix

```markdown
# Options Matrix

Objective Frame reference: ...
Decision: ...
Decision owner: ...
Success signals: ...
Criteria: value / risk / cost / reversibility / maintenance / dependencies / timing / evidence confidence / constraint fit

| Option | Value | Risk | Cost | Reversibility | Maintenance | Dependencies | Evidence needed | Reject if |
|---|---|---|---|---|---|---|---|---|
| A: ... | ... | ... | ... | ... | ... | ... | ... | ... |
| B: ... | ... | ... | ... | ... | ... | ... | ... | ... |

Rejected paths: ...
Recommendation: ...
Why this fits the objective: ...
Main tradeoff: ...
Validation before shaping: ...
Approval needed: yes/no
Approval status: approved / not approved / blocked / not needed
Blocking unknowns: ...
Next handoff: shape-approach / choose-option / frame-objective / review-quality / stop
```

## Quality Checklist

- [ ] An Objective Frame is present or the skill returns to `frame-objective`.
- [ ] Options are genuinely different, not wording variations.
- [ ] Criteria include value, risk, cost, reversibility, maintenance, dependencies, evidence confidence, and fit with constraints and non-goals.
- [ ] Every option has a rejection condition.
- [ ] Recommendation is tied to success signals.
- [ ] Rejected paths include reasons.
- [ ] Validation before shaping is explicit.
- [ ] Approval need and approval status are recorded.
- [ ] Next handoff is explicit.

## Stop Rules

- Stop if the Objective Frame is missing or too weak to compare options.
- Stop if criteria are missing or conflict without a decision owner.
- Stop if options are not meaningfully different.
- Stop if all options are weak and the frame needs correction.
- Stop if the preferred option violates constraints or non-goals.
- Stop if evidence confidence is too low to recommend a direction.
- Stop if approval is needed and not granted.

## Handoff

- Normal path: Objective Frame -> Options Matrix -> `shape-approach`.
- Decision path: hand off to `choose-option` when two or more viable options require owner selection.
- Repair path: return to `frame-objective` when the frame lacks success signals, constraints, non-goals, or decision owner.
- Blocker path: ask one blocking question and stop.
- Review path: hand off to `review-quality` when the selected direction is used as evidence for meaningful work.

## Smoke Flow

Input:

> We need artifact files for decisions, plans, audits, and runs. Decide how they should work.

Expected behavior:

1. Require or create a usable Objective Frame before comparing storage approaches.
2. Produce an Options Matrix comparing at least two strategies, such as repository files and response-only records.
3. Recommend a direction based on evidence, lifecycle, reviewability, and constraints.
4. Stop before shaping if storage policy, ownership, or approval status is missing.
5. Hand off to `shape-approach` only after the selected direction is recorded.

Failure looks like:

- presenting one approach as obvious;
- skipping rejection conditions;
- recommending a direction without success-signal fit;
- planning file edits before approval status is recorded.

## Anti-Patterns

- Comparing options after already committing to one.
- Creating fake options that differ only in wording.
- Optimizing for ease while ignoring reversibility, maintenance, or constraints.
- Hiding rejected alternatives instead of recording why they lost.
- Treating “recommended” as “approved”.
- Moving to design with no validation need or rejection condition.

## Acceptance Criteria

This skill is complete only when:

- every standard or full run produces an Options Matrix with all required fields;
- at least two meaningful options are compared, or the artifact records why only one viable option exists and stops for approval;
- every option includes a rejection condition and evidence need;
- recommendation, approval need, and approval status are explicit;
- the smoke flow fails if the skill jumps directly from frame to design without an Options Matrix;
- handoff is one of `shape-approach`, `choose-option`, `frame-objective`, `review-quality`, or `stop`.

## Output Contract

Return the Options Matrix, recommended direction, tradeoffs, rejected paths, evidence needed, approval need and status, stop rule if any, and explicit next handoff.
