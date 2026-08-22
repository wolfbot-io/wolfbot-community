---
title: "Подключение Bitget к WolfBot Community — пошагово"
description: "Подключите Bitget к WolfBot Community — создайте API-ключи только для торговли и начните автоматическую торговлю на Spot и Futures."
tested_version: "0.1.0-p12-ghcr-rc21"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["bitget"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "8 minutes"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls"]
keywords: ["bitget trading bot", "bitget api bot", "connect bitget to wolfbot"]
sitemap_priority: 0.80
lang: "ru"
translation_of: "brokers/bitget"
---

# Подключение Bitget к WolfBot Community

**Протестировано с WolfBot Community v0.1.0-p12-ghcr-rc21** · Последнее обновление: 2026-08-15

**Статус поддержки Bitget:** Стабильно · Demo ✅ · Live ✅ · Терминал ✅ · Стратегия ✅

## Для кого этот гайд

Для тех, кто подключает аккаунт Bitget к WolfBot Community.

## Что вам нужно

- Аккаунт Bitget ([регистрация](https://partner.bitget.com/bg/WOLFBOT))
- Установленный WolfBot Community
- 5 минут

---

## Шаг 1: Создание API-ключа Bitget

1. Войдите на [bitget.com](https://partner.bitget.com/bg/WOLFBOT)
2. Перейдите в **Account → API Management**
3. Нажмите **Create API Key**
4. Назовите его «WolfBot Community»
5. Задайте разрешения:
   - Trade: ✅ ON
   - Withdrawal: ❌ OFF
   - Transfer: ❌ OFF
6. (Рекомендуется) Привяжите IP-адрес
7. Завершите верификацию → сохраните Key + Secret

---

## Шаг 2: Добавление в WolfBot

1. WolfBot → **Exchange Accounts → Add Account**
2. Выберите **Bitget**
3. Выберите **Spot** или **Futures**
4. Введите API Key + Secret → **Test Connection**

---

## Шаг 3: Тест

1. Smart Terminal → выберите торговую пару
2. Начните с вашего Demo API-ключа → затем небольшой живой лимитный ордер
3. Проверьте на Bitget → отмените

---

## Особенности Bitget

- **Demo-торговля:** доступен тестнет Bitget для тестирования
- **Фьючерсы:** доступны
- **Копитрейдинг:** WolfBot не взаимодействует с функцией копитрейдинга Bitget

---

## Частые проблемы

| Проблема | Решение |
|---|---|
| API key invalid | Пересоздайте на Bitget |
| Permission denied | Включите разрешение Trade |
| IP restriction error | Добавьте ваш IP или отключите ограничение |

---

## Следующий шаг

> **[Настроить Risk Controls →](/docs/risk-controls)**
