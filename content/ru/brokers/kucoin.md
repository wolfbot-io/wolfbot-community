---
title: "Подключение KuCoin к WolfBot Community — пошагово"
description: "Подключите KuCoin к WolfBot Community — создайте API-ключи с passphrase и начните автоматическую торговлю на Spot и Futures."
tested_version: "0.1.0-p12-ghcr-rc19"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["kucoin"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "8 minutes"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls"]
keywords: ["kucoin trading bot", "kucoin api bot", "connect kucoin to wolfbot"]
sitemap_priority: 0.80
lang: "ru"
translation_of: "brokers/kucoin"
---

# Подключение KuCoin к WolfBot Community

**Протестировано с WolfBot Community v0.1.0-p12-ghcr-rc19** · Последнее обновление: 2026-08-15

**Статус поддержки KuCoin:** Стабильно · Demo ✅ · Live ✅ · Терминал ✅ · Стратегия ✅

## Для кого этот гайд

Для тех, кто подключает аккаунт KuCoin к WolfBot Community.

## Что вам нужно

- Аккаунт KuCoin ([регистрация](https://www.kucoin.com/r/broker/WOLFBOTIO))
- Установленный WolfBot Community
- 5 минут

---

## Шаг 1: Создание API-ключа KuCoin

1. Войдите на [kucoin.com](https://www.kucoin.com/r/broker/WOLFBOTIO)
2. Перейдите в **Account → API Management**
3. Нажмите **Create API**
4. Назовите его «WolfBot Community»
5. Задайте **API Passphrase** (обязательно для KuCoin — запомните его!)
6. Разрешения:
   - Spot Trading: ✅ ON
   - Futures Trading: ✅ ON (если используете фьючерсы)
   - Withdrawal: ❌ OFF
   - Transfer: ❌ OFF
7. (Рекомендуется) Привяжите IP-адрес
8. Завершите верификацию → сохраните Key, Secret и Passphrase

> ⚠️ KuCoin требует passphrase. Храните его безопасно — он понадобится в WolfBot.

---

## Шаг 2: Добавление в WolfBot

1. WolfBot → **Exchange Accounts → Add Account**
2. Выберите **KuCoin**
3. Выберите тип аккаунта: **Spot** или **Futures**
4. Введите API Key, Secret Key **и Passphrase**
5. Нажмите **Test Connection**

---

## Шаг 3: Тест

1. Smart Terminal → выберите торговую пару
2. Начните с вашего Demo API-ключа → затем небольшой живой ордер
3. Проверьте на KuCoin → отмените

---

## Особенности KuCoin

- **Требуется passphrase** — в отличие от большинства бирж, KuCoin требует API passphrase
- **Demo:** доступна KuCoin Sandbox для тестирования
- **Фьючерсы:** доступны
- **Разнообразие токенов:** KuCoin поддерживает множество альткоин-пар

---

## Частые проблемы

| Проблема | Решение |
|---|---|
| «Passphrase incorrect» | Введите заново; passphrase чувствителен к регистру |
| API key invalid | Пересоздайте на KuCoin |
| Permission denied | Включите Spot Trading |
| Connection timeout | Проверьте файрвол |

---

## Следующий шаг

> **[Настроить Risk Controls →](/docs/risk-controls)**
