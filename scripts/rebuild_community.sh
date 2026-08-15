#!/bin/bash
# Pull + rebuild + redeploy just the community.wolfbot.io container.
# Called by host_tools/webhook/webhook_listener.py when a push webhook
# arrives from the wolfbot-io/wolfbot-community GitHub repo -- the
# community-site equivalent of wolfbot-platform/rebuild_platform.sh.
#
# Runs entirely on the VPS (not built/tested locally by the agent): git pull
# this repo, then `docker compose build/up` against THIS repo's own
# docker-compose.yml (own COMPOSE_PROJECT_NAME=wolfbot-community) so the
# multi-stage Dockerfile (Node build -> nginx:alpine) does the actual build
# inside Docker, same as frontend/backend already do in wolfbot-platform.
#
# Deliberately NOT the wolfbot-platform compose project: rebuild_platform.sh
# runs unscoped `compose build` / `up -d --remove-orphans` over ITS project
# on every relevant wolfbot.io platform push -- if `community` were a
# service inside that same project, every unrelated platform deploy would
# also stop/rebuild/restart community.wolfbot.io as a side effect (this is
# also why rebuild_platform.sh itself no longer runs a blanket `compose
# down` before building -- see its own comment, 2026-08-15 fix -- but the
# isolation here is what guarantees community is untouched regardless).
# Keeping it a separate compose project (joined only via the shared
# wolfbot-network external network, see docker-compose.yml) means the two
# deploy lifecycles can never step on each other, regardless of how close
# together their triggering pushes land.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"   # wolfbot-community/scripts
COMMUNITY_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"                 # wolfbot-community/

echo "🌐 ====================================="
echo "🌐 WolfBot Community Auto-Deploy Script"
echo "🌐 ====================================="

echo "📥 Pulling latest wolfbot-community code..."
cd "$COMMUNITY_DIR"
git fetch origin

# `git reset --hard` never conflicts -- it silently overwrites, no merge, no
# warning. If someone (human or agent) left an uncommitted edit to a
# TRACKED file in this checkout, the reset below would destroy it with no
# trace. Fail loud instead: a deploy-only VPS checkout should never have
# local tracked-file modifications, so if it does, something is wrong and
# needs a human, not a silent wipe. (Untracked files -- e.g. gitignored
# out/, node_modules/ -- are fine and intentionally not checked here.)
if [[ -n "$(git status --porcelain -uno)" ]]; then
  echo "❌ Uncommitted changes to tracked files in $COMMUNITY_DIR -- refusing to 'git reset --hard' over them."
  echo "   git status:"
  git status --porcelain -uno
  echo "   Resolve manually on the VPS (commit, stash, or discard) before the next push retries this."
  exit 1
fi

git reset --hard origin/main

COMPOSE_BIN=()
if command -v docker-compose >/dev/null 2>&1; then
  COMPOSE_BIN=(docker-compose)
elif docker compose version >/dev/null 2>&1; then
  COMPOSE_BIN=(docker compose)
else
  echo "❌ Docker Compose is not installed."
  exit 1
fi

compose() {
  COMPOSE_PROJECT_NAME=wolfbot-community "${COMPOSE_BIN[@]}" "$@"
}

echo "🔨 Building community image..."
cd "$COMMUNITY_DIR"
if ! compose build community; then
  echo "❌ Docker build failed. Aborting deployment."
  exit 1
fi

echo "🚀 Restarting community container..."
if ! compose up -d community; then
  echo "❌ Docker up failed. Aborting deployment."
  exit 1
fi

sleep 3

cid=$(compose ps -q community 2>/dev/null || true)
if [[ -z "$cid" ]] || [[ "$(docker inspect -f '{{.State.Running}}' "$cid" 2>/dev/null)" != "true" ]]; then
  echo "❌ community container is not running after deploy."
  exit 1
fi

echo "✅ community.wolfbot.io redeployed successfully."
exit 0
