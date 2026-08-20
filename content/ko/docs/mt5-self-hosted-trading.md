---
title: "MT5 셀프 호스팅 트레이딩 — 렌탈이 아닌 내 기기에서 MetaTrader 5 실행하기"
description: "셀프 호스팅 MT5 트레이딩이란 별도의 Windows 박스를 렌탈하는 대신, MetaTrader 5 터미널을 내가 직접 제어하는 곳 — 내 컴퓨터나 나만의 VPS — 에서 실행하는 것을 의미합니다. 무엇이 달라지고 왜 중요한지 알아보세요."
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-18"
platforms: ["linux", "windows"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "9 minutes"
next_guide: "/docs/mt5-without-windows-vps"
related_guides: ["/brokers/mt5", "/docs/mt5-without-windows-vps", "/docs/self-hosted-explained", "/docs/risk-controls"]
keywords: [
  "mt5 self hosted",
  "self hosted mt5 trading",
  "run mt5 on own server",
  "metatrader self hosted bot",
  "mt5 without windows vps",
  "self host mt5 linux"
]
sitemap_priority: 0.8
lang: "ko"
translation_of: "docs/mt5-self-hosted-trading"
---

# MT5 셀프 호스팅 트레이딩

**WolfBot Community v0.1.0-p12-ghcr-rc20에서 테스트됨** · 마지막 업데이트: 2026-08-18

## 이 가이드의 대상

- **MT5 자동화를 오직 "Windows VPS를 렌탈하는 것"으로만 알고 있는 분** — 셀프 호스팅 대안을 알기 쉽게 설명합니다.
- **기술적 배경이 있는 분** — MT5 터미널이 정확히 어디서 실행되는지, 렌탈 데스크톱이 유일한 선택지가 아닌 이유를 확인할 수 있습니다.

## MT5에서 "셀프 호스팅"이 의미하는 것

MetaTrader 5 터미널이 MT5를 계속 살려두기 위해 특별히 렌탈한 기기가 아니라, **내가 직접 제어하는** 곳 — 내 소유의 Linux 박스나 나만의 VPS — 에서 실행됩니다.

WolfBot Community는 셀프 호스팅이며, MT5 지원도 동일한 규칙을 따릅니다: 실제 MT5 터미널이 내 기기의 컨테이너 안에서 실행되며, WolfBot의 나머지 부분과 함께 브라우저에서 접근할 수 있습니다. 별도의 Windows 서버도, 원격 데스크톱 클라이언트도, 오직 터미널을 유지하기 위한 월간 렌탈 비용도 필요 없습니다.

## 유지되는 것, 사라지는 것

- **유지:** 실제로 완전히 동작하는 MT5 터미널 — 동일한 브로커 로그인, 동일한 차트, 동일한 주문.
- **사라짐:** 두 번째 기기. 하나의 호스트가 암호화폐 계정, MT5 계정, 그리고 WolfBot 자체를 모두 실행합니다.
- **유지:** 내 하드웨어에 있는 내 데이터. 셀프 호스팅은 포지션과 키가 내가 운영하는 인프라에 남아 있음을 의미합니다.

## 왜 중요한가

- **비용.** MT5를 위한 추가 Windows-VPS 비용이 없습니다. 이미 Linux VPS에서 WolfBot을 운영하고 있다면, MT5도 같은 박스에서 함께 실행됩니다.
- **제어권.** 기기, 터미널, 데이터를 모두 소유합니다.
- **단순함.** 렌탈한 여러 데스크톱을 관리하는 대신 암호화폐 + MT5를 위한 하나의 브라우저 인터페이스만 있으면 됩니다.

## 모두에게 셀프 호스팅이 필요한 것은 아닙니다

서버를 직접 운영하거나 유지 관리하고 싶지 않다면, 관리형 호스팅도 하나의 선택지입니다 — 비교하려면 [Community vs Cloud](/community-vs-cloud)를 참조하세요. 셀프 호스팅은 무료이며 완전히 내 통제 하에 있는 경로입니다.

## 시작하기

- [Windows VPS 없이 MT5 실행하기 →](/docs/mt5-without-windows-vps)
- [MT5 연결하기 →](/brokers/mt5)
- [왜 셀프 호스팅인가? →](/docs/self-hosted-explained)

## 다음 단계

> **[Windows VPS 없이 MT5 실행하기 →](/docs/mt5-without-windows-vps)**
