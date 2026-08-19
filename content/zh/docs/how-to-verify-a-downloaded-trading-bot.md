---
title: "如何验证下载的交易机器人 —— 检查你即将安装的内容"
description: "在安装任何交易机器人之前,先验证来源和文件本身。以下是如何将下载文件与官方发布版本、摘要值和签名进行比对,确保你永远不会运行未经验证的交易软件。"
tested_version: "0.1.0-p12-ghcr-rc19"
platforms: ["windows", "linux"]
category: "security"
difficulty: "beginner"
estimated_time: "7 minutes"
next_guide: "/security"
related_guides: ["/security", "/faq", "/about", "/download"]
keywords: [
  "验证下载的交易机器人",
  "验证交易机器人校验和",
  "交易软件真实性",
  "检查 wolfbot 下载 sha256",
  "安全安装交易机器人",
  "验证机器人下载 linux"
]
sitemap_priority: 0.7
last_updated: "2026-08-18"
lang: "zh"
translation_of: "docs/how-to-verify-a-downloaded-trading-bot"
---

# 如何验证下载的交易机器人

**已在 WolfBot Community v0.1.0-p12-ghcr-rc19 上测试** · 最后更新: 2026-08-18

## 本指南适合谁

- **如果你已经下载了一个交易机器人(或即将下载),想确认它是不是真品** —— 这里介绍两个只需两分钟的检查方法。
- **如果你比较偏技术型** —— 你会看到如何用维护者公开的摘要值和签名,独立确认一个二进制文件的真实性。

## 为什么要验证

交易软件会接触你的交易所和资金。任何人都可以发布一个名为"WolfBot"的二进制文件——最安全的习惯是在运行之前,先确认这个文件确实是它名字所声称的东西。有两个信号可以用来检查:

1. **来源在哪里** —— 官方发布渠道。
2. **文件实际是什么** —— 摘要值和签名是否匹配。

## 两分钟检查法

**1. 使用官方来源。**

只从官方 GitHub 仓库(`github.com/wolfbot-io/wolfbot-community`)或 `community.wolfbot.io` 下载。从其他地方获取的文件——某个随机博客、镜像站点、私信——按定义就是未经验证的。

**2. 对比校验和。**

WolfBot 为每个安装包发布 **SHA-256 摘要值**(你会在下载页面和发布说明中看到它)。下载完成后:

```bash
# Linux/macOS
sha256sum WolfBot-Setup-linux-amd64.deb
# Windows (PowerShell)
Get-FileHash .\WolfBot-Setup.exe -Algorithm SHA256
```

输出结果必须与发布的摘要值完全一致。不匹配就说明这个文件不是原版——不要安装它。

**3. (技术型)检查签名。**

官方发布版本都经过加密签名。使用项目的公钥验证签名,可以在不依赖哈希文件的情况下,独立确认是谁构建的它。

## 危险信号

- 摘要值与官方发布的**不**匹配。
- 文件来自官方仓库/社区网站以外的来源。
- 你下载的页面不是真正的 wolfbot.io/github 域名。
- 有人要求你以管理员权限运行一个来自未经验证来源的安装程序。

出现以上任何一种情况都请停止,改从官方发布渠道下载。

## WolfBot Community 为什么要公开这些内容

透明度是安全自托管的一部分。因为你随时都能验证自己安装的是什么,所以你永远不需要仅凭下载页面上的一个名字就盲目信任它。

## 下一步去哪里

- [安全 →](/security)
- [关于我们与官方渠道 →](/about)
- [下载官方发布版本 →](/download)

## 下一步

> **[阅读安全页面 →](/security)**
