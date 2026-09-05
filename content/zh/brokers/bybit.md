---
title: "将 Bybit 连接到 WolfBot Community —— 分步指南"
description: "将 Bybit 连接到 WolfBot Community —— 创建仅限交易的 API 密钥,开始在现货、合约和模拟账户上自动化交易。"
tested_version: "0.1.0-beta.9"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["bybit"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/docs/risk-controls"
previous_guide: "/docs/simulation"
related_guides: ["/docs/simulation", "/docs/risk-controls", "/brokers/api-key-guide"]
keywords: [
  "bybit 交易机器人",
  "bybit 自托管机器人",
  "bybit api 交易自动化",
  "bybit 连接 wolfbot",
  "bybit 统一交易"
]
sitemap_priority: 0.85
lang: "zh"
translation_of: "brokers/bybit"
---

# 将 Bybit 连接到 WolfBot Community

**已在 WolfBot Community v0.1.0-beta.9 上测试** · 最后更新: 2026-08-15

**Bybit 支持状态:** 稳定 · 模拟 ✅ · 实盘 ✅ · 终端 ✅ · 策略 ✅

## 本指南适合谁

任何想将 Bybit 账户(模拟或实盘)连接到 WolfBot Community 进行自动化交易的人。

## 你需要准备什么

- 一个 Bybit 账户([注册](https://partner.bybit.com/b/WOLFBOT))
- 已安装并运行的 WolfBot Community
- 5 分钟时间

---

## 第一步:创建 Bybit API 密钥

### 用于模拟账户(测试网)

1. 前往 [testnet.bybit.com](https://testnet.bybit.com) 并登录
2. 进入 **账户与安全 → API 管理**
3. 点击 **创建新密钥**
4. 选择 **系统生成 API 密钥**
5. 配置权限:
   - ✅ **交易**(读写)
   - ❌ **提现**(关闭)
   - ❌ **划转**(关闭)
6. (可选)绑定 IP 地址以增强安全性
7. 点击 **确认**
8. **复制并保存**你的 API Key 和 Secret Key

### 用于实盘交易

1. 前往 [bybit.com](https://partner.bybit.com/b/WOLFBOT) 并登录
2. 进入 **账户与安全 → API 管理**
3. 按照与模拟账户相同的步骤操作——始终关闭提现和划转权限

> ⚠️ **关键:** 切勿开启提现或划转权限。WolfBot 只需要交易权限。

---

## 第二步:在 WolfBot 中添加 Bybit 账户

1. 打开 WolfBot Community
2. 进入 **交易所账户 → 添加账户**
3. 从经纪商列表中选择 **Bybit**
4. 选择账户类型:**模拟** 或 **实盘**
5. 输入你的 API Key 和 Secret Key
6. 点击 **测试连接**

WolfBot 会验证:
- API 密钥是否有效
- 权限是否正确
- 网络连接是否正常

---

## 第三步:测试连接

连接成功后:

1. 进入 **智能终端**
2. 选择一个 Bybit 交易对(例如 BTC/USDT)
3. 确保模式为 **模拟**(首次测试)
4. 下一个小额模拟订单
5. 确认订单出现在持仓中

然后切换到 **实盘**(模拟或真实):
1. 从最小仓位开始
2. 下一个小额限价单
3. 在 Bybit 上确认订单已出现
4. 取消该测试订单

---

## 第四步:配置设置

Bybit 的推荐设置:

| 设置项 | 模拟 | 实盘 |
|---|---|---|
| 模式 | 先模拟,再实盘 | 从小额开始 |
| 仓位大小 | 任意 | 最小 |
| 最大杠杆 | 任意 | 从 1 倍开始 |
| 止盈/止损 | 启用 | 启用 |
| 对冲模式 | 可选 | 可选 |

---

## 预期结果

设置成功后:
- **交易所账户** 中 Bybit 显示为"已连接"
- 智能终端显示你的 Bybit 余额
- 你下的订单会出现在 Bybit 上

---

## 常见问题

| 问题 | 解决方法 |
|---|---|
| "API key invalid"(密钥无效) | 检查密钥是否过期;如有需要请重新生成 |
| "Permission denied"(权限被拒绝) | 确认交易权限已启用,提现权限已关闭 |
| "Connection timeout"(连接超时) | 检查防火墙/网络设置;确认 Bybit 在你所在地区未受限制 |
| "IP restriction"(IP 限制) | 如果绑定了 IP,请确认你机器的 IP 与 API 密钥限制一致 |
| "Insufficient balance"(余额不足) | 实盘账户:请充值;模拟账户:请领取测试网资金 |

---

## Bybit 专属说明

- **对冲模式:** 支持。请先在 Bybit 账户设置中启用,再在 WolfBot 中启用。
- **持仓模式:** 单向模式和对冲模式均支持。
- **订单类型:** 市价单、限价单、止盈止损单、DCA 均支持。
- **速率限制:** WolfBot 会自动遵守 Bybit 的速率限制。

---

## 故障排查

如果问题持续存在:
1. 查看 [Bybit API 系统状态](https://bybit-exchange.github.io/docs/v5/system-status)
2. 在 Bybit 上确认 API 密钥权限
3. 重新生成 API 密钥,并在 WolfBot 中重新添加
4. 查看 WolfBot 日志:`wolfbot logs`(Linux)或 `C:\Program Files\WolfBot\logs\`(Windows)

---

## 下一步

> **[配置风险控制 →](/docs/risk-controls)** 或 **[连接 Binance →](/brokers/binance)**
