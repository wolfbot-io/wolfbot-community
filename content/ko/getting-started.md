---
title: "WolfBot Community 시작하기"
description: "WolfBot Community를 설치하고 브로커를 연결해 암호화폐, 선물, MT5 시장을 하나의 플랫폼에서 자동 거래하는 방법을 알아보세요."
tested_version: "0.1.0-p12-ghcr-rc21"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "getting-started"
difficulty: "beginner"
estimated_time: "15 minutes"
next_guide: "/docs/simulation"
related_guides: ["/install/windows", "/install/linux", "/docs/simulation"]
keywords: ["wolfbot community", "wolfbot install", "wolfbot getting started", "self hosted trading bot", "wolfbot setup"]
sitemap_priority: 1.0
lang: "ko"
translation_of: "getting-started"
---

# WolfBot Community 시작하기

**WolfBot Community v0.1.0-p12-ghcr-rc21에서 테스트됨** · 마지막 업데이트: 2026-08-15

## WolfBot Community란?

WolfBot Community는 무료 셀프 호스팅 통합 거래 플랫폼입니다. 암호화폐, 선물, MT5(외환, 금, 지수)를 **하나의 인터페이스**에서 거래할 수 있습니다.

**핵심:**
- ✅ 무료 — 구독료 없음
- ✅ 셀프 호스팅 — 데이터가 내 기기에 보관됨
- ✅ 논커스터디얼 — 자금이 항상 내 통제 하에 있음
- ✅ 통합 플랫폼 — 암호화폐 + 선물 + MT5

## 이 가이드의 대상

- **모든 트레이더:** 설치부터 첫 거래까지의 빠른 시작 안내입니다.
- **기술적 배경이 있는 분:** 셀프 호스팅의 정확한 동작 원리는 [셀프 호스팅 설명 →](/docs/self-hosted-explained)을 참조하세요.

---

## 1단계: 설치

### Windows
Windows 설치 프로그램을 다운로드하여 실행하세요. 자세한 단계는 [Windows 설치 →](/install/windows)를 참조하세요.

### Linux
Linux 설치 프로그램 또는 Docker를 사용하세요. 자세한 단계는 [Linux 설치 →](/install/linux)를 참조하세요.

---

## 2단계: 브로커 연결

WolfBot은 API 키를 통해 브로커에 연결합니다:

| 브로커 | 유형 | 가이드 |
|---|---|---|
| Binance | 암호화폐 | [Binance 연결 →](/brokers/binance) |
| Bybit | 암호화폐/선물 | [Bybit 연결 →](/brokers/bybit) |
| BingX | 암호화폐/선물 | [BingX 연결 →](/brokers/bingx) |
| KuCoin | 암호화폐 | [KuCoin 연결 →](/brokers/kucoin) |
| Bitget | 암호화폐/선물 | [Bitget 연결 →](/brokers/bitget) |
| MT5 | 외환/금/지수/CFD | [MT5 연결 →](/brokers/mt5) |

> ⚠️ **중요:** API 키를 생성할 때 **출금(Withdrawal)** 권한을 절대 활성화하지 마세요. WolfBot에는 거래(Trade) 권한만 필요합니다. [Trade-Only API 키 가이드 →](/brokers/api-key-guide)

---

## 3단계: 데모 계정으로 테스트

실제 자금을 투입하기 전에 데모(테스트넷) 계정으로 연습하세요:

1. **Exchange Accounts → Add Account**로 이동
2. 데모 계정 연결 (예: Bybit 테스트넷)
3. Smart Terminal에서 시뮬레이션 주문 배치
4. 가상 잔액으로 포지션이 열리는지 확인

> 💡 [데모 계정으로 시작하기 →](/docs/simulation)에서 전체 가이드를 확인하세요.

---

## 4단계: 리스크 관리 설정

실거래 전에 리스크 관리 규칙을 설정하세요:

- **포지션 크기 제한** — 거래당 최대 규모
- **드로다운 가드** — 손실 한도
- **쿨다운 타이머** — 거래 간 간격
- **일일 거래 한도** — 하루 최대 거래 수

> 🛡️ [리스크 관리 가이드 →](/docs/risk-controls)

---

## 5단계: 실거래 시작

준비가 되면:

1. **Trade-Only** API 키로 실계정 연결
2. 최소 포지션 크기로 시작
3. 좁은 스톱로스 설정
4. 행동을 확인하면서 점진적으로 확대

---

## 지원 받기

- **GitHub Discussions:** [github.com/wolfbot-io/wolfbot-community/discussions](https://github.com/wolfbot-io/wolfbot-community/discussions)
- **GitHub Releases:** [github.com/wolfbot-io/wolfbot-community/releases](https://github.com/wolfbot-io/wolfbot-community/releases)
- **문서:** 이 사이트의 Academy

---

## 다음 단계

> **[데모 계정으로 시작하기 →](/docs/simulation)**
