---
title: "将 Bitget 连接到 WolfBot Community —— 分步指南"
description: "将 Bitget 连接到 WolfBot Community —— 创建仅限交易的 API 密钥,开始在现货和合约上自动化交易。"
tested_version: "0.1.0-beta.2"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["bitget"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "8 minutes"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls"]
keywords: ["bitget 交易机器人", "bitget api 机器人", "bitget 连接 wolfbot"]
sitemap_priority: 0.80
lang: "zh"
translation_of: "brokers/bitget"
---

# 将 Bitget 连接到 WolfBot Community

**已在 WolfBot Community v0.1.0-beta.2 上测试** · 最后更新: 2026-08-15

**Bitget 支持状态:** 稳定 · 模拟 ✅ · 实盘 ✅ · 终端 ✅ · 策略 ✅

## 本指南适合谁

任何想将 Bitget 账户连接到 WolfBot Community 的人。

## 你需要准备什么

- 一个 Bitget 账户([注册](https://partner.bitget.com/bg/WOLFBOT))
- 已安装的 WolfBot Community
- 5 分钟时间

---

## 第一步:创建 Bitget API 密钥

1. 登录 [bitget.com](https://partner.bitget.com/bg/WOLFBOT)
2. 进入 **账户 → API 管理**
3. 点击 **创建 API 密钥**
4. 命名为 "WolfBot Community"
5. 设置权限:
   - 交易: ✅ 开启
   - 提现: ❌ 关闭
   - 划转: ❌ 关闭
6. (推荐)绑定 IP 地址
7. 完成验证 → 保存 Key + Secret

---

## 第二步:在 WolfBot 中添加

1. WolfBot → **交易所账户 → 添加账户**
2. 选择 **Bitget**
3. 选择 **现货** 或 **合约**
4. 输入 API Key + Secret → **测试连接**

---

## 第三步:测试

1. 智能终端 → 选择交易对
2. 先使用你的模拟 API 密钥测试 → 然后下一个小额实盘限价单
3. 在 Bitget 上确认 → 取消订单

---

## Bitget 专属说明

- **模拟交易:** Bitget 提供测试网供测试使用
- **合约:** 支持
- **跟单交易:** WolfBot 不与 Bitget 的跟单交易功能交互

---

## 常见问题

| 问题 | 解决方法 |
|---|---|
| API 密钥无效 | 在 Bitget 上重新生成 |
| 权限被拒绝 | 启用交易权限 |
| IP 限制错误 | 添加你的 IP 或关闭 IP 限制 |

---

## 下一步

> **[配置风险控制 →](/docs/risk-controls)**
