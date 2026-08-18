---
title: "TradingView에서 셀프 호스팅 트레이딩 봇으로 — TradingView 알림을 WolfBot Community에 연결하기"
description: "TradingView 알림 웹훅을 셀프 호스팅 WolfBot Community 봇으로 바로 보내세요. 웹훅 URL, HMAC 서명, 티어별 알림 템플릿이 어떻게 작동하는지, 그리고 먼저 Simulation에서 안전하게 테스트하는 방법을 알아보세요."
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-18"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "intermediate"
estimated_time: "12 minutes"
next_guide: "/docs/automated-trading-workflow"
related_guides: ["/docs/automated-trading-workflow", "/docs/simulation", "/docs/risk-controls", "/docs/mt5-symbol-mapping"]
keywords: [
  "tradingview to trading bot",
  "tradingview webhook bot",
  "tradingview to self hosted bot",
  "tradingview alerts automation",
  "connect tradingview to wolfbot",
  "tradingview webhook self hosted"
]
sitemap_priority: 0.8
lang: "ko"
translation_of: "docs/tradingview"
---

# TradingView에서 셀프 호스팅 트레이딩 봇으로

**WolfBot Community v0.1.0-p12-ghcr-rc8에서 테스트됨** · 마지막 업데이트: 2026-08-18

## 이 가이드의 대상

- **이미 TradingView 알림을 작성하고 있으며, 이를 종이 노트가 아니라 자신의 봇에서 실행되도록 만들고 싶은 분** — 함께 연결할 하나의 URL과 하나의 알림 템플릿, 그리고 실제 자금이 관여하기 전에 안전하게 테스트하는 방법을 제공합니다.
- **기술적 배경이 있는 분** — 웹훅이 어떻게 인증되는지(HMAC), 알림 페이로드가 어떻게 구성되는지, 그리고 주문이 만들어지기 전에 심볼이 어떻게 브로커에 맞게 정규화되는지 정확히 확인할 수 있습니다.

## TradingView가 WolfBot Community에 연결되는 방식

TradingView 알림은 **HTTP 웹훅**을 발생시킬 수 있습니다. WolfBot Community는 이 알림을 위한 웹훅 엔드포인트를 제공하고, 실제로 여러분에게서 온 것인지 검증한 뒤, 다른 모든 진입과 동일한 리스크 및 실행 파이프라인을 거치는 전략 시그널로 전환합니다.

흐름은 다음과 같습니다:

```text
TradingView 알림
   → 웹훅 URL로 HTTP POST
   → WolfBot이 HMAC 서명 검증
   → 알림 파싱 (심볼, 방향, from/to)
   → 대상 브로커에 맞게 심볼 정규화
   → 공유 리스크/실행 레이어를 통해 진입 큐잉
```

## 1. 웹훅 URL과 시크릿 받기

모든 TradingView 소스는 전용 엔드포인트를 받습니다. 경로 형태는 다음과 같습니다:

```text
/api/v1/strategy-webhooks/{source_id}
```

이를 자신의 WolfBot Community 호스트(로그인할 때 사용하는 동일한 호스트)에 대해 URL 인코딩하고, 소스별 웹훅 시크릿과 짝지어야 합니다. 이 시크릿이 WolfBot이 각 요청이 진짜 여러분의 것인지 검증하는 데 사용하는 값입니다.

## 2. 알림 템플릿 사용하기 (세 가지 티어)

WolfBot은 세 가지 티어의 알림 템플릿을 제공하므로 각 상황에 필요한 만큼만 호출하면 됩니다:

- **`signal_only`** — 방향과 심볼만. 리스크나 계정 세부 정보는 없습니다. WolfBot이 사이징과 보호를 결정합니다.
- **`signal_and_risk`** — 요청된 명목 금액과 익절 같은 리스크 필드가 추가되지만 계정 선택은 없습니다.
- **`full_entry_request`** — 특정 계정을 하나의 알림으로 구동하고 싶을 때 대상 `account_id`를 포함한 완전한 페이로드입니다.

각 티어는 `tenant_id`, `source_id`, 전략 인스턴스/버전, `definition_hash`와 같은 신원 필드를 담고 있어 시그널이 항상 의도한 정확한 전략에 귀속됩니다.

## 3. HMAC 서명

다른 누군가가 여러분의 봇을 발동시키지 못하도록, 웹훅은 서명됩니다. TradingView에서 보내는 HTTP 요청에는 웹훅 시크릿으로 본문에 대해 계산된 서명이 포함됩니다(즉시 사용 가능한 curl 예제에는 이 HMAC 레시피가 이미 올바르게 포함되어 있습니다). WolfBot은 서버 측에서 이를 재계산하여 서명이 일치하는 요청만 받아들입니다. 서명이 일치하지 않으면 요청은 그냥 거부됩니다 — 아무것도 실행되지 않습니다.

## 4. 심볼이 자동으로 정규화됩니다

알림의 `symbol`은 MT5/USD 형식(`XAGUSD`)일 수 있지만 주문 대상은 Binance(`XAGUSDT`)일 수 있습니다. WolfBot은 알림 심볼을 다른 모든 곳에서 사용하는 것과 동일한 거래소 인식 심볼 매퍼를 통해 처리하므로 알림이 올바른 페어에 도달합니다. 매핑이 없으면 심볼은 조용히 다시 쓰이는 대신 변경 없이 그대로 통과합니다. 전체 표는 [심볼 매핑 가이드](/docs/mt5-symbol-mapping)를 참조하세요.

## 5. 실제 자금 전에 Simulation에서 테스트하기

Live 전략을 향해 알림을 겨냥하기 전에:

1. **Simulation** 계정에 전략을 만들고 웹훅 URL + 테스트 알림을 부여하세요.
2. TradingView에서(또는 curl 예제를 사용하여) 테스트 알림을 발생시키고 시그널이 WolfBot에 도착하는지 확인하세요.
3. 심볼이 예상한 페어로 해석되었는지, 티어 필드가 올바른지 확인하세요.
4. 그런 다음에만 전략을 Live로 전환하세요.

## 보안 참고 사항

- 웹훅 시크릿을 비공개로 유지하세요 — 요청을 신뢰할 수 있게 만드는 유일한 요소입니다. API 키처럼 취급하세요.
- Community 인스턴스는 자신의 호스트/포트에서 실행하고, 서명이 검증되지 않은 상태로 웹훅 경로를 인터넷에 노출하지 마세요.
- `signal_only`로 시작하고, Simulation에서 전체 사이클이 작동하는 것을 확인한 뒤에만 리스크/익절 필드를 추가하세요.

## 다음으로 갈 곳

- [자동매매 워크플로 →](/docs/automated-trading-workflow) — 여러분의 알림이 연결되는 더 넓은 루프
- [먼저 시뮬레이션 →](/docs/simulation)
- [리스크 컨트롤 →](/docs/risk-controls)

## 다음 단계

> **[자동매매 워크플로 →](/docs/automated-trading-workflow)**
