---
title: "거래소와 MT5 전반에 걸친 하나의 포트폴리오 — 모든 포지션을 하나의 화면에서 보기"
description: "각 거래소에 개별적으로 로그인하는 대신, 암호화폐와 MT5를 함께 아우르는 전체 포트폴리오가 하나의 셀프 호스팅 뷰에 표시됩니다. 통합 포트폴리오 가시성이 무엇인지, 그리고 이것이 리스크 관리 방식을 어떻게 바꾸는지 알아보세요."
tested_version: "0.1.0-p12-ghcr-rc19"
last_updated: "2026-08-18"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "beginner"
estimated_time: "7 minutes"
next_guide: "/docs/risk-controls"
related_guides: ["/docs/risk-controls", "/docs/crypto-and-mt5-one-platform", "/docs/how-unified-risk-differs-from-per-bot-risk", "/brokers/mt5"]
keywords: [
  "unified portfolio trading",
  "one portfolio multiple exchanges",
  "crypto mt5 portfolio view",
  "portfolio across exchanges",
  "single portfolio view bot",
  "wolfbot portfolio dashboard"
]
sitemap_priority: 0.8
lang: "ko"
translation_of: "docs/one-portfolio-across-exchanges-and-mt5"
---

# 거래소와 MT5 전반에 걸친 하나의 포트폴리오

**WolfBot Community v0.1.0-p12-ghcr-rc19에서 테스트됨** · 마지막 업데이트: 2026-08-18

## 이 가이드의 대상

- **둘 이상의 거래소와 MT5에 포지션을 보유하고 있으며, 머릿속이나 스프레드시트로 이를 합산하는 데 지친 분.**
- **기술적 배경이 있는 분** — 완전히 다른 거래소들의 포지션이 어떻게 하나의 읽기 쉬운 포트폴리오로 조정되는지 설명합니다.

## 흩어진 포트폴리오 문제

거래하는 시장이 많아질수록 "포트폴리오"는 여러 로그인 화면에 흩어집니다: 한 거래소의 선물 포지션, 다른 거래소의 현물, MT5의 금과 외환. 직접 손으로 합산하지 않으면 아무것도 더해지지 않고, 그렇게 하는 순간 이미 숫자는 바뀌어 있습니다.

WolfBot Community는 **하나의 포트폴리오**를 보여줍니다 — 연결된 모든 계정, 암호화폐와 MT5를 하나의 셀프 호스팅 대시보드에서.

## 통합 가시성이 주는 것

- **한눈에 보는 총 노출.** 여러 탭에 걸쳐 나누는 대신 전체 리스크를 한 번에 확인합니다.
- **일관된 심볼.** 동일한 종목이 MT5(`XAUUSD`)에서 왔든 암호화폐 페어에서 왔든 하나의 행으로 표시됩니다 — [심볼 매핑](/docs/mt5-symbol-mapping)이 이름을 조정합니다.
- **포트폴리오 수준의 수치.** 마진, 드로다운, 노출이 함께 계산되어 느슨한 봇별 수치 대신 [통합 리스크 엔진](/docs/how-unified-risk-differs-from-per-bot-risk)에 반영됩니다.

## 작동 방식

내부적으로 Binance와 MT5는 서로 무관한 시스템입니다 — 선물 REST API와 Windows 트레이딩 터미널입니다. WolfBot은 둘 다 연결하여 심볼/거래소 차이를 중간에서 해결하며 하나의 포트폴리오 뷰로 제시합니다. 브로커를 하나도 포기하지 않으면서도 일관된 그림을 얻을 수 있습니다.

## 작게 시작하기

암호화폐 Demo와 MT5 Demo를 연결하고 각각에 아주 작은 포지션을 연 뒤 포트폴리오 뷰를 확인하세요 — 둘 다 같은 목록에 표시됩니다. 이것이 더 큰 규모로 운영하기 전에 통합된 수치를 신뢰하기 위한 기초입니다.

## 다음으로 갈 곳

- [리스크 컨트롤 →](/docs/risk-controls)
- [통합 리스크가 다른 점 →](/docs/how-unified-risk-differs-from-per-bot-risk)
- [하나의 플랫폼에서 암호화폐와 MT5 →](/docs/crypto-and-mt5-one-platform)

## 다음 단계

> **[리스크 컨트롤 가이드 읽기 →](/docs/risk-controls)**
