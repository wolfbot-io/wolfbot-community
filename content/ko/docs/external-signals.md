---
title: "외부 시그널 — 모든 소스에서 WolfBot Community로 시장 시그널 보내기"
description: "TradingView 알림, 커스텀 웹훅, 시그널 서비스 등 외부 트레이딩 시그널을 하나의 서명되고 리스크 검증된 파이프라인을 통해 셀프 호스팅 WolfBot Community 봇에 연결하세요."
tested_version: "0.1.0-p12-ghcr-rc19"
last_updated: "2026-08-18"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "intermediate"
estimated_time: "10 minutes"
next_guide: "/docs/tradingview"
related_guides: ["/docs/tradingview", "/docs/automated-trading-workflow", "/docs/simulation", "/docs/risk-controls"]
keywords: [
  "external trading signals",
  "webhook trading bot",
  "custom signals into trading bot",
  "signal service wolfbot",
  "signed webhook automation",
  "external signals self hosted"
]
sitemap_priority: 0.75
lang: "ko"
translation_of: "docs/external-signals"
---

# 외부 시그널

**WolfBot Community v0.1.0-p12-ghcr-rc19에서 테스트됨** · 마지막 업데이트: 2026-08-18

## 이 가이드의 대상

- **이미 다른 곳에서 시그널을 받고 계신 분** — TradingView 알림, 유료 시그널 서비스, 또는 직접 만든 스크립트 등 — 이를 수동으로 실행하는 대신 자신의 봇에서 포지션을 열도록 연결하고 싶으신 분.
- **기술적 배경이 있는 분** — 모든 외부 시그널이 거치는 단 하나의 파이프라인(검증 → 파싱 → 정규화 → 리스크 → 실행)을 확인하여, 새로운 경로를 만들지 않고도 자신만의 소스를 연결할 수 있습니다.

## 여기서 "외부 시그널"이 의미하는 것

외부 시그널은 WolfBot Community **바깥에서** 오는 매수/매도 지시로, 거래로 전환되어야 하는 모든 것을 말합니다. 예시:

- TradingView 알림 웹훅(전용 [TradingView 가이드](/docs/tradingview) 참조).
- 직접 만든 스크립트나 서비스가 발생시키는 커스텀 웹훅.
- 리스크 레이어에 연결할 만큼 신뢰하는 시그널 서비스.

이들 모두는 각각 별도의 통합을 만드는 대신 하나의 서명된 진입점을 공유합니다.

## 모든 외부 시그널이 사용하는 단일 파이프라인

소스가 무엇이든, 모든 수신 시그널은 동일한 경로를 거칩니다:

```text
HTTP POST (서명됨)
   → 서명 검증 (웹훅 시크릿을 사용한 HMAC)
   → 시그널 파싱 (심볼, 방향, from/to)
   → 대상 브로커에 맞게 심볼 정규화
   → 신원 정보 첨부 (소스, 전략, 티어)
   → 공유 리스크/실행 레이어를 통해 진입 큐잉
```

모든 소스가 동일한 파이프라인을 거치므로, 시그널이 어디서 왔든 동일한 보장을 받습니다:

- **인증됨** — 시크릿으로 서명된 요청만 실행될 수 있습니다.
- **리스크 검증됨** — 진입은 수동 주문이나 전략 주문과 동일한 리스크 컨트롤을 거칩니다.
- **심볼 정규화됨** — 시그널의 MT5/USD 이름이 대상 거래소의 올바른 페어로 매핑됩니다.

## 티어는 시그널을 소스에 맞게 유지합니다

외부 시그널은 동일한 3단계 페이로드 모델을 사용하므로, 가벼운 시그널과 완전한 주문 요청 모두 지원됩니다:

- `signal_only` — 방향/심볼만. 사이징과 보호는 WolfBot이 처리합니다.
- `signal_and_risk` — 명목 금액과 익절 필드가 추가됩니다.
- `full_entry_request` — 대상 계정을 포함한 완전한 페이로드입니다.

새로운 외부 소스는 `signal_only`로 시작하고, Simulation에서 깨끗한 사이클을 확인한 뒤에만 단계를 높이세요.

## 모든 새 소스는 먼저 Simulation에서 테스트하세요

모든 외부 소스에 대해:

1. 전용 웹훅 URL + 시크릿을 가진 **Simulation** 전략을 대상으로 지정하세요.
2. 테스트 시그널을 보내 인증된 상태로 의도한 심볼에 도착하는지 확인하세요.
3. 리스크 검증된 진입이 기대한 대로 동작하는지 확인하세요.
4. 그런 다음에만 사본을 Live로 전환하세요.

## 보안 참고 사항

- 모든 외부 소스는 **자신만의 웹훅 시크릿**을 가집니다 — API 키처럼 취급하세요. 공개 차트/저장소에 노출하지 마세요.
- 웹훅 경로는 자신의 호스트 뒤에 유지하세요. 인증하는 것은 URL의 비밀성이 아니라 서명입니다.
- 봇에 연결하는 시그널 서비스는 신뢰할 수 있는 것이어야 합니다 — 파이프라인은 요청을 인증하지만 시그널 아이디어가 타당한지는 판단할 수 없습니다.

## 다음으로 갈 곳

- [TradingView 알림 →](/docs/tradingview) — 가장 흔한 외부 소스, 단계별로
- [자동매매 워크플로 →](/docs/automated-trading-workflow)
- [먼저 시뮬레이션 →](/docs/simulation)

## 다음 단계

> **[TradingView 알림 →](/docs/tradingview)**
