---
title: "출금 권한을 비활성화 상태로 유지해야 하는 이유 — 침해된 키로부터 자금을 보호하세요"
description: "Trade-only API 키는 출금이 꺼져 있어야 합니다. 출금이 활성화된 키가 침해된 거래소 키를 도난당한 잔액으로 바꾸는 주된 방법인 이유와, 여러분의 키를 확인하는 방법을 알아보세요."
tested_version: "0.1.0-p12-ghcr-rc17"
last_updated: "2026-08-18"
platforms: ["windows", "linux"]
category: "security"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/docs/trade-only-api-keys-explained"
related_guides: ["/docs/trade-only-api-keys-explained", "/security", "/docs/risk-controls"]
keywords: [
  "withdrawal permission api key",
  "trade only api key",
  "disable withdrawal trading bot",
  "api key security",
  "no withdrawal permissions exchange key",
  "secure bot api credentials"
]
sitemap_priority: 0.7
lang: "ko"
translation_of: "docs/why-withdrawal-permissions-should-stay-disabled"
---

# 출금 권한을 비활성화 상태로 유지해야 하는 이유

**WolfBot Community v0.1.0-p12-ghcr-rc17에서 테스트됨** · 마지막 업데이트: 2026-08-18

## 한 줄 답변

트레이딩 봇은 거래를 접수하고 관리하기만 하면 됩니다. 여러분의 자금을 밖으로 옮길 필요는 전혀 없습니다. 그래서 WolfBot Community를 포함한 모든 셀프 호스팅 봇에 가장 안전한 API 키는 **출금 권한이 비활성화된 trade-only 키**입니다.

## API 키가 가질 수 있는 권한

거래소에서 API 키를 만들 때 보통 어떤 작업을 수행할 수 있는지 선택합니다. 트레이딩 봇에게 의미 있는 차이는 다음과 같습니다:

- **거래(Trade):** 잔액 조회, 주문 접수, 포지션 관리 — 봇이 정확히 하는 일입니다.
- **출금(Withdraw):** 계정에서 자금을 밖으로 옮깁니다.

두 번째 권한이 유출되거나 도난당한 키를 "누군가 내 거래를 망칠 수 있다"에서 "누군가 내 돈을 가져갈 수 있다"로 바꾸는 요소입니다.

## 여러분의 자금에 왜 중요한가

키의 출금 권한이 **꺼져 있으면**, 완전히 침해된 키라도 잔액을 어디로도 보낼 수 없습니다 — 거래소가 해당 키로부터의 모든 출금 요청을 그냥 거부합니다. 이는 도난당한 자격 증명이 실제 자금에 가할 수 있는 피해에 대한 확실한 방어선입니다.

출금 권한이 **켜져 있으면**, 그 키가 유출되는 순간(붙여넣기 실수, 침해된 기기, 실행한 악성 종속성) 공격자는 추가 단계 없이 계정을 바로 비울 수 있습니다.

## 내 키를 확인하는 방법

1. 거래소에 로그인하고 **API 관리**를 여세요.
2. 봇에 연결된 키를 찾으세요.
3. **거래/조회**만 활성화되어 있고 **출금은 비활성화**되어 있는지 확인하세요.
4. 출금이 켜져 있다면 비활성화한 뒤 봇을 다시 연결하세요. WolfBot은 그것이 전혀 필요 없습니다.

## 요약: trade-only 키

- trade-only 키는 봇이 하는 모든 것 — 조회, 접수, 관리 — 를 충족합니다.
- 출금을 비활성화하는 것은 각자가 통제할 수 있는 가장 저렴하고 효과적인 자금 보호 수단입니다.

## 다음으로 갈 곳

- [Trade-Only API 키 설명 →](/docs/trade-only-api-keys-explained)
- [보안 →](/security)
- [리스크 컨트롤 →](/docs/risk-controls)

## 다음 단계

> **[Trade-Only API 키 설명 →](/docs/trade-only-api-keys-explained)**
