---
title: "将 BingX 连接到 WolfBot Community —— 分步指南"
description: "将 BingX 连接到 WolfBot Community —— 创建仅限交易的 API 密钥,开始在标准合约和永续合约上自动化交易。"
tested_version: "0.1.0-p12-ghcr-rc17"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["bingx"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "8 minutes"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls", "/brokers/bybit"]
keywords: ["bingx 交易机器人", "bingx api 机器人", "bingx 连接 wolfbot"]
sitemap_priority: 0.80
lang: "zh"
translation_of: "brokers/bingx"
---

# 将 BingX 连接到 WolfBot Community

**已在 WolfBot Community v0.1.0-p12-ghcr-rc17 上测试** · 最后更新: 2026-08-15

**BingX 支持状态:** 稳定 · 模拟 ✅ · 实盘 ✅ · 终端 ✅ · 策略 ✅

## 本指南适合谁

任何想将 BingX 账户连接到 WolfBot Community、在标准合约或永续合约上进行自动化交易的人。

## 你需要准备什么

- 一个 BingX 账户([注册](https://bingxdao.com/partner/Wolfbot/))
- 已安装的 WolfBot Community
- 5 分钟时间

---

## 第一步:创建 BingX API 密钥

1. 登录 [bingx.com](https://bingxdao.com/partner/Wolfbot/)
2. 进入 **API 管理**(在个人中心/设置下)
3. 点击 **创建 API 密钥**
4. 命名为 "WolfBot Community"
5. 设置权限:
   - 标准合约/合约交易: ✅ 开启
   - 提现: ❌ 关闭
6. (推荐)绑定 IP 地址
7. 完成验证 → 保存 Key 和 Secret

> ⚠️ 切勿开启提现权限——WolfBot 只需要交易权限。

---

## 第二步:在 WolfBot 中添加

1. WolfBot → **交易所账户 → 添加账户**
2. 选择 **BingX**
3. 选择 **标准合约** 或 **永续合约**
4. 输入 API Key + Secret → **测试连接**

---

## 第三步:测试

1. 智能终端 → 选择交易对(例如 BTC/USDT)
2. 先使用你的模拟 API 密钥测试 → 然后下一个小额实盘限价单
3. 在 BingX 上确认 → 取消该测试订单

---

## BingX 专属说明

- **模拟交易:** 可在应用内的 衍生品 → 永续合约 → 模拟交易 中使用(使用虚拟资金)——具体原理请查看 BingX 官方文档——需要使用单独的 API 密钥
- **合约:** 在 WolfBot 中使用永续合约账户类型
- **跟单交易:** WolfBot 不与 BingX 的跟单交易功能交互

---

## 常见问题

| 问题 | 解决方法 |
|---|---|
| API 密钥无效 | 在 BingX 上重新生成 |
| 权限错误 | 启用标准合约/合约交易权限 |
| 连接超时 | 检查防火墙;BingX 在部分地区可能受限 |

---

## 下一步

> **[配置风险控制 →](/docs/risk-controls)**
