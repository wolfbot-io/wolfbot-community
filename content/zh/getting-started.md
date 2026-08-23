---
title: "WolfBot Community 入门指南"
description: "安装 WolfBot Community 后的第一步。连接模拟账户,浏览控制面板,添加你的加密货币交易所或 MT5 经纪商。"
tested_version: "0.1.0-beta.2"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "getting-started"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/docs/simulation"
previous_guide: "/install/windows"
related_guides: ["/docs/simulation", "/brokers/bybit", "/docs/risk-controls"]
keywords: ["wolfbot 入门", "wolfbot 教程", "如何使用 wolfbot", "统一交易平台", "wolfbot 新手指南"]
sitemap_priority: 0.9
lang: "zh"
translation_of: "getting-started"
---

# WolfBot Community 入门指南

**已在 WolfBot Community v0.1.0-beta.2 上测试** · 最后更新: 2026-08-15

## 欢迎! 👋

WolfBot Community 是一个统一交易平台——加密货币交易所和 MT5 经纪商共用同一个界面。安装它并不会创建任何交易所账户,也不会下任何订单——在你自己添加账户之前,不会连接任何东西。请按顺序完成以下步骤。

> **一个平台,覆盖每个市场。** —— 加密货币 + 期货 + MT5,由 WolfBot 统一管理。

## 第一步:打开控制面板

启动 WolfBot Community。你会看到 **能力状态(Capability Status)** 页面——它显示你的安装支持哪些经纪商和功能,并确认目前还没有连接任何账户。

## 第二步:浏览控制面板

| 区域 | 用途 |
|---|---|
| **投资组合概览(Portfolio Overview)** | 余额、盈亏、持仓——覆盖所有已连接的市场 |
| **机器人(Bots)** | 用于加密货币和 MT5 的自动化交易机器人 |
| **智能终端(Smart Terminal)** | 带风控的手动交易 |
| **风险控制(Risk Controls)** | 仓位限制、回撤保护 |
| **交易所账户(Exchange Accounts)** | 经纪商连接和 API 密钥 |

## 第三步:连接模拟账户 —— 零风险

WolfBot 没有单独的「模拟模式」开关。你只需连接经纪商自带的 **模拟/测试网账户(Demo/testnet)**——真实市场数据、虚拟资金,使用和实盘交易完全相同的界面与风控引擎。

1. 进入 **交易所账户 → 添加账户**
2. 选择 **Bybit**,按照 [Bybit 模拟账户设置步骤](/brokers/bybit) 操作——WolfBot 会根据你粘贴的 API 密钥自动识别模拟账户还是实盘账户
3. 用你的模拟账户试用 **智能终端**
4. 观察持仓如何在控制面板中显示

> ✅ 模拟账户完全免费,且从不涉及真实资金——是在每个受支持市场上学习 WolfBot 的最安全方式。

[完整的模拟/演示指南 →](/docs/simulation)

## 第四步:连接你的市场进行实盘交易

准备好开始实盘交易时:
1. 在你的交易所创建一个仅限交易权限的 API 密钥
2. 交易所账户 → 添加账户 → 选择经纪商 → 输入密钥
3. 从小仓位和严格的风控设置开始

> ⚠️ 务必只使用仅限交易(不含提现权限)的 API 密钥。

经纪商指南: [Bybit](/brokers/bybit) · [Binance](/brokers/binance) · [BingX](/brokers/bingx) · [KuCoin](/brokers/kucoin) · [Bitget](/brokers/bitget) · [MT5](/brokers/mt5)

## 第一周检查清单

- [ ] 浏览控制面板
- [ ] 连接一个模拟账户(Bybit 模拟账户或 MT5 模拟账户)
- [ ] 用模拟账户交易 1-2 天
- [ ] 用你的模拟账户试用智能终端
- [ ] 阅读 [风险控制指南](/docs/risk-controls)
- [ ] 准备好后连接实盘账户

## 需要帮助?

- [文档](/docs)
- [GitHub 讨论区](https://github.com/wolfbot-io/wolfbot-community/discussions)
- [故障排查](/docs/troubleshooting)
- [常见问题](/faq)

## 下一步

> **[连接模拟账户 →](/docs/simulation)**
