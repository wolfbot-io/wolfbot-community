---
title: "Windows VPS 없이 Linux에서 MT5 — 설명"
description: "WolfBot Community가 Windows VPS 없이 Linux에서 MT5를 실행하는 방법. 브라우저에서 직접 외환, 금, CFD를 거래하세요."
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-15"
platforms: ["linux"]
category: "reference"
difficulty: "intermediate"
estimated_time: "10 minutes"
next_guide: "/brokers/mt5"
previous_guide: "/install/linux"
related_guides: ["/brokers/mt5", "/install/linux", "/docs/run-24-7-on-a-vps"]
keywords: ["mt5 on linux", "mt5 without windows", "metatrader 5 linux", "mt5 vps linux", "mt5 wine docker"]
sitemap_priority: 0.80
lang: "ko"
translation_of: "docs/mt5-without-windows-vps"
---

# Windows VPS 없이 Linux에서 MT5

**WolfBot Community v0.1.0-p12-ghcr-rc20에서 테스트됨** · 마지막 업데이트: 2026-08-15

## 일반적인 가정

많은 사람들이 MetaTrader 5를 실행하려면 Windows 머신(또는 Windows VPS)이 필요하다고 믿습니다 — MT5가 공식적으로 Windows 앱이기 때문입니다.

**WolfBot Community에서는 그럴 필요가 없습니다.**

## 이 가이드의 대상

- **모든 트레이더:** MT5(외환, 금, 지수, CFD)가 암호화폐 거래처럼 Linux 서버에서 실행됩니다 — Windows 머신 불필요.
- **기술 사용자:** WolfBot이 Linux에서 컨테이너 브리지를 통해 MT5를 실행하는 방법 이해.

## 작동 방식

WolfBot Community는 MT5를 직접 내장합니다 — 별도 Windows 머신도, Wine 설정 고민도 없습니다. Linux에서 WolfBot은 MT5 터미널을 컨테이너에서 실행하고 브라우저 창을 제공합니다:

```text
내 브라우저 → WolfBot (Linux) → MT5 터미널 (컨테이너 내) → MT5 브로커 서버
```

Windows에서는 WolfBot이 이미 설치된 MetaTrader 5 앱에 연결합니다. 두 경우 모두 동일한 통합 인터페이스에서 암호화폐와 함께 외환, 금, CFD를 거래합니다.

## 모든 트레이더를 위한 이점

1. **Windows 라이선스 불필요** — Linux 머신만 있으면 됨
2. **하나의 VPS, 모든 시장** — 같은 박스에서 암호화폐 + MT5
3. **익숙한 인터페이스** — MT5가 브라우저에 표시
4. **낮은 비용** — 추가 Windows VPS 불필요
5. **통합 플랫폼** — 암호화폐와 MT5 전반 동일한 리스크 관리

## 설정 방법

1. **Linux 머신 준비** (또는 [VPS에서 24/7 설정 →](/docs/run-24-7-on-a-vps))
2. **WolfBot Community 설치** — [Linux 설치](/install/linux) 참조
3. **MT5 계정 연결** — [MT5 가이드](/brokers/mt5) 따르기

그게 전부입니다 — MT5는 별도 다운로드가 아닌 WolfBot Community의 일부입니다.

## 기술 사용자용

### 아키텍처

WolfBot은 세 가지 구성 요소를 결합한 컨테이너에서 Linux의 MT5를 실행합니다:

```text
MT5 Bridge Container
├── MetaTrader 5 Terminal (Wine 하에서 실행)
├── VNC Server (브라우저에서 GUI 제공)
└── RPyC Bridge (WolfBot을 터미널에 연결)
```

WolfBot은 MT5를 *통해서만* 브로커와 통신합니다 — 브로커에 직접 연결하지 않습니다. MT5 로그인은 해당 컨테이너에 유지됩니다.

### 일회성 설정

MT5 컨테이너는 기본 설치에서 자동으로 시작되지 않으므로(모든 커뮤니티 사용자가 MT5를 거래하는 것은 아님), 처음에는 다음과 같이 시작합니다:

```bash
docker compose \
  -f /opt/wolfbot/compose/wolfbot-compose.json \
  -f /opt/wolfbot/compose/compose.mt5.yaml \
  up -d
```

그런 다음 브라우저에서 **`http://127.0.0.1:8090/mt5-vnc/`** 을 열고(비밀번호 `wolfbot`, 또는 `MT5_VNC_PASSWORD`로 설정한 값) 브로커에 로그인합니다. 이후 WolfBot의 일반 MT5 흐름이 동일한 브라우저 창을 사용합니다.

### 왜 컨테이너인가?

- **격리** — MT5가 시스템과 분리되어 실행
- **재현 가능** — 모든 Linux 호스트에서 동일한 동작
- **간단한 배포** — `docker compose up` 하나로
- **수동 Wine 설정 불필요** — 컨테이너에 사전 구성

### Linux-MT5 요구사항

| 요구사항 | 권장 |
|---|---|
| Docker Engine | 20.10+ |
| RAM | 4 GB+ (MT5 컨테이너에 2 GB) |
| CPU | 2코어 |
| 브라우저 | 모든 최신 브라우저 |
| 네트워크 | MT5 브로커 서버 접근 |

### Linux-MT5 문제 해결

| 문제 | 해결책 |
|---|---|
| VNC 페이지가 로드 안 됨 | 컨테이너 실행 확인 (`docker compose ... ps`); 최초 시작은 1분 소요 가능 |
| "Bridge connection failed" | MT5가 브라우저에 로그인되었는지 확인 |
| 컨테이너 시작 안 됨 | `docker compose ... logs`로 오류 확인 |
| MT5 동결 | 컨테이너 재시작 (`docker compose ... restart`) |

---

## 다음 단계

> **[MT5 연결 →](/brokers/mt5)**
