---
name: capture-learning
description: 'Trigger: capture lesson, learning, retrospective, post-work insight. Turn proven outcomes into reusable guidance.'
---

# Capture Learning

## Activation Contract

Use after completed work, review, incident, experiment, audit, or failed attempt produces evidence that may change future behavior. Use for standard or full workflow learning; for trivial work, capture only if the lesson will prevent repeated cost or risk.

## When Not To Use

Do not use to record ordinary task status, unresolved opinions, TODOs, preferences without evidence, or decisions that still need `choose-option`. Use `diagnose-cause` or `troubleshoot` first when the reason for the outcome is unknown.

## Required Input

- Intended outcome, actual outcome, and date/context.
- Evidence: artifact, run output, review finding, incident trace, user result, or repeated observation.
- Scope where the lesson applies and where it does not.
- Candidate owner, future trigger, and target artifact if an update is needed.

## Hard Gate

Do not capture a lesson unless evidence shows a repeatable pattern, a reusable decision consequence, or a prevention opportunity; otherwise mark it as noise, task status, pending decision, or open investigation.

## Process

1. State the intended outcome, actual outcome, and evidence source.
2. Classify the item as learning, decision, pending task, or unresolved cause.
3. Extract the lesson only if it changes future behavior, guardrails, routing, artifacts, or validation.
4. Define scope, non-scope, future trigger, owner, and how the lesson will be recognized next time.
5. Decide the storage or handoff: docs/spec/plan/audit/run record/skill update/user reply.
6. Record the smallest durable change needed; avoid creating process weight for one-off events.
7. If an artifact must change, hand off with the learning record and acceptance signal.

## Required Artifact

Produce a Learning Capture with:

- lesson
- evidence
- classification: learning | decision | pending task | unresolved cause | noise
- scope and non-scope
- future trigger
- behavior change
- owner or next agent
- target artifact or no-change rationale
- validation or revisit signal

## Quality Checklist

- Evidence is cited and distinguishable from interpretation.
- The lesson says what changes next time, not just what happened.
- Scope prevents overgeneralizing from one context.
- Pending decisions and tasks are not mislabeled as learning.
- The handoff target is explicit when docs, plan, audit, or skill updates are needed.

## Stop Rules

Stop and do not capture when evidence is missing, the item is only a status update, the cause is unknown, the future trigger is unclear, or the proposed lesson would conflict with an approved spec without review.

## Handoff

Hand off to `choose-option` for unresolved choices, `diagnose-cause` or `troubleshoot` for unclear causes, `plan-work` for follow-up tasks, `review-quality` for artifact changes, and `confirm-completion` when learning capture is the final completion check.

## Smoke Flow

Input: "The last audit took longer because smoke evidence was vague; add this as learning."
Expected behavior: require the audit output as evidence, classify it as learning only if it changes future audit evidence requirements, produce a Learning Capture, and hand off to the audit or skill owner.
Failure looks like: recording "be clearer next time" with no evidence, scope, trigger, or target artifact.

## Anti-Patterns

- Treating every observation as a reusable rule.
- Capturing TODOs, guesses, or decisions as lessons.
- Writing broad process mandates from one weak signal.
- Hiding unresolved cause analysis inside a learning note.
- Updating docs or skills without evidence and review path.

## Acceptance Criteria

- Learning Capture includes all required fields.
- Evidence supports the lesson and its scope.
- Non-learning items are routed to the correct owner instead of captured.
- Any docs, plan, audit, or skill handoff names the target artifact and validation signal.
