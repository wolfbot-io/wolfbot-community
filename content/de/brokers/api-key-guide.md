---
title: "Trade-Only-API-Schlüssel-Guide — Best Practices für Sicherheit"
description: "So erstellst du sichere Trade-Only-API-Schlüssel für WolfBot Community. Aktiviere niemals Abhebungsberechtigungen. Guide für Binance, Bybit, BingX, KuCoin, Bitget."
tested_version: "0.1.0-beta.4"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["binance", "bybit", "bingx", "kucoin", "bitget"]
category: "security"
difficulty: "beginner"
estimated_time: "5 minutes"
related_guides: ["/brokers/bybit", "/brokers/binance", "/security", "/docs/trade-only-api-keys-explained"]
keywords: [
  "trade only api key",
  "api key security trading bot",
  "non custodial trading bot",
  "safe api key setup",
  "wolfbot api permissions"
]
sitemap_priority: 0.80
lang: "de"
translation_of: "brokers/api-key-guide"
---

# Trade-Only-API-Schlüssel-Guide

**Getestet mit WolfBot Community v0.1.0-beta.4** · Zuletzt aktualisiert: 2026-08-15

## Warum Trade-Only?

WolfBot Community ist **non-custodial** — es hält niemals deine Gelder. Es verbindet sich über API-Schlüssel, die du kontrollierst, mit Börsen. Du kannst diese Schlüssel jederzeit widerrufen.

**Die goldene Regel:** Aktiviere niemals Withdrawal- oder Transfer-Berechtigungen bei einem API-Schlüssel, der mit Handelssoftware verwendet wird. Siehe [Trade-Only-API-Schlüssel erklärt →](/docs/trade-only-api-keys-explained), warum genau diese eine Einstellung wichtiger ist als jede andere.

## Erforderliche Berechtigungen

WolfBot benötigt nur diese Berechtigungen:

| Berechtigung | Erforderlich | Warum |
|---|---|---|
| **Trade** (Lesen-Schreiben) | ✅ Ja | Orders platzieren/stornieren, Positionen prüfen |
| **Read** (Nur Lesen) | ✅ Ja | Guthaben, Positionen, Order-Historie lesen |
| **Withdrawal** | ❌ NIEMALS | WolfBot hebt keine Gelder ab |
| **Transfer** | ❌ NIEMALS | WolfBot transferiert nicht zwischen Konten |

Wenn eine Börse granulare Berechtigungen anbietet, deaktiviere auch:
- ❌ **Withdrawal**
- ❌ **Internal Transfer**
- ❌ **Sub-account Transfer**
- ❌ **Earn/Staking**-Verwaltung

## Nach Börse

### Binance
1. API Management → Create API
2. Aktivieren: **Enable Spot & Margin Trading**
3. Deaktivieren: **Enable Withdrawals**
4. (Empfohlen) Auf vertrauenswürdige IPs beschränken

### Bybit
1. API Management → Create New Key
2. Aktivieren: **Trade**-Berechtigung
3. Deaktivieren: **Withdrawal**, **Transfer**
4. (Empfohlen) IP-Adresse binden

### BingX
1. API Management → Create API Key
2. Aktivieren: **Trade**
3. Deaktivieren: **Withdrawal**
4. (Empfohlen) IP-Zugriff beschränken

### KuCoin
1. API Management → Create API
2. Aktivieren: **Trade** unter Spot Trading
3. Deaktivieren: **Withdrawal**, **Transfer**
4. Eine Passphrase setzen (erforderlich für KuCoin)

### Bitget
1. API Management → Create API Key
2. Aktivieren: **Trade**
3. Deaktivieren: **Withdrawal**
4. (Empfohlen) IP binden

## Zusätzliche Sicherheitstipps

### IP-Bindung (empfohlen)
Wo unterstützt, binde API-Schlüssel an die IP-Adresse deiner Maschine:
- Verhindert Nutzung von anderen Standorten
- Aktualisiere bei IP-Wechsel
- Verwende eine statische IP oder VPS für 24/7-Betrieb

### Separate Schlüssel pro Dienst
- Ein API-Schlüssel für WolfBot Community
- Andere Schlüssel für Portfolio-Tracking-Apps
- Erleichtert den Widerruf einzelner Integrationen

### Regelmäßige Prüfungen
- Prüfe API-Schlüssel monatlich
- Lösche ungenutzte Schlüssel
- Generiere Schlüssel regelmäßig neu

### Schlüsselspeicherung
- Bewahre API-Secrets sicher auf (WolfBot verschlüsselt sie lokal)
- Teile Schlüssel niemals in Screenshots oder Support-Nachrichten
- Speichere Schlüssel nicht in Cloud-Notizen oder E-Mails

---

## Was passiert, wenn ein Schlüssel kompromittiert wird?

1. **Sofort** den API-Schlüssel auf der Börse löschen
2. Prüfe dein Konto auf unbefugte Aktivität
3. Erstelle einen neuen Trade-Only-Schlüssel
4. Aktualisiere WolfBot mit dem neuen Schlüssel

Da das Abheben deaktiviert ist, kann ein kompromittierter Trade-Only-Schlüssel keine Gelder stehlen — aber er könnte unerwünschte Trades platzieren. Handle immer schnell.

---

## Nächste Schritte

> **[Bybit verbinden →](/brokers/bybit)** oder **[Sicherheitsübersicht →](/security)**
