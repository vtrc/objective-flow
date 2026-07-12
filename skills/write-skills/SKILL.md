---
name: write-skills
description: 'Trigger: write skill, revise SKILL.md, improve trigger, hard gate, process, handoff, smoke flow.'
---

# Write Skills

## Activation Contract

Use when creating, revising, auditing, or rejecting Objective Flow runtime skills, frontmatter, routing triggers, hard gates, output artifacts, handoffs, smoke flows, or skill quality reports.

## When Not To Use

Do not use for one-off instructions, ordinary documentation, project plans, or behavior already owned by an existing skill unless the work is to revise that skill.

## Required Input

- Skill name, folder path, purpose, and whether this is create or modify.
- Trigger language and routing boundary with nearby skills.
- Required artifact or reason the skill should be rejected.
- Expected hard gate, process, handoff, and smoke scenario.
- Applicable quality standard and files allowed for editing.

## Hard Gate

Do not create or approve a skill unless frontmatter parses, the description is one quoted line, the trigger is routable, the hard gate can block unsafe progress, the process is executable, the output artifact is reusable, and the smoke flow can fail.

## Process

1. Confirm the behavior is reusable and belongs in a skill rather than docs, a plan, or an existing skill.
2. Check routing conflicts with existing skills and define priority or handoff.
3. Validate frontmatter: YAML-safe, `name` matches folder, description is a quoted one-line trigger, license and metadata are present.
4. Write or revise required sections: Activation Contract, When Not To Use, Required Input, Hard Gate, Process, Required Artifact, Quality Checklist, Stop Rules, Handoff, Smoke Flow, Anti-Patterns, Acceptance Criteria.
5. Keep runtime language generic and operational; do not copy literal text from external projects.
6. Define a Skill Quality Report with parse result, section coverage, routing check, artifact check, smoke result, and risks.
7. Parse the file and run the smoke flow before handoff.

## Required Artifact

Produce a Skill Quality Report with:

- target skill and path
- create/modify/reject decision
- frontmatter parse result
- trigger and routing conflict check
- required section coverage
- hard gate pass/fail
- required artifact fields
- handoff path
- smoke flow result
- anti-pattern coverage
- acceptance decision
- risks or follow-ups

## Quality Checklist

- Frontmatter is valid YAML and description is one physical quoted line.
- Trigger can select the skill without competing ambiguously.
- Hard gate has observable pass/fail behavior.
- Process gives ordered runtime actions, not tutorial prose.
- Required Artifact preserves evidence for the next agent.
- Smoke Flow includes input, expected behavior, artifact, gate/handoff, and failure mode.

## Stop Rules

Stop when the behavior is vague, duplicates another skill, lacks a required artifact, has invalid frontmatter, cannot produce a failing smoke flow, conflicts with routing, exceeds ownership, or would require prohibited runtime terminology.

## Handoff

Hand off to `review-quality` for independent review, `plan-work` when multiple skill edits need sequencing, `capture-learning` when a reusable authoring lesson emerges, and `confirm-completion` only after parse, section, routing, and smoke checks pass.

## Smoke Flow

Input: "Add a skill called `be-careful` that tells agents to be careful before finishing."
Expected behavior: reject creating a vague overlapping skill, point to the existing completion/review owner, and produce a Skill Quality Report with routing conflict and failed artifact/smoke checks.
Failure looks like: creating a new vague skill with no hard gate, artifact, routing boundary, or parse validation.

## Anti-Patterns

- Creating skills for slogans or reminders.
- Copying external skill text instead of expressing Objective Flow behavior.
- Adding headings without enforceable behavior.
- Hiding routing conflicts by broad trigger wording.
- Marking a skill complete without parse and smoke evidence.

## Acceptance Criteria

- Skill Quality Report includes all required fields.
- YAML frontmatter parses and folder/name/description rules pass.
- Every required section is present with operational behavior.
- Routing conflicts are resolved or block approval.
- Smoke flow passes for valid work and fails for weak/overlapping skill requests.
