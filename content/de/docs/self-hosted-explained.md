---
title: "Was ist Self-Hosting? — WolfBot Community erklärt"
description: "Verstehe, was es bedeutet, einen Trading-Bot selbst zu hosten, warum es auf deiner eigenen Maschine läuft, und was das für Kontrolle, Datenschutz und Kosten bedeutet."
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "faq"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/getting-started"
related_guides: ["/getting-started", "/security", "/docs/run-24-7-on-a-vps", "/community-vs-cloud"]
keywords: ["self hosted trading bot", "what is self hosting", "wolfbot self hosted", "self hosted vs cloud trading"]
sitemap_priority: 0.80
lang: "de"
translation_of: "docs/self-hosted-explained"
---

# Was ist Self-Hosting?

**Getestet mit WolfBot Community v0.1.0-p12-ghcr-rc8** · Zuletzt aktualisiert: 2026-08-15

## Die Kernidee

WolfBot Community ist **self-hosted** — das bedeutet, die Software läuft auf **deiner eigenen Maschine** (PC oder Server), nicht auf unseren Servern. Du installierst sie, du kontrollierst sie, und deine Daten bleiben bei dir.

## Für wen dieser Guide ist

- **Du möchtest Kontrolle:** Verstehe, was es bedeutet, deinen Trading-Bot selbst zu betreiben, und warum viele Trader es bevorzugen.
- **Du hast etwas Technik-Hintergrund:** Sieh die präzisen Details darunter — wo Dinge gespeichert werden, wie Backups funktionieren und wie du rund um die Uhr betreibst.

## Was Self-Hosting bedeutet

Wenn du WolfBot Community verwendest:

1. **Du lädst die Software herunter** — von unserer GitHub-Seite
2. **Du installierst sie** — auf deinem Windows- oder Linux-Rechner
3. **Du verbindest deine Konten** — API-Schlüssel bleiben auf deiner Maschine
4. **Du führst sie aus** — wann immer deine Maschine an ist, kann sie handeln

## Warum self-hosted?

### 1. Vollständige Kontrolle

- Du entscheidest, wann du Updates anwendest
- Du konfigurierst jede Risiko-Einstellung selbst
- Du kannst die Konfiguration direkt prüfen und sichern
- Keine Abhängigkeit vom Zeitplan eines Drittanbieters

### 2. Datenschutz

- API-Schlüssel bleiben verschlüsselt auf deiner Maschine
- Handelshistorie und Einstellungen verlassen deinen Rechner nicht
- Kein Drittanbieter-Server sieht deine Handelsdaten

### 3. Kosten

- WolfBot Community ist kostenlos
- Du zahlst nur für deine Maschine (falls du einen VPS verwendest)
- Keine Abonnement-Gebühren, keine versteckten Kosten

### 4. Transparenz

- Du kannst die Konfigurationsdateien prüfen
- Du kannst nachvollziehen, was die Software tut
- Die Entwicklung ist offen auf GitHub

## Was Self-Hosting erfordert

### Minimale Anforderungen

| Voraussetzung | Minimum | Empfohlen |
|---|---|---|
| **Betriebssystem** | Windows 10+ oder Ubuntu 20.04+ | Neueste stabile Version |
| **RAM** | 2 GB | 4 GB |
| **Speicher** | 1 GB frei | 5 GB frei |
| **Netzwerk** | Internet | Kabelgebundene Verbindung |

### Deine Verantwortlichkeiten

- ✅ Maschine an und verbunden halten
- ✅ Updates anwenden (ein Klick)
- ✅ Regelmäßige Backups
- ✅ Basis-Sicherheitshygiene

> 💡 **Für technische Nutzer:** Self-Hosting bedeutet, dass du der Systemadministrator bist. WolfBot läuft als Dienst/Prozess auf deiner Maschine, speichert Konfiguration und verschlüsselte API-Geheimnisse lokal und verbindet sich ausgehend zu den Broker-APIs. Es gibt keinen eingehenden Server — nichts wird von außen erreichbar gemacht.

## Self-Hosting vs. Cloud

| Aspekt | Self-Hosted (Community) | Cloud |
|---|---|---|
| **Kosten** | Kostenlos | Abonnement |
| **Kontrolle** | Voll | Begrenzt |
| **Verantwortung** | Deine | Anbieter |
| **Datenschutz** | Vollständig | Geteilt |
| **Einrichtung** | Manuell | Sofort |

Vollständiger Vergleich unter [Community vs Cloud →](/community-vs-cloud)

## Ist Self-Hosting das Richtige für dich?

### Wähle Self-Hosting, wenn du:
- ✅ Volle Kontrolle über deinen Bot willst
- ✅ Mit grundlegender Computer-Verwaltung vertraut bist
- ✅ Die kostenlose Option bevorzugst
- ✅ Deine Daten privat halten willst

### Ziehe Cloud in Betracht, wenn du:
- ⚠️ Keine Maschinen verwalten willst
- ⚠️ 24/7-Uptime ohne eigene Hardware brauchst
- ⚠️ Direkten Support benötigst

## So geht's weiter

Bereit zum Self-Hosten? Beginne hier:

1. [Erste Schritte →](/getting-started) — lade WolfBot Community herunter und installiere es
2. [Mit einem Demo-Konto starten →](/docs/simulation) — teste risikofrei
3. [Verbinde deine Märkte →](/getting-started) — Krypto und MT5

## Für technische Nutzer

Details, die bei Self-Hosting wichtig sind:

- **Datenpfad:** WolfBot speichert Konfiguration unter `/opt/wolfbot/` (Linux) oder `%USERPROFILE%\.wolfbot\` (Windows). Backups werden in einem Unterverzeichnis abgelegt.
- **Verschlüsselung:** API-Secrets werden vor dem Schreiben auf die Festplatte verschlüsselt; sie liegen niemals im Klartext in Konfigurationsdateien.
- **Netzwerk:** Nur ausgehende Verbindungen zu Broker-APIs. Es wird kein Port für eingehenden Zugriff geöffnet.
- **24/7-Betrieb:** Für ununterbrochenen Handel verwende einen VPS — siehe [24/7 auf einem VPS ausführen →](/docs/run-24-7-on-a-vps).
