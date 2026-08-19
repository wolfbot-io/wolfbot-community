---
title: "Bybit mit WolfBot Community verbinden — Schritt für Schritt"
description: "Verbinde Bybit mit WolfBot Community — erstelle Trade-Only-API-Schlüssel und starte den automatisierten Handel auf Spot, Futures und Demo."
tested_version: "0.1.0-p12-ghcr-rc19"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["bybit"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/docs/risk-controls"
previous_guide: "/docs/simulation"
related_guides: ["/docs/simulation", "/docs/risk-controls", "/brokers/api-key-guide"]
keywords: [
  "bybit trading bot",
  "bybit self hosted bot",
  "bybit api trading automation",
  "connect bybit to wolfbot",
  "bybit unified trading"
]
sitemap_priority: 0.85
lang: "de"
translation_of: "brokers/bybit"
---

# Bybit mit WolfBot Community verbinden

**Getestet mit WolfBot Community v0.1.0-p12-ghcr-rc19** · Zuletzt aktualisiert: 2026-08-15

**Bybit-Support-Status:** Stabil · Demo ✅ · Live ✅ · Terminal ✅ · Strategie ✅

## Für wen dieser Guide ist

Alle, die ein Bybit-Konto (Demo oder Live) für automatisierten Handel mit WolfBot Community verbinden möchten.

## Was du brauchst

- Ein Bybit-Konto ([Registrieren](https://partner.bybit.com/b/WOLFBOT))
- WolfBot Community installiert und laufend
- 5 Minuten

---

## Schritt 1: Einen Bybit-API-Schlüssel erstellen

### Für Demo (Testnet)

1. Gehe zu [testnet.bybit.com](https://testnet.bybit.com) und melde dich an
2. Navigiere zu **Account & Security → API Management**
3. Klicke auf **Create New Key**
4. Wähle **System-generated API Key**
5. Konfiguriere die Berechtigungen:
   - ✅ **Trade** (Lesen-Schreiben)
   - ❌ **Withdrawal** (deaktiviert)
   - ❌ **Transfer** (deaktiviert)
6. (Optional) Binde eine IP-Adresse für zusätzliche Sicherheit
7. Klicke auf **Confirm**
8. **Kopiere und speichere** deinen API Key und Secret Key

### Für Live-Handel

1. Gehe zu [bybit.com](https://partner.bybit.com/b/WOLFBOT) und melde dich an
2. Navigiere zu **Account & Security → API Management**
3. Befolge dieselben Schritte wie bei Demo — deaktiviere immer Withdrawal und Transfer

> ⚠️ **Kritisch:** Aktiviere niemals Withdrawal- oder Transfer-Berechtigungen. WolfBot benötigt nur die Trade-Berechtigung.

---

## Schritt 2: Bybit-Konto in WolfBot hinzufügen

1. Öffne WolfBot Community
2. Gehe zu **Exchange Accounts → Add Account**
3. Wähle **Bybit** aus der Broker-Liste
4. Wähle den Kontotyp: **Demo** oder **Live**
5. Gib deinen API Key und Secret Key ein
6. Klicke auf **Test Connection**

WolfBot prüft:
- API-Schlüssel ist gültig
- Berechtigungen sind korrekt
- Netzwerkverbindung

---

## Schritt 3: Verbindung testen

Nach erfolgreicher Verbindung:

1. Gehe zum **Smart Terminal**
2. Wähle ein Bybit-Handelspaar (z. B. BTC/USDT)
3. Stelle sicher, dass der Modus **Simulation** ist (für den ersten Test)
4. Platziere einen kleinen simulierten Order
5. Verifiziere, dass der Order in Positions erscheint

Dann wechsle zu **Live** (Demo oder Real):
1. Beginne mit minimaler Positionsgröße
2. Platziere einen kleinen Limit-Order
3. Prüfe auf Bybit, ob der Order erscheint
4. Storniere den Testorder

---

## Schritt 4: Einstellungen konfigurieren

Empfohlene Einstellungen für Bybit:

| Einstellung | Demo | Live |
|---|---|---|
| Modus | Erst Simulation, dann Live | Klein beginnen |
| Positionsgröße | Beliebig | Minimum |
| Max. Hebel | Beliebig | Beginne mit 1x |
| TP/SL | Aktiviert | Aktiviert |
| Hedge-Modus | Optional | Optional |

---

## Erwartetes Ergebnis

Nach erfolgreichem Setup:
- **Exchange Accounts** zeigt Bybit als „Connected“
- Smart Terminal zeigt dein Bybit-Guthaben
- Du kannst Orders platzieren, die auf Bybit erscheinen

---

## Häufige Probleme

| Problem | Lösung |
|---|---|
| „API key invalid“ | Prüfe, ob der Schlüssel abgelaufen ist; bei Bedarf neu generieren |
| „Permission denied“ | Verifiziere, dass Trade aktiviert und Withdrawal deaktiviert ist |
| „Connection timeout“ | Firewall/Netzwerk prüfen; sicherstellen, dass Bybit in deiner Region nicht geografisch eingeschränkt ist |
| „IP restriction“ | Bei IP-Bindung sicherstellen, dass die IP deiner Maschine zur API-Schlüssel-Einschränkung passt |
| „Insufficient balance“ | Für Live: einzahlen; für Demo: Testnet-Guthaben anfordern |

---

## Bybit-spezifische Hinweise

- **Hedge-Modus:** Unterstützt. Erst in den Bybit-Kontoeinstellungen aktivieren, dann in WolfBot.
- **Positionsmodus:** Sowohl One-Way- als auch Hedge-Modus werden unterstützt.
- **Order-Typen:** Market, Limit, TP/SL, DCA werden alle unterstützt.
- **Rate Limits:** WolfBot respektiert die Bybit-Rate-Limits automatisch.

---

## Fehlerbehebung

Bei anhaltenden Problemen:
1. Prüfe den [Bybit API System Status](https://bybit-exchange.github.io/docs/v5/system-status)
2. Verifiziere die API-Schlüssel-Berechtigungen auf Bybit
3. Generiere den API-Schlüssel neu und füge ihn erneut in WolfBot hinzu
4. Prüfe die WolfBot-Logs: `wolfbot logs` (Linux) oder `C:\Program Files\WolfBot\logs\` (Windows)

---

## Nächste Schritte

> **[Risk Controls konfigurieren →](/docs/risk-controls)** oder **[Binance verbinden →](/brokers/binance)**
