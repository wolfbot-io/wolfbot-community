---
title: "Подключение BingX к WolfBot Community — пошагово"
description: "Подключите BingX к WolfBot Community — создайте API-ключи только для торговли и начните автоматическую торговлю на Standard и Perpetual Futures."
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["bingx"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "8 minutes"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls", "/brokers/bybit"]
keywords: ["bingx trading bot", "bingx api bot", "connect bingx to wolfbot"]
sitemap_priority: 0.80
lang: "ru"
translation_of: "brokers/bingx"
---

# Подключение BingX к WolfBot Community

**Протестировано с WolfBot Community v0.1.0-p12-ghcr-rc8** · Последнее обновление: 2026-08-15

**Статус поддержки BingX:** Стабильно · Demo ✅ · Live ✅ · Терминал ✅ · Стратегия ✅

## Для кого этот гайд

Для тех, кто хочет подключить аккаунт BingX к WolfBot Community для автоматической торговли на Standard или Perpetual Futures.

## Что вам нужно

- Аккаунт BingX ([регистрация](https://bingxdao.com/partner/Wolfbot/))
- Установленный WolfBot Community
- 5 минут

---

## Шаг 1: Создание API-ключа BingX

1. Войдите на [bingx.com](https://bingxdao.com/partner/Wolfbot/)
2. Перейдите в **API Management** (в профиле/настройках)
3. Нажмите **Create API Key**
4. Назовите его «WolfBot Community»
5. Задайте разрешения:
   - Standard/Contract Trading: ✅ ON
   - Withdrawal: ❌ OFF
6. (Рекомендуется) Привяжите IP-адрес
7. Завершите верификацию → сохраните Key + Secret

> ⚠️ Никогда не включайте Withdrawal — WolfBot нужна только торговля.

---

## Шаг 2: Добавление в WolfBot

1. WolfBot → **Exchange Accounts → Add Account**
2. Выберите **BingX**
3. Выберите **Standard** или **Perpetual Futures**
4. Введите API Key + Secret → **Test Connection**

---

## Шаг 3: Тест

1. Smart Terminal → выберите торговую пару (например, BTC/USDT)
2. Начните с вашего Demo API-ключа → затем небольшой живой лимитный ордер
3. Проверьте на BingX → отмените тестовый ордер

---

## Особенности BingX

- **Demo-торговля:** доступна в приложении в разделе Derivatives → Perpetual Futures → Demo Trading (использует виртуальные средства) — [как это работает](https://bingx.com/en/wiki/detail/demo-trading) — отдельные API-ключи
- **Фьючерсы:** используйте тип аккаунта Perpetual Futures в WolfBot
- **Копитрейдинг:** WolfBot не взаимодействует с копитрейдингом BingX

---

## Частые проблемы

| Проблема | Решение |
|---|---|
| API key invalid | Пересоздайте на BingX |
| Permission error | Включите Standard/Contract Trading |
| Connection timeout | Проверьте файрвол; BingX может быть ограничен в вашем регионе |

---

## Следующий шаг

> **[Настроить Risk Controls →](/docs/risk-controls)**
