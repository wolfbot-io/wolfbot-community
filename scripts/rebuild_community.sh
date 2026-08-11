#!/bin/bash
# Pull + rebuild + redeploy just the community.wolfbot.io container.
# Called by host_tools/webhook/webhook_listener.py when a push webhook
# arrives from the wolfbot-io/wolfbot-community GitHub repo -- the
# community-site equivalent of wolfbot-platform/rebuild_platform.sh.
#
# Runs entirely on the VPS (not built/tested locally by the agent): git pull
# this repo, then `docker compose build/up` in wolfbot-platform/ so the
# multi-stage Dockerfile (Node build -> nginx:alpine) does the actual build
# inside Docker, same as frontend/backend already do.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"   # wolfbot-community/scripts
COMMUNITY_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"                 # wolfbot-community/
PLATFORM_DIR="$(cd "$COMMUNITY_DIR/../wolfbot-platform" && pwd)"

echo "🌐 ====================================="
echo "🌐 WolfBot Community Auto-Deploy Script"
echo "🌐 ====================================="

echo "📥 Pulling latest wolfbot-community code..."
cd "$COMMUNITY_DIR"
git fetch origin
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
  COMPOSE_PROJECT_NAME=wolfbot-platform "${COMPOSE_BIN[@]}" "$@"
}

echo "🔨 Building community image..."
cd "$PLATFORM_DIR"
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
