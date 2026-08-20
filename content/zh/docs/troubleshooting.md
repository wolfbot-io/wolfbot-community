---
title: "WolfBot Community 故障排查 —— 常见问题与解决方法"
description: "解决 WolfBot Community 常见问题。安装错误、市场连接问题、更新失败和错误代码。"
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "troubleshooting"
difficulty: "intermediate"
estimated_time: "5 minutes"
related_guides: ["/install/windows", "/install/linux", "/docs/updates", "/brokers/api-key-guide"]
keywords: ["wolfbot 故障排查", "wolfbot 错误代码", "修复 wolfbot", "wolfbot 安装错误", "wolfbot 连接问题"]
sitemap_priority: 0.80
lang: "zh"
translation_of: "docs/troubleshooting"
---

# 故障排查指南

**已在 WolfBot Community v0.1.0-p12-ghcr-rc20 上测试** · 最后更新: 2026-08-15

## 快速诊断

在你的 WolfBot 安装目录下,通过终端(Windows 上是命令提示符/PowerShell,Linux 上是普通终端)运行内置的诊断工具:

```bash
wolfbot doctor
```

它是只读的——会检查安装完整性、服务状态、网络和经纪商连接,而不会更改任何内容。

---

## 安装错误

### WB-WIN-001 —— 磁盘空间不足
**症状:** 安装程序提示 "Not enough disk space"(空间不足)

**解决方法:** 释放至少 2 GB 空间。检查 `C:` 盘的可用空间。

### WB-WIN-002 —— 权限被拒绝
**症状:** 安装过程中提示 "Access denied"(拒绝访问)

**解决方法:** 右键点击安装程序 → **以管理员身份运行**

### WB-WIN-003 —— 下载文件损坏
**症状:** 安装程序无法启动,或完整性校验失败

**解决方法:** 从 [community.wolfbot.io/download](https://community.wolfbot.io/download) 重新下载。核对 SHA256 校验和。

### WB-WIN-004 —— 缺少依赖项
**症状:** 提示 "VCRUNTIME140.dll not found"(找不到该 DLL)

**解决方法:** 安装 [Visual C++ 可再发行组件包](https://aka.ms/vs/17/release/vc_redist.x64.exe)

### WB-LNX-001 —— 未找到 Docker
**症状:** 提示 "Docker is not installed"

**解决方法:** 运行 `sudo apt-get install docker.io`,或重新运行安装程序(它会自动处理这一步)

### WB-LNX-002 —— 端口冲突
**症状:** 提示 "Port 8765 already in use"(端口已被占用)

**解决方法:** 运行 `sudo lsof -i :8765` 查看占用进程 → 停止冲突服务 → 重启 WolfBot

---

## 连接问题

### 经纪商连接失败
1. 确认 API 密钥仍然有效(未过期)
2. 检查 API 权限:交易 ✅,提现 ❌
3. 如果绑定了 IP:确认你的 IP 与之匹配
4. 查看交易所的 API 状态页面
5. 对于 MT5:确保 MT5 终端正在运行且已登录
6. 重新生成密钥并重新添加

### "Connection Refused"(连接被拒绝)
- 检查网络连接
- 确认该交易所在你所在地区未被地理封锁
- 如有需要可尝试使用 VPN

### "Rate Limit Exceeded"(超出速率限制)
WolfBot 会自动处理这类情况。如果持续出现,请降低机器人交易频率。

---

## 更新问题

| 问题 | 解决方法 |
|---|---|
| 检查更新失败 | 检查网络连接;防火墙可能拦截了更新服务器 |
| 签名验证失败 | 从[下载页面](/download)手动下载 |
| 更新卡住 | 重启 WolfBot 并重试 |
| 更新后 WolfBot 无法启动 | Linux:运行 `wolfbot-updater.sh rollback`。Windows:重新安装上一个版本的 Setup.exe——参见[更新指南](/docs/updates) |

---

## 性能问题

### CPU 占用过高
- 减少活跃交易对数量
- 增大机器人执行间隔(例如从 5 分钟调整为 15 分钟)
- 关闭未使用的控制面板标签页

### 内存占用过高
- 重启 WolfBot(如果已连续运行超过 7 天,可能出现内存泄漏)
- 减少同时运行的策略数量

### 控制面板反应缓慢
- 使用现代浏览器(Chrome、Edge、Firefox)
- 清除浏览器缓存
- 减少控制面板中的小组件数量

---

## 数据与配置

### 配置丢失
1. 如果你有备份归档文件,恢复它——参见[备份与恢复指南](/docs/backup)
2. 如果没有:请手动重新配置

### 数据库损坏
```bash
wolfbot repair
```
这是一个专用的、默认拒绝执行的修复命令——它绝不会在你未主动运行的情况下自动修复,也不会触碰任何它没有把握的内容。

---

## 日志

查找详细日志以便调试:

**Windows:** `C:\Program Files\WolfBot\logs\`

**Linux:** `~/.wolfbot/logs/` 或运行 `wolfbot logs`

在 [GitHub](https://github.com/wolfbot-io/wolfbot-community/issues) 上报告问题时,请附上相关日志片段(注意隐去 API 密钥)。

---

## 问题仍未解决?

1. 搜索 [GitHub 讨论区](https://github.com/wolfbot-io/wolfbot-community/discussions)
2. 查看 [GitHub Issues](https://github.com/wolfbot-io/wolfbot-community/issues)
3. 提交一个[新 issue](https://github.com/wolfbot-io/wolfbot-community/issues/new/choose),并包含:
   - WolfBot 版本号
   - 操作系统及版本
   - 错误代码或错误信息
   - 复现步骤

> ⚠️ 切勿分享 API 密钥、Secret Key 或密码。
