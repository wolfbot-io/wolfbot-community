---
title: "Binance를 WolfBot Community에 연결 — 단계별"
description: "Binance를 WolfBot Community에 연결 — Trade-Only API 키를 만들고 현물 및 선물 자동 거래를 시작하세요."
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["binance"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "10 minutes"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls", "/brokers/bybit"]
keywords: ["binance trading bot", "binance api bot", "connect binance to wolfbot"]
sitemap_priority: 0.85
lang: "ko"
translation_of: "brokers/binance"
---

# Binance를 WolfBot Community에 연결

**WolfBot Community v0.1.0-p12-ghcr-rc20에서 테스트됨** · 마지막 업데이트: 2026-08-15

**Binance 지원 상태:** 안정 · 데모 ✅ · 실계정 ✅ · 터미널 ✅ · 전략 ✅

## 이 가이드의 대상

Binance 계정(데모 또는 실계정)을 WolfBot Community에 연결하려는 모든 사용자.

## 필요한 것

- Binance 계정 ([가입](https://accounts.binance.com/register?ref=WOLFBOT))
- WolfBot Community 설치
- 5분

---

## 1단계: Binance API 키 생성

1. [binance.com](https://accounts.binance.com/register?ref=WOLFBOT)에 로그인
2. **프로필 → API Management**로 이동
3. **Create API** 클릭
4. **System generated** 선택
5. 권한 설정:
   - ✅ **Enable Spot & Margin Trading**
   - ❌ **Enable Withdrawals** (비활성)
6. (권장) 신뢰할 수 있는 IP로 제한
7. **Create** 클릭
8. **API Key와 Secret Key를 복사·저장**

> ⚠️ **중요:** 출금(Withdrawal) 권한을 절대 활성화하지 마세요. WolfBot에는 거래 권한만 필요합니다.

---

## 2단계: WolfBot에 추가

1. WolfBot → **Exchange Accounts → Add Account**
2. 브로커 목록에서 **Binance** 선택
3. 계정 유형 선택: **Spot** 또는 **Futures**
4. API Key와 Secret Key 입력
5. **Test Connection** 클릭

---

## 3단계: 연결 테스트

1. Smart Terminal → 거래쌍 선택 (예: BTC/USDT)
2. 데모 API 키로 시작 → 소액 실주문
3. Binance에서 주문 확인 → 테스트 주문 취소

---

## Binance 관련 참고

- **현물과 선물** 모두 지원
- **Hedge 모드** 지원
- **주문 유형:** Market, Limit, TP/SL, DCA 모두 지원
- **Rate limit:** WolfBot이 자동으로 준수

---

## 일반적인 문제

| 문제 | 해결책 |
|---|---|
| API key invalid | Binance에서 키 재생성 |
| Permission denied | Spot & Margin Trading 활성화 확인 |
| IP restriction | 내 IP가 허용 목록에 있는지 확인 |

---

## 다음 단계

> **[리스크 관리 설정 →](/docs/risk-controls)**
