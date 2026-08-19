---
title: "Коды ошибок WolfBot Community — быстрый справочник по решениям"
description: "Разбор каждого кода ошибки WolfBot Community: от WB-WIN-001 до WB-WIN-004 и от WB-LNX-001 до WB-LNX-002. Найдите точное решение для вашей ошибки установщика или запуска."
tested_version: "0.1.0-p12-ghcr-rc19"
platforms: ["windows", "linux"]
category: "troubleshooting"
difficulty: "beginner"
estimated_time: "3 minutes"
related_guides: ["/docs/troubleshooting", "/install/windows", "/install/linux", "/docs/updates"]
keywords: [
  "коды ошибок wolfbot",
  "WB-WIN-001",
  "WB-LNX-002",
  "ошибка установщика wolfbot",
  "ошибка wolfbot linux",
  "код ошибки wolfbot windows"
]
sitemap_priority: 0.80
last_updated: "2026-08-18"
lang: "ru"
translation_of: "docs/error-codes"
---

# Коды ошибок WolfBot Community

**Протестировано с WolfBot Community v0.1.0-p12-ghcr-rc19** · Последнее обновление: 2026-08-18

Один код — одно решение. Коды ошибок точно говорят вам, что именно сломалось,
чтобы вам не нужно было гадать. Найдите свой код ниже, примените решение,
а затем при необходимости переходите к [полному гайду по устранению неполадок](/docs/troubleshooting).

---

## Таблица быстрого поиска

| Код ошибки | Где возникает | Решение в одну строку |
|---|:---:|---|
| [WB-WIN-001](#wb-win-001--недостаточно-места-на-диске) | Установщик Windows | Освободите 2 ГБ места на диске |
| [WB-WIN-002](#wb-win-002--отказано-в-доступе) | Установщик Windows | Запустите установщик от имени администратора |
| [WB-WIN-003](#wb-win-003--повреждённая-загрузка) | Установщик Windows | Скачайте повторно и проверьте контрольную сумму SHA256 |
| [WB-WIN-004](#wb-win-004--отсутствуют-зависимости) | Первый запуск на Windows | Установите Visual C++ Redistributable |
| [WB-LNX-001](#wb-lnx-001--docker-не-найден) | Установщик Linux | Установите Docker или перезапустите установщик |
| [WB-LNX-002](#wb-lnx-002--конфликт-порта) | Первый запуск на Linux | Остановите то, что занимает порт 8765 |

---

## Коды ошибок Windows

### WB-WIN-001 — Недостаточно места на диске
**Симптом:** установщик завершается ошибкой «Not enough disk space».

**Решение:** освободите не менее 2 ГБ, затем повторите попытку. Сначала проверьте свободное место на диске `C:`.

### WB-WIN-002 — Отказано в доступе
**Симптом:** «Access denied» во время установки.

**Решение:** щёлкните правой кнопкой мыши по установщику и выберите **Запуск от имени администратора**.

### WB-WIN-003 — Повреждённая загрузка
**Симптом:** установщик не запускается или не проходит проверку целостности.

**Решение:** скачайте заново с [community.wolfbot.io/download](https://community.wolfbot.io/download), затем сверьте контрольную сумму SHA256 с официальным значением, прежде чем запускать файл. Смотрите [Как проверить скачанного торгового бота](/docs/how-to-verify-a-downloaded-trading-bot).

### WB-WIN-004 — Отсутствуют зависимости
**Симптом:** «VCRUNTIME140.dll not found» при запуске WolfBot.

**Решение:** установите [Visual C++ Redistributable](https://aka.ms/vs/17/release/vc_redist.x64.exe), затем перезапустите WolfBot.

---

## Коды ошибок Linux

### WB-LNX-001 — Docker не найден
**Симптом:** «Docker is not installed».

**Решение:** `sudo apt-get install docker.io` или просто перезапустите установщик — он установит и запустит Docker за вас автоматически.

### WB-LNX-002 — Конфликт порта
**Симптом:** «Port 8765 already in use».

**Решение:** найдите, что занимает порт, с помощью `sudo lsof -i :8765`, остановите эту службу, затем перезапустите WolfBot.

---

## Связанное

- [Полный гайд по устранению неполадок](/docs/troubleshooting) — проблемы с сетью, обновлением, производительностью и данными.
- [Установка WolfBot на Windows](/install/windows) — точный путь настройки на Windows.
- [Установка WolfBot на Linux](/install/linux) — настройка Ubuntu/Debian и состояние службы.
- [Обновление и откат](/docs/updates) — что делать, если обновление не удалось.
- Не нашли свой код? [Поищите в GitHub Discussions](https://github.com/wolfbot-io/wolfbot-community/discussions) или [создайте issue](https://github.com/wolfbot-io/wolfbot-community/issues/new/choose).
