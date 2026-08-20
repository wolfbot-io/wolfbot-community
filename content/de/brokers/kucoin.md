---
title: "KuCoin mit WolfBot Community verbinden — Schritt für Schritt"
description: "Verbinde KuCoin mit WolfBot Community — erstelle API-Schlüssel mit Passphrase und starte den automatisierten Handel auf Spot und Futures."
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["kucoin"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "8 minutes"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls"]
keywords: ["kucoin trading bot", "kucoin api bot", "connect kucoin to wolfbot"]
sitemap_priority: 0.80
lang: "de"
translation_of: "brokers/kucoin"
---

# KuCoin mit WolfBot Community verbinden

**Getestet mit WolfBot Community v0.1.0-p12-ghcr-rc20** · Zuletzt aktualisiert: 2026-08-15

**KuCoin-Support-Status:** Stabil · Demo ✅ · Live ✅ · Terminal ✅ · Strategie ✅

## Für wen dieser Guide ist

Alle, die ein KuCoin-Konto mit WolfBot Community verbinden.

## Was du brauchst

- Ein KuCoin-Konto ([Registrieren](https://www.kucoin.com/r/broker/WOLFBOTIO))
- WolfBot Community installiert
- 5 Minuten

---

## Schritt 1: KuCoin-API-Schlüssel erstellen

1. Melde dich bei [kucoin.com](https://www.kucoin.com/r/broker/WOLFBOTIO) an
2. Gehe zu **Account → API Management**
3. Klicke auf **Create API**
4. Beschrifte ihn mit „WolfBot Community“
5. Setze eine **API Passphrase** (erforderlich für KuCoin — merke sie dir!)
6. Berechtigungen:
   - Spot Trading: ✅ AN
   - Futures Trading: ✅ AN (falls du Futures nutzt)
   - Withdrawal: ❌ AUS
   - Transfer: ❌ AUS
7. (Empfohlen) Binde eine IP-Adresse
8. Schließe die Verifizierung ab → speichere Key, Secret und Passphrase

> ⚠️ KuCoin erfordert eine Passphrase. Bewahre sie sicher auf — du brauchst sie in WolfBot.

---

## Schritt 2: In WolfBot hinzufügen

1. WolfBot → **Exchange Accounts → Add Account**
2. Wähle **KuCoin**
3. Wähle den Kontotyp: **Spot** oder **Futures**
4. Gib API Key, Secret Key **und Passphrase** ein
5. Klicke auf **Test Connection**

---

## Schritt 3: Testen

1. Smart Terminal → wähle ein Handelspaar
2. Beginne mit deinem Demo-API-Schlüssel → dann ein kleiner Live-Order
3. Verifiziere auf KuCoin → storniere

---

## KuCoin-spezifische Hinweise

- **Passphrase erforderlich** — anders als die meisten Broker verlangt KuCoin eine API-Passphrase
- **Demo:** KuCoin Sandbox zum Testen verfügbar
- **Futures:** verfügbar
- **Token-Vielfalt:** KuCoin unterstützt viele Altcoin-Paare

---

## Häufige Probleme

| Problem | Lösung |
|---|---|
| „Passphrase incorrect“ | Erneut eingeben; die Passphrase ist groß-/kleinschreibungsabhängig |
| API key invalid | Auf KuCoin neu generieren |
| Permission denied | Spot Trading aktivieren |
| Connection timeout | Firewall prüfen |

---

## Nächster Schritt

> **[Risk Controls konfigurieren →](/docs/risk-controls)**
