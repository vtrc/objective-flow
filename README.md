# Objective Flow Skills

Objective Flow is a strict, domain-neutral skill system for guiding agents through any non-trivial objective: framing, exploration, shaping, planning, execution, review, completion, and learning.

It is inspired by [Superpowers](https://github.com/obra/superpowers), but generalized beyond software development. Instead of assuming code, tests, branches, commits, or pull requests, Objective Flow uses domain-neutral concepts: objectives, constraints, evidence, gates, review, handoff, and completion checks.

## What This Provides

- A startup/router skill: `using-objective-flow`
- A lifecycle router: `objective-flow`
- Ten focused process skills for framing, options, planning, execution, review, completion, learning, diagnosis, and decisions
- Strict gates so agents do not skip clarification, planning, review, or completion checks
- Portable Agent Skills format: each skill is a folder containing a `SKILL.md`

## Skills

| Skill | Purpose |
| --- | --- |
| `using-objective-flow` | Establishes the discipline and routes the objective into the right skill. |
| `objective-flow` | Coordinates the lifecycle from framing through learning. |
| `frame-objective` | Clarifies vague, overloaded, or poorly scoped objectives. |
| `explore-options` | Compares viable approaches before choosing a direction. |
| `shape-approach` | Turns an approved direction into an execution-ready approach. |
| `plan-work` | Converts the shaped approach into an executable plan. |
| `execute-plan` | Executes one validated action at a time with evidence and adaptation. |
| `review-quality` | Reviews plans, decisions, deliverables, and handoffs before closure. |
| `confirm-completion` | Verifies that the original objective has truly been satisfied. |
| `capture-learning` | Turns results into reusable lessons. |
| `diagnose-cause` | Traces failures or recurring problems to evidence-supported causes. |
| `choose-option` | Makes defensible decisions under tradeoffs and uncertainty. |

## Lifecycle

```text
frame -> explore -> shape -> plan -> execute -> review -> complete -> learn
```

The flow can be compressed for simple, reversible work, but review and completion checks should not disappear. Compression means doing a phase briefly, not pretending the phase does not exist.

## Install

Copy the folders inside `skills/` into the skill location used by your agent client.

Common locations:

- OpenCode project skills: `.agents/skills/`
- OpenCode global skills: `~/.config/opencode/skills/`
- Other Agent Skills-compatible clients: copy each folder so it contains its own `SKILL.md`

Example:

```bash
mkdir -p .agents/skills
cp -R skills/* .agents/skills/
```

## Compatibility

Objective Flow follows the common Agent Skills shape:

```text
skill-name/
└── SKILL.md
```

The folder name and the `name:` field in each `SKILL.md` are intentionally aligned.

## Inspiration

Objective Flow is inspired by Superpowers' disciplined agent workflow: explicit skill routing, staged thinking, planning before action, review gates, and completion checks.

The difference is scope. Superpowers is optimized for software development workflows. Objective Flow keeps the same kind of discipline but makes it usable for any objective: work planning, decisions, learning, operations, personal organization, strategy, troubleshooting, and general problem solving.

## License

MIT. See [LICENSE](LICENSE).
