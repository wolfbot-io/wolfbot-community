---
title: "WolfBot Community 문제 해결 — 일반적인 문제"
description: "일반적인 WolfBot Community 문제 해결 — 연결 오류, 주문 거부, 서비스 시작 안 됨 등."
tested_version: "0.1.0-beta.2"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "troubleshooting"
difficulty: "beginner"
estimated_time: "15 minutes"
next_guide: "/docs/backup"
previous_guide: "/docs/updates"
related_guides: ["/docs/updates", "/docs/backup", "/security", "/docs/run-24-7-on-a-vps"]
keywords: ["wolfbot troubleshooting", "wolfbot error", "trading bot connection error", "wolfbot not starting", "api key error"]
sitemap_priority: 0.80
lang: "ko"
translation_of: "docs/troubleshooting"
---

# 문제 해결

**WolfBot Community v0.1.0-beta.2에서 테스트됨** · 마지막 업데이트: 2026-08-15

## 빠른 진단

WolfBot에는 일반적인 문제를 자동으로 감지하는 진단 명령이 포함되어 있습니다:

```bash
wolfbot doctor
```

문제가 있을 때 이 명령을 먼저 실행하세요 — 서비스 상태, 구성, 네트워크, 일반적인 구성 오류를 확인합니다.

---

## 일반적인 문제

### 1. 서비스 시작 안 됨

**증상:** 인터페이스가 로드되지 않음, 서비스 시작 안 됨.

**확인:**

```bash
# Linux
sudo systemctl status wolfbot

# Windows
# 서비스(services.msc)에서 "WolfBot" 검색
```

**해결책:**
- 로그 확인: `wolfbot logs`
- 포트가 점유되지 않았는지 확인
- 구성 변경 후 재시작
- 지속되면: `wolfbot repair` 실행

---

### 2. API 키 무효

**증상:** "API key invalid" 또는 "Authentication failed".

**해결책:**
1. WolfBot → **Exchange Accounts**에서 키 재입력
2. 키가 거래소에서 만료되거나 삭제되었는지 확인
3. 키에 **Trade** 권한이 있는지 확인
4. IP 바인딩 시 내 IP가 일치하는지 확인
5. 거래소에서 새 키 생성 후 재연결

---

### 3. 주문 거부

**증상:** 주문이 배치되지 않음, "Order rejected".

**일반적인 원인:**
- 리스크 한도 초과 (크기, 레버리지, 일일 한도)
- 잔액 부족
- 심볼 사용 불가
- 가격이 틱 크기를 벗어남

**해결책:**
- 리스크 관리 설정 확인
- 잔액 확인
- 선택한 계정의 심볼 확인
- 주문 크기를 거래소 틱 크기에 맞게 조정

---

### 4. 연결 문제

**증상:** 브로커 또는 MT5 연결 끊김, "Connection lost".

**해결책:**
- 네트워크 연결 확인
- 거래소 상태 확인 (점검 중?)
- MT5의 경우: MT5가 실행 중이고 로그인되었는지 확인
- 방화벽 설정 확인
- VPS의 경우: 서비스 실행 중인지 확인

---

### 5. 데이터가 표시되지 않음

**증상:** 잔액, 포지션, 차트가 로드되지 않음.

**해결책:**
- 브로커/MT5 연결 확인
- API 키 권한 확인 (Read 활성화 필수)
- 인터페이스 새로고침/재로드
- 로그에서 데이터 오류 확인

---

### 6. MT5 연결 안 됨

**증상:** MT5가 나타나지 않거나 주문 거부.

**해결책:**
- MT5가 실행 중이고 브로커에 로그인되었는지 확인
- Linux의 경우: MT5 컨테이너 활성 확인 ([MT5 가이드](/brokers/mt5) 참조)
- MT5에서: Tools → Options → Expert Advisors → **Allow Automated Trading** 활성화
- 브로커의 최소 랏 크기 및 거래 시간 확인

---

## 로그

### 로그 보기

```bash
# Linux
wolfbot logs

# Windows
# 로그는 %USERPROFILE%\.wolfbot\logs\에 있음
```

### 로그 이해

로그는 식별을 위한 태그를 사용합니다:
- `[EXEC]` — 주문 실행
- `[TP/SL]` — 테이크프로핏/스톱로스
- `[COOLDOWN]` — 쿨다운 이벤트
- `[FETCHER]` — 시장 데이터 가져오기
- `[MT5-BRIDGE]` — MT5 브리지 이벤트

---

## 복구 명령

구성이 손상되었거나 서비스가 나쁜 상태인 경우:

```bash
wolfbot repair
```

이는:
- 구성 무결성 확인
- 일반적인 구성 문제 복구
- 손상된 상태 복원

---

## 백업에서 복원

모든 것이 실패하면 백업에서 복원하세요:

```bash
wolfbot restore-backup
```

[백업 & 복원 참조 →](/docs/backup)

---

## 도움을 요청해야 할 때

문제를 해결할 수 없으면:
1. 관련 로그 수집 (시크릿은 가리세요!)
2. 재현 단계 기록
3. [GitHub Discussion](https://github.com/wolfbot-io/wolfbot-community/discussions) 작성
4. 세부 정보 제공: 운영체제, 버전, 브로커, 오류 메시지

> ⚠️ 토론에 API 키, 비밀번호, 개인 데이터를 절대 공유하지 마세요.

---

## 다음 단계

> **[백업 & 복원 →](/docs/backup)**
