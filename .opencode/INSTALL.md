# OpenCode install

Objective Flow is installed in OpenCode as a Git-backed plugin.

## Install

Add this entry to the consuming project's `opencode.json`:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "plugin": [
    "objective-flow@git+https://github.com/vtrc/objective-flow.git"
  ]
}
```

Restart OpenCode after changing the configuration. The plugin at
`.opencode/plugins/objective-flow.js` registers the canonical `skills/`
directory and injects `using-objective-flow` into the first user message.

## Verify

From the repository root:

```bash
node --check .opencode/plugins/objective-flow.js
test -f skills/using-objective-flow/SKILL.md
```

The plugin declaration acquires the repository and loads the runtime plugin;
it is not necessary to copy the skills manually.
