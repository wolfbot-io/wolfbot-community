---
title: "WolfBot Community 发布渠道详解"
description: "了解 WolfBot Community 的发布渠道:稳定版、Beta 版、RC 版、Alpha 版和开发预览版。选择适合你的渠道。"
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "release"
difficulty: "beginner"
estimated_time: "3 minutes"
next_guide: "/docs/updates"
related_guides: ["/docs/updates", "/download"]
keywords: ["wolfbot 发布渠道", "wolfbot 稳定版 beta版", "wolfbot 开发预览版", "wolfbot 版本", "交易机器人版本"]
sitemap_priority: 0.80
lang: "zh"
translation_of: "releases/channels"
---

# 发布渠道详解

**已在 WolfBot Community v0.1.0-p12-ghcr-rc8 上测试** · 最后更新: 2026-08-15

## 可用渠道

| 渠道 | 状态 | 适合人群 | 自动更新 |
|---|---|---|---|
| **稳定版(Stable)** | 生产就绪 | 实盘交易者 | ✅ |
| **RC(候选发布版)** | 最终测试阶段 | 谨慎的早期尝鲜用户 | 可选 |
| **Beta 版** | 功能预览 | 测试者、爱好者 | ✅ |
| **Alpha 版** | 早期功能测试 | 技术型测试用户 | 可选 |
| **开发预览版(Dev Preview)** | 最新构建 | 开发者、反馈提供者 | 手动 |

---

## 稳定版

已通过所有质量关卡、生产就绪的发布版本。

- **更新频率:** 每 1-2 个月一次
- **风险:** 最低
- **最适合:** 实盘交易、生产环境使用
- **支持:** 完整的社区支持

> ✅ 推荐用于所有实盘交易场景。

---

## Beta 版

功能完整、正在接受更广泛测试的构建版本。

- **更新频率:** 每 1-2 周一次
- **风险:** 低——功能可正常使用,但可能存在边缘情况
- **最适合:** 在稳定版发布前测试新功能
- **支持:** 欢迎社区反馈

---

## 开发预览版

最新的开发构建——最新功能,测试最少。

- **更新频率:** 每周多次
- **风险:** 中等——功能可能不完整
- **最适合:** 开发者、早期反馈、爱好者
- **支持:** 尽力而为

> ⚠️ 开发预览版可能包含不完整的功能。默认模式为模拟交易。

---

## 渠道之间的关系

```text
开发预览版(频繁更新)
    ↓
Alpha 版(功能测试)
    ↓
Beta 版(更广泛的测试)
    ↓
RC 版(候选发布版)
    ↓
稳定版(生产环境)
```

每个构建版本都是不可变的——我们不会修改已发布的版本。如果发现 bug,会发布一个新版本。

---

## 当前状态

WolfBot Community 目前处于 **公开预览** 阶段(Beta 阶段)。

```text
稳定版:尚未发布
当前公开版本: v0.1.0-p12-ghcr-rc8
```

这意味着:
- 软件功能完整,可正常安装使用
- 各项功能正在接受广泛测试
- 版本之间可能出现不兼容的变更
- 测试期间建议使用模拟账户

---

## 切换渠道

应用内没有渠道切换开关——你的渠道就是你下载并安装的那个版本。如果想尝试更新的功能,请从 [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases) 获取 Beta 版或开发预览版构建,而不是下载页面上的稳定版链接;无论哪种情况,安装程序都会原地升级你现有的安装。

尝试更实验性的渠道时,建议先在模拟账户上测试。

---

## 版本号规则

```text
主版本.次版本.补丁版本-渠道.编号

0.1.0-p12-ghcr-rc8
│   │  │
│   │  └── 渠道: beta,构建 2
│   └───── 次版本(功能发布)
└───────── 主版本(0 = 稳定版之前)
```

稳定版将使用如下版本号:`1.0.0`、`1.1.0` 等。

---

## GitHub Releases

所有发布版本都发布在 [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases) 上:

- **预发布版:** 开发预览版、Alpha 版、Beta 版、RC 版
- **正式发布版:** 仅稳定版
- 每个发布版本都包含:安装文件、校验和、发布说明

---

## 下一步

> **[更新指南 →](/docs/updates)**
