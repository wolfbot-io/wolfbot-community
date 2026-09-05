---
title: "WolfBot Community 백업 & 복원"
description: "Windows와 Linux에서 WolfBot Community의 구성, 계정, 설정을 백업하고 복원하는 방법."
tested_version: "0.1.0-beta.9"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "backup"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/docs/updates"
previous_guide: "/docs/troubleshooting"
related_guides: ["/docs/updates", "/docs/troubleshooting", "/security"]
keywords: ["wolfbot backup", "wolfbot restore", "wolfbot config backup", "backup trading bot settings"]
sitemap_priority: 0.80
lang: "ko"
translation_of: "docs/backup"
---

# 백업 & 복원

**WolfBot Community v0.1.0-beta.9에서 테스트됨** · 마지막 업데이트: 2026-08-15

## 무엇이 백업되나요?

WolfBot Community의 백업에는 전체 설정이 포함됩니다:

- **계정 구성** — 연결된 암호화폐 거래소 및 MT5 브로커 (API 키 암호화)
- **리스크 관리 설정** — 모든 한도, 드로다운 보호, 쿨다운
- **전략 구성** — 봇 설정
- **사용자 기본 설정** — 인터페이스 및 표시 설정

---

## 백업 생성 (CLI)

WolfBot Community는 명령줄을 통해 백업 및 복원을 제공합니다.

### Linux

```bash
# 압축 파일로 백업 생성
wolfbot backup

# 기본 백업 디렉터리에 저장됩니다
```

### Windows

```bash
# WolfBot CLI를 통해 백업 생성
wolfbot backup
```

> ℹ️ 백업 명령은 구성과 설정을 백업합니다. 시장 데이터와 거래 내역은 WolfBot에 저장되며 필요시 별도로 내보낼 수 있습니다.

---

## 복원 (CLI)

### Linux

```bash
# 백업에서 복원
wolfbot restore-backup
```

### Windows

```bash
wolfbot restore-backup
```

프롬프트에 따라 백업 파일을 선택합니다.

---

## 백업 저장 위치

기본적으로 WolfBot은 지정된 위치에 백업을 저장합니다:

| 운영체제 | 기본 백업 디렉터리 |
|---|---|
| Linux | `/opt/wolfbot/backups/` |
| Windows | `%USERPROFILE%\.wolfbot\backups\` |

---

## 모범 사례

### 정기 백업

- 주요 구성 변경 후 백업
- 업데이트 전 백업
- 활발히 거래 중일 때 주간 백업
- 백업을 별도의 안전한 위치에 보관

### 보안

- 백업에는 암호화된 API 시크릿이 포함됨
- 백업 파일을 기밀로 취급
- 암호화되지 않은 클라우드 저장소에 백업 보관 금지
- 더 이상 필요 없는 오래된 백업 삭제

---

## 자동 백업

Linux에서는 cron으로 백업을 예약할 수 있습니다:

```bash
# 예: 매주 일요일 오전 3시에 백업
0 3 * * 0 wolfbot backup
```

---

## 새 기기에서 백업 및 복원

새 기기로 마이그레이션하려면:

1. **이전 기기에서:** `wolfbot backup` 실행
2. **백업 파일 전송** — 안전하게 (예: SSH/SCP)
3. **새 기기에서:** WolfBot Community 설치
4. `wolfbot restore-backup` 실행 후 전송된 파일 선택

---

## 문제 해결

| 문제 | 해결책 |
|---|---|
| 백업 명령을 찾을 수 없음 | WolfBot이 올바르게 설치되었는지 확인; 터미널 재시작 |
| 복원 실패 | 백업 파일이 손상되지 않았는지 확인 |
| "Permission denied" (Linux) | `sudo` 사용 또는 파일 권한 확인 |

---

## 다음 단계

> **[업데이트 가이드 →](/docs/updates)**
