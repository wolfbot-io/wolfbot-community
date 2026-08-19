---
title: "MT5 交易品种映射 —— WolfBot Community 如何在 MT5 和加密货币交易所之间路由交易品种"
description: "MT5 使用以 USD 计价的交易品种(如 BTCUSD 或 XAUUSD),而加密货币交易所使用 USDT 交易对(BTCUSDT)。以下是 WolfBot Community 如何精确地对它们进行映射,让一个信号能够在 MT5、Binance、Bybit 和 BingX 之间通用,而无需手动改写交易品种名称。"
tested_version: "0.1.0-p12-ghcr-rc19"
platforms: ["linux", "windows"]
category: "broker-setup"
difficulty: "intermediate"
estimated_time: "8 minutes"
next_guide: "/docs/mt5-troubleshooting"
related_guides: ["/brokers/mt5", "/docs/mt5-without-windows-vps", "/docs/smart-terminal", "/docs/risk-controls"]
keywords: [
  "mt5 交易品种映射",
  "mt5 转加密货币交易品种",
  "xauusd 转 paxgusdt",
  "btcusd 与 btcusdt 对比",
  "metatrader 5 期货加密货币",
  "wolfbot 交易品种映射",
  "跨市场交易品种"
]
sitemap_priority: 0.75
last_updated: "2026-08-18"
lang: "zh"
translation_of: "docs/mt5-symbol-mapping"
---

# MT5 交易品种映射

**已在 WolfBot Community v0.1.0-p12-ghcr-rc19 上测试** · 最后更新: 2026-08-18

## 本指南适合谁

- **如果你在加密货币交易所和 MT5 上交易同一个市场** —— 比如你运行一个黄金或 BTC 策略,并希望它显示在同一个仪表盘中——本文解释了为什么交易品种名称看起来不一样,以及 WolfBot Community 如何替你把它们统一起来。
- **如果你比较偏技术型** —— 你会看到 WolfBot 内部实际运行的映射表,这样在开仓之前你就能准确知道一个交易品种会被解析成什么。

## 为什么 MT5 和加密货币交易所对交易品种的命名不同

每个交易场所都用自己的格式报价:

- **MT5(外汇、黄金、指数、股票 CFD)** 使用**类 USD** 的格式报价:`BTCUSD`、`XAUUSD`、`XAGUSD`、`ETHUSD`。
- **加密货币现货/期货交易所**,如 Binance、Bybit 或 BingX,使用 **USDT** 交易对报价:`BTCUSDT`、`XAUUSDT`、`ETHUSDT`。
- 黄金的情况尤为特殊:大多数加密货币交易所都没有"XAU/USDT"交易对——WolfBot 将黄金映射到 `PAXG` 代币(`PAXGUSDT`),一种代币化的黄金 ETF。

如果你在没有任何统一处理的情况下同时连接了 MT5 经纪商和加密货币交易所,同一个策略会看到两个名称不同的交易品种,并把它们当作两个独立的市场对待。WolfBot Community 消除了这种割裂,让一个投资组合视图就能同时展示两者。

## WolfBot Community 如何映射交易品种

WolfBot Community 维护一份唯一权威的交易品种映射表。当一个信号或策略引用某个交易品种时,系统会在生成订单之前,将其转换为目标交易场所的原生名称。基本规则如下:

- `BTCUSD` → `BTCUSDT`,`ETHUSD` → `ETHUSDT`,依此类推——以 USD 计价的加密货币类 MT5 交易品种,会映射到对应的 `USDT` 交易对。
- `XAUUSD` / `GOLD` → `PAXGUSDT` —— 黄金映射到 Binance 上代币化黄金的交易对。
- `XAGUSD` / `SILVER` → `XAGUSDT` —— 白银有原生的 USDT 交易对。
- 白银还会映射到 BingX 的传统金融(TradFi)白银永续合约,使用其内部的合约 ID。
- 没有映射关系的交易品种会**原样透传**,因此自定义交易品种永远不会被意外改写。

这张映射表以交易所交易品种映射(`map_symbol(source, target_exchange)`)的形式存在于代码中;它会返回目标交易场所可用的名称,如果不存在对应条目,则原样返回原始交易品种。

## 这对你的配置意味着什么

- **你只需编写一次策略。** MT5 上的黄金信号和加密货币上的黄金持仓,都会在 WolfBot 统一的风控和投资组合视图中显示为同一个交易品种。
- **无需手动改写交易品种名称。** 当你新增第二个交易场所时,不需要逐个修改每个机器人。
- **确定性。** 映射表固定在平台内部,因此同一个信号总是解析为同一个目标交易品种——在模拟测试和实盘运行之间不会出现意外。

## 一个实际例子

以一个白银策略为例。在你的 MT5 经纪商那里,该交易品种显示为 `XAGUSD`;在 Binance 上则是 `XAGUSDT`。当 WolfBot 为该策略路由订单时,会把源交易品种解析为每个交易场所对应的正确名称,让订单在每个交易所都落在正确的交易对上,而你的投资组合视图仍然只显示一个"白银"交易品种,而不是两个互不相干的市场。

## 下一步去哪里

- [先在安全环境中测试 →](/docs/simulation) —— 在切换到实盘之前,先在模拟账户上映射并验证交易品种
- [常见 MT5 问题 →](/docs/mt5-troubleshooting)
- [连接 MT5 →](/brokers/mt5)

## 下一步

> **[MT5 故障排查 →](/docs/mt5-troubleshooting)**
