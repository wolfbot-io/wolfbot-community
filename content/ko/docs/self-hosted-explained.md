---
title: "셀프 호스팅이란? — WolfBot Community 설명"
description: "거래 봇을 셀프 호스팅한다는 것의 의미, 왜 내 기기에서 실행되는지, 그리고 통제, 개인정보 보호, 비용에 어떤 의미인지 이해하세요."
tested_version: "0.1.0-beta.2"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "faq"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/getting-started"
related_guides: ["/getting-started", "/security", "/docs/run-24-7-on-a-vps", "/community-vs-cloud"]
keywords: ["self hosted trading bot", "what is self hosting", "wolfbot self hosted", "self hosted vs cloud trading"]
sitemap_priority: 0.80
lang: "ko"
translation_of: "docs/self-hosted-explained"
---

# 셀프 호스팅이란?

**WolfBot Community v0.1.0-beta.2에서 테스트됨** · 마지막 업데이트: 2026-08-15

## 핵심 아이디어

WolfBot Community는 **셀프 호스팅**입니다 — 즉, 소프트웨어가 우리 서버가 아닌 **내 기기**(PC 또는 서버)에서 실행됩니다. 내가 설치하고, 내가 통제하며, 데이터는 내게 남습니다.

## 이 가이드의 대상

- **통제를 원하는 분:** 거래 봇을 직접 운영한다는 의미와 많은 트레이더가 선호하는 이유 이해.
- **기술적 배경이 있는 분:** 아래에서 정확한 세부 사항 — 데이터 저장 위치, 백업 방식, 24/7 운영 방법.

## 셀프 호스팅의 의미

WolfBot Community를 사용하면:

1. **소프트웨어를 다운로드** — GitHub 페이지에서
2. **설치** — Windows 또는 Linux 기기에
3. **계정 연결** — API 키는 내 기기에 보관
4. **실행** — 기기가 켜져 있을 때마다 거래 가능

## 왜 셀프 호스팅인가?

### 1. 완전한 통제

- 업데이트 적용 시점을 내가 결정
- 모든 리스크 설정을 직접 구성
- 구성을 직접 검사하고 백업 가능
- 제3자 일정에 의존하지 않음

### 2. 개인정보 보호

- API 키는 내 기기에 암호화되어 보관
- 거래 내역과 설정은 내 기기를 떠나지 않음
- 제3자 서버가 내 거래 데이터를 보지 않음

### 3. 비용

- WolfBot Community는 무료
- 기기 비용만 지불 (VPS 사용 시)
- 구독료 없음, 숨은 비용 없음

### 4. 투명성

- 구성 파일을 검사할 수 있음
- 소프트웨어가 무엇을 하는지 추적 가능
- 개발이 GitHub에서 공개적으로 진행

## 셀프 호스팅 요구사항

### 최소 요구사항

| 요구사항 | 최소 | 권장 |
|---|---|---|
| **운영체제** | Windows 10+ 또는 Ubuntu 20.04+ | 최신 안정 버전 |
| **RAM** | 2 GB | 4 GB |
| **저장공간** | 1 GB 여유 | 5 GB 여유 |
| **네트워크** | 인터넷 | 유선 연결 |

### 내 책임

- ✅ 기기 켜짐 및 연결 유지
- ✅ 업데이트 적용 (원클릭)
- ✅ 정기 백업
- ✅ 기본 보안 위생

> 💡 **기술 사용자용:** 셀프 호스팅은 내가 시스템 관리자가 된다는 의미입니다. WolfBot은 기기에서 서비스/프로세스로 실행되고, 구성과 암호화된 API 시크릿을 로컬에 저장하며, 브로커 API로 아웃바운드 연결합니다. 인바운드 서버는 없습니다 — 외부에서 접근 가능하게 노출되는 것은 없습니다.

## 셀프 호스팅 vs Cloud

| 측면 | 셀프 호스팅 (Community) | Cloud |
|---|---|---|
| **비용** | 무료 | 구독 |
| **통제** | 전체 | 제한 |
| **책임** | 내 책임 | 제공자 |
| **개인정보** | 완전 | 공유 |
| **설정** | 수동 | 즉시 |

전체 비교는 [Community vs Cloud →](/community-vs-cloud) 참조

## 셀프 호스팅이 나에게 맞나요?

### 셀프 호스팅 선택 시:
- ✅ 봇에 대한 완전한 통제를 원함
- ✅ 기본적인 컴퓨터 관리에 익숙함
- ✅ 무료 옵션 선호
- ✅ 데이터를 비공개로 유지하고 싶음

### Cloud 고려 시:
- ⚠️ 기기를 관리하고 싶지 않음
- ⚠️ 자체 하드웨어 없이 24/7 가동 시간 필요
- ⚠️ 직접 지원 필요

## 다음 단계

셀프 호스팅할 준비가 되셨나요? 여기서 시작하세요:

1. [시작하기 →](/getting-started) — WolfBot Community 다운로드 및 설치
2. [데모 계정으로 시작 →](/docs/simulation) — 위험 없이 테스트
3. [시장 연결 →](/getting-started) — 암호화폐 및 MT5

## 기술 사용자용

셀프 호스팅에서 중요한 세부 사항:

- **데이터 경로:** WolfBot은 구성을 `/opt/wolfbot/`(Linux) 또는 `%USERPROFILE%\.wolfbot\`(Windows)에 저장합니다. 백업은 하위 디렉터리에 저장됩니다.
- **암호화:** API 시크릿은 디스크에 쓰기 전에 암호화됩니다; 구성 파일에 평문으로 저장되지 않습니다.
- **네트워크:** 브로커 API로의 아웃바운드 연결만 있습니다. 인바운드 접근을 위한 포트가 열리지 않습니다.
- **24/7 운영:** 중단 없는 거래를 위해 VPS를 사용하세요 — [VPS에서 24/7 실행 →](/docs/run-24-7-on-a-vps).
