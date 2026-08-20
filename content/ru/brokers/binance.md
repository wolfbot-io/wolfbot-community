---
title: "Подключение Binance к WolfBot Community — пошаговая инструкция"
description: "Подключите Binance к WolfBot Community — создайте API-ключи только для торговли и начните автоматическую торговлю на споте и фьючерсах."
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["binance"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/docs/risk-controls"
previous_guide: "/brokers/api-key-guide"
related_guides: ["/docs/simulation", "/docs/risk-controls", "/brokers/api-key-guide"]
keywords: ["торговый бот binance", "api бот binance", "подключить binance к wolfbot", "единая торговля binance", "самостоятельный бот binance"]
sitemap_priority: 0.85
lang: "ru"
translation_of: "brokers/binance"
---

# Подключение Binance к WolfBot Community

**Протестировано с WolfBot Community v0.1.0-p12-ghcr-rc20** · Последнее обновление: 2026-08-15

**Статус поддержки Binance:** Стабильно · Демо ✅ · Реальный счёт ✅ · Терминал ✅ · Стратегия ✅

## Для кого это руководство

Для тех, кто хочет подключить счёт Binance к WolfBot Community для торговли на разных рынках.

## Что вам понадобится

- Счёт Binance ([регистрация](https://www.binance.com/register?ref=WOLFBOT))
- Установленный и запущенный WolfBot Community
- 5 минут

---

## Шаг 1: Создайте API-ключ Binance

### Для спот-торговли

1. Войдите на [binance.com](https://www.binance.com/register?ref=WOLFBOT)
2. Перейдите в **Профиль → Управление API**
3. Нажмите **Создать API**
4. Выберите тип ключа **Сгенерирован системой**
5. Назовите его «WolfBot Community»
6. Пройдите проверку безопасности
7. **Важно — измените ограничения:**
   - Включить спот- и маржинальную торговлю: ✅ ВКЛ
   - Включить вывод средств: ❌ ВЫКЛ
   - Включить универсальный перевод: ❌ ВЫКЛ
8. (Рекомендуется) Ограничьте доступ доверенными IP-адресами
9. Нажмите **Сохранить**

> ⚠️ Никогда не включайте вывод средств. WolfBot нужны только права на торговлю.

---

## Шаг 2: Добавьте счёт Binance в WolfBot

1. Откройте WolfBot Community → **Счета на биржах → Добавить счёт**
2. Выберите **Binance** → выберите **Спот** или **Фьючерсы**
3. Введите ваш API Key и Secret Key
4. Нажмите **Проверить подключение**

---

## Шаг 3: Тест

1. Перейдите в **Умный терминал** → выберите BTC/USDT
2. Сначала начните с **демо**-счёта
3. Затем переключитесь на **реальный** счёт и разместите небольшой лимитный ордер
4. Проверьте на Binance, что ордер появился → отмените его

---

## Особенности Binance

- **Лимиты запросов:** WolfBot автоматически соблюдает лимиты API Binance (1200 веса/мин)
- **Ограничение по IP:** настоятельно рекомендуется для боевых ключей
- **Типы ордеров:** полностью поддерживаются Market, Limit, Stop-Limit, OCO

---

## Частые проблемы

| Проблема | Решение |
|---|---|
| «API key invalid» (неверный ключ) | Пересоздайте ключ на Binance |
| «IP not whitelisted» (IP не в белом списке) | Добавьте ваш IP или отключите ограничение |
| «Insufficient permissions» (недостаточно прав) | Включите спот-торговлю на Binance |
| «Connection timeout» (тайм-аут соединения) | Проверьте файрвол/сеть |

---

## Следующий шаг

> **[Настроить управление рисками →](/docs/risk-controls)**
