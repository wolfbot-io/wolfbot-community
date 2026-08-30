---
title: "Um Portfólio em Todas as Exchanges e no MT5 — Veja Cada Posição em Uma Única Visão"
description: "Em vez de fazer login em cada exchange, todo o seu portfólio — cripto e MT5 juntos — aparece em uma única visão auto-hospedada. Veja o que a visibilidade unificada de portfólio faz e por que ela muda a forma como você gerencia risco."
tested_version: "0.1.0-beta.4"
last_updated: "2026-08-18"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "beginner"
estimated_time: "7 minutes"
next_guide: "/docs/risk-controls"
related_guides: ["/docs/risk-controls", "/docs/crypto-and-mt5-one-platform", "/docs/how-unified-risk-differs-from-per-bot-risk", "/brokers/mt5"]
keywords: [
  "trading de portfólio unificado",
  "um portfólio múltiplas exchanges",
  "visão de portfólio cripto mt5",
  "portfólio entre exchanges",
  "visão única de portfólio bot",
  "dashboard de portfólio wolfbot"
]
sitemap_priority: 0.8
lang: "pt-BR"
translation_of: "docs/one-portfolio-across-exchanges-and-mt5"
---

# Um Portfólio em Todas as Exchanges e no MT5

**Testado com WolfBot Community v0.1.0-beta.4** · Última atualização: 2026-08-18

## Para quem é este guia

- **Se você mantém posições em mais de uma exchange e no MT5, e está cansado de somá-las de cabeça ou em uma planilha.**
- **Se você é tecnicamente inclinado** — isso explica como posições de venues completamente diferentes são reconciliadas em um único portfólio legível.

## O problema do portfólio espalhado

Quanto mais mercados você opera, mais seu "portfólio" se espalha entre telas de login: uma posição de futuros em uma exchange, spot em outra, ouro e câmbio (FX) lá no MT5. Nada soma automaticamente a menos que você faça isso à mão, e quando termina, os números já mudaram.

O WolfBot Community mostra a você **um único portfólio** — cada conta conectada, cripto e MT5, em um único dashboard auto-hospedado.

## O que a visibilidade unificada te dá

- **Exposição total em um relance.** Veja todo o seu risco em vez de dividi-lo entre abas.
- **Símbolos consistentes.** O mesmo instrumento aparece como uma única linha, tenha ele vindo do MT5 (`XAUUSD`) ou de um par de cripto — o [mapeamento de símbolos](/docs/mt5-symbol-mapping) reconcilia os nomes.
- **Um número em nível de portfólio.** Margem, drawdown e exposição são calculados juntos, o que alimenta o [motor de risco unificado](/docs/how-unified-risk-differs-from-per-bot-risk) em vez de um conjunto solto de números por bot.

## Como funciona

Por baixo, Binance e MT5 são sistemas não relacionados — uma API REST de futuros e um terminal de trading Windows. O WolfBot conecta ambos e os apresenta através de uma única visão de portfólio, resolvendo as diferenças de símbolo/venue no meio do caminho. Você tem uma imagem coerente sem abrir mão de nenhuma das suas corretoras.

## Comece pequeno

Conecte uma conta Demo de cripto e uma conta Demo do MT5, abra uma posição minúscula em cada uma, e olhe a visão de portfólio — ambas aparecem na mesma lista. Essa é a base para confiar nos números unificados antes de operar com tamanhos maiores.

## Para onde ir a seguir

- [Controles de Risco →](/docs/risk-controls)
- [Como o risco unificado difere →](/docs/how-unified-risk-differs-from-per-bot-risk)
- [Cripto e MT5 em uma plataforma →](/docs/crypto-and-mt5-one-platform)

## Próximo passo

> **[Leia o guia de Controles de Risco →](/docs/risk-controls)**
