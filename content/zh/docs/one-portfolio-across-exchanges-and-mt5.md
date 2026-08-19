---
title: "跨交易所和 MT5 的统一投资组合 —— 在单一视图中查看每一笔持仓"
description: "不必逐个登录每个交易所,你的整个投资组合——加密货币和 MT5 一起——会显示在一个自托管的单一视图中。以下是统一投资组合可见性能带来什么,以及为什么这会改变你管理风险的方式。"
tested_version: "0.1.0-p12-ghcr-rc17"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "beginner"
estimated_time: "7 minutes"
next_guide: "/docs/risk-controls"
related_guides: ["/docs/risk-controls", "/docs/crypto-and-mt5-one-platform", "/docs/how-unified-risk-differs-from-per-bot-risk", "/brokers/mt5"]
keywords: [
  "统一投资组合交易",
  "一个投资组合多个交易所",
  "加密货币 mt5 投资组合视图",
  "跨交易所投资组合",
  "单一投资组合视图机器人",
  "wolfbot 投资组合仪表盘"
]
sitemap_priority: 0.8
last_updated: "2026-08-18"
lang: "zh"
translation_of: "docs/one-portfolio-across-exchanges-and-mt5"
---

# 跨交易所和 MT5 的统一投资组合

**已在 WolfBot Community v0.1.0-p12-ghcr-rc17 上测试** · 最后更新: 2026-08-18

## 本指南适合谁

- **如果你在不止一个交易所以及 MT5 上都持有仓位,并且厌倦了在脑子里或表格里手动把它们加起来。**
- **如果你比较偏技术型** —— 本文解释了来自完全不同交易场所的持仓,是如何被归并成一个可读的投资组合的。

## 分散式投资组合的问题

你交易的市场越多,你的"投资组合"就越分散在各个登录页面之间:一个交易所上的期货持仓、另一个交易所上的现货持仓,还有 MT5 里的黄金和外汇。除非你手动去加总,否则没有任何东西会自动汇总它们,而等你算完的时候,数字早就变了。

WolfBot Community 为你展示**一个投资组合**——每一个已连接的账户,加密货币和 MT5,都在一个自托管的仪表盘中呈现。

## 统一可见性能带来什么

- **一眼看清总敞口。** 看到你的整体风险,而不是把它拆散在各个标签页之间。
- **交易品种一致。** 同一个交易标的,无论来自 MT5(`XAUUSD`)还是加密货币交易对,都显示为同一行——[交易品种映射](/docs/mt5-symbol-mapping) 会统一这些名称。
- **投资组合层面的数值。** 保证金、回撤和敞口是统一计算的,这些数据会输入到 [统一风控引擎](/docs/how-unified-risk-differs-from-per-bot-risk),而不是一堆各自为政的单机器人数字。

## 工作原理

在底层,Binance 和 MT5 是两套毫不相关的系统——一个是期货 REST API,另一个是 Windows 交易终端。WolfBot 把两者都连接起来,并通过一个投资组合视图呈现,中间会解决交易品种/交易场所之间的差异。你会得到一幅连贯的图景,而不必放弃任何一个经纪商。

## 从小处开始

连接一个加密货币模拟账户和一个 MT5 模拟账户,在两边各开一个小仓位,然后看一下投资组合视图——两者会出现在同一个列表中。这就是在你运行更大仓位之前,建立对统一数据信任的基础。

## 下一步去哪里

- [风险控制 →](/docs/risk-controls)
- [统一风控有何不同 →](/docs/how-unified-risk-differs-from-per-bot-risk)
- [加密货币和 MT5 在同一平台上 →](/docs/crypto-and-mt5-one-platform)

## 下一步

> **[阅读风险控制指南 →](/docs/risk-controls)**
