---
title: "WolfBot Community 업데이트 — Windows & Linux"
description: "채널과 롤백을 포함해 Windows와 Linux에서 WolfBot Community를 최신 버전으로 업데이트하는 방법."
tested_version: "0.1.0-p12-ghcr-rc19"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "updates"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/docs/troubleshooting"
previous_guide: "/docs/backup"
related_guides: ["/docs/backup", "/docs/troubleshooting", "/releases/channels"]
keywords: ["wolfbot update", "wolfbot upgrade", "update trading bot", "wolfbot auto update"]
sitemap_priority: 0.85
lang: "ko"
translation_of: "docs/updates"
---

# 업데이트

**WolfBot Community v0.1.0-p12-ghcr-rc19에서 테스트됨** · 마지막 업데이트: 2026-08-15

## 업데이트 방법

WolfBot Community는 필요한 경우 이전 버전으로 돌아갈 수 있는 간편한 업데이트를 제공합니다.

---

## 자동 업데이트

기본적으로 WolfBot은 업데이트를 확인하고 다운로드합니다:

1. 시작 시 WolfBot이 구성된 채널의 새 릴리스를 확인
2. 업데이트가 있으면 알림 표시
3. 적용 시점 선택
4. 업데이트가 다운로드, 검증, 적용됨

> ℹ️ 실거래에는 **Stable** 채널이 권장됩니다. 설치하는 릴리스를 통해 채널을 선택하세요 ([릴리스 채널](/releases/channels) 참조).

---

## 수동 업데이트 (CLI)

### Linux

```bash
# 최신 버전으로 업데이트
wolfbot update
```

### Windows

```bash
wolfbot update
```

---

## 롤백

업데이트가 문제를 일으키면 이전 버전으로 돌아갈 수 있습니다:

```bash
wolfbot rollback
```

이전에 설치된 버전을 복원합니다.

---

## 업데이트 채널

리스크 프로필에 맞는 채널을 선택하세요:

| 채널 | 권장 대상 | 업데이트 주기 |
|---|---|---|
| **Stable** | 실거래 | 월간 |
| **Beta** | 테스터 | 주간 |
| **Dev Preview** | 개발자 | 주당 여러 번 |

> 💡 전체 설명은 [릴리스 채널](/releases/channels) 참조

---

## 업데이트 전

### 1. 백업 생성

업데이트 전에 항상 백업을 생성하세요:

```bash
wolfbot backup
```

### 2. 포지션 상태 확인

- 중요한 포지션이 보호되지 않는지 확인
- 불확실하면 TP/SL 레벨 확인
- 주요 업데이트 전 일시 중지 고려

### 3. 시점 선택

- 활발한 거래 시간 외에 업데이트
- 재시작을 위한 몇 분 계획
- 롤백 계획 준비

---

## 업데이트 중

WolfBot:
1. 새 릴리스 다운로드
2. 무결성 검증 (체크섬)
3. 현재 버전 백업
4. 업데이트 적용
5. 서비스 재시작
6. 시작 확인

---

## 업데이트 후

1. WolfBot이 올바르게 시작되는지 확인
2. 모든 계정이 연결되었는지 확인
3. 리스크 관리가 온전한지 확인
4. 첫 거래를 면밀히 모니터링

---

## 업데이트 문제 해결

| 문제 | 해결책 |
|---|---|
| 업데이트 실패 | `wolfbot rollback` 실행해 이전 버전 복원 |
| 업데이트 후 서비스 시작 안 됨 | 로그 확인; `wolfbot logs` |
| 업데이트 후 계정 연결 끊김 | 재연결; 필요시 백업 복원 |
| 다운로드 느림 | 재시도; 방화벽/네트워크 문제 확인 |

---

## 자주 묻는 질문

**Q: 업데이트 시 설정이 손실되나요?**
아니요. 업데이트는 구성을 보존합니다. 그래도 모범 사례로 백업을 권장합니다.

**Q: 특정 이전 버전으로 돌아갈 수 있나요?**
`wolfbot rollback`은 이전 버전으로 돌아갑니다. 임의 버전은 [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases)에서 원하는 릴리스를 다시 설치하세요.

**Q: 업데이트는 무중단인가요?**
아니요, WolfBot 서비스는 업데이트 중 재시작됩니다 (보통 몇 초~몇 분).

---

## 다음 단계

> **[문제 해결 →](/docs/troubleshooting)**
