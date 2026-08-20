---
title: "Warum Auszahlungsberechtigungen deaktiviert bleiben sollten — Schütze dein Guthaben vor einem kompromittierten Key"
description: "Trade-only-API-Keys sind dafür gedacht, Auszahlungen deaktiviert zu lassen. Hier erfährst du, warum ein Key mit aktivierter Auszahlungsberechtigung der Hauptweg ist, wie ein kompromittierter Börsen-Key zu einem gestohlenen Guthaben wird, und wie du deinen prüfst."
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-18"
platforms: ["windows", "linux"]
category: "security"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/docs/trade-only-api-keys-explained"
related_guides: ["/docs/trade-only-api-keys-explained", "/security", "/docs/risk-controls"]
keywords: [
  "withdrawal permission api key",
  "trade only api key",
  "disable withdrawal trading bot",
  "api key security",
  "no withdrawal permissions exchange key",
  "secure bot api credentials"
]
sitemap_priority: 0.7
lang: "de"
translation_of: "docs/why-withdrawal-permissions-should-stay-disabled"
---

# Warum Auszahlungsberechtigungen deaktiviert bleiben sollten

**Getestet mit WolfBot Community v0.1.0-p12-ghcr-rc20** · Zuletzt aktualisiert: 2026-08-18

## Die Antwort in einem Satz

Ein Trading-Bot muss nur Trades platzieren und verwalten. Er muss niemals dein Guthaben herausbewegen. Der sicherste API-Key für jeden self-hosted Bot — einschließlich WolfBot Community — ist deshalb ein **Trade-only-Key mit deaktivierten Auszahlungsberechtigungen.**

## Welche Berechtigungen ein API-Key tragen kann

Wenn du einen API-Key auf einer Börse erstellst, wählst du normalerweise, welche Aktionen er ausführen darf. Der entscheidende Unterschied für einen Trading-Bot:

- **Trade:** Guthaben lesen, Orders platzieren, Positionen verwalten — genau das, was ein Bot tut.
- **Withdraw (Auszahlen):** Guthaben aus dem Konto herausbewegen.

Der zweite Punkt ist es, der einen geleakten oder gestohlenen Key von „jemand kann mit meinen Trades herumspielen" zu „jemand kann mein Geld nehmen" macht.

## Warum das für dein Guthaben wichtig ist

Wenn die Auszahlungsberechtigung deines Keys **aus** ist, kann selbst ein vollständig kompromittierter Key dein Guthaben nirgendwohin senden — die Börse lehnt jede Auszahlungsanfrage von ihm einfach ab. Das ist ein harter Riegel gegen den Schaden, den ein gestohlenes Credential deinem tatsächlichen Guthaben zufügen kann.

Wenn sie **an** ist, kann ein Angreifer in dem Moment, in dem dieser Key leakt (ein Paste, eine kompromittierte Maschine, eine bösartige Dependency, die du ausgeführt hast), das Konto direkt leerräumen, ohne einen zusätzlichen Schritt.

## So prüfst du deinen

1. Logge dich bei der Börse ein und öffne **API-Verwaltung**.
2. Finde den Key, der mit deinem Bot verbunden ist.
3. Bestätige, dass nur **Trade / Read** aktiviert und **Withdraw deaktiviert** ist.
4. Wenn die Auszahlung aktiviert ist, deaktiviere sie und verbinde den Bot dann neu. WolfBot benötigt sie nie.

## Der Trade-only-Key, kurz gefasst

- Ein Trade-only-Key erfüllt alles, was ein Bot tut: lesen, platzieren, verwalten.
- Auszahlung zu deaktivieren ist der günstigste, wirksamste Guthabenschutz, den jeder von uns selbst kontrolliert.

## Wo es weitergeht

- [Trade-Only-API-Keys erklärt →](/docs/trade-only-api-keys-explained)
- [Sicherheit →](/security)
- [Risk Controls →](/docs/risk-controls)

## Nächster Schritt

> **[Trade-Only-API-Keys erklärt →](/docs/trade-only-api-keys-explained)**
