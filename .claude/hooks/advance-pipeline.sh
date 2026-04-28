#!/bin/bash
# .claude/hooks/advance-pipeline.sh
#
# Mutates the /page pipeline state as steps complete. Called by the /page
# command (or the model) after each step finishes. The Stop hook reads the
# state file to decide whether to block.
#
# Usage:
#   advance-pipeline.sh init <logical-name> <pdf-page> <route> <action>
#   advance-pipeline.sh prd-generated <prd-path>
#   advance-pipeline.sh implement-done
#   advance-pipeline.sh qa-done <qa-report-path>
#   advance-pipeline.sh fix-prd-generated <fix-prd-path>
#   advance-pipeline.sh fix-implement-done
#   advance-pipeline.sh qa-pass-2-done <qa-report-path>
#   advance-pipeline.sh complete
#   advance-pipeline.sh abort

set -euo pipefail

STATE_DIR=".claude/state"
STATE_FILE="$STATE_DIR/page-pipeline.json"
mkdir -p "$STATE_DIR"

EVENT="${1:-}"
if [[ -z "$EVENT" ]]; then
  echo "Usage: advance-pipeline.sh <event> [args]" >&2
  exit 1
fi

# Helper to update the state file
update_state() {
  local tmp
  tmp=$(mktemp)
  jq "$1" "$STATE_FILE" > "$tmp" && mv "$tmp" "$STATE_FILE"
}

# Helper to count Blockers and Significant findings from a QA report.
# Returns "blockers,significant" on stdout.
count_findings() {
  local report="$1"
  if [[ ! -f "$report" ]]; then
    echo "0,0"
    return
  fi
  local blockers significant
  blockers=$(grep -E "^- Blockers:" "$report" | head -1 | grep -oE "[0-9]+" | head -1 || echo "0")
  significant=$(grep -E "^- Significant:" "$report" | head -1 | grep -oE "[0-9]+" | head -1 || echo "0")
  echo "${blockers:-0},${significant:-0}"
}

