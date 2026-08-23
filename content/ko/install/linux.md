---
title: "WolfBot Community 설치 (Linux)"
description: "Linux에 WolfBot Community를 단계별로 설치하는 방법 — 시스템 요구사항, 설치 프로그램 및 Docker 옵션."
tested_version: "0.1.0-beta.2"
last_updated: "2026-08-15"
platforms: ["linux"]
category: "install"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/brokers/binance"
related_guides: ["/getting-started", "/docs/troubleshooting", "/docs/run-24-7-on-a-vps"]
keywords: ["wolfbot linux install", "wolfbot linux setup", "install wolfbot on linux", "trading bot linux"]
sitemap_priority: 0.85
lang: "ko"
translation_of: "install/linux"
---

# Linux에 WolfBot Community 설치

**WolfBot Community v0.1.0-beta.2에서 테스트됨** · 마지막 업데이트: 2026-08-15

## 시스템 요구사항

| 요구사항 | 최소 | 권장 |
|---|---|---|
| **운영체제** | Ubuntu 20.04+ | Ubuntu 22.04 LTS |
| **RAM** | 2 GB | 4 GB |
| **저장공간** | 1 GB 여유 | 5 GB 여유 |
| **Docker** (Docker 설치 시) | 20.10+ | 최신 안정 버전 |

---

## 설치 방법

WolfBot Community는 Linux에서 두 가지 방법으로 설치할 수 있습니다:

1. **설치 프로그램** (권장) — 자동 설정
2. **Docker** — 컨테이너 기반 배포

---

## 방법 1: 설치 프로그램 (권장)

### 1단계: 설치 스크립트 다운로드

```bash
curl -fsSL https://wolfbot.io/install.sh -o install.sh
```

### 2단계: 설치 실행

```bash
sudo bash install.sh
```

설치 프로그램이:
- 종속성 확인 및 설치
- WolfBot 파일을 `/opt/wolfbot`에 배치
- 서비스 등록
- CLI 명령 `wolfbot` 설정

### 3단계: 서비스 시작

```bash
sudo systemctl start wolfbot
sudo systemctl enable wolfbot
```

### 4단계: 대시보드 열기

브라우저에서 `http://localhost:3000` (또는 설치 안내에 표시된 주소)을 엽니다.

---

## 방법 2: Docker

### 1단계: Docker 설치

```bash
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker $USER
```

### 2단계: WolfBot 컨테이너 실행

```bash
docker run -d \
  --name wolfbot \
  --restart unless-stopped \
  -p 3000:3000 \
  -v wolfbot-data:/data \
  ghcr.io/wolfbot-io/wolfbot-community:latest
```

### 3단계: 대시보드 열기

브라우저에서 `http://localhost:3000`을 엽니다.

---

## MT5 사용 (선택)

WolfBot Community에는 MT5가 내장되어 있습니다. Linux에서는 MT5가 컨테이너에서 실행되어 브라우저 창으로 제공됩니다. 처음 사용 시 MT5 컨테이너를 시작해야 합니다:

```bash
docker compose \
  -f /opt/wolfbot/compose/wolfbot-compose.json \
  -f /opt/wolfbot/compose/compose.mt5.yaml \
  up -d
```

자세한 내용은 [MT5 연결 →](/brokers/mt5)을 참조하세요.

---

## 설치 확인

```bash
# 진단 실행
wolfbot doctor

# 서비스 상태 확인
sudo systemctl status wolfbot
```

---

## 일반적인 문제

| 문제 | 해결책 |
|---|---|
| 포트 충돌 | 다른 포트를 사용하도록 구성 변경 |
| 권한 오류 | `sudo` 사용 또는 사용자 그룹 확인 |
| Docker 오류 | Docker 서비스 실행 중인지 확인 |
| 서비스 시작 안 됨 | `wolfbot logs`로 로그 확인 |

---

## 24/7 운영

Linux VPS에서 WolfBot을 24시간 운영하려면 [VPS에서 24/7 실행 →](/docs/run-24-7-on-a-vps)을 참조하세요.

---

## 다음 단계

> **[Binance 연결 →](/brokers/binance)** 또는 **[데모 계정으로 시작 →](/docs/simulation)**
