---
title: "用 MT5 自动化外汇与黄金交易 —— 自托管运行黄金、外汇和大宗商品策略"
description: "在你自己的机器或 VPS 上,用 MT5 自动化外汇、黄金和大宗商品 CFD 策略——与加密货币并行运行,使用同一个 WolfBot 界面、统一风控和同一个投资组合。"
tested_version: "0.1.0-beta.9"
last_updated: "2026-08-18"
platforms: ["linux", "windows"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/docs/mt5-symbol-mapping"
related_guides: ["/docs/mt5-without-windows-vps", "/docs/mt5-troubleshooting", "/brokers/mt5", "/docs/risk-controls"]
keywords: [
  "自动化外汇机器人",
  "mt5 黄金交易机器人",
  "mt5 外汇黄金自动化",
  "大宗商品交易机器人",
  "metatrader 5 自托管",
  "外汇黄金 mt5 wolfbot"
]
sitemap_priority: 0.8
lang: "zh"
translation_of: "docs/automate-forex-gold-with-mt5"
---

# 用 MT5 自动化外汇与黄金交易

**已在 WolfBot Community v0.1.0-beta.9 上测试** · 最后更新: 2026-08-18

## 本指南适合谁

- **如果你交易外汇、黄金、指数或大宗商品 CFD,并希望在自己的机器上实现自动化** —— 本文说明如何在 WolfBot Community 中运行 MT5 策略,而无需再租一台第二台 Windows 服务器。
- **如果你比较偏技术型** —— 你会看到 MT5 终端、符号映射和 WolfBot 的统一风控是如何配合运作的,让你清楚知道每个部分具体运行在哪里。

## 外汇、黄金与 MT5 —— 经典的自动化难题

MetaTrader 5 是大多数外汇、黄金和 CFD 交易者已经在使用的工具。传统的自动化方式需要让一台 **Windows 机器 24/7 保持运行**——通常是租用的 VPS——仅仅为了让一个 MT5 终端保持存活,还不算你运行的其他东西。

WolfBot Community 免去了这台第二台机器。MT5 在与 WolfBot 其余部分相同的 Linux 主机(或 Windows)上的一个容器内运行,因此你的黄金/外汇策略和加密货币策略可以共存于同一个平台。

## 自动化黄金和外汇交易的运作方式

```text
你的机器(或 VPS),24/7 运行
    │
    ├── WolfBot Community —— 策略 + 统一风控 + 投资组合
    │
    └── MT5 桥接容器
            ├── 真实的 MT5 终端(无界面模式,使用你的经纪商账户)
            └── 可查看它的浏览器窗口(无需远程桌面)
```

你的 MT5 黄金/外汇策略、加密货币期货策略以及手动仓位,全部会显示在**同一个控制面板、同一个风控引擎、同一个投资组合视图**中——而不是分散在不同的应用程序里。

## 跨市场的符号自动对应

MT5 上的黄金策略以 `XAUUSD` 报价;而在加密货币交易所,你持有的可能是代币化黄金交易对 `PAXGUSDT`。WolfBot 的符号映射会自动协调这些差异(参见[符号映射指南](/docs/mt5-symbol-mapping)),因此你的投资组合中只会显示一个"黄金"品种,而不是两个互不相关的市场。

## 从模拟账户开始

先连接一个 MT5 **模拟(Demo)**账户(连接指南会引导你完成),确认符号解析结果符合预期,并在模拟模式下运行你的策略,直到你完全信任它。之后再连接实盘账户,并谨慎推进。

## 开始使用

- [连接 MT5 →](/brokers/mt5) —— Windows 和 Linux 的分步指南
- [MT5 符号映射 →](/docs/mt5-symbol-mapping)
- [无需 Windows VPS 运行 MT5 →](/docs/mt5-without-windows-vps)

## 下一步

> **[MT5 符号映射 →](/docs/mt5-symbol-mapping)**
