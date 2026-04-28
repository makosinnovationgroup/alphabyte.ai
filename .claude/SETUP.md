# /page hooks setup

The `/page` command now uses a Stop hook + state machine to enforce pipeline continuation. This guide explains the one-time setup.

## What's in this bundle

```
.claude/
├── commands/
│   └── page.md                    # Updated /page command
├── hooks/
│   ├── page-stop-hook.sh          # Stop hook (blocks turn-end if pipeline active)
│   ├── advance-pipeline.sh        # State mutations (called after each step)
│   └── abort-pipeline.sh          # Manual abort (escape hatch)
├── settings.json                  # Hook registration
└── state/
    ├── .gitkeep                   # Keeps the dir tracked
    └── .gitignore                 # Ignores state files (regenerated per run)
```

## One-time install steps

### 1. Drop the files into your project

Unzip into the project root. Files merge with your existing `.claude/` structure.

### 2. Make hooks executable

```
chmod +x .claude/hooks/*.sh
```

### 3. Confirm prerequisites

```
which jq          # JSON CLI - required by the hook scripts
which pdftoppm    # Already needed by /page
```

If `jq` isn't installed:
- macOS: `brew install jq`
- Ubuntu/Debian: `apt install jq`

### 4. Confirm settings.json registered the hook

If your project already had `.claude/settings.json` with content, MERGE the `hooks` block from the bundle's `settings.json` into yours. If your project didn't have one, the bundle file works as-is.

After merging, restart Claude Code so it picks up the new hook registration.

### 5. Smoke test (recommended)

```
# Manually init a fake pipeline
bash .claude/hooks/advance-pipeline.sh init test-page 1 / new

# Verify state file was written
cat .claude/state/page-pipeline.json

# Abort it
bash .claude/hooks/abort-pipeline.sh

# Confirm active is false
cat .claude/state/page-pipeline.json | jq .active
```

Should print `false`.

## How to use

Just run `/page <logical-name>` like before. Differences:

- After you confirm at step 5, the pipeline runs to completion. The Stop hook prevents the model from stopping mid-pipeline.
- Each step calls `advance-pipeline.sh` to advance state. If the model forgets, the Stop hook will block the stop and tell it what to do next.
- If something fails (build error, dev server down), the pipeline halts cleanly. State stays where it failed; the user fixes the issue and resumes manually.

## How to abort

If you need to bail out of an active pipeline:

```
bash .claude/hooks/abort-pipeline.sh
```

This sets `active: false`. Next stop attempt by the model will be allowed.

## Recovery scenarios

### "The hook keeps blocking me but the work is done"

Check state:

```
cat .claude/state/page-pipeline.json | jq
```

If `active: true` but the work really is done, run the appropriate advance command (or just `bash .claude/hooks/abort-pipeline.sh` if you want to give up on the auto-loop).

### "/implement failed and I want to retry"

Don't advance state. Fix the underlying issue. Re-run `/implement` manually against the PRD path shown in the state file. After it succeeds, advance:

```
bash .claude/hooks/advance-pipeline.sh implement-done
```

The pipeline picks up from step 8.

### "Dev server wasn't running, /qa failed"

State stays at step 8. Start the dev server. Re-run `/qa <logical-name>` manually. After it finishes, advance:

```
bash .claude/hooks/advance-pipeline.sh qa-done <qa-report-path>
```

## State file format

```json
{
  "active": true,
  "logical_name": "service-discovery",
  "pdf_page": 5,
  "route": "/services/discovery",
  "action": "enhance",
  "downstream_command": "/enhancement",
  "next_step": 7,
  "next_step_instruction": "Run /implement on prds/enhance-v6-services-discovery.md...",
  "prd_path": "prds/enhance-v6-services-discovery.md",
  "fix_prd_path": null,
  "pass_1_qa_report": null,
  "pass_2_qa_report": null,
  "pass_1_blockers": null,
  "pass_1_significant": null,
  "pass_2_blockers": null,
  "pass_2_significant": null,
  "current_pass": 1,
  "started_at": "2026-04-28T12:34:56Z"
}
```

State is gitignored — never committed. One file at a time; running `/page` while one is active will overwrite it. (Don't do that.)
