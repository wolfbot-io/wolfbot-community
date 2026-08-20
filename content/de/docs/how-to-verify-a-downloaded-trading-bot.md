---
title: "Wie du einen heruntergeladenen Trading-Bot verifizierst — prüfe, was du installieren willst"
description: "Bevor du einen Trading-Bot installierst, verifiziere die Quelle und die Datei. So prüfst du einen Download gegen den offiziellen Release, den Digest und die Signatur, damit du nie unverifizierte Handelssoftware ausführst."
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-18"
platforms: ["windows", "linux"]
category: "security"
difficulty: "beginner"
estimated_time: "7 minutes"
next_guide: "/security"
related_guides: ["/security", "/faq", "/about", "/download"]
keywords: [
  "verify downloaded trading bot",
  "verify trading bot checksum",
  "trading software authenticity",
  "check wolfbot download sha256",
  "safe install trading bot",
  "verify bot download linux"
]
sitemap_priority: 0.7
lang: "de"
translation_of: "docs/how-to-verify-a-downloaded-trading-bot"
---

# Wie du einen heruntergeladenen Trading-Bot verifizierst

**Getestet mit WolfBot Community v0.1.0-p12-ghcr-rc20** · Zuletzt aktualisiert: 2026-08-18

## Für wen dieser Guide ist

- **Wenn du einen Trading-Bot heruntergeladen hast (oder es vorhast) und sichergehen willst, dass es sich um das echte Original handelt** — hier siehst du die zwei Prüfungen, die zwei Minuten dauern.
- **Für technische Nutzer** — du siehst, wie du eine Binärdatei unabhängig anhand des Digests und der Signatur bestätigst, die die Maintainer veröffentlichen.

## Warum überhaupt verifizieren

Handelssoftware berührt deine Börsen und dein Geld. Jeder kann eine Binärdatei namens „WolfBot" veröffentlichen — die sicherste Gewohnheit ist, zu bestätigen, dass eine Datei wirklich das ist, was ihr Name behauptet, **bevor** du sie ausführst. Zwei Signale machen das überprüfbar:

1. **Woher sie kam** — die offizielle Release-Quelle.
2. **Was die Datei tatsächlich ist** — passender Digest und Signatur.

## Die Zwei-Minuten-Prüfung

**1. Nutze die offizielle Quelle.**

Lade nur vom offiziellen GitHub-Repository (`github.com/wolfbot-io/wolfbot-community`) oder von `community.wolfbot.io` herunter. Eine Datei, die woanders angeboten wird — ein zufälliger Blog, eine Mirror-Site, eine DM — ist per Definition unverifiziert.

**2. Vergleiche die Prüfsumme.**

WolfBot veröffentlicht den **SHA-256-Digest** für jeden Installer (du siehst ihn auf der Download-Seite und in den Release Notes). Nach dem Download:

```bash
# Linux/macOS
sha256sum WolfBot-Setup-linux-amd64.deb
# Windows (PowerShell)
Get-FileHash .\WolfBot-Setup.exe -Algorithm SHA256
```

Die Ausgabe muss exakt mit dem veröffentlichten Digest übereinstimmen. Eine Abweichung bedeutet, dass die Datei nicht das Original ist — installiere sie nicht.

**3. (Technisch) Prüfe die Signatur.**

Offizielle Releases sind kryptografisch signiert. Die Signatur gegen den öffentlichen Schlüssel des Projekts zu verifizieren bestätigt, wer sie gebaut hat — unabhängig von der gehashten Datei.

## Warnsignale

- Der Digest stimmt **nicht** mit dem veröffentlichten Wert überein.
- Die Datei kam von einer anderen Quelle als dem offiziellen Repo / der Community-Site.
- Die Seite, von der du heruntergeladen hast, ist nicht die echte wolfbot.io-/GitHub-Domain.
- Du wirst gebeten, einen Installer von einer unverifizierten Quelle als Administrator auszuführen.

Stoppe in jedem dieser Fälle und lade stattdessen vom offiziellen Release herunter.

## Warum WolfBot Community dies veröffentlicht

Transparenz ist Teil von sicherem Self-Hosting. Weil du immer verifizieren kannst, was du installierst, musst du einem Namen auf einer Download-Seite nie blind vertrauen.

## Wie es weitergeht

- [Sicherheit →](/security)
- [Über uns & offizielle Quellen →](/about)
- [Das offizielle Release herunterladen →](/download)

## Nächster Schritt

> **[Lies die Sicherheitsseite →](/security)**
