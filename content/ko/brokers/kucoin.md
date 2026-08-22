---
title: "KuCoin을 WolfBot Community에 연결 — 단계별"
description: "KuCoin을 WolfBot Community에 연결 — Passphrase로 API 키를 만들고 현물 및 선물 자동 거래를 시작하세요."
tested_version: "0.1.0-p12-ghcr-rc21"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["kucoin"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "8 minutes"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls"]
keywords: ["kucoin trading bot", "kucoin api bot", "connect kucoin to wolfbot"]
sitemap_priority: 0.80
lang: "ko"
translation_of: "brokers/kucoin"
---

# KuCoin을 WolfBot Community에 연결

**WolfBot Community v0.1.0-p12-ghcr-rc21에서 테스트됨** · 마지막 업데이트: 2026-08-15

**KuCoin 지원 상태:** 안정 · 데모 ✅ · 실계정 ✅ · 터미널 ✅ · 전략 ✅

## 이 가이드의 대상

KuCoin 계정을 WolfBot Community에 연결하려는 모든 사용자.

## 필요한 것

- KuCoin 계정 ([가입](https://www.kucoin.com/r/broker/WOLFBOTIO))
- WolfBot Community 설치
- 5분

---

## 1단계: KuCoin API 키 생성

1. [kucoin.com](https://www.kucoin.com/r/broker/WOLFBOTIO)에 로그인
2. **Account → API Management**로 이동
3. **Create API** 클릭
4. "WolfBot Community"로 라벨 지정
5. **API Passphrase** 설정 (KuCoin 필수 — 기억하세요!)
6. 권한:
   - Spot Trading: ✅ ON
   - Futures Trading: ✅ ON (선물 사용 시)
   - Withdrawal: ❌ OFF
   - Transfer: ❌ OFF
7. (권장) IP 주소 바인딩
8. 인증 완료 → Key, Secret, Passphrase 저장

> ⚠️ KuCoin은 Passphrase가 필요합니다. WolfBot에서 필요하므로 안전하게 보관하세요.

---

## 2단계: WolfBot에 추가

1. WolfBot → **Exchange Accounts → Add Account**
2. **KuCoin** 선택
3. 계정 유형 선택: **Spot** 또는 **Futures**
4. API Key, Secret Key, **Passphrase** 입력
5. **Test Connection** 클릭

---

## 3단계: 테스트

1. Smart Terminal → 거래쌍 선택
2. 데모 API 키로 시작 → 소액 실주문
3. KuCoin에서 확인 → 취소

---

## KuCoin 관련 참고

- **Passphrase 필수** — 대부분의 브로커와 달리 KuCoin은 API Passphrase 요구
- **데모:** KuCoin Sandbox로 테스트 가능
- **선물:** 사용 가능
- **토큰 다양성:** KuCoin은 많은 알트코인 쌍 지원

---

## 일반적인 문제

| 문제 | 해결책 |
|---|---|
| "Passphrase incorrect" | 다시 입력; Passphrase는 대소문자 구분 |
| API key invalid | KuCoin에서 재생성 |
| Permission denied | Spot Trading 활성화 |
| Connection timeout | 방화벽 확인 |

---

## 다음 단계

> **[리스크 관리 설정 →](/docs/risk-controls)**
