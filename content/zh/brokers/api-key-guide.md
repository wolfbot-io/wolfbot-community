---
title: "仅限交易 API 密钥指南 —— 安全最佳实践"
description: "如何为 WolfBot Community 创建安全的仅限交易 API 密钥。切勿开启提现权限。适用于 Binance、Bybit、BingX、KuCoin、Bitget 的操作指南。"
tested_version: "0.1.0-beta.4"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["binance", "bybit", "bingx", "kucoin", "bitget"]
category: "security"
difficulty: "beginner"
estimated_time: "5 minutes"
related_guides: ["/brokers/bybit", "/brokers/binance", "/security", "/docs/trade-only-api-keys-explained"]
keywords: [
  "仅限交易 api 密钥",
  "交易机器人 api 密钥安全",
  "非托管交易机器人",
  "安全 api 密钥设置",
  "wolfbot api 权限"
]
sitemap_priority: 0.80
lang: "zh"
translation_of: "brokers/api-key-guide"
---

# 仅限交易 API 密钥指南

**已在 WolfBot Community v0.1.0-beta.4 上测试** · 最后更新: 2026-08-15

## 为什么必须仅限交易?

WolfBot Community 是**非托管的**——它从不持有你的资金。它通过你自己掌控的 API 密钥连接交易所,你可以随时撤销这些密钥。

**黄金法则:** 用于交易软件的任何 API 密钥都绝不能开启提现或划转权限。详见[仅限交易 API 密钥详解 →](/docs/trade-only-api-keys-explained),了解为什么这一项设置比其他任何设置都更重要。

## 必需权限

WolfBot 只需要以下权限:

| 权限 | 是否必需 | 用途 |
|---|---|---|
| **交易**(读写) | ✅ 是 | 下单/撤单、查看持仓 |
| **读取**(只读) | ✅ 是 | 读取余额、持仓、订单历史 |
| **提现** | ❌ 绝不开启 | WolfBot 不会提现资金 |
| **划转** | ❌ 绝不开启 | WolfBot 不会在账户间划转资金 |

如果交易所提供更细粒度的权限,也请关闭:
- ❌ **提现**
- ❌ **内部划转**
- ❌ **子账户划转**
- ❌ **理财/质押** 管理

## 各交易所设置方法

### Binance
1. API 管理 → 创建 API
2. 开启:**启用现货和杠杆交易**
3. 关闭:**启用提现**
4. (推荐)限制为受信任的 IP

### Bybit
1. API 管理 → 创建新密钥
2. 开启:**交易** 权限
3. 关闭:**提现**、**划转**
4. (推荐)绑定 IP 地址

### BingX
1. API 管理 → 创建 API 密钥
2. 开启:**交易**
3. 关闭:**提现**
4. (推荐)限制 IP 访问

### KuCoin
1. API 管理 → 创建 API
2. 在现货交易下开启:**交易**
3. 关闭:**提现**、**划转**
4. 设置密码短语(KuCoin 必需)

### Bitget
1. API 管理 → 创建 API 密钥
2. 开启:**交易**
3. 关闭:**提现**
4. (推荐)绑定 IP

## 其他安全建议

### IP 绑定(推荐)
在支持的情况下,将 API 密钥绑定到你机器的 IP 地址:
- 防止从其他位置使用该密钥
- IP 变化时请及时更新
- 24/7 运行建议使用固定 IP 或 VPS

### 每个服务使用独立密钥
- 为 WolfBot Community 使用一个专属 API 密钥
- 投资组合追踪类应用使用不同的密钥
- 便于单独撤销某个集成的权限

### 定期审查
- 每月检查一次 API 密钥
- 删除未使用的密钥
- 定期重新生成密钥

### 密钥存储
- 安全存储 API 密钥(WolfBot 会在本地对其加密)
- 切勿在截图或客服消息中透露密钥
- 不要将密钥存放在云笔记或邮件中

---

## 如果密钥泄露了怎么办?

1. **立即**在交易所删除该 API 密钥
2. 检查账户是否有未授权操作
3. 创建一个新的仅限交易密钥
4. 在 WolfBot 中更新为新密钥

由于提现权限已关闭,泄露的仅限交易密钥无法窃取资金——但可能被用来下不必要的订单。请务必第一时间处理。

---

## 下一步

> **[连接 Bybit →](/brokers/bybit)** 或 **[安全概览 →](/security)**
