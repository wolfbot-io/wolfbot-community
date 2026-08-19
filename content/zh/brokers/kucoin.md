---
title: "将 KuCoin 连接到 WolfBot Community —— 分步指南"
description: "将 KuCoin 连接到 WolfBot Community —— 创建带密码短语的 API 密钥,开始在现货和合约上自动化交易。"
tested_version: "0.1.0-p12-ghcr-rc17"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["kucoin"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "8 minutes"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls"]
keywords: ["kucoin 交易机器人", "kucoin api 机器人", "kucoin 连接 wolfbot"]
sitemap_priority: 0.80
lang: "zh"
translation_of: "brokers/kucoin"
---

# 将 KuCoin 连接到 WolfBot Community

**已在 WolfBot Community v0.1.0-p12-ghcr-rc17 上测试** · 最后更新: 2026-08-15

**KuCoin 支持状态:** 稳定 · 模拟 ✅ · 实盘 ✅ · 终端 ✅ · 策略 ✅

## 本指南适合谁

任何想将 KuCoin 账户连接到 WolfBot Community 的人。

## 你需要准备什么

- 一个 KuCoin 账户([注册](https://www.kucoin.com/r/broker/WOLFBOTIO))
- 已安装的 WolfBot Community
- 5 分钟时间

---

## 第一步:创建 KuCoin API 密钥

1. 登录 [kucoin.com](https://www.kucoin.com/r/broker/WOLFBOTIO)
2. 进入 **账户 → API 管理**
3. 点击 **创建 API**
4. 命名为 "WolfBot Community"
5. 设置一个 **API 密码短语(Passphrase)**(KuCoin 必需——请务必记住!)
6. 权限设置:
   - 现货交易: ✅ 开启
   - 合约交易: ✅ 开启(如果使用合约)
   - 提现: ❌ 关闭
   - 划转: ❌ 关闭
7. (推荐)绑定 IP 地址
8. 完成验证 → 保存 Key、Secret 和 Passphrase

> ⚠️ KuCoin 需要密码短语。请妥善保存——在 WolfBot 中会用到它。

---

## 第二步:在 WolfBot 中添加

1. WolfBot → **交易所账户 → 添加账户**
2. 选择 **KuCoin**
3. 选择账户类型:**现货** 或 **合约**
4. 输入 API Key、Secret Key **和 Passphrase**
5. 点击 **测试连接**

---

## 第三步:测试

1. 智能终端 → 选择交易对
2. 先使用你的模拟 API 密钥测试 → 然后下一个小额实盘订单
3. 在 KuCoin 上确认 → 取消订单

---

## KuCoin 专属说明

- **需要密码短语** —— 与大多数经纪商不同,KuCoin 强制要求 API 密码短语
- **模拟环境:** KuCoin 提供 Sandbox 沙盒环境用于测试
- **合约:** 支持
- **币种丰富:** KuCoin 支持大量山寨币交易对

---

## 常见问题

| 问题 | 解决方法 |
|---|---|
| "Passphrase incorrect"(密码短语错误) | 请重新输入;密码短语区分大小写 |
| API 密钥无效 | 在 KuCoin 上重新生成 |
| 权限被拒绝 | 启用现货交易权限 |
| 连接超时 | 检查防火墙设置 |

---

## 下一步

> **[配置风险控制 →](/docs/risk-controls)**
