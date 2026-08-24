---
title: "Release-Kanäle von WolfBot Community erklärt"
description: "Verstehe die Release-Kanäle von WolfBot Community: Stable, Beta, RC, Alpha und Dev Preview. Wähle den richtigen Kanal."
tested_version: "0.1.0-beta.2"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "release"
difficulty: "beginner"
estimated_time: "3 minutes"
next_guide: "/docs/updates"
related_guides: ["/docs/updates", "/download"]
keywords: ["wolfbot release channels", "wolfbot stable beta", "wolfbot dev preview", "wolfbot version", "trading bot version"]
sitemap_priority: 0.80
lang: "de"
translation_of: "releases/channels"
---

# Release-Kanäle erklärt

**Getestet mit WolfBot Community v0.1.0-beta.2** · Zuletzt aktualisiert: 2026-08-15

## Verfügbare Kanäle

| Kanal | Status | Für wen | Auto-Update |
|---|---|---|---|
| **Stable** | Produktionsreif | Live-Trader | ✅ |
| **RC** (Release Candidate) | Finale Tests | Vorsichtige Early Adopter | Optional |
| **Beta** | Feature-Vorschau | Tester, Enthusiasten | ✅ |
| **Alpha** | Früher Feature-Test | Technische Tester | Optional |
| **Dev Preview** | Neueste Builds | Entwickler, Feedback | Manuell |

---

## Stable

Produktionsreife Releases, die alle Qualitätsstufen bestanden haben.

- **Update-Häufigkeit:** alle 1–2 Monate
- **Risiko:** am niedrigsten
- **Am besten für:** Live-Handel, Produktionseinsatz
- **Support:** voller Community-Support

> ✅ Empfohlen für den gesamten Live-Handel.

---

## Beta

Funktional vollständige Builds in breiterer Testphase.

- **Update-Häufigkeit:** alle 1–2 Wochen
- **Risiko:** niedrig — Funktionen funktionieren, können aber Randfälle haben
- **Am besten für:** Testen neuer Funktionen vor Stable
- **Support:** Community-Feedback willkommen

---

## Dev Preview

Neueste Entwicklungs-Builds — neueste Funktionen, am wenigsten getestet.

- **Update-Häufigkeit:** mehrere pro Woche
- **Risiko:** mittel — Funktionen können unvollständig sein
- **Am besten für:** Entwickler, frühes Feedback, Enthusiasten
- **Support:** nach bestem Bemühen

> ⚠️ Dev Preview kann unvollständige Funktionen enthalten. Der Standardmodus ist Simulation.

---

## Wie Kanäle funktionieren

```text
Dev Preview (häufig)
    ↓
Alpha (Feature-Tests)
    ↓
Beta (breitere Tests)
    ↓
RC (Release Candidate)
    ↓
Stable (Produktion)
```

Jeder Build ist unveränderlich — wir modifizieren niemals ein veröffentlichtes Release. Wird ein Fehler gefunden, wird eine neue Version veröffentlicht.

---

## Aktueller Status

WolfBot Community befindet sich derzeit im öffentlichen Release-Track **v0.1.0-beta.2**.

```text
Stable: noch nicht veröffentlicht
Aktuelle öffentliche Version: v0.1.0-beta.2
```

Das bedeutet:
- Die Software ist funktional und installierbar
- Funktionen werden breit getestet
- Zwischen Versionen können Breaking Changes auftreten
- Ein Demo-Konto wird beim Testen empfohlen

---

## Deinen Kanal wechseln

Es gibt keinen Kanalwechsel in der App — dein Kanal ist einfach das Release, das du herunterlädst und installierst. Hole dir einen Beta- oder Dev-Preview-Build von [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases) statt des Stable-Links auf der Download-Seite, wenn du neuere Funktionen ausprobieren möchtest; der Installer aktualisiert deine bestehende Installation so oder so an Ort und Stelle.

Beim Ausprobieren eines experimentelleren Kanals wird empfohlen, zuerst auf einem Demo-Konto zu testen.

---

## Versionsnummerierung

```text
MAJOR.MINOR.PATCH-channel.NUMBER

0.1.0-beta.2
│   │  │
│   │  └── Kanal: beta, Build 2
│   └───── Minor-Version (Feature-Releases)
└───────── Major-Version (0 = vor Stable)
```

Stable-Versionen verwenden: `1.0.0`, `1.1.0` usw.

---

## GitHub Releases

Alle Releases werden auf [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases) veröffentlicht:

- **Pre-release:** Dev Preview, Alpha, Beta, RC
- **Full Release:** nur Stable
- Jedes Release enthält: Installer-Dateien, Prüfsummen, Release-Notes

---

## Nächster Schritt

> **[Update-Guide →](/docs/updates)**
