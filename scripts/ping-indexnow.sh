#!/usr/bin/env bash
# Notifies IndexNow (Bing, Yandex) that URLs on alphabyte.ai have been updated.
# Usage:  scripts/ping-indexnow.sh              # pings every URL in the sitemap
#         scripts/ping-indexnow.sh URL [URL...] # pings specific URLs
#
# Run after a production deploy. No-ops gracefully on network failure.

set -euo pipefail

HOST="alphabyte.ai"
KEY="2c7a65716354b576e6ede8500d8c4f20"
KEY_LOCATION="https://${HOST}/${KEY}.txt"

# Verify key file is reachable (else IndexNow will reject the submission)
if ! curl -sf "$KEY_LOCATION" >/dev/null; then
  echo "⚠️  IndexNow key file not reachable at $KEY_LOCATION" >&2
  echo "    Run after deploy, or check public/${KEY}.txt is committed." >&2
  exit 1
fi

if [ $# -gt 0 ]; then
  # Specific URLs passed as args
  urls=("$@")
else
  # Default: pull everything from the live sitemap
  echo "📡 Reading https://${HOST}/sitemap.xml ..."
  mapfile -t urls < <(curl -sf "https://${HOST}/sitemap.xml" \
    | grep -oE '<loc>[^<]+</loc>' \
    | sed 's/<[^>]*>//g')
fi

if [ ${#urls[@]} -eq 0 ]; then
  echo "No URLs to submit."
  exit 0
fi

echo "📨 Submitting ${#urls[@]} URLs to IndexNow ..."

# Build JSON payload
url_list=$(printf '"%s",' "${urls[@]}")
url_list="[${url_list%,}]"

payload=$(cat <<EOF
{
  "host": "${HOST}",
  "key": "${KEY}",
  "keyLocation": "${KEY_LOCATION}",
  "urlList": ${url_list}
}
EOF
)

response=$(curl -sf -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "$payload" \
  -w "\n%{http_code}" 2>&1) || true

http_code=$(echo "$response" | tail -1)
body=$(echo "$response" | sed '$d')

case "$http_code" in
  200|202)
    echo "✓ IndexNow accepted submission (HTTP $http_code)"
    ;;
  *)
    echo "⚠️  IndexNow responded HTTP $http_code"
    [ -n "$body" ] && echo "    Body: $body"
    exit 1
    ;;
esac
