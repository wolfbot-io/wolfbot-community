---
title: "TradingView 接入自托管交易机器人 —— 将 TradingView 提醒连接到 WolfBot Community"
description: "把 TradingView 的提醒 Webhook 直接发送给你的自托管 WolfBot Community 机器人。了解 Webhook 网址、HMAC 签名和分级提醒模板的工作原理,以及如何先在模拟账户上安全测试。"
tested_version: "0.1.0-beta.4"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "intermediate"
estimated_time: "12 minutes"
next_guide: "/docs/automated-trading-workflow"
related_guides: ["/docs/automated-trading-workflow", "/docs/simulation", "/docs/risk-controls", "/docs/mt5-symbol-mapping"]
keywords: [
  "tradingview 接入交易机器人",
  "tradingview webhook 机器人",
  "tradingview 接入自托管机器人",
  "tradingview 提醒自动化",
  "连接 tradingview 到 wolfbot",
  "tradingview webhook 自托管"
]
sitemap_priority: 0.8
last_updated: "2026-08-18"
lang: "zh"
translation_of: "docs/tradingview"
---

# TradingView 接入自托管交易机器人

**已在 WolfBot Community v0.1.0-beta.4 上测试** · 最后更新: 2026-08-18

## 本指南适合谁

- **如果你已经在编写 TradingView 提醒,并希望它们能作用于自己的机器人,而不是一个纸上谈兵的记事本** —— 本文给出了需要连接的那一个网址和一个提醒模板,以及在它触碰真实资金之前一种安全的测试方法。
- **如果你比较偏技术型** —— 你会准确看到 Webhook 是如何被认证的(HMAC)、提醒的负载结构是什么样的,以及交易品种在任何订单产生之前是如何被归一化到你的经纪商上的。

## TradingView 如何连接到 WolfBot Community

TradingView 提醒可以触发一个 **HTTP Webhook**。WolfBot Community 为该提醒暴露一个 Webhook 端点,验证它确实来自你本人,然后将其转化为一个策略信号,该信号会走和其他每一笔交易一样的风控和执行流水线。

具体流程:

```text
TradingView 提醒
   → 向你的 Webhook 网址发起 HTTP POST 请求
   → WolfBot 验证 HMAC 签名
   → 解析提醒内容(交易品种、方向、from/to)
   → 将交易品种归一化为你的目标经纪商所用的名称
   → 通过共享的风控/执行层排队一笔入场交易
```

## 1. 获取你的 Webhook 网址和密钥

每个 TradingView 来源都会获得一个专属端点。路径格式为:

```text
/api/v1/strategy-webhooks/{source_id}
```

你需要将其与你自己的 WolfBot Community 主机(与你平时登录的主机相同)拼接成完整网址,并搭配一个针对该来源的 Webhook 密钥。这个密钥就是 WolfBot 用来验证每一个请求确实来自你本人的凭据。

## 2. 使用提醒模板(三个层级)

WolfBot 提供三个层级的提醒模板,让你只需按当前情况所需调用:

- **`signal_only`** —— 仅包含方向和交易品种;不含任何风控或账户细节。仓位大小和保护措施由 WolfBot 自行决定。
- **`signal_and_risk`** —— 增加了风控字段,例如请求的名义金额和止盈目标,但不含账户选择。
- **`full_entry_request`** —— 完整负载,包括目标 `account_id`,适用于你希望一条提醒驱动某个特定账户的情况。

每个层级都携带自己的身份字段——`tenant_id`、`source_id`、策略实例/版本,以及一个 `definition_hash`——这样信号始终能准确归属到你打算触发的那个具体策略。

## 3. HMAC 签名

为了防止其他人触发你的机器人,Webhook 是经过签名的。你从 TradingView 发出的 HTTP 请求,包含一个用你的 Webhook 密钥对请求体计算出的签名(现成的 curl 示例已经内置了正确的 HMAC 计算方式)。WolfBot 会在服务端重新计算该签名,只接受签名匹配的请求。签名不匹配的请求会被直接拒绝——不会执行任何操作。

## 4. 交易品种会自动为你归一化

你的提醒中的 `symbol` 可能是 MT5/USD 格式(`XAGUSD`),而你的订单目标是 Binance(`XAGUSDT`)。WolfBot 会用系统中处处使用的同一个、支持多经纪商的交易品种映射器来处理提醒中的交易品种,确保提醒落到正确的交易对上。如果不存在对应的映射关系,该交易品种会原样透传,而不会被悄悄改写。完整的映射表参见[交易品种映射指南](/docs/mt5-symbol-mapping)。

## 5. 先在模拟账户上测试,再涉及真实资金

在将提醒指向一个实盘策略之前:

1. 在一个**模拟**账户上创建一个策略,并为它设置 Webhook 网址 + 一条测试提醒。
2. 从 TradingView 发送一条测试提醒(或使用 curl 示例),观察信号在 WolfBot 中落地。
3. 确认交易品种被解析为你预期的交易对,并检查各字段是否正确。
4. 只有到那时,才把策略切换为实盘模式。

## 安全提示

- 妥善保管你的 Webhook 密钥——它是唯一能让请求被信任的凭据。把它当作 API 密钥来对待。
- 在你自己的主机/端口上运行 Community 实例,不要在未经签名验证的情况下,把 Webhook 路由暴露在公网上。
- 先从 `signal_only` 开始,只有在模拟账户上完整看到一个周期正常运行之后,再添加风控/止盈字段。

## 下一步去哪里

- [自动化交易工作流 →](/docs/automated-trading-workflow) —— 你的提醒最终接入的更大循环
- [先在模拟账户测试 →](/docs/simulation)
- [风险控制 →](/docs/risk-controls)

## 下一步

> **[自动化交易工作流 →](/docs/automated-trading-workflow)**
