---
title: "Bybit를 WolfBot Community에 연결 — 단계별"
description: "Bybit를 WolfBot Community에 연결 — Trade-Only API 키를 만들고 현물, 선물, 데모 자동 거래를 시작하세요."
tested_version: "0.1.0-beta.9"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["bybit"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/docs/risk-controls"
previous_guide: "/docs/simulation"
related_guides: ["/docs/simulation", "/docs/risk-controls", "/brokers/api-key-guide"]
keywords: ["bybit trading bot", "bybit self hosted bot", "bybit api trading automation", "connect bybit to wolfbot"]
sitemap_priority: 0.85
lang: "ko"
translation_of: "brokers/bybit"
---

# Bybit를 WolfBot Community에 연결

**WolfBot Community v0.1.0-beta.9에서 테스트됨** · 마지막 업데이트: 2026-08-15

**Bybit 지원 상태:** 안정 · 데모 ✅ · 실계정 ✅ · 터미널 ✅ · 전략 ✅

## 이 가이드의 대상

자동 거래를 위해 Bybit 계정(데모 또는 실계정)을 WolfBot Community에 연결하려는 모든 사용자.

## 필요한 것

- Bybit 계정 ([가입](https://partner.bybit.com/b/WOLFBOT))
- WolfBot Community 설치 및 실행
- 5분

---

## 1단계: Bybit API 키 생성

### 데모(테스트넷)용

1. [testnet.bybit.com](https://testnet.bybit.com)에서 로그인
2. **Account & Security → API Management**로 이동
3. **Create New Key** 클릭
4. **System-generated API Key** 선택
5. 권한 설정:
   - ✅ **Trade** (읽기-쓰기)
   - ❌ **Withdrawal** (비활성)
   - ❌ **Transfer** (비활성)
6. (선택) 보안 강화를 위해 IP 주소 바인딩
7. **Confirm** 클릭
8. **API Key와 Secret Key 복사·저장**

### 실거래용

1. [bybit.com](https://partner.bybit.com/b/WOLFBOT)에서 로그인
2. **Account & Security → API Management**로 이동
3. 데모와 동일한 단계 — 출금/전송은 항상 비활성

> ⚠️ **중요:** 출금(Withdrawal) 또는 전송(Transfer) 권한을 절대 활성화하지 마세요. WolfBot에는 거래 권한만 필요합니다.

---

## 2단계: Bybit 계정 추가

1. WolfBot Community 열기
2. **Exchange Accounts → Add Account**로 이동
3. 브로커 목록에서 **Bybit** 선택
4. 계정 유형 선택: **Demo** 또는 **Live**
5. API Key와 Secret Key 입력
6. **Test Connection** 클릭

WolfBot이 다음을 확인합니다:
- API 키 유효성
- 권한 정확성
- 네트워크 연결

---

## 3단계: 연결 테스트

연결 성공 후:

1. **Smart Terminal**로 이동
2. Bybit 거래쌍 선택 (예: BTC/USDT)
3. 첫 테스트는 **Simulation** 모드인지 확인
4. 소액 시뮬레이션 주문 배치
5. 주문이 Positions에 나타나는지 확인

그런 다음 **Live**(데모 또는 실계정)로 전환:
1. 최소 포지션 크기로 시작
2. 소액 지정가 주문 배치
3. Bybit에서 주문이 나타나는지 확인
4. 테스트 주문 취소

---

## 4단계: 설정 구성

Bybit 권장 설정:

| 설정 | 데모 | 실계정 |
|---|---|---|
| 모드 | 먼저 Simulation, 그 다음 Live | 소액으로 시작 |
| 포지션 크기 | 임의 | 최소 |
| 최대 레버리지 | 임의 | 1x부터 시작 |
| TP/SL | 활성 | 활성 |
| Hedge 모드 | 선택 | 선택 |

---

## 기대 결과

설정 성공 후:
- **Exchange Accounts**에 Bybit가 "Connected"로 표시
- Smart Terminal에 Bybit 잔액 표시
- Bybit에 나타나는 주문 배치 가능

---

## 일반적인 문제

| 문제 | 해결책 |
|---|---|
| "API key invalid" | 키 만료 여부 확인, 필요시 재생성 |
| "Permission denied" | Trade 활성화, Withdrawal 비활성 확인 |
| "Connection timeout" | 방화벽/네트워크 확인 |
| "IP restriction" | 내 기기 IP가 API 키 제한과 일치하는지 확인 |
| "Insufficient balance" | 실계정: 입금, 데모: 테스트넷 잔액 요청 |

---

## Bybit 관련 참고

- **Hedge 모드:** 지원. Bybit 계정 설정에서 먼저 활성화 후 WolfBot에서 사용
- **포지션 모드:** One-Way 및 Hedge 모드 모두 지원
- **주문 유형:** Market, Limit, TP/SL, DCA 모두 지원
- **Rate limits:** WolfBot이 Bybit rate limit을 자동 준수

---

## 다음 단계

> **[리스크 관리 설정 →](/docs/risk-controls)** 또는 **[Binance 연결 →](/brokers/binance)**
