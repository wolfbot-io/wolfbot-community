---
title: "WolfBot Community 备份与恢复 —— 数据保护指南"
description: "如何备份和恢复 WolfBot Community——保护你统一平台的配置和交易数据。"
tested_version: "0.1.0-beta.4"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "backup"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/docs/troubleshooting"
previous_guide: "/docs/updates"
related_guides: ["/docs/updates", "/docs/troubleshooting"]
keywords: ["wolfbot 备份", "wolfbot 恢复", "备份交易机器人", "交易机器人数据保护", "wolfbot 统一平台备份"]
sitemap_priority: 0.80
lang: "zh"
translation_of: "docs/backup"
---

# 备份与恢复指南

**已在 WolfBot Community v0.1.0-beta.4 上测试** · 最后更新: 2026-08-15

## 为什么要备份?

WolfBot 会在本地存储你的配置:经纪商 API 连接、策略设置、风控参数、机器人配置和交易偏好。一次备份能保护你数天甚至数周的配置成果。

---

## 备份(Linux)

备份操作通过终端运行,默认为 **模拟运行(dry run)**——在你添加 `--execute` 之前,它只会显示将会备份哪些内容,而不会实际写入任何文件:

```bash
# 查看备份会包含哪些内容,但不实际写入
wolfbot backup --install-root /opt/wolfbot --data-root /var/lib/wolfbot

# 实际写入备份归档文件
wolfbot backup --install-root /opt/wolfbot --data-root /var/lib/wolfbot --execute
```

添加 `--label "before-weekend"` 可以为备份打上一个日后容易识别的标签。生成的归档文件会以受限的文件权限写入(只有你自己的用户账户可读),并附带一份说明其内容的清单。

> 运行 `wolfbot backup --help` 查看当前完整的选项列表——不同版本之间参数可能会有变化。

### Windows

Windows 上目前还没有专属的备份命令——目前最安全的做法是,在进行重大改动之前,把你的 WolfBot 数据文件夹复制到一个安全的位置(如果不确定它在哪里,可参见[故障排查](/docs/troubleshooting))。

---

## 从备份恢复

```bash
wolfbot restore-backup --install-root /opt/wolfbot --data-root /var/lib/wolfbot --backup <path-to-archive>
```

和备份一样,该操作默认为模拟运行,你可以先查看会发生哪些变更,再添加 `--execute` 正式执行。如果你只是想查看某个归档文件里有什么,而不想真的恢复,可以先使用 `wolfbot inspect-backup <path-to-archive>`。

---

## 备份会包含哪些内容

你的配置、策略设置、风控参数和交易历史都存放在 WolfBot 的数据目录中,会被包含在备份里。经纪商 API 密钥的处理方式经过谨慎设计——如果你要依赖某次备份进行机器迁移,建议先查看 `wolfbot backup` 的输出(即使是模拟运行也可以),确认该版本具体包含了哪些内容。

---

## 迁移到新机器

1. 在旧机器上创建一份备份(`wolfbot backup ... --execute`)
2. 将生成的归档文件复制到新机器上
3. 在新机器上安装 WolfBot Community
4. 恢复该归档文件(`wolfbot restore-backup ...`),然后核实你的账户和设置——重新输入任何未能带过来的 API 密钥

---

## 故障排查

| 问题 | 解决方法 |
|---|---|
| "Backup creation failed"(备份创建失败) | 检查磁盘空间,并确认 `--install-root`/`--data-root` 指向的是你真实的 WolfBot 路径 |
| 版本变更后恢复的内容看起来不对 | 先把 WolfBot 更新到与该备份创建时相同的版本,再重试 |
| 不确定备份是否成功 | 在需要用到之前,先运行 `wolfbot inspect-backup <path>` 检查其内容 |

---

## 下一步

> **[故障排查指南 →](/docs/troubleshooting)**
