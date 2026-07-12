# Installation

Objective Flow is distributed as portable Agent Skills plus harness-specific
integration files.

## OpenCode

Add the Git-backed plugin to the consuming project's `opencode.json`:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "plugin": [
    "objective-flow@git+https://github.com/vtrc/objective-flow.git"
  ]
}
```

After restarting OpenCode, `.opencode/plugins/objective-flow.js` registers
`skills/` and injects the startup bootstrap. No manual copy is required.

The OpenCode integration intentionally contains no duplicated skills tree:

```text
.opencode/plugins/objective-flow.js
```

## Other clients

Copy each folder inside `skills/` into the client's skills directory. Each
folder must keep its top-level `SKILL.md` file.

## Verify

```bash
node --check .opencode/plugins/objective-flow.js
for d in skills/*; do
  name="$(basename "$d")"
  grep -q "name: $name" "$d/SKILL.md" || echo "Mismatch: $name"
done
```
