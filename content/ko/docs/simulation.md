---
title: "WolfBot Community에서 데모 계정으로 시작하기"
description: "WolfBot Community를 브로커 데모 계정으로 위험 없이 테스트하는 방법. 실제 자금을 걸지 않고 암호화폐 및 MT5 시장에서 실시간 데이터로 페이퍼 트레이딩하세요."
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "simulation"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/brokers/bybit"
previous_guide: "/getting-started"
related_guides: ["/getting-started", "/docs/risk-controls", "/docs/smart-terminal"]
keywords: ["wolfbot simulation", "wolfbot paper trading", "wolfbot demo mode", "test trading bot without money", "bybit demo account"]
sitemap_priority: 0.85
lang: "ko"
translation_of: "docs/simulation"
---

# 데모 계정으로 시작하기

**WolfBot Community v0.1.0-p12-ghcr-rc8에서 테스트됨** · 마지막 업데이트: 2026-08-15

## WolfBot의 "Simulation"이란?

WolfBot에는 켜고 끄는 별도의 전역 "시뮬레이션 모드"가 없습니다. 대신 브로커 자체의 **데모(테스트넷) 계정**을 연결합니다 — 실거래와 동일한 인터페이스, 동일한 리스크 엔진, 동일한 주문 로직이지만 실제 자금 대신 가상 잔액으로 실시간 시장 데이터에 대해 실행됩니다. 플랫폼은 데모와 실거래 사이에 아무것도 변하지 않으며, 거래하는 계정만 다릅니다.

Bybit의 경우 WolfBot은 API 키가 데모 계정인지 실계정인지 자동 감지합니다 — 모드를 수동으로 선택하지 않습니다.

## 왜 데모 계정으로 시작하나요?

1. **제로 위험** — 실제 자금이 관여하지 않음
2. **인터페이스 학습** — 시장 전반에서 주문, 포지션, 리스크 관리 이해
3. **전략 테스트** — 실거래 전에 암호화폐 및 MT5 상품에서 접근 방식 검증
4. **신뢰 구축** — 다양한 자산 클래스에서 WolfBot이 시장 움직임에 반응하는 방식 확인

## 1단계: 데모 계정 연결

1. WolfBot Community 열기 → **Exchange Accounts → Add Account**
2. **Bybit** 선택 후 데모/테스트넷 API 키 생성 — 정확한 단계는 [Bybit 연결 가이드](/brokers/bybit) 참조
3. 키 붙여넣기. WolfBot이 데모 키임을 자동 감지하고 계정에 그에 맞게 라벨을 붙임
4. MT5 사용자: 대부분의 MT5 브로커도 무료 데모 계정을 제공 — 브로커 대시보드를 확인한 후 [MT5 연결 가이드](/brokers/mt5)를 따르세요

## 2단계: Smart Terminal 탐색

Smart Terminal은 수동 거래 인터페이스입니다 — 나중에 실거래에 사용하는 것과 동일합니다.

1. **Smart Terminal**로 이동
2. 데모 계정 선택 후 거래쌍 선택 (예: 암호화폐는 BTC/USDT, MT5로 금은 XAU/USD)
3. 미리 채워진 리스크 파라미터 확인:
   - 포지션 크기
   - 스톱로스
   - 테이크프로핏
4. **Place Order** 클릭

주문이 **Positions** 패널에 즉시 나타납니다 — 데모 계정의 가상 잔액으로 자금 지원됩니다.

## 3단계: 데모 포트폴리오 관찰

1. **Portfolio Overview**로 이동
2. 데모 계정의 잔액과 P&L 확인
3. 실시간 시장 가격으로 포지션이 업데이트되는지 관찰
4. TP/SL 레벨이 포지션을 보호하는 방식 관찰

## 4단계: 리스크 관리 구성

데모 모드에서도 좋은 리스크 관리를 연습하세요 — 이 설정은 실계정 연결 시 동일하게 적용됩니다:

1. **Position Limits** — 거래당 최대 크기
2. **Drawdown Guards** — 중단 전 최대 손실
3. **Cooldowns** — 거래 간 최소 시간
4. **Daily Limits** — 하루 최대 거래 수

> 🛡️ 리스크 관리는 데모와 실계정에서 동일하게 작동합니다. 실거래 준비를 위해 지금 구성하세요.

[리스크 관리 가이드 참조 →](/docs/risk-controls)

## 5단계: 자동 봇 시도

1. **Bots → Create Bot**으로 이동
2. 전략 템플릿 선택
3. 파라미터 구성
4. 봇을 데모 계정으로 설정
5. 자동으로 거래를 실행하는지 관찰 — 암호화폐 및 MT5 상품에서 동일한 로직 실행

## 실거래로 전환

자신이 생기면:
1. 실거래 Trade-Only API 키로 브로커 계정 연결 ([시장 연결](/getting-started) 참조)
2. 최소 포지션 크기로 시작
3. 좁은 스톱로스 유지
4. 행동을 확인하면서 점진적으로 확대

> ⚠️ 숙련된 트레이더도 새로운 전략은 먼저 데모 계정에서 테스트해야 합니다 — 특히 다양한 시장 유형을 거래할 때.

## 자주 묻는 질문

**Q: 데모 계정은 실제 시장 데이터를 사용하나요?**
네. WolfBot은 데모 및 실계정 모두 거래소와 MT5 브로커로부터 실시간 가격을 가져옵니다.

**Q: 데모 계정에서 돈을 잃을 수 있나요?**
아니요. 데모 계정은 실제 자금이 아닌 거래소/브로커의 가상 잔액으로 거래합니다.

**Q: 데모는 실거래와 얼마나 현실적인가요?**
WolfBot은 둘 다 동일한 주문 로직을 실행합니다. 주요 차이는 체결입니다 — 데모 계정은 실제 주문장이 아닌 거래소 테스트넷에서 체결되므로 슬리피지가 약간 다를 수 있습니다. 이는 암호화폐, 외환, 금 거래에 관계없이 동일합니다.

**Q: 데모 잔액을 재설정할 수 있나요?**
이는 WolfBot이 아닌 거래소에 따라 다릅니다 — 대부분의 브로커는 자체 웹사이트에서 데모 계정의 가상 잔액을 충전하거나 재설정할 수 있습니다(예: Bybit 테스트넷 대시보드).

## 다음 단계

> **[Bybit 데모 연결 →](/brokers/bybit)** 또는 **[리스크 관리 탐색 →](/docs/risk-controls)**
