---
title: "WolfBot Community 릴리스 채널 설명"
description: "WolfBot Community의 릴리스 채널 이해하기: Stable, Beta, RC, Alpha, Dev Preview. 올바른 채널 선택하기."
tested_version: "0.1.0-p12-ghcr-rc17"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "release"
difficulty: "beginner"
estimated_time: "3 minutes"
next_guide: "/docs/updates"
related_guides: ["/docs/updates", "/download"]
keywords: ["wolfbot release channels", "wolfbot stable beta", "wolfbot dev preview", "wolfbot version"]
sitemap_priority: 0.80
lang: "ko"
translation_of: "releases/channels"
---

# 릴리스 채널 설명

**WolfBot Community v0.1.0-p12-ghcr-rc17에서 테스트됨** · 마지막 업데이트: 2026-08-15

## 사용 가능한 채널

| 채널 | 상태 | 대상 | 자동 업데이트 |
|---|---|---|---|
| **Stable** | 프로덕션 준비 | 실거래자 | ✅ |
| **RC** (Release Candidate) | 최종 테스트 | 신중한 얼리 어답터 | 선택 |
| **Beta** | 기능 프리뷰 | 테스터, 애호가 | ✅ |
| **Alpha** | 초기 기능 테스트 | 기술 테스터 | 선택 |
| **Dev Preview** | 최신 빌드 | 개발자, 피드백 | 수동 |

---

## Stable

모든 품질 단계를 통과한 프로덕션 준비 릴리스.

- **업데이트 주기:** 1–2개월마다
- **위험:** 가장 낮음
- **가장 적합:** 실거래, 프로덕션 사용
- **지원:** 전체 커뮤니티 지원

> ✅ 모든 실거래에 권장.

---

## Beta

더 넓은 테스트 단계의 기능 완전 빌드.

- **업데이트 주기:** 1–2주마다
- **위험:** 낮음 — 기능은 작동하지만 엣지 케이스가 있을 수 있음
- **가장 적합:** Stable 전에 새 기능 테스트
- **지원:** 커뮤니티 피드백 환영

---

## Dev Preview

최신 개발 빌드 — 최신 기능, 가장 적게 테스트됨.

- **업데이트 주기:** 주당 여러 번
- **위험:** 중간 — 기능이 미완성일 수 있음
- **가장 적합:** 개발자, 초기 피드백, 애호가
- **지원:** 최선의 노력

> ⚠️ Dev Preview에는 미완성 기능이 포함될 수 있습니다. 기본 모드는 Simulation입니다.

---

## 채널 작동 방식

```text
Dev Preview (빈번)
    ↓
Alpha (기능 테스트)
    ↓
Beta (더 넓은 테스트)
    ↓
RC (Release Candidate)
    ↓
Stable (프로덕션)
```

각 빌드는 불변입니다 — 게시된 릴리스를 절대 수정하지 않습니다. 버그가 발견되면 새 버전이 게시됩니다.

---

## 현재 상태

WolfBot Community는 현재 **Public Preview**(Beta 단계)입니다.

```text
Stable: 아직 게시되지 않음
현재 공개 버전: v0.1.0-p12-ghcr-rc17
```

의미:
- 소프트웨어가 기능하며 설치 가능
- 기능이 널리 테스트 중
- 버전 간 파괴적 변경이 발생할 수 있음
- 테스트 시 데모 계정 권장

---

## 채널 변경

앱 내 채널 전환은 없습니다 — 채널은 단순히 다운로드하여 설치하는 릴리스입니다. 더 새로운 기능을 시험하려면 다운로드 페이지의 Stable 링크 대신 [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases)에서 Beta 또는 Dev Preview 빌드를 받으세요; 설치 프로그램은 어느 쪽이든 기존 설치를 제자리에서 업데이트합니다.

더 실험적인 채널을 시험할 때는 먼저 데모 계정으로 테스트하는 것이 좋습니다.

---

## 버전 번호 체계

```text
MAJOR.MINOR.PATCH-channel.NUMBER

0.1.0-p12-ghcr-rc17
│   │  │
│   │  └── 채널: beta, 빌드 2
│   └───── 마이너 버전 (기능 릴리스)
└───────── 메이저 버전 (0 = Stable 이전)
```

Stable 버전은 `1.0.0`, `1.1.0` 등을 사용합니다.

---

## GitHub Releases

모든 릴리스는 [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases)에 게시됩니다:

- **Pre-release:** Dev Preview, Alpha, Beta, RC
- **Full Release:** Stable만
- 각 릴리스 포함: 설치 파일, 체크섬, 릴리스 노트

---

## 다음 단계

> **[업데이트 가이드 →](/docs/updates)**
