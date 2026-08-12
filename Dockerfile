# WolfBot Community static site (community.wolfbot.io).
#
# Multi-stage build so the running image is just nginx:alpine + static
# files — no Node.js in production. Built on the VPS by
# `docker compose build community` (wolfbot-platform/docker-compose.yml),
# the same way frontend/backend already build from source, wired into the
# existing webhook auto-deploy (host_tools/webhook/webhook_listener.py +
# scripts/rebuild_community.sh) instead of a manual rsync step.

FROM node:20-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
# sitemap.xml and rss.xml must exist in public/ BEFORE `next build` copies
# public/ into out/ (see scripts/generate-sitemap.ts, scripts/generate-rss.ts)
# -- order matters here.
RUN npm run prebuild-content && npm run build

FROM nginx:alpine
COPY --from=build /app/out /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
