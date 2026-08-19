---
title: "将 Binance 连接到 WolfBot Community —— 分步指南"
description: "将 Binance 连接到 WolfBot Community —— 创建仅限交易的 API 密钥,开始在现货和合约市场自动化交易。"
tested_version: "0.1.0-p12-ghcr-rc17"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["binance"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/docs/risk-controls"
previous_guide: "/brokers/api-key-guide"
related_guides: ["/docs/simulation", "/docs/risk-controls", "/brokers/api-key-guide"]
keywords: ["binance 交易机器人", "binance api 机器人", "binance 连接 wolfbot", "binance 统一交易", "binance 自托管机器人"]
sitemap_priority: 0.85
lang: "zh"
translation_of: "brokers/binance"
---

# 将 Binance 连接到 WolfBot Community

**已在 WolfBot Community v0.1.0-p12-ghcr-rc17 上测试** · 最后更新: 2026-08-15

**Binance 支持状态:** 稳定 · 模拟 ✅ · 实盘 ✅ · 终端 ✅ · 策略 ✅

## 本指南适合谁

任何想将 Binance 账户连接到 WolfBot Community、实现跨市场交易的人。

## 你需要准备什么

- 一个 Binance 账户([注册](https://www.binance.com/register?ref=WOLFBOT))
- 已安装并运行的 WolfBot Community
- 5 分钟时间

---

## 第一步:创建 Binance API 密钥

### 用于现货交易

1. 登录 [binance.com](https://www.binance.com/register?ref=WOLFBOT)
2. 进入 **个人中心 → API 管理**
3. 点击 **创建 API**
4. 选择 **系统生成** 密钥类型
5. 命名为 "WolfBot Community"
6. 完成安全验证
7. **关键——编辑权限限制:**
   - 启用现货和杠杆交易: ✅ 开启
   - 启用提现: ❌ 关闭
   - 启用万向划转: ❌ 关闭
8. (推荐)限制为受信任的 IP 地址
9. 点击 **保存**

> ⚠️ 切勿开启提现权限。WolfBot 只需要交易权限。

---

## 第二步:在 WolfBot 中添加 Binance 账户

1. 打开 WolfBot Community → **交易所账户 → 添加账户**
2. 选择 **Binance** → 选择 **现货** 或 **合约**
3. 输入你的 API Key 和 Secret Key
4. 点击 **测试连接**

---

## 第三步:测试

1. 进入 **智能终端** → 选择 BTC/USDT
2. 先使用 **模拟** 账户开始
3. 然后切换到 **实盘** 账户,下一个小额限价单
4. 在 Binance 上确认订单已出现 → 取消该订单

---

## Binance 专属说明

- **速率限制:** WolfBot 会自动遵守 Binance API 速率限制(1200 权重/分钟)
- **IP 限制:** 强烈建议在生产环境密钥上启用
- **订单类型:** 完全支持市价单、限价单、止损限价单、OCO 单

---

## 常见问题

| 问题 | 解决方法 |
|---|---|
| "API key invalid"(密钥无效) | 在 Binance 上重新生成密钥 |
| "IP not whitelisted"(IP 未加入白名单) | 添加你的 IP 或关闭 IP 限制 |
| "Insufficient permissions"(权限不足) | 在 Binance 上启用现货交易权限 |
| "Connection timeout"(连接超时) | 检查防火墙/网络设置 |

---

## 下一步

> **[配置风险控制 →](/docs/risk-controls)**
