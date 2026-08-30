---
title: "Binance mit WolfBot Community verbinden — Schritt für Schritt"
description: "Verbinde Binance mit WolfBot Community — erstelle Trade-Only-API-Schlüssel und starte den automatisierten Handel auf Spot und Futures."
tested_version: "0.1.0-beta.4"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["binance"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/docs/risk-controls"
previous_guide: "/brokers/api-key-guide"
related_guides: ["/docs/simulation", "/docs/risk-controls", "/brokers/api-key-guide"]
keywords: ["binance trading bot", "binance api bot", "connect binance to wolfbot", "binance unified trading", "binance self hosted bot"]
sitemap_priority: 0.85
lang: "de"
translation_of: "brokers/binance"
---

# Binance mit WolfBot Community verbinden

**Getestet mit WolfBot Community v0.1.0-beta.4** · Zuletzt aktualisiert: 2026-08-15

**Binance-Support-Status:** Stabil · Demo ✅ · Live ✅ · Terminal ✅ · Strategie ✅

## Für wen dieser Guide ist

Alle, die ein Binance-Konto mit WolfBot Community verbinden möchten, um über mehrere Märkte zu handeln.

## Was du brauchst

- Ein Binance-Konto ([Registrieren](https://www.binance.com/register?ref=WOLFBOT))
- WolfBot Community installiert und laufend
- 5 Minuten

---

## Schritt 1: Einen Binance-API-Schlüssel erstellen

### Für Spot-Handel

1. Melde dich bei [binance.com](https://www.binance.com/register?ref=WOLFBOT) an
2. Gehe zu **Profil → API Management**
3. Klicke auf **Create API**
4. Wähle den Schlüsseltyp **System-generated**
5. Beschrifte ihn mit „WolfBot Community“
6. Schließe die Sicherheitsüberprüfung ab
7. **Kritisch — Einschränkungen bearbeiten:**
   - Enable Spot & Margin Trading: ✅ AN
   - Enable Withdrawals: ❌ AUS
   - Enable Universal Transfer: ❌ AUS
8. (Empfohlen) Auf vertrauenswürdige IPs beschränken
9. Klicke auf **Save**

> ⚠️ Aktiviere niemals Withdrawals. WolfBot benötigt nur die Handelsberechtigung.

---

## Schritt 2: Binance-Konto in WolfBot hinzufügen

1. Öffne WolfBot Community → **Exchange Accounts → Add Account**
2. Wähle **Binance** → wähle **Spot** oder **Futures**
3. Gib deinen API Key und Secret Key ein
4. Klicke auf **Test Connection**

---

## Schritt 3: Testen

1. Gehe zum **Smart Terminal** → wähle BTC/USDT
2. Beginne zuerst mit einem **Demo**-Konto
3. Wechsle dann zu einem **Live**-Konto und platziere einen kleinen Limit-Order
4. Verifiziere auf Binance, dass der Order erscheint → storniere ihn

---

## Binance-spezifische Hinweise

- **Rate Limits:** WolfBot respektiert automatisch die Binance-API-Rate-Limits (1200 Gewicht/Min)
- **IP-Einschränkung:** für Produktionsschlüssel dringend empfohlen
- **Order-Typen:** Market, Limit, Stop-Limit, OCO vollständig unterstützt

---

## Häufige Probleme

| Problem | Lösung |
|---|---|
| „API key invalid“ | Schlüssel auf Binance neu generieren |
| „IP not whitelisted“ | Deine IP hinzufügen oder Einschränkung deaktivieren |
| „Insufficient permissions“ | Spot Trading auf Binance aktivieren |
| „Connection timeout“ | Firewall/Netzwerk prüfen |

---

## Nächster Schritt

> **[Risk Controls konfigurieren →](/docs/risk-controls)**
