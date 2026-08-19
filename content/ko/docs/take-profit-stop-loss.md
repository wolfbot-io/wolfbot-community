---
title: "테이크프로핏 & 스톱로스 설명"
description: "테이크프로핏(TP)과 스톱로스(SL) 이해하기 — 거래에서 가장 중요한 두 가지 보호 메커니즘. 작동 방식과 WolfBot에서 설정하는 방법."
tested_version: "0.1.0-p12-ghcr-rc19"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "beginner"
estimated_time: "8 minutes"
next_guide: "/docs/dca-strategy"
previous_guide: "/docs/automated-trading-workflow"
related_guides: ["/docs/automated-trading-workflow", "/docs/dca-strategy", "/docs/risk-controls"]
keywords: ["take profit stop loss", "tp sl trading", "stop loss explained", "take profit explained", "trading risk orders"]
sitemap_priority: 0.85
lang: "ko"
translation_of: "docs/take-profit-stop-loss"
---

# 테이크프로핏 & 스톱로스 설명

**WolfBot Community v0.1.0-p12-ghcr-rc19에서 테스트됨** · 마지막 업데이트: 2026-08-15

## 거래에서 가장 중요한 두 가지 주문

테이크프로핏(TP)과 스톱로스(SL)는 **자동으로** 트리거되는 사전 정의된 청산 지점입니다 — 결정에서 감정을 제거합니다.

| 주문 | 목적 | 트리거 시점 |
|---|---|---|
| **스톱로스 (SL)** | 손실 제한 | 가격이 나에게 불리하게 움직일 때 |
| **테이크프로핏 (TP)** | 이익 확보 | 가격이 목표에 도달할 때 |

## 이 가이드의 대상

- **모든 트레이더:** TP/SL을 간단한 말로 이해 — 왜 중요한지, 어떻게 설정하는지.
- **기술 사용자:** WolfBot이 브로커 API와 MT5를 통해 TP/SL을 실행하는 방법.

---

## 스톱로스 (SL)

스톱로스는 가격이 특정 레벨에 도달하면 포지션을 **자동으로 청산**하여 손실을 제한하는 주문입니다.

### 예시

```text
BTC를 $50.000에 매수
스톱로스 $47.500에 설정 (5% 아래)

BTC가 $47.500으로 하락 → 포지션 자동 청산
손실 5%로 제한
```

### 스톱로스가 중요한 이유

1. **손실 제한** — 최대 손실을 미리 알 수 있음
2. **감정 제거** — "돌아올 거야" 없음
3. **계정 보호** — 재앙적 손실 방지
4. **편안한 수면** — 부재 중에도 보호 작동

---

## 테이크프로핏 (TP)

테이크프로핏은 가격이 이익 목표에 도달하면 포지션을 **자동으로 청산**하여 이익을 확보하는 주문입니다.

### 예시

```text
BTC를 $50.000에 매수
테이크프로핏 $55.000에 설정 (10% 위)

BTC가 $55.000 도달 → 포지션 자동 청산
이익 확보: 10%
```

### 테이크프로핏이 중요한 이유

1. **이익 확보** — "초록이 빨강이 되는 것" 방지
2. **규율** — 탐욕 대신 이익 실현 강제
3. **일관성** — 전략이 일관되게 유지
4. **지속 관찰 불필요** — 이익이 자동으로 확보

---

## TP/SL 함께

TP와 SL은 각 포지션의 **청산 계획**으로 함께 작동합니다:

```text
            ┌── TP ($55.000) → 이익 +10%
진입 ($50.000)
            └── SL ($47.500) → 손실 -5%
```

좋은 위험-보상 비율은 최소 **1:2**입니다 — $2를 벌기 위해 $1을 위험에 빠뜨립니다.

---

## WolfBot에서 TP/SL 설정

### Smart Terminal에서

1. **Smart Terminal** 열기
2. 심볼 선택 (암호화폐 또는 MT5)
3. 포지션 크기 입력
4. Order Panel이 리스크 관리 기반의 미리 채워진 TP/SL 표시
5. 필요에 따라 TP/SL 레벨 조정
6. 주문 배치

TP와 SL 모두 기본으로 설정됩니다.

### 자동 봇에서

각 봇 템플릿에 TP/SL 파라미터 포함:
- **TP %** — 이익 목표 (백분율)
- **SL %** — 손실 한도 (백분율)

---

## TP/SL 모범 사례

### 스톱로스 설정

- ✅ **모든** 포지션에 SL 설정 — 예외 없음
- ✅ 위험 허용 범위 기반 (예: 5%)
- ✅ 변동성 고려 (금/MT5는 더 넓은 스톱 필요할 수 있음)
- ❌ 너무 좁은 SL 설정 금지 (시장 노이즈가 트리거)

### 테이크프로핏 설정

- ✅ 최소 1:2 위험-보상 비율 사용
- ✅ 강한 추세에서는 TP를 추적(trailing)할 수 있음
- ❌ 너무 먼 TP 설정 금지 (시장이 도달 못 함)
- ❌ 너무 좁은 TP 설정 금지 (이익을 놓침)

---

## 자주 묻는 질문

**Q: 포지션 개시 후 TP/SL을 변경할 수 있나요?**
네 — Positions 패널에서 포지션을 선택하고 **Modify** 클릭.

**Q: 가격이 SL을 건너뛰면(Gap) 어떻게 되나요?**
빠른 움직임에서는 체결이 SL 레벨보다 나쁠 수 있습니다(슬리피지). 모든 브로커에서 정상이지만, 보수적 레버리지가 영향을 줄입니다.

**Q: TP/SL은 서버에 보관되나요, 로컬에 보관되나요?**
브로커에 따라 다릅니다. WolfBot은 TP/SL을 보호 주문으로 브로커(또는 MT5)에 전송해 WolfBot이 오프라인이어도 작동하게 합니다.

**Q: TP/SL은 MT5 상품에서도 동일하게 작동하나요?**
네 — WolfBot은 암호화폐와 MT5 포지션에 동일한 TP/SL 로직을 적용합니다.

---

## 추가 읽을거리

- [자동 거래 워크플로 →](/docs/automated-trading-workflow) — 전체 워크플로
- [DCA 전략 →](/docs/dca-strategy) — 인기 전략에서의 TP/SL
- [리스크 관리 가이드 →](/docs/risk-controls) — TP/SL이 리스크 프레임워크에 맞는 방식

---

## 다음 단계

> **[DCA 전략 →](/docs/dca-strategy)**
