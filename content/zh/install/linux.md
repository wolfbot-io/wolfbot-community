---
title: "在 Ubuntu/Linux 上安装 WolfBot Community —— 分步指南"
description: "如何在 Ubuntu 22.04、Ubuntu 24.04 或 Debian 12 上安装 WolfBot Community。下载 .deb 安装包,开始在加密货币和 MT5 市场交易——无需命令行。"
tested_version: "0.1.0-p12-ghcr-rc19"
last_updated: "2026-08-15"
platforms: ["linux"]
category: "install"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/getting-started"
related_guides: ["/docs/simulation", "/docs/troubleshooting"]
keywords: [
  "wolfbot linux 安装",
  "wolfbot community ubuntu",
  "加密货币机器人 ubuntu",
  "linux 交易机器人",
  "linux 统一交易平台",
  "自托管交易 linux"
]
os_tested: ["Ubuntu 24.04 LTS", "Ubuntu 22.04 LTS", "Debian 12"]
sitemap_priority: 0.9
lang: "zh"
translation_of: "install/linux"
---

# 在 Ubuntu/Linux 上安装 WolfBot Community

**已在 WolfBot Community v0.1.0-p12-ghcr-rc19 上测试** · 最后更新: 2026-08-15 · Ubuntu 24.04 / Ubuntu 22.04 / Debian 12

## 本指南适合谁

任何想在 Ubuntu 或 Debian 上安装 WolfBot Community 的人——**你不需要了解终端或 Docker。** 以下步骤和安装其他任何应用一样,只需双击即可完成;如果你更喜欢命令行,文末也提供了对应的操作方式。

## 你需要准备什么

- Ubuntu 22.04 LTS、Ubuntu 24.04 LTS 或 Debian 12(64 位)
- 至少 4 GB 内存,4 GB 可用磁盘空间
- 网络连接
- 你的账户密码(安装过程中会要求输入一次,这完全正常——Linux 上任何应用的安装程序都会这样要求)

> ℹ️ WolfBot 需要 Docker 才能运行。如果尚未安装,安装程序会自动为你安装——无需手动设置任何东西。

## 第一步:下载

1. 前往 [community.wolfbot.io/download](https://community.wolfbot.io/download)
2. 点击 **Download for Linux**
3. 文件 `WolfBot-Setup-linux-amd64.deb` 会下载到你的 **下载** 文件夹

## 第二步:安装(双击即可,和其他应用一样)

1. 打开你的 **下载** 文件夹,**双击** `WolfBot-Setup-linux-amd64.deb`
2. 系统的应用安装窗口会打开(通常叫做"软件安装"或"Package Installer")
3. 点击 **安装**
4. 系统提示时输入你的密码,然后按回车/点击确定
5. 等待安装完成——首次安装可能需要一两分钟,因为它还会在后台设置 Docker

就这么简单——完全不需要终端。

> **没有弹出安装窗口?** 部分 Ubuntu 版本默认会用文件归档查看器打开 `.deb` 文件,而不是安装程序。
> 右键点击文件 → **打开方式** → 选择 **软件安装**(如果安装了 **GDebi Package Installer** 也可以选择它)→ 然后点击 **安装**。

## 第三步:启动 WolfBot

1. 打开你的 **应用程序** 菜单(或按 Windows/Super 键并输入 "WolfBot")
2. 点击 **WolfBot** 图标
3. 你的浏览器会自动打开 WolfBot 控制面板

## 预期结果

- WolfBot 图标出现在你的应用程序菜单中
- 点击它会在浏览器中打开控制面板
- 控制面板的能力状态页面会显示你可以连接哪些经纪商——从[模拟账户](/docs/simulation)开始,零风险体验

## 通过 MT5 交易外汇、黄金和指数 —— 无需 Windows

WolfBot Community 是一个**统一平台**:加密货币交易所和 MT5(外汇、黄金、指数、股票 CFD)在同一个界面、同一个风控引擎、同一个投资组合中——即使在 Linux 上也是如此,不需要单独的 Windows 电脑或 VPS。MT5 作为一个真实终端,和 WolfBot 的其他部分一起运行,你可以通过自己的浏览器直接控制它。只需一条命令即可激活——具体步骤请参阅 [MT5 连接指南](/brokers/mt5)。

## 常见问题

| 问题 | 解决方法 |
|---|---|
| 双击后打开了文件归档而不是安装 | 右键点击文件 → 打开方式 → 软件安装 |
| 出现"需要身份验证"提示 | 这是正常的——输入你平时登录用的密码即可 |
| 点击安装后没有反应 | 请稍等一分钟——首次安装时 Docker 正在后台设置 |
| 安装后找不到 WolfBot | 注销并重新登录一次,或在应用程序菜单中搜索 "WolfBot" |

## 更喜欢命令行?

如果你熟悉终端,以下命令和上面的步骤效果相同:

```bash
cd ~/Downloads
sudo apt install ./WolfBot-Setup-linux-amd64.deb
```

使用 `apt install ./file.deb`(而不是 `dpkg -i`)可以一步自动解决所有缺失的依赖项。

安装后的常用命令:

```bash
wolfbot status     # 检查服务状态
wolfbot start      # 启动 WolfBot
wolfbot open       # 在浏览器中打开控制面板
wolfbot logs       # 查看日志
```

控制面板地址: `http://127.0.0.1:8765`

## 故障排查

- **点击 WolfBot 图标后没有反应** —— 全新安装后请稍等一分钟(Docker 容器仍在启动中),然后再试一次。
- **提示"端口被占用"或控制面板无法加载** —— 你电脑上的其他程序可能占用了 8765 端口。请查看[故障排查指南](/docs/troubleshooting)了解如何检查。
- 仍然无法解决?请查看完整的[故障排查指南](/docs/troubleshooting),或在 [GitHub 讨论区](https://github.com/wolfbot-io/wolfbot-community/discussions)提问。

## 卸载

打开系统的应用商店(例如 **Ubuntu Software**),搜索 "WolfBot",点击 **删除**——和卸载任何通过 `.deb` 文件安装的应用一样。

或者通过终端:

```bash
sudo apt remove wolfbot-community
rm -rf ~/.wolfbot    # 可选:同时删除你本地的 WolfBot 数据
```

## 下一步

> **[从模拟账户开始 →](/docs/simulation)**
