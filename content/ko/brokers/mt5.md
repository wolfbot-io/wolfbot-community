---
title: "MT5를 WolfBot Community에 연결 — 단계별"
description: "WolfBot Community에는 MT5가 내장되어 있습니다 — 별도 Windows 머신 없이 Windows 또는 Linux에서 외환, 금, 지수, 주식/CFD를 거래하세요. 단계별 연결 가이드."
tested_version: "0.1.0-beta.9"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["mt5"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "15 minutes"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls", "/install/windows", "/install/linux", "/docs/mt5-without-windows-vps"]
keywords: ["mt5 automation", "mt5 trading bot", "self hosted mt5 bot", "metatrader 5 automation", "gold trading automation", "mt5 on linux"]
sitemap_priority: 0.80
lang: "ko"
translation_of: "brokers/mt5"
---

# MT5를 WolfBot Community에 연결

**WolfBot Community v0.1.0-beta.9에서 테스트됨** · 마지막 업데이트: 2026-08-15

**MT5 지원 상태:** 안정 · 데모 ✅ · 실계정 ✅ · 터미널 ✅ · 전략 ✅ · Windows ✅ · Linux ✅

## MT5는 내장되어 있습니다

외환, 금, 지수, 주식/CFD — MT5 시장은 암호화폐 계정과 나란히 같은 대시보드에서 WolfBot Community에 기본 내장되어 있습니다. Windows와 Linux에서 동일하게 작동하며, MT5를 거래하기 위해 별도의 Windows 머신이 절대 필요하지 않습니다.

- **Windows**에서는 이미 사용 중인 MetaTrader 5 앱에 WolfBot이 연결됩니다.
- **Linux**에서는 WolfBot이 브라우저에서 직접 MT5를 엽니다 — 추가 설치 불필요.

## 이 가이드의 대상

MT5 거래를 WolfBot Community로 자동화하려는 트레이더 — 이미 사용 중인 운영체제에서 암호화폐와 전통 시장을 위한 통합 플랫폼.

## 필요한 것

- WolfBot Community 설치
- MT5 브로커 계정 (데모 또는 실계정)
- Windows의 경우: [MetaTrader 5](https://www.metatrader5.com/en/download) 설치
- 15분

## MT5 연결

1. WolfBot Community 열기
2. **Exchange Accounts → Add Account → MT5**로 이동
3. 브로커 계정에 로그인 (데모 또는 실계정)
   - **Windows:** MetaTrader 5 앱에서 진행
   - **Linux:** WolfBot 브라우저 창에서 직접 진행 — 최초 1회만 간단한 설정 (아래 [기술 사용자용](#기술-사용자용) 참조)
4. WolfBot이 사용 가능한 심볼을 자동으로 가져옴
5. 거래 시작 — Smart Terminal, 봇, 리스크 관리가 암호화폐 계정과 동일하게 작동

> ⚠️ WolfBot이 MT5를 통해 거래하려면 MT5가 로그인되어 있어야 합니다.

## 연결 테스트

1. WolfBot에서: Smart Terminal → MT5 선택
2. MT5에서 사용 가능한 심볼이 나타나야 함
3. 먼저 데모 계정에 소액 테스트 주문 배치
4. 실계정 MT5 계정으로 전환해 최소 크기 주문 배치
5. MT5에서 주문 확인
6. 테스트 주문 취소

## 거래 가능한 것

MT5는 거의 모든 자산 클래스를 다룹니다 — WolfBot은 고정 목록이 아닌 브로커의 MT5 계정이 제공하는 것을 거래합니다:

- **외환** — EUR/USD, GBP/USD, USD/JPY 및 50개 이상의 쌍
- **금속** — 금(XAU/USD), 은(XAG/USD), 종종 백금 및 팔라듐
- **에너지** — 원유, 천연가스 (브로커에 따라)
- **지수** — US30, NAS100, S&P 500, DAX 등
- **주식/CFD** — 개별 기업 주식, 종종 수천 개의 심볼 (브로커에 따라)
- **농산물** — 밀, 옥수수, 커피, 설탕 등 (브로커에 따라)
- **암호화폐 CFD** — 브로커가 제공하는 경우

> 정확한 상품 제공 여부는 WolfBot이 아닌 MT5 브로커에 따라 다릅니다 — 계정이 거래할 수 있는 전체 심볼 목록은 MT5 터미널의 **Market Watch**를 확인하세요.

## 금 거래용 MT5

금(XAU/USD)은 자동화에 가장 인기 있는 MT5 상품 중 하나입니다:

1. XAU/USD가 있는 MT5 브로커 연결
2. WolfBot에서: Smart Terminal → XAU/USD
3. 리스크 구성 (금은 변동성이 큼 — 소액으로 시작)
4. 실거래 전에 데모 계정으로 테스트

## 일반적인 문제

| 문제 | 해결책 |
|---|---|
| MT5 연결 안 됨 | MT5에서 브로커 계정에 로그인되어 있는지 확인 후 재시도 |
| "Symbol not available" | 브로커의 사용 가능한 상품 확인 |
| "Automated trading disabled" | MT5에서: Tools → Options → Expert Advisors → Allow Automated Trading |
| "Order rejected by broker" | 최소 랏 크기 및 거래 시간 확인 |

## 다음 단계

> **[리스크 관리 설정 →](/docs/risk-controls)** — 변동성 높은 MT5 상품에 특히 중요

---

## 기술 사용자용

아래 세부 사항은 MT5 브리지가 정확히 어떻게 작동하는지 이해하고 싶거나 Linux 설정 단계를 터미널에서 실행하려는 분을 위한 것입니다. WolfBot에서 MT5를 사용하기 위한 필수 내용은 아닙니다 — 일반 흐름은 위의 [MT5 연결](#mt5-연결)을 참조하세요.

### 브리지 작동 방식

**Windows** — MT5는 별도의 네이티브 앱으로 실행되며 WolfBot이 직접 연결합니다:

```text
WolfBot Community → MT5 Bridge (local) → MetaTrader 5 Terminal (내 설치) → MT5 브로커 서버
```

**Linux** — WolfBot은 MT5 터미널을 컨테이너에서 직접 실행하고 브라우저 창을 제공합니다(VNC):

```text
WolfBot Community → MT5 Bridge Container (Terminal + VNC + RPyC) → 브라우저 창 → MT5 브로커 서버
```

두 경우 모두 브리지는 MT5를 *통해서만* 브로커와 통신합니다 — WolfBot은 브로커에 직접 연결하지 않습니다.

### Linux: 일회성 터미널 설정

WolfBot의 MT5 컨테이너는 기본 설치에서 시작되지 않으므로(모든 커뮤니티 사용자가 MT5를 거래하는 것은 아님), 처음에는 다음과 같이 시작합니다:

```bash
docker compose \
  -f /opt/wolfbot/compose/wolfbot-compose.json \
  -f /opt/wolfbot/compose/compose.mt5.yaml \
  up -d
```

그런 다음 브라우저에서 **`http://127.0.0.1:8090/mt5-vnc/`** 을 열고(비밀번호 `wolfbot`, 또는 `MT5_VNC_PASSWORD`로 설정한 값) 브로커에 로그인합니다 — 이후 WolfBot의 MT5 흐름이 사용하는 것과 동일한 브라우저 창입니다. 이는 공유 클라우드 인스턴스가 아닌 내 기기이므로 접근이 영구적이고 무제한입니다.

### Windows: 브리지 구성 참조

| 설정 | 값 |
|---|---|
| MT5 설치 경로 | 자동 감지 (일반적으로 `C:\Program Files\MetaTrader 5`) |
| 계정 유형 | 데모 또는 실계정 |
| 심볼 매핑 | 자동 구성 |

### 요구사항

- 거래 중 MT5가 실행 중이어야 함 (Windows에서는 네이티브, Linux에서는 브리지 컨테이너)
- MT5에서 Automated Trading(알고 트레이딩) 활성화
- 기기가 켜져 있어야 함 (또는 VPS 사용 — Windows와 Linux 모두 가능)
- 아직 미지원: 동시 다중 MT5 인스턴스, 일부 이국적인 브로커 전용 심볼

### 기술적 문제 해결

| 문제 | 해결책 |
|---|---|
| "MT5 not detected" (Windows) | 설치 경로 확인; MT5 재시작 |
| VNC 페이지가 로드 안 됨 (Linux) | MT5 컨테이너 실행 확인: `docker compose ... ps` — 최초 시작은 1분 소요 가능 |
| "Bridge connection failed" | MT5가 실행 중이고 로그인되어 있는지 확인 — Windows는 네이티브, Linux는 브라우저 세션 |

### MT5 24/7 운영

- **Windows:** Windows VPS 사용, MT5 + WolfBot Community 설치, MT5 자동 로그인 활성화, WolfBot 자동 시작 설정
- **Linux:** WolfBot Community와 MT5 컨테이너가 활성화된 Linux VPS 사용 — 자동 로그인 스크립트 없이 다른 WolfBot 서비스처럼 로그인 상태를 유지하며 계속 실행