case "$EVENT" in
  init)
    LOGICAL_NAME="${2:-}"
    PDF_PAGE="${3:-}"
    ROUTE="${4:-}"
    ACTION="${5:-}"
    if [[ -z "$LOGICAL_NAME" || -z "$PDF_PAGE" || -z "$ROUTE" || -z "$ACTION" ]]; then
      echo "Usage: advance-pipeline.sh init <logical-name> <pdf-page> <route> <action>" >&2
      exit 1
    fi

    DOWNSTREAM_CMD="/enhancement"
    if [[ "$ACTION" == "new" ]]; then
      DOWNSTREAM_CMD="/feature"
    fi

    cat > "$STATE_FILE" <<EOF
{
  "active": true,
  "logical_name": "$LOGICAL_NAME",
  "pdf_page": $PDF_PAGE,
  "route": "$ROUTE",
  "action": "$ACTION",
  "downstream_command": "$DOWNSTREAM_CMD",
  "next_step": 6,
  "next_step_instruction": "Generate the PRD using $DOWNSTREAM_CMD with the framing from .claude/commands/page.md step 6. The framing must include the SOURCE OF TRUTH preamble pointing to /tmp/page-$LOGICAL_NAME-1.png (or -01.png — check). When the PRD is created, capture its path and run: bash .claude/hooks/advance-pipeline.sh prd-generated <prd-path>",
  "prd_path": null,
  "fix_prd_path": null,
  "pass_1_qa_report": null,
  "pass_2_qa_report": null,
  "pass_1_blockers": null,
  "pass_1_significant": null,
  "pass_2_blockers": null,
  "pass_2_significant": null,
  "current_pass": 1,
  "started_at": "$(date -u +%Y-%m-%dT%H:%M:%SZ)"
}
EOF
    echo "Pipeline initialized for $LOGICAL_NAME. Next: $DOWNSTREAM_CMD to generate PRD."
    ;;

  prd-generated)
    PRD_PATH="${2:-}"
    if [[ -z "$PRD_PATH" ]]; then
      echo "Usage: advance-pipeline.sh prd-generated <prd-path>" >&2
      exit 1
    fi
    update_state ".prd_path = \"$PRD_PATH\" | .next_step = 7 | .next_step_instruction = \"Run /implement on $PRD_PATH. Pass the SOURCE OF TRUTH preamble in the implementation context. When /implement completes successfully, run: bash .claude/hooks/advance-pipeline.sh implement-done\""
    echo "State advanced: PRD generated at $PRD_PATH. Next: /implement."
    ;;

  implement-done)
    update_state ".next_step = 8 | .next_step_instruction = \"Run /qa \" + .logical_name + \". This requires localhost:3000 reachable. When /qa completes, locate the report path it printed (qa-reports/qa-<name>-<timestamp>.md) and run: bash .claude/hooks/advance-pipeline.sh qa-done <qa-report-path>\""
    echo "State advanced: implement done. Next: /qa."
    ;;

  qa-done)
    QA_REPORT="${2:-}"
    if [[ -z "$QA_REPORT" ]]; then
      echo "Usage: advance-pipeline.sh qa-done <qa-report-path>" >&2
      exit 1
    fi
    if [[ ! -f "$QA_REPORT" ]]; then
      echo "QA report not found: $QA_REPORT" >&2
      exit 1
    fi
    FINDINGS=$(count_findings "$QA_REPORT")
    BLOCKERS="${FINDINGS%,*}"
    SIGNIFICANT="${FINDINGS#*,}"
    LOGICAL_NAME=$(jq -r '.logical_name' "$STATE_FILE")

    if [[ "$BLOCKERS" -eq 0 && "$SIGNIFICANT" -eq 0 ]]; then
      # Clean - pipeline complete
      update_state ".pass_1_qa_report = \"$QA_REPORT\" | .pass_1_blockers = $BLOCKERS | .pass_1_significant = $SIGNIFICANT | .active = false | .next_step = null | .next_step_instruction = \"Pipeline complete. No findings.\""
      echo "PASS 1 CLEAN. Pipeline complete: $LOGICAL_NAME"
      echo "  Blockers: $BLOCKERS | Significant: $SIGNIFICANT"
      echo "  Report: $QA_REPORT"
    else
      update_state ".pass_1_qa_report = \"$QA_REPORT\" | .pass_1_blockers = $BLOCKERS | .pass_1_significant = $SIGNIFICANT | .next_step = 10 | .next_step_instruction = \"QA pass 1 found $BLOCKERS blockers and $SIGNIFICANT significant findings. Generate a fix PRD via /enhancement using the format in .claude/commands/page.md step 10. Reference report at $QA_REPORT and source of truth at /tmp/page-\" + .logical_name + \"-1.png. List every Blocker and Significant finding from the report verbatim. When the fix PRD is generated, capture its path and run: bash .claude/hooks/advance-pipeline.sh fix-prd-generated <fix-prd-path>\""
      echo "State advanced: QA pass 1 done. $BLOCKERS blockers, $SIGNIFICANT significant. Next: generate fix PRD."
    fi
    ;;

  fix-prd-generated)
    FIX_PRD_PATH="${2:-}"
    if [[ -z "$FIX_PRD_PATH" ]]; then
      echo "Usage: advance-pipeline.sh fix-prd-generated <fix-prd-path>" >&2
      exit 1
    fi
    update_state ".fix_prd_path = \"$FIX_PRD_PATH\" | .current_pass = 2 | .next_step = 11 | .next_step_instruction = \"Run /implement on $FIX_PRD_PATH. When /implement completes, run: bash .claude/hooks/advance-pipeline.sh fix-implement-done\""
    echo "State advanced: fix PRD generated at $FIX_PRD_PATH. Next: /implement (pass 2)."
    ;;

  fix-implement-done)
    update_state ".next_step = 12 | .next_step_instruction = \"Run /qa \" + .logical_name + \" for the second pass. When /qa completes, locate the new report path and run: bash .claude/hooks/advance-pipeline.sh qa-pass-2-done <qa-report-path>\""
    echo "State advanced: fix implement done. Next: /qa (pass 2)."
    ;;

  qa-pass-2-done)
    QA_REPORT="${2:-}"
    if [[ -z "$QA_REPORT" ]]; then
      echo "Usage: advance-pipeline.sh qa-pass-2-done <qa-report-path>" >&2
      exit 1
    fi
    if [[ ! -f "$QA_REPORT" ]]; then
      echo "QA report not found: $QA_REPORT" >&2
      exit 1
    fi
    FINDINGS=$(count_findings "$QA_REPORT")
    BLOCKERS="${FINDINGS%,*}"
    SIGNIFICANT="${FINDINGS#*,}"
    LOGICAL_NAME=$(jq -r '.logical_name' "$STATE_FILE")
    PASS_1_REPORT=$(jq -r '.pass_1_qa_report' "$STATE_FILE")
    FIX_PRD=$(jq -r '.fix_prd_path' "$STATE_FILE")

    update_state ".pass_2_qa_report = \"$QA_REPORT\" | .pass_2_blockers = $BLOCKERS | .pass_2_significant = $SIGNIFICANT | .active = false | .next_step = null | .next_step_instruction = \"Pipeline complete (pass 2 done).\""

    echo ""
    echo "=========================================="
    echo "Pipeline complete: $LOGICAL_NAME"
    echo "=========================================="
    echo ""
    echo "Pass 1 QA: $PASS_1_REPORT"
    echo "  Blockers: $(jq -r .pass_1_blockers "$STATE_FILE") | Significant: $(jq -r .pass_1_significant "$STATE_FILE")"
    echo ""
    echo "Fix PRD: $FIX_PRD"
    echo ""
    echo "Pass 2 QA: $QA_REPORT"
    echo "  Blockers: $BLOCKERS | Significant: $SIGNIFICANT"
    echo ""
    if [[ "$BLOCKERS" -gt 0 || "$SIGNIFICANT" -gt 0 ]]; then
      echo "Findings remain. Review manually."
    else
      echo "Clean."
    fi
    ;;

  complete)
    update_state ".active = false | .next_step = null"
    echo "Pipeline marked complete."
    ;;

  abort)
    update_state ".active = false | .next_step = null | .next_step_instruction = \"Aborted.\""
    echo "Pipeline aborted."
    ;;

  *)
    echo "Unknown event: $EVENT" >&2
    echo "Valid events: init, prd-generated, implement-done, qa-done, fix-prd-generated, fix-implement-done, qa-pass-2-done, complete, abort" >&2
    exit 1
    ;;
esac
