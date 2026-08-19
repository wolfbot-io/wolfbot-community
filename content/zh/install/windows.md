---
title: "在 Windows 上安装 WolfBot Community —— 分步指南"
description: "如何在 Windows 10 或 Windows 11 上安装 WolfBot Community。下载 Setup.exe,几分钟内完成安装,开始在加密货币和 MT5 市场交易。"
tested_version: "0.1.0-p12-ghcr-rc17"
last_updated: "2026-08-15"
platforms: ["windows"]
category: "install"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/getting-started"
related_guides: ["/docs/simulation", "/docs/troubleshooting"]
keywords: [
  "wolfbot windows 安装",
  "wolfbot community windows 安装教程",
  "加密货币交易机器人 windows",
  "windows 11 交易机器人",
  "windows 交易平台"
]
os_tested: ["Windows 11 23H2", "Windows 10 22H2"]
sitemap_priority: 0.9
lang: "zh"
translation_of: "install/windows"
---

# 在 Windows 上安装 WolfBot Community

**已在 WolfBot Community v0.1.0-p12-ghcr-rc17 上测试** · 最后更新: 2026-08-15 · Windows 11 / Windows 10

> ℹ️ **可用性说明:** 首个公开版本(v0.1.0-p12-ghcr-rc17)提供的是 Linux 安装包。Windows 安装包会在后续版本中推出,本指南提前编写完成——请查看[下载页面](/download)了解最新状态,一旦发布即可立即按本指南操作。

## 本指南适合谁

本指南适用于想在 Windows 10 或 Windows 11 电脑上安装 WolfBot Community 的任何人。无需编程或 Docker 经验。安装完成后,你将拥有一个统一的交易平台,可同时管理加密货币交易所和 MT5 经纪商——一个界面,覆盖每个市场。

## 你需要准备什么

- Windows 10 (22H2 或更高版本) 或 Windows 11 (23H2 或更高版本),64 位
- 至少 4 GB 可用内存
- 至少 2 GB 可用磁盘空间
- 网络连接
- 安装软件所需的管理员权限

> ⚠️ **杀毒软件提示:** 部分杀毒软件可能会误报新软件。WolfBot Community 安装包是安全的——它们是来自 WolfBot.io 的官方构建版本。如果杀毒软件拦截了安装程序,请添加例外或暂时关闭杀毒软件。

## 第一步:下载

1. 前往 [community.wolfbot.io/download](https://community.wolfbot.io/download)
2. 点击 **Download for Windows**
3. 系统将下载文件 `WolfBot-Setup-{version}-windows-x64.exe`

## 第二步:安装

1. 双击下载的 `WolfBot-Setup-*.exe`
2. 如果出现 Windows SmartScreen 提示,点击 **更多信息** → **仍要运行**
3. 按照安装向导操作:选择文件夹 → 点击 **安装**
4. 等待安装完成(通常 30-60 秒)
5. 点击 **完成**

## 第三步:启动 WolfBot

1. 双击桌面(或开始菜单)上的 **WolfBot** 图标
2. WolfBot 会打开控制面板——此时还没有连接任何交易所账户,所以在你开始探索之前不需要配置任何东西

## 预期结果

- 系统托盘中出现 WolfBot 图标
- 控制面板窗口打开
- 控制面板的能力状态页面会显示你可以连接哪些经纪商

## 常见问题

| 问题 | 解决方法 |
|---|---|
| "Windows 已保护你的电脑" | 点击"更多信息" → "仍要运行" |
| 安装程序无法启动 | 右键点击 → "以管理员身份运行" |
| 被杀毒软件隔离 | 将 `C:\Program Files\WolfBot` 添加到排除项 |
| "缺少 DLL" 错误 | 安装 [Microsoft Visual C++ 可再发行组件包](https://aka.ms/vs/17/release/vc_redist.x64.exe) —— 这是许多 Windows 应用都需要的免费微软官方组件,安装是安全的 |

## 故障排查

- **WB-WIN-001:** 磁盘空间不足 → 释放 2 GB 空间
- **WB-WIN-002:** 权限被拒绝 → 以管理员身份运行
- **WB-WIN-003:** 下载文件损坏 → 重新下载并校验 checksum
- **WB-WIN-004:** 缺少依赖项 → 安装 VC++ Redist

请参阅[故障排查指南](/docs/troubleshooting)。

## 进阶:验证你的下载文件(可选)

如果你想仔细确认文件没有损坏或被篡改,打开 PowerShell 并运行:

```powershell
Get-FileHash .\WolfBot-Setup-*.exe -Algorithm SHA256
```

将结果与[下载页面](https://community.wolfbot.io/download)上显示的 SHA256 checksum 进行比对。这一步是可选的——大多数人可以跳过。

## 下一步

> **[从模拟账户开始 →](/docs/simulation)**
