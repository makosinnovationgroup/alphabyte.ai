#!/bin/bash
# .claude/hooks/abort-pipeline.sh
#
# Manually abort the active /page pipeline. Clears the state so the Stop hook
# stops blocking. Use when you want to bail out of an in-progress pipeline.

set -euo pipefail

STATE_FILE=".claude/state/page-pipeline.json"

if [[ ! -f "$STATE_FILE" ]]; then
  echo "No active pipeline state. Nothing to abort."
  exit 0
fi

LOGICAL_NAME=$(jq -r '.logical_name // "unknown"' "$STATE_FILE")
NEXT_STEP=$(jq -r '.next_step // "n/a"' "$STATE_FILE")

bash .claude/hooks/advance-pipeline.sh abort
echo "Aborted pipeline for $LOGICAL_NAME (was at step $NEXT_STEP)."
echo "State preserved at $STATE_FILE for inspection."
