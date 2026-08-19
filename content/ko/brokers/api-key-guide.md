---
title: "Trade-Only API 키 가이드 — 보안 모범 사례"
description: "WolfBot Community를 위한 안전한 Trade-Only API 키를 만드는 방법. 출금 권한을 절대 활성화하지 마세요. Binance, Bybit, BingX, KuCoin, Bitget 가이드."
tested_version: "0.1.0-p12-ghcr-rc17"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["binance", "bybit", "bingx", "kucoin", "bitget"]
category: "security"
difficulty: "beginner"
estimated_time: "5 minutes"
related_guides: ["/brokers/bybit", "/brokers/binance", "/security", "/docs/trade-only-api-keys-explained"]
keywords: ["trade only api key", "api key security trading bot", "non custodial trading bot", "safe api key setup"]
sitemap_priority: 0.80
lang: "ko"
translation_of: "brokers/api-key-guide"
---

# Trade-Only API 키 가이드

**WolfBot Community v0.1.0-p12-ghcr-rc17에서 테스트됨** · 마지막 업데이트: 2026-08-15

## 왜 Trade-Only인가?

WolfBot Community는 **논커스터디얼(non-custodial)** 입니다 — 자금을 절대 보유하지 않습니다. 내가 통제하는 API 키를 통해 거래소에 연결합니다. 이 키는 언제든지 취소할 수 있습니다.

**황금 규칙:** 거래 소프트웨어에 사용하는 API 키에 출금(Withdrawal) 또는 전송(Transfer) 권한을 절대 활성화하지 마세요. 이 한 가지 설정이 다른 어떤 것보다 중요한 이유는 [Trade-Only API 키 설명 →](/docs/trade-only-api-keys-explained)을 참조하세요.

## 필요한 권한

WolfBot에는 다음 권한만 필요합니다:

| 권한 | 필요 | 이유 |
|---|---|---|
| **Trade** (읽기-쓰기) | ✅ 예 | 주문 배치/취소, 포지션 확인 |
| **Read** (읽기 전용) | ✅ 예 | 잔액, 포지션, 주문 내역 읽기 |
| **Withdrawal** | ❌ 절대 안 됨 | WolfBot은 자금을 출금하지 않음 |
| **Transfer** | ❌ 절대 안 됨 | WolfBot은 계정 간 전송하지 않음 |

거래소가 세분화된 권한을 제공하면 다음도 비활성화하세요:
- ❌ **Withdrawal**
- ❌ **Internal Transfer**
- ❌ **Sub-account Transfer**
- ❌ **Earn/Staking** 관리

## 거래소별

### Binance
1. API Management → Create API
2. 활성화: **Enable Spot & Margin Trading**
3. 비활성화: **Enable Withdrawals**
4. (권장) 신뢰할 수 있는 IP로 제한

### Bybit
1. API Management → Create New Key
2. 활성화: **Trade** 권한
3. 비활성화: **Withdrawal**, **Transfer**
4. (권장) IP 주소 바인딩

### BingX
1. API Management → Create API Key
2. 활성화: **Trade**
3. 비활성화: **Withdrawal**
4. (권장) IP 접근 제한

### KuCoin
1. API Management → Create API
2. 활성화: Spot Trading에서 **Trade**
3. 비활성화: **Withdrawal**, **Transfer**
4. Passphrase 설정 (KuCoin 필수)

### Bitget
1. API Management → Create API Key
2. 활성화: **Trade**
3. 비활성화: **Withdrawal**
4. (권장) IP 바인딩

## 추가 보안 팁

### IP 바인딩 (권장)
지원되는 경우 API 키를 내 기기의 IP 주소에 바인딩하세요:
- 다른 위치에서의 사용 방지
- IP 변경 시 업데이트
- 24/7 운영에는 고정 IP 또는 VPS 사용

### 서비스별 별도 키
- WolfBot Community용 API 키 하나
- 포트폴리오 추적 앱용 다른 키
- 개별 통합 취소가 쉬워짐

### 정기 점검
- 매월 API 키 확인
- 미사용 키 삭제
- 정기적으로 키 재생성

### 키 보관
- API 시크릿을 안전하게 보관 (WolfBot이 로컬에서 암호화)
- 스크린샷이나 지원 메시지에 키 공유 금지
- 클라우드 메모나 이메일에 키 저장 금지

---

## 키가 손상되면 어떻게 되나요?

1. **즉시** 거래소에서 API 키 삭제
2. 계정에 무단 활동이 있는지 확인
3. 새 Trade-Only 키 생성
4. WolfBot을 새 키로 업데이트

출금이 비활성화되어 있으므로 손상된 Trade-Only 키는 자금을 훔칠 수 없습니다 — 하지만 원치 않는 거래를 할 수 있습니다. 항상 신속하게 대응하세요.

---

## 다음 단계

> **[Bybit 연결 →](/brokers/bybit)** 또는 **[보안 개요 →](/security)**
