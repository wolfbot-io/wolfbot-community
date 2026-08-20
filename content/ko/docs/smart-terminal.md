---
title: "Smart Terminal 가이드 — 통합 거래 도구"
description: "WolfBot Community Smart Terminal 알아보기 — 암호화폐, 선물, MT5 시장을 하나의 인터페이스에서 다루는 통합 관제 센터."
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "smart-terminal"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/docs/risk-controls"
previous_guide: "/brokers/bybit"
related_guides: ["/brokers/bybit", "/docs/risk-controls", "/docs/simulation"]
keywords: ["wolfbot smart terminal", "crypto trading terminal", "mt5 terminal self hosted", "unified trading platform", "manual trading tool"]
sitemap_priority: 0.85
lang: "ko"
translation_of: "docs/smart-terminal"
---

# Smart Terminal 가이드

**WolfBot Community v0.1.0-p12-ghcr-rc20에서 테스트됨** · 마지막 업데이트: 2026-08-15

## Smart Terminal이란?

Smart Terminal은 수동 거래 관제 센터입니다 — 앱 사이를 전환하지 않고 암호화폐 거래소 **및** MT5 계정을 모니터링하고 거래할 수 있는 단일 통합 화면입니다. Binance에서 BTC/USDT를 거래하든 Bybit에서 선물 계약을, MT5로 금(XAU/USD)을 거래하든 동일한 도구입니다.

## 핵심 영역

| 영역 | 기능 |
|---|---|
| **Chart** | 다중 시간대를 지원하는 선택 심볼 가격 차트 |
| **Order Panel** | Market, Limit, TP/SL 주문 배치 |
| **Positions** | 활성 포지션, 미체결 주문, 거래 내역 |
| **Watchlist** | 암호화폐 및 MT5 전반의 즐겨찾는 심볼 |
| **Account Selector** | 연결된 암호화폐 및 MT5 계정 간 빠른 전환 |

---

## Smart Terminal 사용

### 1단계: 계정 선택

상단의 **Account Selector**에서 거래할 계정 선택 — 연결된 암호화폐 거래소와 MT5 브로커가 모두 같은 목록에 표시됩니다.

### 2단계: 심볼 선택

심볼을 입력하거나 Watchlist에서 클릭:

- **암호화폐:** 예: `BTC/USDT`, `ETH/USDT`
- **선물:** 예: `BTC/USDT-PERP`
- **MT5:** 예: `XAU/USD` (금), `EUR/USD` (외환)

> 각 심볼은 존재하는 계정과 연결되어 있습니다 — 계정을 선택한 다음 심볼을 선택합니다.

### 3단계: 주문 파라미터 구성

Order Panel은 리스크 관리 기반으로 미리 채워진 값을 보여줍니다:

1. **주문 유형** — Market 또는 Limit
2. **크기** — 포지션 크기 (리스크 한도로 제한)
3. **스톱로스 (SL)** — 자동 중단 레벨
4. **테이크프로핏 (TP)** — 자동 목표 레벨
5. **방향** — 롱 또는 숏

### 4단계: 주문 배치

1. 리스크 파라미터 검토
2. **Place Order** 클릭
3. 요청 시 확인

주문이 **Positions** 패널에 즉시 나타납니다.

---

## 포지션 관리

### 활성 포지션 모니터링

**Positions** 패널은 다음을 표시합니다:
- 현재 P&L (실현 및 미실현)
- 진입 가격 vs 현재 시장 가격
- TP/SL 레벨
- 포지션 크기

### 포지션 청산

1. **Positions** 패널에서 포지션 선택
2. **Close** 클릭
3. 전체 또는 부분 청산 선택
4. 확인

### TP/SL 변경

1. 포지션 선택
2. **Modify** 클릭
3. TP/SL 레벨 조정
4. 변경 확인

---

## 차트

내장 차트는 다음을 표시합니다:

- 선택 심볼의 캔들스틱 가격 데이터
- 사용자 정의 시간대
- TP/SL 레벨 오버레이
- 주문 배치 후 진입점

---

## Watchlist

중요한 심볼에 빠르게 접근하기 위한 Watchlist를 만드세요 — 같은 패널에서 암호화폐 쌍과 MT5 상품을 혼합할 수 있습니다.

1. **+ Add Symbol** 클릭
2. 심볼 검색 및 선택
3. Watchlist에서 심볼을 클릭해 차트에 로드

---

## 거래 중 계정 전환

Smart Terminal은 계정을 분리하여 유지합니다:
- 포지션은 거래된 계정 아래에 표시
- 전환하려면 **Account Selector**에서 변경만 하면 됨

---

## 팁

### Smart Terminal 작업용

- 미리 채워진 리스크 파라미터 활용 — 리스크 관리에서 비롯됨
- 먼저 데모 계정에 테스트 주문 배치
- 주요 심볼에 빠르게 접근하려면 Watchlist 유지
- Positions 패널에서 미체결 주문 모니터링

### 기술 사용자용

- 차트 데이터는 일반 브로커/MT5 연결을 통해 흐름 — 주문을 구동하는 것과 동일한 가격
- TP/SL은 브로커 API 또는 MT5를 통해 실행되는 클라이언트 측 지시
- 주문 유형은 거래소/브로커가 정의한 대로 정확히 전달 (Market, Limit, ReduceOnly 등)

---

## 일반적인 문제

| 문제 | 해결책 |
|---|---|
| 주문 거부 | 리스크 한도 확인 (크기, 레버리지, 일일 한도) |
| 심볼을 찾을 수 없음 | 선택한 계정에 심볼이 존재하는지 확인 |
| 차트가 로드 안 됨 | 브로커/MT5 연결 확인 |
| "Insufficient balance" | 선택한 계정의 잔액 확인 |

---

## 다음 단계

> **[리스크 관리 구성 →](/docs/risk-controls)**
