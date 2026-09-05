---
title: "WolfBot Community 错误代码 —— 快速修复参考"
description: "WolfBot Community 全部错误代码说明:WB-WIN-001 到 WB-WIN-004,以及 WB-LNX-001 到 WB-LNX-002。查找你遇到的安装或启动错误的确切修复方法。"
tested_version: "0.1.0-beta.9"
last_updated: "2026-08-18"
platforms: ["windows", "linux"]
category: "troubleshooting"
difficulty: "beginner"
estimated_time: "3 minutes"
related_guides: ["/docs/troubleshooting", "/install/windows", "/install/linux", "/docs/updates"]
keywords: [
  "wolfbot 错误代码",
  "WB-WIN-001",
  "WB-LNX-002",
  "wolfbot 安装错误",
  "wolfbot linux 错误",
  "wolfbot windows 错误代码"
]
sitemap_priority: 0.80
lang: "zh"
translation_of: "docs/error-codes"
---

# WolfBot Community 错误代码

**已在 WolfBot Community v0.1.0-beta.9 上测试** · 最后更新: 2026-08-18

一个代码对应一个修复方法。错误代码会准确告诉你哪里出了问题,你不需要靠猜。在下方找到你的代码,应用对应的修复方法;如果问题仍未解决,再查阅[完整的故障排查指南](/docs/troubleshooting)。

---

## 快速查询表

| 错误代码 | 出现位置 | 一句话修复方法 |
|---|:---:|---|
| [WB-WIN-001](#wb-win-001--磁盘空间不足) | Windows 安装程序 | 释放 2 GB 磁盘空间 |
| [WB-WIN-002](#wb-win-002--权限被拒绝) | Windows 安装程序 | 以管理员身份运行安装程序 |
| [WB-WIN-003](#wb-win-003--下载文件损坏) | Windows 安装程序 | 重新下载并校验 SHA256 校验和 |
| [WB-WIN-004](#wb-win-004--缺少依赖项) | Windows 首次启动 | 安装 Visual C++ 可再发行组件包 |
| [WB-LNX-001](#wb-lnx-001--未找到-docker) | Linux 安装程序 | 安装 Docker,或重新运行安装程序 |
| [WB-LNX-002](#wb-lnx-002--端口冲突) | Linux 首次启动 | 停止占用 8765 端口的进程 |

---

## Windows 错误代码

### WB-WIN-001 — 磁盘空间不足
**现象:** 安装程序报错"磁盘空间不足"。

**修复方法:** 至少释放 2 GB 空间,然后重试。请先检查你的 `C:` 盘剩余空间。

### WB-WIN-002 — 权限被拒绝
**现象:** 安装过程中出现"拒绝访问"。

**修复方法:** 右键点击安装程序,选择**以管理员身份运行**。

### WB-WIN-003 — 下载文件损坏
**现象:** 安装程序无法启动,或未通过完整性校验。

**修复方法:** 从 [community.wolfbot.io/download](https://community.wolfbot.io/download) 重新下载,并在运行前将 SHA256 校验和与官方公布的值进行比对。参见[如何验证下载的交易机器人](/docs/how-to-verify-a-downloaded-trading-bot)。

### WB-WIN-004 — 缺少依赖项
**现象:** WolfBot 启动时提示"找不到 VCRUNTIME140.dll"。

**修复方法:** 安装 [Visual C++ 可再发行组件包](https://aka.ms/vs/17/release/vc_redist.x64.exe),然后重启 WolfBot。

---

## Linux 错误代码

### WB-LNX-001 — 未找到 Docker
**现象:** 提示"未安装 Docker"。

**修复方法:** 执行 `sudo apt-get install docker.io`,或直接重新运行安装程序——它会自动为你安装并启动 Docker。

### WB-LNX-002 — 端口冲突
**现象:** 提示"端口 8765 已被占用"。

**修复方法:** 用 `sudo lsof -i :8765` 查找占用该端口的进程,停止该服务,然后重启 WolfBot。

---

## 相关内容

- [完整故障排查指南](/docs/troubleshooting) —— 网络、更新、性能和数据相关问题。
- [在 Windows 上安装 WolfBot](/install/windows) —— 完整的 Windows 安装流程。
- [在 Linux 上安装 WolfBot](/install/linux) —— Ubuntu/Debian 安装步骤与服务状态。
- [更新与回滚](/docs/updates) —— 当更新失败时该怎么办。
- 找不到你遇到的代码?[搜索 GitHub Discussions](https://github.com/wolfbot-io/wolfbot-community/discussions) 或[提交一个 issue](https://github.com/wolfbot-io/wolfbot-community/issues/new/choose)。
