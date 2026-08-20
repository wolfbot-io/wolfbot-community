---
title: "Automatize Forex e Ouro com MT5 — Rode Estratégias de Ouro, FX e Commodities Self-Hosted"
description: "Automatize estratégias de Forex, Ouro e CFDs de commodities com o MT5 na sua própria máquina ou VPS, lado a lado com cripto — a mesma interface do WolfBot, risco unificado e um único portfólio."
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-18"
platforms: ["linux", "windows"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/docs/mt5-symbol-mapping"
related_guides: ["/docs/mt5-without-windows-vps", "/docs/mt5-troubleshooting", "/brokers/mt5", "/docs/risk-controls"]
keywords: [
  "bot de automação forex",
  "bot de trading de ouro mt5",
  "automação mt5 forex ouro",
  "bot de trading de commodities",
  "metatrader 5 self hosted",
  "forex ouro mt5 wolfbot"
]
sitemap_priority: 0.8
lang: "pt-BR"
translation_of: "docs/automate-forex-gold-with-mt5"
---

# Automatize Forex e Ouro com MT5

**Testado com WolfBot Community v0.1.0-p12-ghcr-rc20** · Última atualização: 2026-08-18

## Para quem é este guia

- **Se você opera Forex, Ouro, Índices ou CFDs de commodities e quer automatizá-los na sua própria máquina** — este guia explica como rodar estratégias de MT5 no WolfBot Community sem alugar um segundo servidor Windows.
- **Se você é tecnicamente inclinado** — você verá como o terminal MT5, o mapeamento de símbolos e o risco unificado do WolfBot se encaixam, para saber exatamente o que roda onde.

## Forex, ouro e MT5 — o problema clássico da automação

O MetaTrader 5 é a ferramenta que a maioria dos traders de FX, Ouro e CFDs já usa. A forma tradicional de automatizá-lo exige manter uma **máquina Windows rodando 24/7** — geralmente um VPS alugado — só para manter um terminal MT5 vivo, além de tudo o mais que você já roda.

O WolfBot Community elimina essa segunda máquina. O MT5 roda dentro de um container na mesma máquina Linux (ou Windows) que o resto do WolfBot, então suas estratégias de ouro/FX E suas estratégias de cripto vivem em uma única plataforma.

## Como o trading automatizado de ouro e FX se encaixa

```text
Sua máquina (ou VPS), 24/7
    │
    ├── WolfBot Community — estratégias + risco unificado + portfólio
    │
    └── Container da ponte MT5
            ├── terminal MT5 real (headless, sua conta na corretora)
            └── janela de navegador para acessá-lo (sem área de trabalho remota)
```

Sua estratégia de ouro/FX no MT5, sua estratégia de futuros de cripto e suas posições manuais aparecem todas em **um único dashboard, um único motor de risco, uma única visão de portfólio** — não espalhadas por aplicativos separados.

## Os símbolos simplesmente funcionam entre mercados

Uma estratégia de ouro no MT5 cota o metal como `XAUUSD`; em uma exchange de cripto você pode mantê-lo como o par de ouro tokenizado `PAXGUSDT`. O mapeamento de símbolos do WolfBot reconcilia isso automaticamente (veja o [guia de mapeamento de símbolos](/docs/mt5-symbol-mapping)), então seu portfólio mostra um único instrumento "Ouro" em vez de dois mercados desconectados.

## Comece com a Simulação

Primeiro conecte uma conta **Demo** do MT5 (o guia de conexão te leva passo a passo), verifique que os símbolos resolvem da forma esperada, e rode sua estratégia em Simulação até confiar nela. Só então conecte uma conta Live e avance com cuidado.

## Comece agora

- [Conectar o MT5 →](/brokers/mt5) — passo a passo para Windows e Linux
- [Mapeamento de símbolos do MT5 →](/docs/mt5-symbol-mapping)
- [Rode o MT5 sem um VPS Windows →](/docs/mt5-without-windows-vps)

## Próximo passo

> **[Mapeamento de símbolos do MT5 →](/docs/mt5-symbol-mapping)**
