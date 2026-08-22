---
title: "MT5 自托管交易 —— 在自己的机器上运行 MetaTrader 5,而非租用服务器"
description: "自托管 MT5 交易意味着在你自己掌控的地方运行 MetaTrader 5 终端——在你的电脑或你自己的 VPS 上,而不是单独租一台 Windows 服务器。以下是具体的区别以及为什么这很重要。"
tested_version: "0.1.0-p12-ghcr-rc21"
platforms: ["linux", "windows"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "9 minutes"
next_guide: "/docs/mt5-without-windows-vps"
related_guides: ["/brokers/mt5", "/docs/mt5-without-windows-vps", "/docs/self-hosted-explained", "/docs/risk-controls"]
keywords: [
  "mt5 自托管",
  "自托管 mt5 交易",
  "在自己的服务器上运行 mt5",
  "metatrader 自托管机器人",
  "无需 windows vps 运行 mt5",
  "在 linux 上自托管 mt5"
]
sitemap_priority: 0.8
last_updated: "2026-08-18"
lang: "zh"
translation_of: "docs/mt5-self-hosted-trading"
---

# MT5 自托管交易

**已在 WolfBot Community v0.1.0-p12-ghcr-rc21 上测试** · 最后更新: 2026-08-18

## 本指南适合谁

- **如果你以往对 MT5 自动化交易的认识仅限于"租一台 Windows VPS"** —— 本文用通俗的语言解释了自托管这一替代方案。
- **如果你比较偏技术型** —— 你会准确看到 MT5 终端具体运行在哪里,以及为什么租用的桌面并不是唯一的选择。

## MT5 的"自托管"是什么意思

你的 MetaTrader 5 终端运行在**你自己掌控**的地方——你自己的 Linux 主机或你自己的 VPS——而不是运行在专门为了让 MT5 保持存活而租用的机器上。

WolfBot Community 本身就是自托管的,它的 MT5 支持也遵循同样的原则:一个真实的 MT5 终端,在你机器上的一个容器内运行,可以通过浏览器访问,和 WolfBot 的其余部分运行在一起。不需要单独的 Windows 服务器,不需要远程桌面客户端,也不需要一份唯一用途就是保留一个终端的月租账单。

## 你保留了什么,又省去了什么

- **保留:** 一个真实、功能完整的 MT5 终端——同样的经纪商登录、同样的图表、同样的订单。
- **省去:** 第二台机器。一台主机就能同时运行你的加密货币账户、MT5 账户和 WolfBot 本身。
- **保留:** 数据留在你自己的硬件上。自托管意味着你的持仓和密钥始终留在你自己运行的基础设施上。

## 为什么这很重要

- **成本。** 不再需要额外的 Windows VPS 账单来运行 MT5。如果你已经在 Linux VPS 上运行 WolfBot,MT5 可以搭载在同一台机器上。
- **掌控权。** 机器、终端和数据都由你自己拥有。
- **简单性。** 一个浏览器界面就能同时管理加密货币和 MT5,而不必在一堆租来的桌面之间来回切换。

## 并非人人都需要自托管

如果你不想运行或维护任何服务器,托管版方案也是一个选择——参见 [社区版 vs 云端版](/community-vs-cloud) 进行比较。自托管是免费且完全由你自己掌控的路径。

## 开始使用

- [无需 Windows VPS 运行 MT5 →](/docs/mt5-without-windows-vps)
- [连接 MT5 →](/brokers/mt5)
- [为什么选择自托管? →](/docs/self-hosted-explained)

## 下一步

> **[无需 Windows VPS 运行 MT5 →](/docs/mt5-without-windows-vps)**
