---
title: "Trade-Only API 키 설명"
description: "거래 봇 연결 시 '출금 금지' 설정이 가장 중요한 보안 통제인 이유와 그것이 자본을 보호하는 방법."
tested_version: "0.1.0-p12-ghcr-rc17"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "security"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/brokers/api-key-guide"
related_guides: ["/brokers/api-key-guide", "/security", "/docs/why-bots-fail-risk-management"]
keywords: ["trade only api key", "api key permissions", "no withdrawal api key", "trading bot security", "api key safety"]
sitemap_priority: 0.80
lang: "ko"
translation_of: "docs/trade-only-api-keys-explained"
---

# Trade-Only API 키 설명

**WolfBot Community v0.1.0-p12-ghcr-rc17에서 테스트됨** · 마지막 업데이트: 2026-08-15

## 가장 중요한 보안 결정

거래 계정을 소프트웨어에 연결할 때, 거의 모든 자본을 보호하는 단 하나의 결정을 내립니다:

> **거래 소프트웨어에 사용하는 API 키에 출금(Withdrawal) 권한을 절대 활성화하지 마세요.**

## 이 가이드의 대상

- **모든 트레이더:** 이 한 가지 설정이 돈을 보호하는 이유를 간단한 말로 이해하세요.
- **기술 사용자:** API 권한 범위의 정확한 설명과 Trade-Only가 올바른 원칙인 이유를 확인하세요.

## API 키란?

API 키는 앱에 주는 **계정의 열쇠**와 같습니다. 활성화하는 "권한"에 따라 다른 키가 다른 작업을 수행할 수 있습니다.

## 세 가지 권한 유형

거의 모든 거래소는 세 가지 기본 권한을 제공합니다:

| 권한 | 허용하는 것 | 거래 봇용? |
|---|---|---|
| **Read** | 잔액 및 내역 보기 | ✅ 활성화 |
| **Trade** | 주문 배치/취소 | ✅ 활성화 |
| **Withdrawal** | 자금 출금 | ❌ **절대 안 됨** |

## 출금이 위험한 이유

키에 **Withdrawal** 권한이 있으면:

- 키를 가진 누구나 **계정에서 자금을 출금할 수 있음**
- 소프트웨어가 손상되면 공격자가 자금을 훔칠 수 있음
- 버그가 있으면 의도치 않은 출금이 발생할 수 있음

출금 권한이 없으면:
- 일어날 수 있는 **최악**은 원치 않는 거래 (보고 되돌릴 수 있음)
- 자금이 계정을 **떠날 수 없음**
- 자본에 대한 완전한 통제 유지

## WolfBot이 이를 강제하는 방법

WolfBot Community는 Read 및 Trade 권한만 필요하도록 설계되었습니다. WolfBot에는 출금을 요구하는 **기능이 없습니다** — WolfBot이 논커스터디얼이며 자금을 절대 건드리지 않기 때문입니다.

출금 권한이 있는 API 키를 WolfBot에 입력하면 모범 사례에 반하는 것입니다. 출금 없이 키를 다시 만들 것을 강력히 권장합니다.

## 단계별 (모든 거래소)

### Binance

1. **API Management** → **Create API**
2. 활성화: `Enable Spot & Margin Trading`
3. 비활성화: `Enable Withdrawals` (기본 꺼짐 유지)
4. (권장) 내 IP로 제한

### Bybit

1. **API Management** → **Create New Key**
2. 활성화: `Trade`
3. 비활성화: `Withdrawal`, `Transfer`
4. (권장) IP 바인딩

### BingX / KuCoin / Bitget

동일한 패턴 — `Trade` 활성화, `Withdrawal` 비활성화, 내 IP로 제한.

> 거래소별 전체 안내는 [Trade-Only API 키 가이드 →](/brokers/api-key-guide) 참조

## 손상된 Trade-Only 키가 의미하는 것

최악의 경우에도 피해는 제한적입니다:

| 시나리오 | 출금 포함 | Trade-Only |
|---|---|---|
| 공격자가 키 탈취 | 자금 **출금** 가능 | 거래만 가능 |
| 소프트웨어 버그 | 출금 유발 가능 | 원치 않는 거래만 |
| 결과 | **자본 손실** | **복구 가능** |

원치 않는 거래는 나쁘지만 즉시 보고 청산할 수 있습니다. 출금은 종종 **돌이킬 수 없습니다**.

## 추가 보호 조치

1. **IP 바인딩** — 내 기기로 키 제한
2. **별도 키** — 서비스당 하나의 키
3. **정기 감사** — 오래된 키 삭제
4. **즉시 취소** — 의심 시 즉시 삭제

---

## 자주 묻는 질문

**Q: 거래소가 출금 활성화를 강요하면 어떻게 하나요?**
어떤 주요 거래소도 강요하지 않습니다. 강요하는 서비스는 피하세요 — 위험 신호입니다.

**Q: Trade-Only 키로 WolfBot이 완전히 작동하나요?**
네. 모든 WolfBot 기능(주문, 포지션, 리스크 관리)은 Read + Trade만 필요합니다.

**Q: Transfer 권한은 어떤가요?**
Transfer는 계정 간(예: 현물 ↔ 선물) 자금 이동입니다. WolfBot에는 필요하지 않습니다 — 역시 비활성화하세요.

---

## 다음 단계

> **[Trade-Only API 키 가이드 →](/brokers/api-key-guide)** — 각 거래소별 단계별 안내
