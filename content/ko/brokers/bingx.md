---
title: "BingX를 WolfBot Community에 연결 — 단계별"
description: "BingX를 WolfBot Community에 연결 — Trade-Only API 키를 만들고 Standard 및 Perpetual Futures 자동 거래를 시작하세요."
tested_version: "0.1.0-beta.4"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["bingx"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "8 minutes"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls", "/brokers/bybit"]
keywords: ["bingx trading bot", "bingx api bot", "connect bingx to wolfbot"]
sitemap_priority: 0.80
lang: "ko"
translation_of: "brokers/bingx"
---

# BingX를 WolfBot Community에 연결

**WolfBot Community v0.1.0-beta.4에서 테스트됨** · 마지막 업데이트: 2026-08-15

**BingX 지원 상태:** 안정 · 데모 ✅ · 실계정 ✅ · 터미널 ✅ · 전략 ✅

## 이 가이드의 대상

Standard 또는 Perpetual Futures 자동 거래를 위해 BingX 계정을 WolfBot Community에 연결하려는 모든 사용자.

## 필요한 것

- BingX 계정 ([가입](https://bingxdao.com/partner/Wolfbot/))
- WolfBot Community 설치
- 5분

---

## 1단계: BingX API 키 생성

1. [bingx.com](https://bingxdao.com/partner/Wolfbot/)에 로그인
2. **API Management**로 이동 (프로필/설정 아래)
3. **Create API Key** 클릭
4. "WolfBot Community"로 라벨 지정
5. 권한 설정:
   - Standard/Contract Trading: ✅ ON
   - Withdrawal: ❌ OFF
6. (권장) IP 주소 바인딩
7. 인증 완료 → Key + Secret 저장

> ⚠️ 출금을 절대 활성화하지 마세요 — WolfBot에는 거래만 필요합니다.

---

## 2단계: WolfBot에 추가

1. WolfBot → **Exchange Accounts → Add Account**
2. **BingX** 선택
3. **Standard** 또는 **Perpetual Futures** 선택
4. API Key + Secret 입력 → **Test Connection**

---

## 3단계: 테스트

1. Smart Terminal → 거래쌍 선택 (예: BTC/USDT)
2. 데모 API 키로 시작 → 소액 실지정가 주문
3. BingX에서 확인 → 테스트 주문 취소

---

## BingX 관련 참고

- **데모 거래:** 앱의 Derivatives → Perpetual Futures → Demo Trading에서 사용 가능 (가상 잔액 사용) — [작동 방식](https://bingx.com/en/wiki/detail/demo-trading) — 별도 API 키
- **선물:** WolfBot에서 Perpetual Futures 계정 유형 사용
- **카피 트레이딩:** WolfBot은 BingX 카피 트레이딩과 상호작용하지 않음

---

## 일반적인 문제

| 문제 | 해결책 |
|---|---|
| API key invalid | BingX에서 재생성 |
| Permission error | Standard/Contract Trading 활성화 |
| Connection timeout | 방화벽 확인, BingX 지역 제한 가능성 |

---

## 다음 단계

> **[리스크 관리 설정 →](/docs/risk-controls)**
