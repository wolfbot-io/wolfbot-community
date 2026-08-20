---
title: "Bitget을 WolfBot Community에 연결 — 단계별"
description: "Bitget을 WolfBot Community에 연결 — Trade-Only API 키를 만들고 현물 및 선물 자동 거래를 시작하세요."
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["bitget"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "8 minutes"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls"]
keywords: ["bitget trading bot", "bitget api bot", "connect bitget to wolfbot"]
sitemap_priority: 0.80
lang: "ko"
translation_of: "brokers/bitget"
---

# Bitget을 WolfBot Community에 연결

**WolfBot Community v0.1.0-p12-ghcr-rc20에서 테스트됨** · 마지막 업데이트: 2026-08-15

**Bitget 지원 상태:** 안정 · 데모 ✅ · 실계정 ✅ · 터미널 ✅ · 전략 ✅

## 이 가이드의 대상

Bitget 계정을 WolfBot Community에 연결하려는 모든 사용자.

## 필요한 것

- Bitget 계정 ([가입](https://partner.bitget.com/bg/WOLFBOT))
- WolfBot Community 설치
- 5분

---

## 1단계: Bitget API 키 생성

1. [bitget.com](https://partner.bitget.com/bg/WOLFBOT)에 로그인
2. **Account → API Management**로 이동
3. **Create API Key** 클릭
4. "WolfBot Community"로 라벨 지정
5. 권한 설정:
   - Trade: ✅ ON
   - Withdrawal: ❌ OFF
   - Transfer: ❌ OFF
6. (권장) IP 주소 바인딩
7. 인증 완료 → Key + Secret 저장

---

## 2단계: WolfBot에 추가

1. WolfBot → **Exchange Accounts → Add Account**
2. **Bitget** 선택
3. **Spot** 또는 **Futures** 선택
4. API Key + Secret 입력 → **Test Connection**

---

## 3단계: 테스트

1. Smart Terminal → 거래쌍 선택
2. 데모 API 키로 시작 → 소액 실지정가 주문
3. Bitget에서 확인 → 취소

---

## Bitget 관련 참고

- **데모 거래:** Bitget 테스트넷으로 테스트 가능
- **선물:** 사용 가능
- **카피 트레이딩:** WolfBot은 Bitget 카피 트레이딩과 상호작용하지 않음

---

## 일반적인 문제

| 문제 | 해결책 |
|---|---|
| API key invalid | Bitget에서 재생성 |
| Permission denied | Trade 권한 활성화 |
| IP restriction error | 내 IP 추가 또는 제한 비활성화 |

---

## 다음 단계

> **[리스크 관리 설정 →](/docs/risk-controls)**
