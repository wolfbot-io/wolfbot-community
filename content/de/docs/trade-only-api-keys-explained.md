---
title: "Trade-Only-API-Schlüssel erklärt"
description: "Warum die Einstellung „Kein Withdrawal“ die wichtigste Sicherheitskontrolle beim Verbinden eines Trading-Bots ist und wie sie dein Kapital schützt."
tested_version: "0.1.0-beta.4"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "security"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/brokers/api-key-guide"
related_guides: ["/brokers/api-key-guide", "/security", "/docs/why-bots-fail-risk-management"]
keywords: ["trade only api key", "api key permissions", "no withdrawal api key", "trading bot security", "api key safety"]
sitemap_priority: 0.80
lang: "de"
translation_of: "docs/trade-only-api-keys-explained"
---

# Trade-Only-API-Schlüssel erklärt

**Getestet mit WolfBot Community v0.1.0-beta.4** · Zuletzt aktualisiert: 2026-08-15

## Die wichtigste Sicherheitsentscheidung

Wenn du ein Handelskonto mit einer Software verbindest, triffst du genau eine Entscheidung, die fast dein gesamtes Kapital schützt:

> **Aktiviere niemals die Withdrawal-Berechtigung bei einem API-Schlüssel, der mit Handelssoftware verwendet wird.**

## Für wen dieser Guide ist

- **Für alle Trader:** Verstehe in einfachen Worten, warum diese eine Einstellung dein Geld schützt.
- **Für technische Nutzer:** Sieh die präzise Erklärung von API-Berechtigungsbereichen und warum Trade-Only das richtige Prinzip ist.

## Was ein API-Schlüssel ist

Ein API-Schlüssel ist wie ein **Schlüssel zu deinem Konto**, den du einer App gibst. Unterschiedliche Schlüssel können unterschiedliche Dinge tun — je nachdem, welche „Berechtigungen“ du aktivierst.

## Die drei Berechtigungsarten

Fast jede Börse bietet drei grundlegende Berechtigungen:

| Berechtigung | Was sie erlaubt | Für Trading-Bots? |
|---|---|---|
| **Read** | Kontostand und Historie ansehen | ✅ Aktivieren |
| **Trade** | Orders platzieren/stornieren | ✅ Aktivieren |
| **Withdrawal** | Geld abheben | ❌ **NIEMALS** |

## Warum Withdrawal gefährlich ist

Wenn ein Schlüssel die **Withdrawal**-Berechtigung hat:

- Jeder mit dem Schlüssel kann **Geld von deinem Konto abheben**
- Wenn die Software kompromittiert wird, können Angreifer Gelder stehlen
- Wenn ein Bug vorliegt, könnte ungewollt eine Abhebung passieren

Ohne Withdrawal-Berechtigung:
- Das **Schlimmste**, was passieren kann, sind unerwünschte Trades (die du siehst und rückgängig machst)
- Deine Gelder können das Konto **nicht verlassen**
- Du behältst die vollständige Kontrolle über dein Kapital

## Wie WolfBot das durchsetzt

WolfBot Community ist so konzipiert, dass es nur Read- und Trade-Berechtigungen benötigt. Es gibt **keine Funktion** in WolfBot, die eine Abhebung erfordert — weil WolfBot **non-custodial** ist und deine Gelder niemals berührt.

Wenn du einen API-Schlüssel in WolfBot eingibst, der eine Withdrawal-Berechtigung hat, handelst du gegen die Best Practice. Wir empfehlen dringend, den Schlüssel ohne Withdrawal neu zu erstellen.

## Schritt für Schritt (jede Börse)

### Binance

1. **API Management** → **Create API**
2. Aktivieren: `Enable Spot & Margin Trading`
3. Deaktivieren: `Enable Withdrawals` (bleibt standardmäßig aus)
4. (Empfohlen) Auf deine IP beschränken

### Bybit

1. **API Management** → **Create New Key**
2. Aktivieren: `Trade`
3. Deaktivieren: `Withdrawal`, `Transfer`
4. (Empfohlen) IP binden

### BingX / KuCoin / Bitget

Dasselbe Muster — aktiviere `Trade`, deaktiviere `Withdrawal`, beschränke auf deine IP.

> Vollständige Anleitungen pro Börse findest du im [Trade-Only-API-Schlüssel-Guide →](/brokers/api-key-guide)

## Was ein kompromittierter Trade-Only-Schlüssel bedeutet

Selbst im schlimmsten Fall ist der Schaden begrenzt:

| Szenario | Mit Withdrawal | Trade-Only |
|---|---|---|
| Angreifer stiehlt Schlüssel | Kann Gelder **abheben** | Kann nur handeln |
| Software-Bug | Könnte Abhebung auslösen | Nur ungewollte Trades |
| Ergebnis | **Verlust von Kapital** | **Wiederherstellbar** |

Ein ungewollter Trade ist schlecht, aber du siehst ihn sofort und kannst ihn schließen. Eine Abhebung ist oft **irreversibel**.

## Zusätzliche Schutzmaßnahmen

1. **IP-Bindung** — beschränke den Schlüssel auf deine Maschine
2. **Separate Schlüssel** — ein Schlüssel pro Dienst
3. **Regelmäßige Prüfung** — alte Schlüssel löschen
4. **Sofortiger Widerruf** — bei Verdacht sofort löschen

---

## Häufige Fragen

**F: Was ist, wenn eine Börse mich zwingt, Withdrawal zu aktivieren?**
Keine große Börse zwingt dich dazu. Wenn ein Dienst darauf besteht, meide ihn — das ist ein Warnsignal.

**F: Kann WolfBot mit einem Trade-Only-Schlüssel vollständig funktionieren?**
Ja. Alle WolfBot-Funktionen (Orders, Positionen, Risk Controls) benötigen nur Read + Trade.

**F: Was ist mit Transfer-Berechtigung?**
Transfer bewegt Gelder zwischen Konten (z. B. Spot ↔ Futures). WolfBot benötigt dies nicht — deaktiviere es ebenfalls.

---

## Nächster Schritt

> **[Trade-Only-API-Schlüssel-Guide →](/brokers/api-key-guide)** — Schritt-für-Schritt für jede Börse
