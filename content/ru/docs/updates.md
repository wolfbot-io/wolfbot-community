---
title: "Гайд по обновлению WolfBot Community — автообновление и каналы"
description: "Как работают обновления WolfBot Community. Каналы Stable, Beta и Dev Preview. Держите вашу единую платформу актуальной."
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "updates"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/docs/backup"
related_guides: ["/docs/backup", "/releases/channels", "/docs/troubleshooting"]
keywords: ["wolfbot update", "wolfbot auto update", "wolfbot release channels", "update trading bot", "wolfbot update channels"]
sitemap_priority: 0.80
lang: "ru"
translation_of: "docs/updates"
---

# Обновление WolfBot Community

**Протестировано с WolfBot Community v0.1.0-p12-ghcr-rc8** · Последнее обновление: 2026-08-15

## Как работают обновления

WolfBot Community распространяется по каналам — какой релиз вы скачаете, решает, насколько свежая (и насколько протестированная) у вас сборка.

| Канал | Описание | Частота обновлений | Уровень риска |
|---|---|---|---|
| **Stable** | Готов к продакшну | Ежемесячные вехи | Минимальный |
| **Beta** | Широкое тестирование | Каждые 1–2 недели | Низкий |
| **Dev Preview** | Новейшие функции | Несколько раз в неделю | Средний |

Смотрите [Объяснение каналов релизов →](/releases/channels)

---

## Обновление

### Windows

1. Перейдите на [community.wolfbot.io/download](https://community.wolfbot.io/download)
2. Скачайте последний Setup.exe
3. Запустите установщик — он обновит на месте и сохранит ваши данные, аккаунты и настройки

### Linux

Каждая установка включает подписанный апдейтер, запускаемый из терминала:

```bash
# Проверить, что сейчас установлено
/opt/wolfbot/launcher/wolfbot-updater.sh check

# Применить конкретный релиз (ссылки на манифест см. на community.wolfbot.io/releases)
/opt/wolfbot/launcher/wolfbot-updater.sh apply <release-manifest-url>
```

Апдейтер проверяет подпись нового релиза, прежде чем что-либо загружать, и останавливает ваш текущий стек только после того, как новый был подготовлен.

> ℹ️ Сегодня нет всплывающего «доступно обновление» в приложении — проверяйте [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases) или запускайте команду проверки выше, чтобы узнать актуальное.

---

## Перед обновлением

1. **Сделайте резервную копию конфигурации** — см. [Гайд по резервному копированию →](/docs/backup)
2. **Прочитайте заметки о релизе** — [community.wolfbot.io/releases](/releases)
3. **Проверьте известные проблемы** — перечислены в каждом релизе

### Что сохраняется
- ✅ API-ключи и подключения брокеров
- ✅ Конфигурации стратегий и настройки риска
- ✅ История торговли и конфигурации ботов

---

## Выбор канала

В приложении нет переключателя каналов — вы выбираете канал тем, какой релиз скачаете. Возьмите сборку Beta или Dev Preview напрямую из [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases) вместо ссылки Stable на странице загрузки, когда хотите попробовать новые функции.

> ⚠️ Сборки Dev Preview могут содержать неполные функции — ожидайте больше шероховатостей, чем в Stable.

---

## Откат

Если обновление вызвало проблемы:

**Linux:**
```bash
/opt/wolfbot/launcher/wolfbot-updater.sh rollback
```
Это восстанавливает манифест предыдущего релиза и перезапускает стек на нём.

**Windows:** скачайте и переустановите Setup.exe предыдущей версии из [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases) — установка поверх текущей версии в любом случае обновляет или откатывает на месте.

---

## Безопасность обновлений

- Все обновления криптографически подписаны
- WolfBot проверяет подписи перед применением
- Контрольные суммы публикуются для ручной проверки

---

## Частые проблемы

| Проблема | Решение |
|---|---|
| «Update check failed» | Проверьте интернет-соединение |
| «Signature verification failed» | Скачайте вручную с сайта |
| Обновление зависло на полпути | Повторно запустите команду апдейтера или переустановите из свежей загрузки |

---

## Следующий шаг

> **[Гайд по резервному копированию и восстановлению →](/docs/backup)**
