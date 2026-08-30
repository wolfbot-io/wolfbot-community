---
title: "在 VPS 上 24/7 运行 WolfBot Community —— 在自己的服务器上自托管交易"
description: "在一台 Ubuntu VPS 上全天候运行 WolfBot Community。安装 .deb 包,通过 SSH 隧道保护控制面板隐私,在服务器上做好备份,并保持非托管交易。"
tested_version: "0.1.0-beta.4"
last_updated: "2026-08-15"
platforms: ["linux"]
category: "install"
difficulty: "intermediate"
estimated_time: "15 minutes"
next_guide: "/getting-started"
related_guides: ["/install/linux", "/docs/backup", "/docs/updates", "/security"]
keywords: [
  "自托管交易机器人",
  "在自己的服务器上运行交易机器人",
  "24/7 运行交易机器人",
  "wolfbot vps",
  "加密货币机器人服务器",
  "linux 交易机器人 vps"
]
sitemap_priority: 0.85
lang: "zh"
translation_of: "docs/run-24-7-on-a-vps"
---

# 在 VPS 上 24/7 运行 WolfBot Community

**已在 WolfBot Community v0.1.0-beta.4 上测试** · 最后更新: 2026-08-15 · Ubuntu 22.04 / 24.04

## 本指南适合谁

这里的内容对两类读者都有价值:

- **如果你只是想让机器人全天候运行** —— 这样即使你的电脑关机,也不会错过任何一笔交易——请按顺序完成以下步骤。每条命令都可以直接复制粘贴,你不需要理解背后的原理也能得到结果。
- **如果你对服务器比较熟悉**,想知道*为什么*每一步要这样做(控制面板仅限本地回环访问、SSH 隧道),文中的说明会解释背后的原因,而不会打断你的操作节奏。

简而言之:本指南会把你的 WolfBot Community 部署到一台常年在线的小型 Linux 服务器(VPS)上,让它整夜持续交易——你的策略、设置和账户都会原封不动地保留,即使你的个人电脑关机,机器人也会继续工作。

## 你需要准备什么

- 一台 Ubuntu 22.04 LTS 或 24.04 LTS 的 VPS(任何主流服务商均可——Hetzner、DigitalOcean、Vultr、Linode、AWS Lightsail 等)
- 至少 4 GB 内存和 4 GB 磁盘空间
- 能够打开终端并通过 SSH 连接到你的服务器
- 15 分钟时间

> ℹ️ WolfBot Community 运行在 Docker 中。安装程序会自动为你配置好 Docker,和在桌面版 Linux 上安装完全一样。

## 第一步:获取 VPS 并连接

1. 创建一台至少 4 GB 内存的 Ubuntu 22.04/24.04 服务器
2. 通过 SSH 连接(大多数服务商会在其页面上直接给你这条命令):

```bash
ssh your-user@your-server-ip
```

## 第二步:安装 WolfBot Community(与桌面版相同)

按照完全相同的[Linux 安装指南](/install/linux)操作——服务器上的步骤和桌面版完全一致:

1. 从 [community.wolfbot.io/download](https://community.wolfbot.io/download) 下载 `.deb` 文件
2. 安装它(在无图形界面的服务器上,你会使用终端形式):

```bash
sudo apt install ./WolfBot-Setup-linux-amd64.deb
```

3. 启动 WolfBot 并检查其运行状态:

```bash
wolfbot start
wolfbot status
```

## 第三步:安全访问控制面板(SSH 隧道)

WolfBot Community 会将其控制面板**仅绑定到服务器的本地回环地址(127.0.0.1)**——这是刻意设计的:意味着交易控制面板默认永远不会暴露在公网上。在你家中自己的电脑上,浏览器可以直接打开它。而在 VPS 上,你需要通过一条加密的 SSH 隧道来访问它:

```bash
ssh -L 8080:127.0.0.1:8080 your-user@your-server-ip
```

然后在浏览器中打开 **http://localhost:8080**。该隧道会通过 SSH 将你本地的 8080 端口转发到服务器上的控制面板——不需要开放任何端口,不需要公网地址,也不需要任何防火墙配置。

> 🔎 **技术读者须知:** WolfBot Community 的各项服务在设计上均绑定到 `127.0.0.1`(本地回环)——control-api 在 `8765`,gateway 在 `8766`,控制面板在 `8080`。仅限本地回环意味着交易相关的服务表面永远无法从公网访问,因此 SSH 隧道是远程访问它的正确(也是最简单的)方式,而不是暴露一个公网端口。

> ⚠️ 请**不要**将控制面板暴露到公网上。请让它保持仅限本地回环访问,并使用 SSH 隧道。控制面板控制着真实的交易,因此必须保持私密。

## 第四步:在服务器上做好备份

你的配置现在存放在这台 VPS 上,所以请在这里做备份:

```bash
wolfbot backup --install-root /opt/wolfbot --data-root /var/lib/wolfbot --execute
```

然后将归档文件复制离开服务器妥善保存。完整流程请参见[备份与恢复指南](/docs/backup)。

## 第五步:保持更新

在服务器上,更新通过经过签名的更新程序进行:

```bash
/opt/wolfbot/launcher/wolfbot-updater.sh check
```

应用/回滚步骤请参见[更新指南](/docs/updates)。

## 预期结果

- WolfBot Community 在你的 VPS 上以 Docker 方式独立运行,与你的电脑无关
- 你通过 SSH 隧道访问控制面板(仅限本地回环,不开放公网端口)
- 即使你的电脑关机,机器人依然会继续交易,策略也会持续运行

## 常见错误

| 错误 | 解决方法 |
|---|---|
| 将控制面板暴露到公网 | 不要这样做——使用 SSH 隧道,保持仅限本地回环访问 |
| 忘记在服务器上做备份 | 运行 `wolfbot backup ... --execute`,然后将归档文件复制出服务器 |
| 服务器重启后 WolfBot 没有运行 | 运行 `wolfbot status` 确认;如需要则运行 `wolfbot start` |
| 笔记本电脑休眠后隧道断开 | 重新运行 `ssh -L ...` 命令即可;这是正常的重新连接 |

## 故障排查

- **通过隧道无法访问 localhost:8080** —— 确认隧道命令仍在运行,并且 `wolfbot status` 显示各项服务健康
- **SSH 连接被拒绝** —— 检查你的 VPS 防火墙是否允许 SSH(22 端口),并确认使用了正确的用户名/IP
- 其他问题 —— 请参见完整的[故障排查指南](/docs/troubleshooting)

## 下一步

> **[入门指南 →](/getting-started)** —— 先连接一个模拟账户,零风险试用,再考虑实盘。
