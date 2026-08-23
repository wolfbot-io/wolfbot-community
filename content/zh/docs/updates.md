---
title: "WolfBot Community 更新指南 —— 自动更新与版本渠道"
description: "WolfBot Community 的更新机制是怎样的。稳定版、Beta 版和开发预览版渠道。让你的统一平台保持最新。"
tested_version: "0.1.0-beta.2"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "updates"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/docs/backup"
related_guides: ["/docs/backup", "/releases/channels", "/docs/troubleshooting"]
keywords: ["wolfbot 更新", "wolfbot 自动更新", "wolfbot 发布渠道", "更新交易机器人", "wolfbot 更新渠道"]
sitemap_priority: 0.80
lang: "zh"
translation_of: "docs/updates"
---

# 更新 WolfBot Community

**已在 WolfBot Community v0.1.0-beta.2 上测试** · 最后更新: 2026-08-15

## 更新机制是怎样的

WolfBot Community 通过不同的渠道发布——你下载的是哪个版本,决定了你的构建版本有多新(以及经过了多少测试)。

| 渠道 | 说明 | 更新频率 | 风险等级 |
|---|---|---|---|
| **稳定版(Stable)** | 生产就绪 | 每月里程碑版本 | 最低 |
| **Beta 版** | 广泛测试中 | 每 1-2 周一次 | 低 |
| **开发预览版(Dev Preview)** | 最新功能 | 每周多次 | 中等 |

参见[发布渠道详解 →](/releases/channels)

---

## 如何更新

### Windows

1. 前往 [community.wolfbot.io/download](https://community.wolfbot.io/download)
2. 下载最新的 Setup.exe
3. 运行安装程序——它会原地升级,并保留你的数据、账户和设置

### Linux

每个安装都自带一个经过签名的更新程序,通过终端运行:

```bash
# 检查当前安装的版本
/opt/wolfbot/launcher/wolfbot-updater.sh check

# 应用某个具体版本(manifest 链接见 community.wolfbot.io/releases)
/opt/wolfbot/launcher/wolfbot-updater.sh apply <release-manifest-url>
```

更新程序会在拉取任何内容之前先验证新版本的签名,并且只有在新版本准备就绪后才会停止你当前正在运行的服务。

> ℹ️ 目前应用内没有"有可用更新"的弹窗提示——请查看 [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases),或运行上方的检查命令来查看当前情况。

---

## 更新前须知

1. **备份你的配置** —— 参见[备份指南 →](/docs/backup)
2. **阅读发布说明** —— [community.wolfbot.io/releases](/releases)
3. **检查已知问题** —— 每个版本中都会列出

### 会被保留的内容
- ✅ API 密钥和经纪商连接
- ✅ 策略配置和风控设置
- ✅ 交易历史和机器人配置

---

## 选择渠道

应用内没有渠道切换开关——你通过下载哪个版本来选择渠道。如果想尝鲜新功能,请直接从 [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases) 获取 Beta 版或开发预览版构建,而不是下载页面上的稳定版链接。

> ⚠️ 开发预览版构建可能包含尚未完善的功能——预期会比稳定版更粗糙一些。

---

## 回滚

如果某次更新引发了问题:

**Linux:**
```bash
/opt/wolfbot/launcher/wolfbot-updater.sh rollback
```
这会恢复到上一个版本的 manifest,并在该版本上重启整个服务栈。

**Windows:** 从 [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases) 下载并重新安装上一个版本的 Setup.exe——无论是升级还是降级,直接在当前版本上安装即可原地完成。

---

## 更新安全性

- 所有更新都经过加密签名
- WolfBot 在应用更新前会验证签名
- 校验和会公开发布,供手动验证

---

## 常见问题

| 问题 | 解决方法 |
|---|---|
| "Update check failed"(检查更新失败) | 检查网络连接 |
| "Signature verification failed"(签名验证失败) | 从官网手动下载 |
| 更新卡在中途 | 重新运行更新命令,或使用全新下载的文件重新安装 |

---

## 下一步

> **[备份与恢复指南 →](/docs/backup)**
