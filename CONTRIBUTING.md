# Contributing

Contributions should preserve the goal of Objective Flow: strict, domain-neutral agent discipline.

## Principles

- Keep skills portable.
- Keep folder names aligned with `name:` fields.
- Avoid domain-specific assumptions unless the skill explicitly needs them.
- Prefer clear gates and handoffs over long explanations.
- Keep review and completion checks mandatory for meaningful work.
- Do not introduce references to software-only workflows unless they are examples.

## Skill Style

Each `SKILL.md` should include:

- `name`
- `description`
- a concise purpose
- hard gates when relevant
- a short process
- clear handoffs

## Validation

Before opening a change, check:

```bash
for d in skills/*; do
  test -f "$d/SKILL.md" || echo "Missing SKILL.md: $d"
done
```

Also search for accidental domain leakage:

```bash
grep -Rni "branch\\|commit\\|pull request\\|deploy\\|test-driven" skills || true
```
