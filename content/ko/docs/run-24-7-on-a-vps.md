---
title: "WolfBot Community를 VPS에서 24/7 실행"
description: "PC를 계속 켜두지 않고도 가상 사설 서버(VPS)에서 WolfBot Community를 24시간 운영하는 방법 — 암호화폐 및 MT5 거래."
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-15"
platforms: ["linux"]
category: "automation"
difficulty: "intermediate"
estimated_time: "20 minutes"
next_guide: "/docs/run-24-7-on-a-vps"
related_guides: ["/install/linux", "/docs/self-hosted-explained", "/docs/mt5-without-windows-vps", "/docs/backup"]
keywords: ["run trading bot 24/7", "vps trading bot", "trading bot vps setup", "wolfbot vps", "24/7 crypto bot"]
sitemap_priority: 0.85
lang: "ko"
translation_of: "docs/run-24-7-on-a-vps"
---

# VPS에서 24/7 실행

**WolfBot Community v0.1.0-p12-ghcr-rc8에서 테스트됨** · 마지막 업데이트: 2026-08-15

## 왜 VPS인가?

자동 거래는 **항상 실행될 때** 가장 잘 작동합니다. PC는 24시간 실행되도록 설계되지 않았습니다 — 절전 모드로 들어가거나, 재시작하거나, 네트워크 연결이 끊깁니다.

**VPS(Virtual Private Server)** 는 데이터센터의 컴퓨터로:
- 24/7 켜져 있음
- 안정적인 인터넷 연결
- 로컬 전원/네트워크에 의존하지 않음
- 저렴함 (보통 월 $5–20)

## 이 가이드의 대상

- **모든 트레이더:** VPS가 봇을 더 안정적으로 만드는 이유와 깊은 서버 지식 없이 WolfBot용으로 설정하는 방법.
- **기술 사용자:** 안정적인 24/7 운영을 위한 구체적인 명령과 모범 사례.

---

## VPS 선택

### 최소 요구사항

| 리소스 | 최소 | 권장 |
|---|---|---|
| **CPU** | 1코어 | 2코어 |
| **RAM** | 2 GB | 4 GB |
| **저장공간** | 20 GB SSD | 40 GB SSD |
| **네트워크** | 1 Gbit/s | 1 Gbit/s |
| **운영체제** | Ubuntu 22.04 LTS | Ubuntu 22.04 LTS |

> 같은 VPS에서 MT5를 거래한다면 4 GB RAM 이상 사용.

### 제공업체

평판 좋은 VPS 제공업체라면 모두 작동합니다. 인기 옵션: DigitalOcean, Linode, Vultr, Hetzner, AWS Lightsail.

---

## 1단계: VPS 생성

1. Ubuntu 22.04 이미지 선택
2. 브로커 서버 근처 리전 선택 (낮은 지연)
3. 크기 선택 (2 vCPU / 4 GB 권장)
4. SSH 키 설정 (비밀번호보다 안전)
5. 서버 생성 및 시작

---

## 2단계: 연결

```bash
ssh root@내_VPS_IP
```

`내_VPS_IP`를 서버의 IP 주소로 교체.

---

## 3단계: WolfBot Community 설치

[Linux 설치 안내](/install/linux)를 따르세요.

요약:

```bash
# 시스템 업데이트
sudo apt update && sudo apt upgrade -y

# WolfBot 설치 (정확한 명령은 /install/linux 참조)
# ...
```

---

## 4단계: 계정 연결 및 구성

1. 브로커 계정 연결 (암호화폐 및/또는 MT5) — [시장 연결](/getting-started) 참조
2. 리스크 관리 구성 — [리스크 관리 가이드](/docs/risk-controls) 참조
3. 봇 설정 — [자동 거래 워크플로](/docs/automated-trading-workflow) 참조

---

## 5단계: 24시간 운영 확보

### 서비스로 실행

WolfBot은 서비스로 실행되며 부팅 시 자동 시작됩니다:

```bash
# 상태 확인
sudo systemctl status wolfbot

# 필요시 활성화
sudo systemctl enable wolfbot
```

### 자동 백업

매일 cron 백업 설정:

```bash
# cron 열기
crontab -e

# 매일 오전 3시 백업 추가
0 3 * * * wolfbot backup
```

### 업데이트 계획

Stable 채널에서 자동 업데이트를 허용할지 수동으로 업데이트할지 결정:

```bash
# 수동 업데이트
wolfbot update
```

---

## 기술 사용자용: 안정성 팁

### 가동 시간 모니터링

cron을 통한 간단한 상태 확인:

```bash
# 5분마다 서비스 실행 여부 확인
*/5 * * * * systemctl is-active --quiet wolfbot || systemctl restart wolfbot
```

### 스왑 구성

스왑 버퍼는 작은 VPS에서 OOM 크래시를 방지합니다:

```bash
# 2 GB 스왑 생성 (없는 경우)
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

### VPS에서 MT5

MT5는 WolfBot 컨테이너를 통해 Linux에서 실행됩니다 — Windows VPS 불필요. [Windows VPS 없이 Linux에서 MT5 →](/docs/mt5-without-windows-vps) 참조.

---

## 보안

VPS는 거래 접근을 보관합니다 — 안전하게 지키세요:

- [ ] SSH는 키 전용 (비밀번호 없음)
- [ ] 방화벽 활성 (필요한 포트만)
- [ ] 정기 시스템 업데이트
- [ ] WolfBot 백업을 별도 위치에
- [ ] 불필요한 서비스 미설치

> ⚠️ SSH 키나 VPS 자격 증명을 절대 공유하지 마세요. 거래에 대한 전체 접근을 제공합니다.

---

## 자주 묻는 질문

**Q: 거래용 VPS가 안전한가요?**
네, 모범 사례(키 인증, 방화벽, 업데이트)를 따르면 안전합니다. 모든 서버와 동일한 보안입니다.

**Q: VPS 비용은 얼마인가요?**
WolfBot에 보통 월 $5–20. MT5를 거래하면(WolfBot이 Linux에서 실행) Windows VPS보다 저렴한 경우가 많습니다.

**Q: 낮에만 거래한다면 VPS가 필요한가요?**
아니요 — 거래 시간에 PC가 켜져 있으면 충분합니다. VPS는 24/7 운영용입니다.

**Q: 다른 대륙의 VPS를 사용할 수 있나요?**
네, 하지만 낮은 지연(브로커 근처 서버)이 실행 속도에 더 좋습니다.

---

## 다음 단계

> **[Linux 설치 →](/install/linux)** — VPS 설정 시작
