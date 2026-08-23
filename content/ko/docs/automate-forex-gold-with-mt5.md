---
title: "MT5로 외환과 금 자동매매 — 골드, FX, 상품 전략을 셀프 호스팅으로 실행하기"
description: "MT5로 외환, 금, 상품 CFD 전략을 자신의 컴퓨터나 VPS에서 암호화폐와 나란히 자동화하세요 — 동일한 WolfBot 인터페이스, 통합 리스크, 하나의 포트폴리오."
tested_version: "0.1.0-beta.2"
last_updated: "2026-08-18"
platforms: ["linux", "windows"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/docs/mt5-symbol-mapping"
related_guides: ["/docs/mt5-without-windows-vps", "/docs/mt5-troubleshooting", "/brokers/mt5", "/docs/risk-controls"]
keywords: [
  "외환 자동매매 봇",
  "MT5 금 거래 봇",
  "MT5 외환 금 자동화",
  "상품 거래 봇",
  "메타트레이더5 셀프 호스팅",
  "외환 금 MT5 울프봇"
]
sitemap_priority: 0.8
lang: "ko"
translation_of: "docs/automate-forex-gold-with-mt5"
---

# MT5로 외환과 금 자동매매

**WolfBot Community v0.1.0-beta.2에서 테스트됨** · 마지막 업데이트: 2026-08-18

## 이 가이드의 대상

- **외환, 금, 지수 또는 상품 CFD를 거래하며 자신의 컴퓨터에서 자동화하고 싶은 분** — 두 번째 Windows 서버를 임대하지 않고도 WolfBot Community에서 MT5 전략을 실행하는 방법을 설명합니다.
- **기술에 익숙한 분** — MT5 터미널, 심볼 매핑, WolfBot의 통합 리스크가 어떻게 맞물리는지 확인해 정확히 무엇이 어디서 실행되는지 알 수 있습니다.

## 외환, 금, MT5 — 고전적인 자동화 문제

MetaTrader 5는 대부분의 FX, 금, CFD 트레이더가 이미 사용하는 도구입니다. 전통적으로 이를 자동화하려면 그 외 무엇을 실행하든 상관없이 MT5 터미널 하나를 계속 살려두기 위해 **Windows 머신을 24/7 가동**해야 했습니다 — 대개는 임대한 VPS였습니다.

WolfBot Community는 그 두 번째 머신을 없앱니다. MT5는 나머지 WolfBot과 동일한 Linux 박스(또는 Windows)의 컨테이너 안에서 실행되므로, 금/FX 전략과 암호화폐 전략이 하나의 플랫폼에 함께 존재합니다.

## 자동화된 금·FX 거래가 맞물리는 방식

```text
Your machine (or VPS), 24/7
    │
    ├── WolfBot Community — strategies + unified risk + portfolio
    │
    └── MT5 bridge container
            ├── real MT5 terminal (headless, your broker account)
            └── browser window into it (no remote desktop)
```

MT5 금/FX 전략, 암호화폐 선물 전략, 수동 포지션이 모두 **하나의 대시보드, 하나의 리스크 엔진, 하나의 포트폴리오 뷰**에 나타납니다 — 여러 앱에 흩어져 있지 않습니다.

## 시장 전반에서 심볼이 그냥 맞아떨어짐

MT5에서 금 전략은 금속을 `XAUUSD`로 표기하지만, 암호화폐 거래소에서는 토큰화된 금 페어인 `PAXGUSDT`로 보유할 수 있습니다. WolfBot의 심볼 매핑이 이를 자동으로 조정하므로([심볼 매핑 가이드](/docs/mt5-symbol-mapping) 참고), 포트폴리오에는 서로 연결되지 않은 두 시장이 아니라 하나의 "Gold" 상품이 표시됩니다.

## 시뮬레이션부터 시작하기

먼저 MT5 **Demo** 계정을 연결하고(연결 가이드가 단계별로 안내합니다), 심볼이 기대한 대로 해석되는지 확인한 뒤, 신뢰가 생길 때까지 Simulation에서 전략을 실행하세요. 그런 다음에만 Live 계정을 연결하고 신중하게 진행하세요.

## 시작하기

- [MT5 연결하기 →](/brokers/mt5) — Windows와 Linux 단계별 안내
- [MT5 심볼 매핑 →](/docs/mt5-symbol-mapping)
- [Windows VPS 없이 MT5 실행하기 →](/docs/mt5-without-windows-vps)

## 다음 단계

> **[MT5 심볼 매핑 →](/docs/mt5-symbol-mapping)**
