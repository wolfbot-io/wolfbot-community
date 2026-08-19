---
title: "암호화폐와 MT5를 하나의 플랫폼에서 — 두 세계를 위한 단 하나의 WolfBot 인터페이스"
description: "암호화폐 선물과 MT5 외환·금을 하나의 셀프 호스팅 인터페이스에서 함께 다루는 것이 WolfBot Community의 가장 큰 강점인 이유 — 하나의 로그인, 하나의 리스크 엔진, 두 세계를 아우르는 하나의 포트폴리오."
tested_version: "0.1.0-p12-ghcr-rc19"
last_updated: "2026-08-18"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "beginner"
estimated_time: "8 minutes"
next_guide: "/docs/automated-trading-workflow"
related_guides: ["/brokers/mt5", "/docs/mt5-symbol-mapping", "/docs/risk-controls", "/community-vs-cloud"]
keywords: [
  "암호화폐 MT5 통합 플랫폼",
  "암호화폐 외환 선물 하나의 인터페이스",
  "울프봇 다중시장 거래",
  "통합 암호화폐 MT5",
  "암호화폐 MT5 원 인터페이스",
  "암호화폐 플러스 메타트레이더"
]
sitemap_priority: 0.8
lang: "ko"
translation_of: "docs/crypto-and-mt5-one-platform"
---

# 암호화폐와 MT5를 하나의 플랫폼에서

**WolfBot Community v0.1.0-p12-ghcr-rc19에서 테스트됨** · 마지막 업데이트: 2026-08-18

## 이 가이드의 대상

- **암호화폐와 외환/금을 모두 거래하며** 두 개의 봇, 두 개의 대시보드, 두 세트의 리스크 규칙을 저글링하는 데 지친 분.
- **기술에 익숙한 분** — 기반 거래소가 완전히 다른 시스템임에도 심볼, 포지션, 리스크가 어떻게 하나로 통합되는지 설명합니다.

## 파편화 문제

대부분의 자동매매 구성은 여러 도구로 삶을 나누게 만듭니다: Binance용 봇 하나, MT5용 봇 하나, 포지션을 보는 별도 화면, 서로 소통하지 않는 리스크 규칙. 실수는 바로 이 파편화에서 일어납니다 — 한 플랫폼의 포지션이 다른 플랫폼에서 방금 한 일을 알지 못합니다.

WolfBot Community는 정반대의 발상으로 만들어졌습니다: **하나의 플랫폼, 모든 시장.** 암호화폐 선물 계정과 MT5 계정이 동일한 셀프 호스팅 WolfBot 안에 함께 존재하며, 하나의 브라우저 인터페이스에서 접근할 수 있습니다.

## 실제로 "하나"가 되는 것

- **하나의 대시보드.** Binance/Bybit 포지션과 MT5 금 포지션이 두 앱이 아니라 나란히 표시됩니다.
- **하나의 리스크 엔진.** 동일한 Risk Controls가 암호화폐와 MT5 전반에 적용되므로, 암호화폐 쪽 규칙이 금 포지션과 단절되지 않습니다.
- **하나의 포트폴리오 뷰.** 총 노출, 마진, 드로다운을 머릿속으로 플랫폼별로 합산하는 대신 한눈에 함께 볼 수 있습니다.
- **하나의 전략 세트.** 전략이 두 세계 중 어느 쪽 심볼이든 참조할 수 있으며, [심볼 매핑](/docs/mt5-symbol-mapping)이 이름 차이를 처리합니다.

## 내부 동작 방식

암호화폐와 MT5는 실제로는 완전히 다른 시스템입니다 — 하나는 REST/선물 API, 다른 하나는 Windows 거래 터미널입니다. WolfBot은 이 둘을 하나의 실행 + 리스크 레이어 뒤에서 통합하며, 시세는 브로커 인식 심볼 매핑을 통해 조정됩니다(MT5의 `XAUUSD` → 암호화폐 페어의 `PAXGUSDT` 등). 그 차이는 내부에서 처리되고, 당신이 보는 인터페이스는 하나의 플랫폼입니다.

## 작게 시작하기

암호화폐 Demo와 MT5 Demo를 나란히 연결하고, 익숙한 심볼(예: BTC나 Gold)을 추가한 뒤, 동일한 상품이 포트폴리오에 일관되게 표시되는지 지켜보세요. 그런 다음 Simulation에서 실제 전략을 추가하기 시작하세요.

## 시작하기

- [MT5 연결하기 →](/brokers/mt5)
- [시장 전반의 심볼 매핑 →](/docs/mt5-symbol-mapping)
- [자동매매 워크플로 →](/docs/automated-trading-workflow)

## 다음 단계

> **[MT5 연결 가이드 읽기 →](/brokers/mt5)**
