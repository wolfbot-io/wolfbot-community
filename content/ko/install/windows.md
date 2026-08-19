---
title: "WolfBot Community 설치 (Windows)"
description: "Windows에 WolfBot Community를 단계별로 설치하는 방법 — 시스템 요구사항, 설치 프로그램, 최초 실행."
tested_version: "0.1.0-p12-ghcr-rc19"
last_updated: "2026-08-15"
platforms: ["windows"]
category: "install"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/brokers/binance"
related_guides: ["/getting-started", "/docs/troubleshooting"]
keywords: ["wolfbot windows install", "wolfbot windows setup", "install wolfbot on windows", "trading bot windows"]
sitemap_priority: 0.85
lang: "ko"
translation_of: "install/windows"
---

# Windows에 WolfBot Community 설치

**WolfBot Community v0.1.0-p12-ghcr-rc19에서 테스트됨** · 마지막 업데이트: 2026-08-15

## 시스템 요구사항

| 요구사항 | 최소 | 권장 |
|---|---|---|
| **운영체제** | Windows 10+ | 최신 안정 버전 |
| **RAM** | 4 GB | 8 GB |
| **저장공간** | 2 GB 여유 | 5 GB 여유 |
| **인터넷** | 필수 | 유선 연결 |

---

## 설치 단계

### 1단계: 설치 프로그램 다운로드

1. [다운로드 페이지](/download)로 이동
2. **Windows Installer** 다운로드
3. 파일이 `Downloads` 폴더에 저장됩니다

### 2단계: 설치 프로그램 실행

1. 다운로드한 `.exe` 파일을 더블클릭
2. Windows SmartScreen 경고가 표시되면 **More info → Run anyway** 클릭
3. 설치 마법사의 지시를 따릅니다
4. 기본 설치 경로를 그대로 사용하거나 원하는 위치를 선택

### 3단계: 첫 실행

1. 시작 메뉴 또는 바탕화면에서 **WolfBot Community** 실행
2. 브라우저가 자동으로 열리고 대시보드가 표시됩니다
3. 시작 안내에 따라 계정을 설정합니다

---

## 설치 확인

성공적으로 설치되면:

- ✅ 시작 메뉴에 WolfBot Community 항목 존재
- ✅ 브라우저에 대시보드가 열림
- ✅ CLI 명령 `wolfbot` 사용 가능 (PowerShell에서)

```powershell
# 설치 확인
wolfbot doctor
```

---

## MT5 사용 (선택)

WolfBot Community에는 MT5가 내장되어 있습니다. Windows에서 MT5는 이미 설치된 MetaTrader 5 앱과 연결됩니다. 자세한 내용은 [MT5 연결 →](/brokers/mt5)을 참조하세요.

---

## 일반적인 문제

| 문제 | 해결책 |
|---|---|
| SmartScreen 경고 | More info → Run anyway 클릭 |
| 방화벽 경고 | WolfBot이 네트워크에 접근하도록 허용 |
| 대시보드가 열리지 않음 | 서비스 상태 확인 (`wolfbot doctor`) |
| 설치 실패 | 설치 프로그램을 관리자 권한으로 실행 |

---

## 제거

WolfBot을 제거하려면:

1. **설정 → 앱** 열기
2. **WolfBot Community** 검색
3. **제거** 클릭

> 구성과 백업은 별도로 보관됩니다. 완전히 제거하려면 `%USERPROFILE%\.wolfbot\` 폴더도 삭제하세요.

---

## 다음 단계

> **[Binance 연결 →](/brokers/binance)** 또는 **[데모 계정으로 시작 →](/docs/simulation)**
