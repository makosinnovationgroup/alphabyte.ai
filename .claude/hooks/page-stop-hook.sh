#!/bin/bash
# .claude/hooks/page-stop-hook.sh
#
# Stop hook for the /page pipeline. Reads pipeline state and forces continuation
# if work remains. Allows stop cleanly when pipeline is inactive or complete.
#
# Receives JSON via stdin from Claude Code:
#   { "session_id": "...", "transcript_path": "...", "stop_hook_active": bool }
#
# Outputs JSON to stdout. To block stop:
#   { "decision": "block", "reason": "..." }
# To allow stop, exit 0 with no output (or empty JSON).

set -euo pipefail

STATE_FILE=".claude/state/page-pipeline.json"

# Read input from stdin (we don't need it, but Claude Code sends it)
INPUT=$(cat)
STOP_HOOK_ACTIVE=$(echo "$INPUT" | jq -r '.stop_hook_active // false')

# Safety: if Claude Code already activated this hook in the current chain,
# allow stop to prevent infinite loops. The user can manually resume by
# calling advance-pipeline.sh.
if [[ "$STOP_HOOK_ACTIVE" == "true" ]]; then
  exit 0
fi

# No state file = no active pipeline
if [[ ! -f "$STATE_FILE" ]]; then
  exit 0
fi

# Pipeline inactive
ACTIVE=$(jq -r '.active // false' "$STATE_FILE")
if [[ "$ACTIVE" != "true" ]]; then
  exit 0
fi

# Pipeline is active. Build a continuation message based on next_step.
LOGICAL_NAME=$(jq -r '.logical_name' "$STATE_FILE")
NEXT_STEP=$(jq -r '.next_step' "$STATE_FILE")
NEXT_INSTRUCTION=$(jq -r '.next_step_instruction' "$STATE_FILE")
PRD_PATH=$(jq -r '.prd_path // ""' "$STATE_FILE")
FIX_PRD_PATH=$(jq -r '.fix_prd_path // ""' "$STATE_FILE")
PASS=$(jq -r '.current_pass' "$STATE_FILE")

REASON="Pipeline incomplete for /page ${LOGICAL_NAME}. You are on step ${NEXT_STEP}. Do not stop.

Next action: ${NEXT_INSTRUCTION}

After completing this step, run the appropriate state-advance command:
  bash .claude/hooks/advance-pipeline.sh <event> [args]

Available events (in order of pipeline progression):
  prd-generated <prd-path>           - after step 6 (PRD created via /feature or /enhancement)
  implement-done                      - after step 7 (/implement completed)
  qa-done <qa-report-path>            - after step 8 (first /qa pass completed)
  fix-prd-generated <fix-prd-path>    - after step 10 (fix PRD created)
  fix-implement-done                  - after step 11 (fix /implement completed)
  qa-pass-2-done <qa-report-path>     - after step 12 (second /qa pass completed)

Current state: pass=${PASS}, prd=${PRD_PATH}, fix_prd=${FIX_PRD_PATH}

If you need to abort, run: bash .claude/hooks/abort-pipeline.sh"

# Emit block decision
jq -n --arg reason "$REASON" '{decision: "block", reason: $reason}'
