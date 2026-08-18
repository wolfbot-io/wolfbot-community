---
title: "통합 리스크 vs 봇별 리스크 — 왜 하나의 리스크 엔진이 다중 시장 거래에 더 안전한가"
description: "봇마다 별도의 리스크 규칙을 두면 그 사이에 빈틈이 생깁니다. WolfBot Community의 단일 통합 리스크 엔진이 암호화폐와 MT5 포지션을 하나의 포트폴리오로 취급하는 방식과, 이것이 왜 분산된 드로다운을 막는지 설명합니다."
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-18"
platforms: ["windows", "linux"]
category: "risk-controls"
difficulty: "intermediate"
estimated_time: "8 minutes"
next_guide: "/docs/risk-controls"
related_guides: ["/docs/risk-controls", "/docs/why-bots-fail-risk-management", "/docs/how-to-reduce-drawdown"]
keywords: [
  "unified risk management",
  "risk vs per bot risk",
  "portfolio level risk trading",
  "unified risk crypto mt5",
  "drawdown control across bots",
  "wolfbot risk management"
]
sitemap_priority: 0.8
lang: "ko"
translation_of: "docs/how-unified-risk-differs-from-per-bot-risk"
---

# 통합 리스크 vs 봇별 리스크

**WolfBot Community v0.1.0-p12-ghcr-rc8에서 테스트됨** · 마지막 업데이트: 2026-08-18

## 이 가이드의 대상

- **여러 전략을 운영하며 이들이 남남이 아니라 하나의 포트폴리오처럼 동작하기를 원하는 분** — 봇별 리스크와 전체 리스크의 차이를 설명합니다.
- **기술적 배경이 있는 분** — 단일 리스크 엔진이 어떻게 전략별로 노출을 분산시키지 않고 전체 노출을 한눈에 파악하는지 확인할 수 있습니다.

## 봇별 리스크의 함정

많은 설정이 **각 봇마다 자체 리스크 규칙**을 부여합니다: 이 전략은 10% 드로다운 한도, 저 전략은 다른 한도. 문제는 이 한도들이 서로 소통하지 않는다는 것입니다. 모든 봇이 각각 조금씩 드로다운을 허용받고, 이들이 동시에 드로다운을 겪는다면(시장이 함께 움직일 때 흔히 일어남) 각 봇은 개별적으로 "자신의 한도를 지키는" 동안 전체 계좌는 모두에 걸쳐 서서히 손실을 입고 있습니다.

봇별 리스크는 집 안의 각 방마다 스프링클러가 있지만 건물 전체를 보는 사람은 아무도 없는 것과 같습니다.

## 통합 리스크가 의미하는 것

통합 리스크 엔진은 각 거래 전후에 — 암호화폐 선물과 MT5를 포함한 — **연결된 모든 계정에 걸친 총 포지션**을 살펴봅니다. 드로다운 한도, 노출 상한, 가드와 같은 규칙은 전략별로 개별 평가되는 것이 아니라 포트폴리오 수준에서 평가됩니다.

따라서 "X% 드로다운을 초과하지 않는다"는 것은 그 아래 몇 개의 봇과 브로커가 포지션을 만들었든 상관없이 **전체 포트폴리오**의 X%를 의미합니다.

## 실제 결과

- **정지는 진짜 정지입니다.** 포트폴리오 드로다운 한도에 도달하면 그것을 넘긴 전략만이 아니라 모든 전략의 활동이 일시 중지됩니다.
- **숨겨진 상관관계가 없습니다.** 열 개의 전략이 모두 같은 가격 움직임에 의존한다면, 통합 엔진은 그 노출을 한 번만 계산합니다.
- **암호화폐와 MT5, 같은 규칙.** MT5의 금 포지션과 암호화폐 포지션 모두 동일한 리스크 그림의 일부입니다.

## 두 방식 비교

| | 봇별 리스크 | 통합 리스크 |
|---|---|---|
| 드로다운 읽기 | 전략별 | 전체 포트폴리오 |
| 상관 포지션 | 보이지 않음 | 그룹화됨 |
| 정지 동작 | 해당 봇만 | 모든 활동 |
| 암호화폐 + MT5 | 별도 | 함께 |

## 안전하게 시작하기

- [리스크 컨트롤 설정하기 →](/docs/risk-controls)
- [봇이 실패하는 이유 →](/docs/why-bots-fail-risk-management)
- [드로다운을 줄이는 방법 →](/docs/how-to-reduce-drawdown)

## 다음 단계

> **[리스크 컨트롤 가이드 읽기 →](/docs/risk-controls)**
