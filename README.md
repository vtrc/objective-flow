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

## Parallel agents

Objective Flow can use multiple agents in parallel when the work splits into independent branches.

Use parallel agents when:

- the options are independent,
- the tasks do not block each other,
- and the extra coordination cost is lower than the time saved.

Do not use parallel agents when:

- one step depends on the result of another,
- the decision is still unclear,
- or the work is small enough that parallelism would add noise.

This keeps the workflow disciplined: parallelism is a deliberate choice, not the default.

## Install

Use the installation path for your agent client:

- **Codex**: install the repository plugin; `.codex-plugin/plugin.json` points to `skills/`.
- **Claude**: install the repository plugin from `.claude-plugin/`; `CLAUDE.md` provides project guidance.
- **OpenCode**: add the Git-backed plugin to `opencode.json`:

  ```json
  {
    "plugin": [
      "objective-flow@git+https://github.com/vtrc/objective-flow.git"
    ]
  }
  ```

- **Other Agent Skills-compatible clients**: copy each folder inside `skills/` so it contains its own `SKILL.md`.

See [`docs/INSTALLATION.md`](docs/INSTALLATION.md) for the complete installation and verification steps.

## Harness support

This repo includes:

- `.codex-plugin/plugin.json` for Codex-style plugin startup,
- `.claude-plugin/` for Claude-style plugin metadata,
- `.opencode/` for OpenCode installation metadata,
- `CLAUDE.md` for Claude Code project guidance,
- `OPENCODE.md` for OpenCode project guidance,
- `AGENTS.md` for project-level agent instructions,
- and the shared `skills/` directory for clients that load Agent Skills directly.

Shared bootstrap and routing details live in:

- `docs/HARNESS-BOOTSTRAP.md`
- `docs/ROUTING-DISCIPLINE.md`
- `docs/PLAN-ARTIFACTS.md`
- `docs/EXAMPLE-PLAN.md`
- `docs/SMOKE-FLOWS.md`

## Compatibility

Objective Flow follows the common Agent Skills shape:

```text
skill-name/
└── SKILL.md
```

The folder name and the `name:` field in each `SKILL.md` are intentionally aligned.

## Inspiration

Objective Flow keeps the same kind of discipline as the source that inspired it, but makes it usable for any objective: work planning, decisions, learning, operations, personal organization, strategy, troubleshooting, and general problem solving.

## License

MIT. See [LICENSE](LICENSE).
