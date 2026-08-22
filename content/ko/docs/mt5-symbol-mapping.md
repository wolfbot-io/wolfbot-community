---
title: "MT5 심볼 매핑 — WolfBot Community가 MT5와 암호화폐 거래소 사이에서 심볼을 라우팅하는 방법"
description: "MT5는 USD 표기 심볼(BTCUSD, XAUUSD 등)을 사용하는 반면 암호화폐 거래소는 USDT 페어(BTCUSDT)를 사용합니다. WolfBot Community가 수동 리심볼링 없이 하나의 시그널이 MT5, Binance, Bybit, BingX 전반에서 작동하도록 이들을 매핑하는 정확한 방법을 알아보세요."
tested_version: "0.1.0-p12-ghcr-rc21"
last_updated: "2026-08-18"
platforms: ["linux", "windows"]
category: "broker-setup"
difficulty: "intermediate"
estimated_time: "8 minutes"
next_guide: "/docs/mt5-troubleshooting"
related_guides: ["/brokers/mt5", "/docs/mt5-without-windows-vps", "/docs/smart-terminal", "/docs/risk-controls"]
keywords: [
  "mt5 symbol mapping",
  "mt5 to crypto symbol",
  "xauusd to paxgusdt",
  "btcusd vs btcusdt",
  "metatrader 5 futures crypto",
  "wolfbot symbol mapping",
  "cross market trading symbols"
]
sitemap_priority: 0.75
lang: "ko"
translation_of: "docs/mt5-symbol-mapping"
---

# MT5 심볼 매핑

**WolfBot Community v0.1.0-p12-ghcr-rc21에서 테스트됨** · 마지막 업데이트: 2026-08-18

## 이 가이드의 대상

- **암호화폐와 MT5 양쪽에서 같은 시장을 거래하는 분** — 예를 들어 금이나 BTC 전략을 운영하며 하나의 대시보드에서 보고 싶은 분 — 심볼 이름이 다르게 보이는 이유와 WolfBot Community가 이를 어떻게 조정하는지 설명합니다.
- **기술적 배경이 있는 분** — WolfBot 내부에서 실행되는 실제 매핑 테이블을 확인하여, 포지션을 열기 전에 심볼이 정확히 무엇으로 해석되는지 알 수 있습니다.

## MT5와 암호화폐 거래소가 심볼 이름을 다르게 짓는 이유

각 거래소는 자신만의 형식으로 가격을 표시합니다:

- **MT5(외환, 금, 지수, 주식/CFD)**는 **USD 형식**으로 표시합니다: `BTCUSD`, `XAUUSD`, `XAGUSD`, `ETHUSD`.
- Binance, Bybit, BingX 같은 **암호화폐 현물/선물 거래소**는 **USDT** 페어로 표시합니다: `BTCUSDT`, `XAUUSDT`, `ETHUSDT`.
- 금은 특히 다릅니다: 대부분의 암호화폐 거래소에는 "XAU/USDT" 페어가 없으므로 WolfBot은 금을 토큰화된 금 ETF인 `PAXG` 토큰(`PAXGUSDT`)에 매핑합니다.

만약 아무런 조정 없이 MT5 브로커와 암호화폐 거래소를 연결했다면, 동일한 전략이 서로 다른 이름의 두 심볼을 보고 이를 별개의 두 시장으로 취급했을 것입니다. WolfBot Community는 이를 하나로 합쳐 단 하나의 포트폴리오 뷰에서 둘 다 표시할 수 있게 합니다.

## WolfBot Community가 심볼을 매핑하는 방법

WolfBot Community는 단일한 신뢰 가능한 심볼 매핑을 유지합니다. 시그널이나 전략이 심볼을 참조하면, 주문이 생성되기 전에 대상 거래소의 고유 이름으로 변환됩니다. 일반 규칙은 다음과 같습니다:

- `BTCUSD` → `BTCUSDT`, `ETHUSD` → `ETHUSDT` 등 — 암호화폐 USD 표기 MT5 심볼은 일치하는 `USDT` 페어에 매핑됩니다.
- `XAUUSD` / `GOLD` → `PAXGUSDT` — 금은 Binance의 토큰화된 금 페어에 매핑됩니다.
- `XAGUSD` / `SILVER` → `XAGUSDT` — 은은 네이티브 USDT 페어가 있습니다.
- 은은 또한 BingX의 TradFi 은 무기한 선물에 내부 스왑 ID로도 매핑됩니다.
- 매핑이 **없는** 심볼은 변경 없이 그대로 통과되므로 커스텀 종목이 실수로 다시 쓰이는 일은 없습니다.

이 테이블은 코드상 거래소 심볼 매핑(`map_symbol(source, target_exchange)`)으로 존재합니다. 이 함수는 대상 거래소에서 사용 가능한 이름을 반환하거나, 항목이 없으면 원래 심볼을 그대로 반환합니다.

## 이것이 여러분의 설정에 의미하는 것

- **전략을 한 번만 작성하면 됩니다.** MT5의 금 시그널과 암호화폐의 금 포지션 모두 WolfBot의 통합 리스크 및 포트폴리오 뷰에서 하나의 종목으로 표시됩니다.
- **수동 리심볼링이 필요 없습니다.** 두 번째 거래소를 추가할 때마다 모든 봇을 수정할 필요가 없습니다.
- **결정론적입니다.** 매핑은 플랫폼에 고정되어 있으므로, 동일한 시그널은 항상 동일한 대상 심볼로 해석됩니다 — Demo 테스트와 Live 실행 사이에 놀랄 일이 없습니다.

## 실제 예시

은 전략을 예로 들어 보겠습니다. MT5 브로커에서는 심볼이 `XAGUSD`로 표시되고, Binance에서는 `XAGUSDT`입니다. WolfBot이 이 전략을 라우팅하면 소스 심볼을 각 거래소에서 올바른 이름으로 해석하여 주문이 각 거래소의 올바른 페어로 전달되며, 여러분의 포트폴리오 뷰는 여전히 두 개의 연결되지 않은 시장이 아니라 하나의 "은" 종목으로 유지됩니다.

## 다음으로 갈 곳

- [먼저 안전하게 테스트하기 →](/docs/simulation) — Live로 넘어가기 전에 Demo 계정에서 심볼을 매핑하고 검증
- [흔한 MT5 문제 →](/docs/mt5-troubleshooting)
- [MT5 연결하기 →](/brokers/mt5)

## 다음 단계

> **[MT5 문제 해결 →](/docs/mt5-troubleshooting)**
