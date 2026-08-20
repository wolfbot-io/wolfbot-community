---
title: "外部信号 —— 从任何来源向 WolfBot Community 发送市场信号"
description: "将外部交易信号——TradingView 提醒、自定义 Webhook、信号服务——通过一条经过签名、受风控把关的通道,接入你自托管的 WolfBot Community 机器人。"
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-18"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "intermediate"
estimated_time: "10 minutes"
next_guide: "/docs/tradingview"
related_guides: ["/docs/tradingview", "/docs/automated-trading-workflow", "/docs/simulation", "/docs/risk-controls"]
keywords: [
  "外部交易信号",
  "webhook 交易机器人",
  "自定义信号接入交易机器人",
  "wolfbot 信号服务",
  "签名 webhook 自动化",
  "自托管外部信号"
]
sitemap_priority: 0.75
lang: "zh"
translation_of: "docs/external-signals"
---

# 外部信号

**已在 WolfBot Community v0.1.0-p12-ghcr-rc20 上测试** · 最后更新: 2026-08-18

## 本指南适合谁

- **如果你已经从其他地方获取信号**——TradingView 提醒、付费信号服务,或者你自己编写的脚本——并希望它们直接在你自己的机器人上开仓,而不是靠手动执行。
- **如果你比较偏技术型**——你会看到每一个外部信号都要经过的同一条通道(验证 → 解析 → 归一化 → 风控 → 执行),这样你就可以接入自己的信号源,而不必另外发明一套新流程。

## 这里说的"外部信号"是什么

外部信号是指任何来自 WolfBot Community **之外**、需要转化为一笔交易的买/卖指令。例如:

- TradingView 提醒 Webhook(参见专门的 [TradingView 指南](/docs/tradingview))。
- 你自己的脚本或服务触发的自定义 Webhook。
- 一个你足够信任、愿意直接对接到风控层的信号服务。

以上这些都共用同一个经过签名的入口,而不是各自独立、临时拼凑的对接方式。

## 每个外部信号都会经过的这条通道

无论来源是什么,每一个进入的信号都会走同样的路径:

```text
HTTP POST(已签名)
   → 签名验证(使用你的 Webhook 密钥进行 HMAC 校验)
   → 解析信号(符号、方向、from/to)
   → 将符号归一化为目标经纪商所用的名称
   → 附加身份信息(来源、策略、层级)
   → 通过共享的风控/执行层排队开仓
```

因为每个来源都经过同一条通道,无论信号来自哪里,你都能获得相同的保障:

- **已认证**——只有使用你的密钥签名的请求才能被执行。
- **受风控把关**——信号开仓依然要经过与手动或策略订单相同的风险控制。
- **符号已归一化**——你信号中使用的 MT5/USD 名称,会被映射到目标交易所上正确的交易对。

## 分层机制让信号与其来源相匹配

外部信号使用与其他来源相同的三层负载模型,因此无论是一个轻量信号还是一份完整的下单请求,都能得到支持:

- `signal_only`——仅方向/符号;仓位大小和保护措施由 WolfBot 处理。
- `signal_and_risk`——加入名义金额和止盈字段。
- `full_entry_request`——完整信息,包括目标账户。

新的外部来源建议从 `signal_only` 开始,只有在模拟模式下确认过一个完整周期没有问题后,再逐步升级。

## 先在模拟模式下测试每个新来源

对于任何外部来源:

1. 让它对接一个使用专属 Webhook 地址 + 密钥的**模拟**策略。
2. 发送一条测试信号,确认它经过认证后落在预期的符号上。
3. 检查受风控把关的开仓行为是否符合预期。
4. 确认无误后,才将副本切换到实盘。

## 安全提示

- 每个外部来源都会获得**专属的 Webhook 密钥**——请像对待 API 密钥一样谨慎保管它,不要把它出现在公开的图表或代码仓库里。
- 让 Webhook 路由保持在你自己的主机之后;真正起认证作用的是签名,而不是 URL 本身的保密性。
- 你对接给机器人的信号服务应该是你信任的服务——这条通道能验证请求的真实性,但无法判断信号本身的思路是否靠谱。

## 接下来可以看看

- [TradingView 提醒 →](/docs/tradingview)——最常见的外部信号来源,分步说明
- [自动化交易工作流 →](/docs/automated-trading-workflow)
- [先从模拟开始 →](/docs/simulation)

## 下一步

> **[TradingView 提醒 →](/docs/tradingview)**
