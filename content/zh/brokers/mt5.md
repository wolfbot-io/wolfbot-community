---
title: "将 MT5 连接到 WolfBot Community —— 分步指南"
description: "WolfBot Community 已内置 MT5 支持——在 Windows 或 Linux 上交易外汇、黄金、指数和股票 CFD,无需单独的 Windows 电脑。分步连接指南。"
tested_version: "0.1.0-p12-ghcr-rc19"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["mt5"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "15 minutes"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls", "/install/windows", "/install/linux", "/docs/mt5-without-windows-vps"]
keywords: ["mt5 自动化", "mt5 交易机器人", "自托管 mt5 机器人", "metatrader 5 自动化", "黄金交易自动化", "linux mt5"]
sitemap_priority: 0.80
lang: "zh"
translation_of: "brokers/mt5"
---

# 将 MT5 连接到 WolfBot Community

**已在 WolfBot Community v0.1.0-p12-ghcr-rc19 上测试** · 最后更新: 2026-08-15

**MT5 支持状态:** 稳定 · 模拟 ✅ · 实盘 ✅ · 终端 ✅ · 策略 ✅ · Windows ✅ · Linux ✅

## MT5 是内置功能

外汇、黄金、指数、股票 CFD——MT5 市场是 WolfBot Community 的原生功能,与你的加密货币账户在同一个控制面板中呈现。它在 Windows 和 Linux 上的工作方式完全相同,你永远不需要单独的 Windows 电脑来交易 MT5。

- **在 Windows 上**,WolfBot 直接连接到你已经在使用的 MetaTrader 5 应用。
- **在 Linux 上**,WolfBot 会在你自己的浏览器中为你打开 MT5——无需额外安装任何东西。

## 本指南适合谁

想用 WolfBot Community 自动化交易的 MT5 交易者——无论你运行的是哪个操作系统,它都是你统一管理加密货币和传统市场的平台。

## 你需要准备什么

- 已安装的 WolfBot Community
- 一个 MT5 经纪商账户(模拟或实盘)
- 在 Windows 上:已安装 [MetaTrader 5](https://www.metatrader5.com/en/download)
- 15 分钟时间

## 连接 MT5

1. 打开 WolfBot Community
2. 进入 **交易所账户 → 添加账户 → MT5**
3. 登录你的经纪商账户(模拟或实盘)
   - **Windows:** 在你的 MetaTrader 5 应用中完成登录
   - **Linux:** 直接在 WolfBot 的浏览器窗口中完成登录——仅首次需要一个简单的一次性设置步骤(参见下方[技术用户须知](#技术用户须知))
4. WolfBot 会自动获取你可用的交易品种
5. 开始交易——智能终端、机器人和风险控制的使用方式与你的加密货币账户完全相同

> ⚠️ MT5 必须保持登录状态,WolfBot 才能通过它进行交易。

## 测试连接

1. 在 WolfBot 中:智能终端 → 选择 MT5
2. MT5 中的可用交易品种应会显示出来
3. 先在你的模拟账户上下一个小额测试订单
4. 切换到你的实盘 MT5 账户,下一个最小手数的订单
5. 确认订单出现在 MT5 中
6. 取消该测试订单

## 你可以交易哪些品种

MT5 几乎覆盖所有资产类别——WolfBot 可交易你经纪商 MT5 账户提供的任何品种,而不是一个固定列表:

- **外汇** —— EUR/USD、GBP/USD、USD/JPY,以及 50 多个其他货币对
- **贵金属** —— 黄金(XAU/USD)、白银(XAG/USD),通常还有铂金和钯金
- **能源** —— 原油、天然气(视经纪商而定)
- **指数** —— US30、NAS100、S&P 500、DAX 等
- **股票/CFD** —— 个股,通常有数千种品种可选(视经纪商而定)
- **农产品** —— 小麦、玉米、咖啡、糖等(视经纪商而定)
- **加密货币 CFD** —— 视经纪商是否提供而定

> 具体可交易品种取决于你的 MT5 经纪商,而非 WolfBot 本身——请在 MT5 终端的**市场报价(Market Watch)**中查看你账户可交易的完整品种列表。

## 用 MT5 交易黄金

黄金(XAU/USD)是最受欢迎的 MT5 自动化交易品种之一:

1. 连接你支持 XAU/USD 的 MT5 经纪商
2. 在 WolfBot 中:智能终端 → XAU/USD
3. 配置风险参数(黄金波动性较大——请从小仓位开始)
4. 在实盘前先在模拟账户上测试

## 常见问题

| 问题 | 解决方法 |
|---|---|
| MT5 无法连接 | 确认你已在 MT5 中登录经纪商账户,然后重试 |
| "Symbol not available"(品种不可用) | 检查你的经纪商可提供的交易品种 |
| "Automated trading disabled"(自动交易已禁用) | 在 MT5 中:工具 → 选项 → Expert Advisors → 允许自动交易 |
| "Order rejected by broker"(订单被经纪商拒绝) | 检查最小手数限制和交易时段 |

## 下一步

> **[配置风险控制 →](/docs/risk-controls)** —— 对于波动较大的 MT5 品种尤其重要

---

## 技术用户须知

以下内容适合想了解 MT5 桥接具体工作原理、或更喜欢通过终端完成 Linux 设置步骤的用户。使用 WolfBot 中的 MT5 功能并不需要阅读这部分内容——正常流程请参阅上方的[连接 MT5](#连接-mt5)。

### 桥接原理

**Windows** —— MT5 作为独立的原生应用运行,WolfBot 直接桥接到它:

```text
WolfBot Community → MT5 桥接(本地) → MetaTrader 5 终端(你的安装) → MT5 经纪商服务器
```

**Linux** —— WolfBot 在容器内自行运行 MT5 终端,并通过浏览器窗口(VNC)呈现给你:

```text
WolfBot Community → MT5 桥接容器(终端 + VNC + RPyC) → 浏览器窗口 → MT5 经纪商服务器
```

无论哪种方式,桥接始终只通过 MT5 与你的经纪商通信——WolfBot 从不直接连接你的经纪商。

### Linux:一次性终端设置

WolfBot 的 MT5 容器不会随基础安装启动(并非所有 Community 用户都交易 MT5),首次使用时,请运行:

```bash
docker compose \
  -f /opt/wolfbot/compose/wolfbot-compose.json \
  -f /opt/wolfbot/compose/compose.mt5.yaml \
  up -d
```

然后在浏览器中打开 **`http://127.0.0.1:8090/mt5-vnc/`**(密码为 `wolfbot`,或你通过 `MT5_VNC_PASSWORD` 设置的密码),在其中登录你的经纪商账户——这正是之后 WolfBot 的 MT5 流程所使用的同一个浏览器窗口。由于这是你自己的机器,而非共享的 Cloud 实例,访问始终开放且无限制。

### Windows:桥接配置参考

| 设置项 | 值 |
|---|---|
| MT5 安装路径 | 自动检测(通常为 `C:\Program Files\MetaTrader 5`) |
| 账户类型 | 模拟或实盘 |
| 品种映射 | 自动配置 |

### 环境要求

- 交易期间 MT5 必须保持运行(Windows 上为原生应用,Linux 上为桥接容器)
- 必须在 MT5 中启用自动交易(Algo Trading)
- 你的机器必须保持开机(或使用 VPS——Windows 和 Linux 均可)
- 尚不支持:同时运行多个 MT5 实例,部分小众经纪商专属品种

### 技术故障排查

| 问题 | 解决方法 |
|---|---|
| "MT5 not detected"(未检测到 MT5,Windows) | 检查安装路径;重启 MT5 |
| VNC 页面无法加载(Linux) | 确认 MT5 容器正在运行:`docker compose ... ps`——首次启动可能需要一分钟 |
| "Bridge connection failed"(桥接连接失败) | 确保 MT5 正在运行且已登录——Windows 上为原生应用,Linux 上为浏览器会话 |

### 让 MT5 24/7 运行

- **Windows:** 使用 Windows VPS,安装 MT5 + WolfBot Community,在 MT5 中启用自动登录,配置 Windows 自动启动 WolfBot
- **Linux:** 使用运行 WolfBot Community 并启用了 MT5 容器的 Linux VPS——它会保持登录状态并持续运行,和 WolfBot 的其他服务完全一样,无需任何自动登录脚本
