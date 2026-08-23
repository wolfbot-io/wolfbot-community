---
title: "BingX mit WolfBot Community verbinden — Schritt für Schritt"
description: "Verbinde BingX mit WolfBot Community — erstelle Trade-Only-API-Schlüssel und starte den automatisierten Handel auf Standard und Perpetual Futures."
tested_version: "0.1.0-beta.2"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["bingx"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "8 minutes"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls", "/brokers/bybit"]
keywords: ["bingx trading bot", "bingx api bot", "connect bingx to wolfbot"]
sitemap_priority: 0.80
lang: "de"
translation_of: "brokers/bingx"
---

# BingX mit WolfBot Community verbinden

**Getestet mit WolfBot Community v0.1.0-beta.2** · Zuletzt aktualisiert: 2026-08-15

**BingX-Support-Status:** Stabil · Demo ✅ · Live ✅ · Terminal ✅ · Strategie ✅

## Für wen dieser Guide ist

Alle, die ein BingX-Konto für automatisierten Handel auf Standard oder Perpetual Futures mit WolfBot Community verbinden möchten.

## Was du brauchst

- Ein BingX-Konto ([Registrieren](https://bingxdao.com/partner/Wolfbot/))
- WolfBot Community installiert
- 5 Minuten

---

## Schritt 1: BingX-API-Schlüssel erstellen

1. Melde dich bei [bingx.com](https://bingxdao.com/partner/Wolfbot/) an
2. Gehe zu **API Management** (unter Profil/Einstellungen)
3. Klicke auf **Create API Key**
4. Beschrifte ihn mit „WolfBot Community“
5. Setze die Berechtigungen:
   - Standard/Contract Trading: ✅ AN
   - Withdrawal: ❌ AUS
6. (Empfohlen) Binde eine IP-Adresse
7. Schließe die Verifizierung ab → speichere Key + Secret

> ⚠️ Aktiviere niemals Withdrawal — WolfBot benötigt nur den Handel.

---

## Schritt 2: In WolfBot hinzufügen

1. WolfBot → **Exchange Accounts → Add Account**
2. Wähle **BingX**
3. Wähle **Standard** oder **Perpetual Futures**
4. Gib API Key + Secret ein → **Test Connection**

---

## Schritt 3: Testen

1. Smart Terminal → wähle ein Handelspaar (z. B. BTC/USDT)
2. Beginne mit deinem Demo-API-Schlüssel → dann ein kleiner Live-Limit-Order
3. Verifiziere auf BingX → storniere den Testorder

---

## BingX-spezifische Hinweise

- **Demo-Handel:** In der App verfügbar unter Derivatives → Perpetual Futures → Demo Trading (verwendet virtuelles Guthaben) — [so funktioniert es](https://bingx.com/en/wiki/detail/demo-trading) — separate API-Schlüssel
- **Futures:** Verwende den Kontotyp Perpetual Futures in WolfBot
- **Copy Trading:** WolfBot interagiert nicht mit dem BingX-Copy-Trading

---

## Häufige Probleme

| Problem | Lösung |
|---|---|
| API key invalid | Auf BingX neu generieren |
| Permission error | Standard/Contract Trading aktivieren |
| Connection timeout | Firewall prüfen; BingX kann in deiner Region eingeschränkt sein |

---

## Nächster Schritt

> **[Risk Controls konfigurieren →](/docs/risk-controls)**
