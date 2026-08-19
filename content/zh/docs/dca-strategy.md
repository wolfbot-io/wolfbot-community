---
title: "WolfBot Community 中的定投策略(DCA)"
description: "定投(DCA)将一笔仓位拆分成多个更小的入场,而不是一次性大额买入。以下是 WolfBot Community 如何支持 DCA,以及它如何融入与其他订单相同的风控引擎。"
tested_version: "0.1.0-p12-ghcr-rc17"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "intermediate"
estimated_time: "6 minutes"
next_guide: "/docs/risk-controls"
previous_guide: "/docs/take-profit-stop-loss"
related_guides: ["/docs/take-profit-stop-loss", "/docs/risk-controls", "/brokers/bybit"]
keywords: [
  "定投策略",
  "dca 交易机器人",
  "dca 加密货币机器人",
  "wolfbot dca",
  "摊薄成本交易机器人"
]
sitemap_priority: 0.75
lang: "zh"
translation_of: "docs/dca-strategy"
---

# 定投策略(DCA)

**已在 WolfBot Community v0.1.0-p12-ghcr-rc17 上测试** · 最后更新: 2026-08-15

## 本指南适合谁

- **如果你想用更温和的方式建仓** —— 本文用通俗的语言解释了 DCA 是什么、什么时候有用,以及 WolfBot 如何执行它。
- **如果你比较偏技术型** —— 你会看到一次 DCA 入场是如何被建模为同一订单执行路径中的一系列子订单(每笔都有自己的编号)的,这样风控限制依然作用于*整个*持仓,而不只是第一笔。

## 什么是 DCA

定投(dollar-cost averaging)是指**分多次、在不同时间或不同价位**买入一笔仓位,而不是在单一价位一次性买入全部。

```text
一次性入场:    一次买入 100%  →  一个价格决定一切
DCA 入场:      分 4 次各买 25%  →  多个价格的平均值
```

如果价格在你第一笔买入后继续下跌,后续几笔会以更低的价格买入,从而拉低你的平均入场成本。如果价格从未回落,你会放弃一部分上行空间,但你避开了"我是否精准抓住了最佳时机"这个问题。

## WolfBot Community 如何支持 DCA

DCA 是 WolfBot 支持的订单类型之一,与市价单、限价单和止盈/止损订单并列。一次 DCA 入场会被处理为一组更小的子订单,而不是一次性大额成交——每一笔子订单在执行层都会被单独追踪。

> 🔎 **技术读者须知:** 每笔 DCA 子订单都带有自己的 `dca_index`(第一笔为 `1`,依次递增),这样执行管理器就能知道自己正在成交哪一笔,并可以将整个序列在风控层面视为同一个逻辑持仓。

## 为什么它依然遵守你的风控限制

DCA **不意味着**"无上限地持续买入"。整个 DCA 序列依然受到与任何其他持仓相同的[风险控制](/docs/risk-controls)约束:

- 所有子订单加起来的**总仓位大小**仍在你的敞口上限之内
- 如果合并后的持仓亏损过多,**回撤保护**依然会暂停交易
- **止盈/止损**依然作用于整体持仓,而不是每笔子订单单独计算

这才是关键所在:DCA 分散的是*你什么时候买入*,而不是*你总共承担多少风险*。

## 什么时候适合使用 DCA

- 你对长期方向有信心,但不确定短期时机
- 你正在进入一个波动较大、很难判断精确入场价的市场
- 你想减少因单次入场时机不佳而产生的懊悔

## 常见错误

| 错误 | 解决方法 |
|---|---|
| 把 DCA 当成"无限制抄底" | 总仓位依然受你的敞口限制约束——请先设置好限制 |
| DCA 持仓不设止损 | 整个持仓依然需要止损,和其他任何交易一样 |
| 不断加仓却不关注总敞口 | 每一笔子订单都会加到同一个持仓上;请检查合计仓位大小 |

## 下一步

> **[配置能让 DCA(以及其他一切)保持安全的风险控制 →](/docs/risk-controls)**
