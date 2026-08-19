---
title: "MT5 문제 해결 — WolfBot Community에서 흔한 MT5 연결 및 설정 문제 해결하기"
description: "MT5가 연결되지 않거나, 계정이 프로비저닝되지 않거나, 심볼이 표시되지 않나요? WolfBot Community에서 발생하는 구체적인 MT5 연결 및 설정 오류와 각각 확인해야 할 사항을 정확히 안내합니다."
tested_version: "0.1.0-p12-ghcr-rc19"
last_updated: "2026-08-18"
platforms: ["linux", "windows"]
category: "troubleshooting"
difficulty: "intermediate"
estimated_time: "10 minutes"
next_guide: "/brokers/mt5"
related_guides: ["/brokers/mt5", "/docs/mt5-without-windows-vps", "/docs/mt5-symbol-mapping", "/docs/risk-controls"]
keywords: [
  "mt5 troubleshooting",
  "mt5 not connecting wolfbot",
  "mt5 provisioning failed",
  "mt5 account setup error",
  "metatrader 5 troubleshooting",
  "wolfbot mt5 error",
  "mt5 linux setup problem"
]
sitemap_priority: 0.75
lang: "ko"
translation_of: "docs/mt5-troubleshooting"
---

# MT5 문제 해결

**WolfBot Community v0.1.0-p12-ghcr-rc19에서 테스트됨** · 마지막 업데이트: 2026-08-18

## 이 가이드의 대상

- **MT5를 WolfBot Community에 연결하는 중 오류가 발생한 분** — 아래 해결책을 순서대로 시도해 보세요. 각 항목은 추측 대신 직접 읽을 수 있는 로그를 알려줍니다.
- **기술적 배경이 있는 분** — 근본 원인 섹션에서 어떤 컴포넌트가 무엇을 기록하는지 정확히 알려주므로 직접 진단할 수 있습니다.

## 시작하기 전에

두 가지 빠른 확인만으로 대부분의 MT5 연결 문제를 다른 어떤 방법보다 빠르게 해결할 수 있습니다:

1. **Demo vs Live.** 연결 가이드와 정확히 동일하게 먼저 **Demo(테스트넷)** MT5 계정을 연결하고 있는지 확인하세요. Live 계정은 준비 상태 확인에서 실패할 수 있으며(테스트 대상으로는 더 위험합니다).
2. **MT5 브리지는 Linux 설치에만 포함됩니다.** MT5는 Linux 컨테이너 안에서 실행되며(명령 하나로 활성화) 아직 출시되지 않은 Windows 빌드에는 동일한 방식으로 번들되어 있지 않습니다. 따라가고 있는 가이드와 플랫폼이 일치하는지 확인하세요.

## 흔한 오류와 확인 사항

### "MT5 계정을 설정할 수 없습니다. 다시 시도해 주세요." (`MT5_PROVISIONING_FAILED`)

실제 설치에서 가장 많이 보고되는 오류입니다. MT5 터미널/브리지에 대한 **계정별 프로비저닝 단계**가 완료되지 못할 때 발생합니다. 먼저 API 자격 증명을 바꾸지 말고, 다음 순서로 확인하세요:

1. **프로비저닝 시도에 대한 control/api 로그를 읽으세요** — 반환된 정확한 실패 내용을 확인하세요. 터미널/브리지 컨테이너가 생성되지 못했을 때 `container_provisioned=false`가 기록됩니다.
2. **컨테이너 런타임에 접근 가능한지 확인하세요.** Community 설치에서는 브리지 제어부로의 Docker 소켓 마운트가 누락되면 계정별 컨테이너를 생성할 수 없습니다 — 이것이 많은 `MT5_PROVISIONING_FAILED` 오류의 구조적 원인입니다. 로그에 소켓/권한 오류가 보인다면 그것이 병목입니다.
3. **브리지 이미지가 존재하는지 확인하세요.** MT5 브리지 이미지가 풀되지 않았다면, 다른 모든 것이 정상이더라도 이미지를 찾을 수 없다는 오류로 프로비저닝이 실패합니다.
4. **로그를 확인한 뒤 다시 시도하세요.** 이것은 "키를 삭제하고 다시 추가"하는 상황이 아닙니다. 상태는 프로비저닝 단계에 있으며, 로그가 실제 실패 원인을 알려줍니다.

### 계정은 연결되지만 심볼이 표시되지 않음

- 전략이 참조하는 심볼이 해당 거래소에 매핑되어 있지 않다면 WolfBot은 이를 변경 없이 그대로 통과시킵니다. 정확한 심볼 철자를 확인하고 [심볼 매핑 가이드](/docs/mt5-symbol-mapping)를 참조하세요.
- 심볼 목록이 비어 있는 것처럼 보인다면 MT5 계정의 선택된 심볼 파일을 확인하고, MT5의 마켓 워치에 실제로 해당 종목이 로드되어 있는지 확인하세요.

### 시작 직후 연결이 끊기거나 주문 오류 발생

- 전략이 먼저 **Simulation**으로 설정되어 있는지 확인하세요. 그러면 아직 테스트 중일 때 오타나 잘못된 종목이 실제 포지션을 여는 일이 없습니다.
- 터미널 상태를 확인하려면 MT5 브리지 로그를 확인하세요. 아직 브로커에 로그인하지 않은 헤드리스 터미널은 세션이 수립될 때까지 주문을 거부합니다.

### 여전히 막혀 있나요?

확실한 답을 가장 빠르게 얻는 방법은 로그를 보면서 정확한 오류를 재현하는 것입니다:

- **Control/api 로그** — 프로비저닝 및 계정 준비 상태(실제로 무엇이 실패하는지).
- **MT5 브리지 로그** — 터미널 로그인 및 주문 상태.

지원 스레드를 열 때는 구체적인 오류 라인(예: `MT5_PROVISIONING_FAILED`)과 해당 로그 프레임을 붙여넣으세요 — 그러면 여러 번 주고받는 대신 한 번에 해결할 수 있습니다.

## 올바르게 시작하기

- [MT5 심볼 매핑 →](/docs/mt5-symbol-mapping) — 포지션을 열기 전에 심볼이 어떻게 해석되는지 정확히 확인
- [Windows VPS 없이 MT5 실행하기 →](/docs/mt5-without-windows-vps)
- [MT5 연결하기 →](/brokers/mt5)

## 다음 단계

> **[MT5 연결하기 →](/brokers/mt5)**
