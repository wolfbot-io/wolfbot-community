---
title: "WolfBot Community 오류 코드 — 빠른 해결 참조"
description: "모든 WolfBot Community 오류 코드 설명: WB-WIN-001부터 WB-WIN-004, WB-LNX-001부터 WB-LNX-002까지. 설치 또는 시작 오류에 대한 정확한 해결 방법을 찾아보세요."
tested_version: "0.1.0-p12-ghcr-rc17"
last_updated: "2026-08-18"
platforms: ["windows", "linux"]
category: "troubleshooting"
difficulty: "beginner"
estimated_time: "3 minutes"
related_guides: ["/docs/troubleshooting", "/install/windows", "/install/linux", "/docs/updates"]
keywords: [
  "wolfbot error codes",
  "WB-WIN-001",
  "WB-LNX-002",
  "wolfbot installer error",
  "wolfbot linux error",
  "wolfbot windows error code"
]
sitemap_priority: 0.80
lang: "ko"
translation_of: "docs/error-codes"
---

# WolfBot Community 오류 코드

**WolfBot Community v0.1.0-p12-ghcr-rc17에서 테스트됨** · 마지막 업데이트: 2026-08-18

코드 하나에 해결책 하나. 오류 코드는 무엇이 실패했는지 정확히 알려주므로
추측할 필요가 없습니다. 아래에서 코드를 찾아 해결책을 적용한 뒤, 문제가
계속되면 [전체 문제 해결 가이드](/docs/troubleshooting)를 참조하세요.

---

## 빠른 조회표

| 오류 코드 | 발생 위치 | 한 줄 해결책 |
|---|:---:|---|
| [WB-WIN-001](#wb-win-001--디스크-공간-부족) | Windows 설치 프로그램 | 디스크 공간 2GB 확보 |
| [WB-WIN-002](#wb-win-002--권한-거부) | Windows 설치 프로그램 | 설치 프로그램을 관리자 권한으로 실행 |
| [WB-WIN-003](#wb-win-003--손상된-다운로드) | Windows 설치 프로그램 | 다시 다운로드 후 SHA256 체크섬 확인 |
| [WB-WIN-004](#wb-win-004--누락된-종속성) | Windows 첫 실행 | Visual C++ 재배포 패키지 설치 |
| [WB-LNX-001](#wb-lnx-001--docker를-찾을-수-없음) | Linux 설치 프로그램 | Docker 설치 또는 설치 프로그램 재실행 |
| [WB-LNX-002](#wb-lnx-002--포트-충돌) | Linux 첫 실행 | 8765 포트를 사용 중인 프로세스 중지 |

---

## Windows 오류 코드

### WB-WIN-001 — 디스크 공간 부족
**증상:** "디스크 공간이 부족합니다"라는 메시지와 함께 설치 프로그램이 실패합니다.

**해결책:** 최소 2GB를 확보한 뒤 다시 시도하세요. 먼저 `C:` 드라이브의 여유 공간을 확인하세요.

### WB-WIN-002 — 권한 거부
**증상:** 설치 중 "액세스가 거부되었습니다"가 표시됩니다.

**해결책:** 설치 프로그램을 마우스 오른쪽 버튼으로 클릭하고 **관리자 권한으로 실행**을 선택하세요.

### WB-WIN-003 — 손상된 다운로드
**증상:** 설치 프로그램이 시작되지 않거나 무결성 검사에서 실패합니다.

**해결책:** [community.wolfbot.io/download](https://community.wolfbot.io/download)에서 다시 다운로드한 뒤, 실행하기 전에 공식 값과 SHA256 체크섬을 비교하세요. [다운로드한 트레이딩 봇을 검증하는 방법](/docs/how-to-verify-a-downloaded-trading-bot)을 참조하세요.

### WB-WIN-004 — 누락된 종속성
**증상:** WolfBot 시작 시 "VCRUNTIME140.dll을 찾을 수 없습니다"가 표시됩니다.

**해결책:** [Visual C++ 재배포 패키지](https://aka.ms/vs/17/release/vc_redist.x64.exe)를 설치한 뒤 WolfBot을 다시 시작하세요.

---

## Linux 오류 코드

### WB-LNX-001 — Docker를 찾을 수 없음
**증상:** "Docker가 설치되어 있지 않습니다"라는 메시지가 표시됩니다.

**해결책:** `sudo apt-get install docker.io`를 실행하거나, 설치 프로그램을 다시 실행하면 Docker를 자동으로 설치하고 실행해 줍니다.

### WB-LNX-002 — 포트 충돌
**증상:** "포트 8765가 이미 사용 중입니다"라는 메시지가 표시됩니다.

**해결책:** `sudo lsof -i :8765`로 해당 포트를 사용 중인 프로세스를 확인하고 해당 서비스를 중지한 뒤 WolfBot을 다시 시작하세요.

---

## 관련 문서

- [전체 문제 해결 가이드](/docs/troubleshooting) — 네트워크, 업데이트, 성능 및 데이터 문제.
- [WolfBot을 Windows에 설치하기](/install/windows) — 정확한 Windows 설치 과정.
- [WolfBot을 Linux에 설치하기](/install/linux) — Ubuntu/Debian 설정 및 서비스 상태.
- [업데이트 및 롤백](/docs/updates) — 업데이트가 실패했을 때 해야 할 일.
- 찾을 수 없는 코드가 있나요? [GitHub Discussions에서 검색](https://github.com/wolfbot-io/wolfbot-community/discussions)하거나 [이슈를 등록](https://github.com/wolfbot-io/wolfbot-community/issues/new/choose)하세요.
