---
title: "为什么提现权限应该始终保持关闭 —— 保护你的资金不受密钥泄露影响"
description: "仅限交易的 API 密钥本就应该关闭提现权限。以下是为什么开启提现权限的密钥,是被盗的交易所密钥变成被盗账户余额的主要途径,以及如何检查你自己的密钥。"
tested_version: "0.1.0-p12-ghcr-rc21"
platforms: ["windows", "linux"]
category: "security"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/docs/trade-only-api-keys-explained"
related_guides: ["/docs/trade-only-api-keys-explained", "/security", "/docs/risk-controls"]
keywords: [
  "提现权限 api 密钥",
  "仅限交易 api 密钥",
  "关闭交易机器人提现权限",
  "api 密钥安全",
  "无提现权限交易所密钥",
  "安全的机器人 api 凭证"
]
sitemap_priority: 0.7
last_updated: "2026-08-18"
lang: "zh"
translation_of: "docs/why-withdrawal-permissions-should-stay-disabled"
---

# 为什么提现权限应该始终保持关闭

**已在 WolfBot Community v0.1.0-p12-ghcr-rc21 上测试** · 最后更新: 2026-08-18

## 一句话答案

交易机器人只需要下单和管理交易。它永远不需要把你的资金转出去。因此,对于任何自托管机器人来说——包括 WolfBot Community——最安全的 API 密钥是一个**关闭了提现权限的仅限交易密钥。**

## API 密钥能携带哪些权限

当你在交易所创建一个 API 密钥时,通常可以选择它能执行哪些操作。对于交易机器人而言,有意义的区别在于:

- **交易:** 读取余额、下单、管理持仓——正是机器人所做的一切。
- **提现:** 将资金转出账户。

第二项权限,正是把一个泄露或被盗的密钥,从"有人可以干扰我的交易"变成"有人可以拿走我的钱"的关键所在。

## 为什么这对你的资金很重要

如果你密钥的提现权限是**关闭**的,即使密钥被完全攻破,也无法把你的余额发送到任何地方——交易所会直接拒绝来自该密钥的任何提现请求。这为被盗凭证能对你实际资金造成的损害,设下了一道硬性防线。

如果提现权限是**开启**的,一旦该密钥泄露(比如粘贴到了错误的地方、运行的机器被入侵、你安装了一个恶意依赖包),攻击者就可以直接把账户资金转空,不需要任何额外步骤。

## 如何检查你自己的密钥

1. 登录交易所,打开 **API 管理**。
2. 找到与你的机器人相连的那个密钥。
3. 确认只启用了**交易/读取**,并且**提现处于关闭状态。**
4. 如果提现权限是开启的,请关闭它,然后重新连接机器人。WolfBot 从不需要这个权限。

## 简而言之,仅限交易的密钥

- 一个仅限交易的密钥,足以满足机器人所做的一切:读取、下单、管理。
- 关闭提现权限,是每个人都能掌控的、成本最低也最有效的资金保护手段。

## 下一步去哪里

- [仅限交易的 API 密钥详解 →](/docs/trade-only-api-keys-explained)
- [安全 →](/security)
- [风险控制 →](/docs/risk-controls)

## 下一步

> **[仅限交易的 API 密钥详解 →](/docs/trade-only-api-keys-explained)**
