---
title: "Bitget mit WolfBot Community verbinden — Schritt für Schritt"
description: "Verbinde Bitget mit WolfBot Community — erstelle Trade-Only-API-Schlüssel und starte den automatisierten Handel auf Spot und Futures."
tested_version: "0.1.0-p12-ghcr-rc17"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["bitget"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "8 minutes"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls"]
keywords: ["bitget trading bot", "bitget api bot", "connect bitget to wolfbot"]
sitemap_priority: 0.80
lang: "de"
translation_of: "brokers/bitget"
---

# Bitget mit WolfBot Community verbinden

**Getestet mit WolfBot Community v0.1.0-p12-ghcr-rc17** · Zuletzt aktualisiert: 2026-08-15

**Bitget-Support-Status:** Stabil · Demo ✅ · Live ✅ · Terminal ✅ · Strategie ✅

## Für wen dieser Guide ist

Alle, die ein Bitget-Konto mit WolfBot Community verbinden.

## Was du brauchst

- Ein Bitget-Konto ([Registrieren](https://partner.bitget.com/bg/WOLFBOT))
- WolfBot Community installiert
- 5 Minuten

---

## Schritt 1: Bitget-API-Schlüssel erstellen

1. Melde dich bei [bitget.com](https://partner.bitget.com/bg/WOLFBOT) an
2. Gehe zu **Account → API Management**
3. Klicke auf **Create API Key**
4. Beschrifte ihn mit „WolfBot Community“
5. Setze die Berechtigungen:
   - Trade: ✅ AN
   - Withdrawal: ❌ AUS
   - Transfer: ❌ AUS
6. (Empfohlen) Binde eine IP-Adresse
7. Schließe die Verifizierung ab → speichere Key + Secret

---

## Schritt 2: In WolfBot hinzufügen

1. WolfBot → **Exchange Accounts → Add Account**
2. Wähle **Bitget**
3. Wähle **Spot** oder **Futures**
4. Gib API Key + Secret ein → **Test Connection**

---

## Schritt 3: Testen

1. Smart Terminal → wähle ein Handelspaar
2. Beginne mit deinem Demo-API-Schlüssel → dann ein kleiner Live-Limit-Order
3. Verifiziere auf Bitget → storniere

---

## Bitget-spezifische Hinweise

- **Demo-Handel:** Bitget-Testnet zum Testen verfügbar
- **Futures:** verfügbar
- **Copy Trading:** WolfBot interagiert nicht mit der Bitget-Copy-Trading-Funktion

---

## Häufige Probleme

| Problem | Lösung |
|---|---|
| API key invalid | Auf Bitget neu generieren |
| Permission denied | Trade-Berechtigung aktivieren |
| IP restriction error | Deine IP hinzufügen oder Einschränkung deaktivieren |

---

## Nächster Schritt

> **[Risk Controls konfigurieren →](/docs/risk-controls)**
