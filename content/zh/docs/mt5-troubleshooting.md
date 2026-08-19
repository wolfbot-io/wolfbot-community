---
title: "MT5 故障排查 —— 修复 WolfBot Community 中常见的 MT5 连接和设置问题"
description: "MT5 无法连接、账户无法完成配置,或交易品种没有显示?这里列出了 WolfBot Community 中具体的 MT5 连接和设置错误,以及每一个应该检查什么。"
tested_version: "0.1.0-p12-ghcr-rc17"
platforms: ["linux", "windows"]
category: "troubleshooting"
difficulty: "intermediate"
estimated_time: "10 minutes"
next_guide: "/brokers/mt5"
related_guides: ["/brokers/mt5", "/docs/mt5-without-windows-vps", "/docs/mt5-symbol-mapping", "/docs/risk-controls"]
keywords: [
  "mt5 故障排查",
  "mt5 无法连接 wolfbot",
  "mt5 配置失败",
  "mt5 账户设置错误",
  "metatrader 5 故障排查",
  "wolfbot mt5 错误",
  "mt5 linux 设置问题"
]
sitemap_priority: 0.75
last_updated: "2026-08-18"
lang: "zh"
translation_of: "docs/mt5-troubleshooting"
---

# MT5 故障排查

**已在 WolfBot Community v0.1.0-p12-ghcr-rc17 上测试** · 最后更新: 2026-08-18

## 本指南适合谁

- **如果你在将 MT5 连接到 WolfBot Community 时遇到错误** —— 请按顺序尝试下面的修复方法;每一条都会指向你可以自己查看的日志,而不是靠猜测。
- **如果你比较偏技术型** —— 根因分析部分会准确告诉你哪个组件记录了什么日志,方便你在自己的机器上进行诊断。

## 开始之前

两个快速检查能比其他任何方法都更快地解决大多数 MT5 连接问题:

1. **模拟账户还是实盘账户。** 请确保你先连接的是**模拟(测试网)** MT5 账户,就像连接指南里说的那样。实盘账户可能无法通过就绪检查(而且用它来测试风险更高)。
2. **MT5 桥接功能只包含在 Linux 安装版中。** MT5 在 Linux 上以容器形式运行(只需一条命令即可激活)——目前尚未发布的 Windows 版本中并不是以同样的方式打包的。请确认你的平台与你正在参考的指南相符。

## 常见错误及检查方法

### "无法设置 MT5 账户,请重试。"(`MT5_PROVISIONING_FAILED`)

这是实际安装环境中报告最多的问题。它发生在 MT5 终端/桥接的**每账户配置步骤**无法完成的情况下。不要先急着更换你的 API 凭证——请按顺序检查:

1. **查看 control/api 日志**,找到该次配置尝试以及它返回的具体失败原因。当终端/桥接容器无法创建时,日志会记录 `container_provisioned=false`。
2. **确认容器运行环境是可访问的。** 在 Community 安装中,如果缺少通往桥接控制端的 Docker socket 挂载,每账户容器就永远无法被创建——这是许多 `MT5_PROVISIONING_FAILED` 错误背后的结构性原因。如果日志中出现 socket 或权限错误,那就是瓶颈所在。
3. **确认桥接镜像已存在。** 如果 MT5 桥接镜像没有被拉取下来,即使其他一切都正常,配置也会因为镜像找不到而失败。
4. **查看日志之后再重试。** 这不是"删除密钥再重新添加"就能解决的情况;问题出在配置步骤本身,日志会指出具体的失败原因。

### 账户已连接但没有显示任何交易品种

- 如果你的策略引用了一个在目标交易场所没有映射关系的交易品种,WolfBot 会原样透传它。请确认交易品种名称拼写是否准确,并查看[交易品种映射指南](/docs/mt5-symbol-mapping)。
- 如果交易品种列表看起来是空的,请检查该 MT5 账户对应的已选交易品种文件,并确认 MT5 的市场报价窗口中确实加载了这些交易品种。

### 启动后不久就断开连接或出现订单错误

- 先确认策略被设置为**模拟**模式,这样即使出现拼写错误或交易品种配置有误,也不会在你还在测试阶段时意外开出真实持仓。
- 查看 MT5 桥接日志中的终端状态;一个尚未登录经纪商账户的无界面终端,在会话建立之前会拒绝订单。

### 仍然卡住了?

获得明确答案最快的方法,是在日志就在眼前的情况下重现具体的错误:

- **Control/api 日志** —— 配置和账户就绪状态(实际失败的地方)。
- **MT5 桥接日志** —— 终端登录状态和订单状态。

当你开启一个支持帖时,请粘贴具体的错误行(比如 `MT5_PROVISIONING_FAILED`)以及对应的日志片段——这样问题一次就能被解决,而不需要反复来回沟通。

## 从正确的起点开始

- [MT5 交易品种映射 →](/docs/mt5-symbol-mapping) —— 在开仓之前,准确了解交易品种是如何解析的
- [无需 Windows VPS 运行 MT5 →](/docs/mt5-without-windows-vps)
- [连接 MT5 →](/brokers/mt5)

## 下一步

> **[连接 MT5 →](/brokers/mt5)**
