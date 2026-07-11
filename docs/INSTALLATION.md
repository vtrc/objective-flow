# Installation

Objective Flow is distributed as portable Agent Skills folders.

## OpenCode Project Install

```bash
mkdir -p .agents/skills
cp -R skills/* .agents/skills/
```

## OpenCode Global Install

```bash
mkdir -p ~/.config/opencode/skills
cp -R skills/* ~/.config/opencode/skills/
```

## Other Agent Skills Clients

Copy each folder inside `skills/` into the client's skills directory. Each folder must keep its `SKILL.md` file at the top level.

Expected shape:

```text
skills-directory/
├── using-objective-flow/
│   └── SKILL.md
├── objective-flow/
│   └── SKILL.md
└── ...
```

## Verify

Check that each folder has a matching `name:` field:

```bash
for d in skills/*; do
  name="$(basename "$d")"
  grep -q "name: $name" "$d/SKILL.md" || echo "Mismatch: $name"
done
```
