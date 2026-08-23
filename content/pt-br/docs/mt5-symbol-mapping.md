---
title: "Mapeamento de Símbolos MT5 — Como o WolfBot Community Roteia Símbolos Entre MT5 e Exchanges de Cripto"
description: "O MT5 usa símbolos cotados em USD (como BTCUSD ou XAUUSD) enquanto as exchanges de cripto usam pares USDT (BTCUSDT). Veja exatamente como o WolfBot Community os mapeia para que um único sinal funcione em MT5, Binance, Bybit e BingX sem re-simbolização manual."
tested_version: "0.1.0-beta.2"
last_updated: "2026-08-18"
platforms: ["linux", "windows"]
category: "broker-setup"
difficulty: "intermediate"
estimated_time: "8 minutes"
next_guide: "/docs/mt5-troubleshooting"
related_guides: ["/brokers/mt5", "/docs/mt5-without-windows-vps", "/docs/smart-terminal", "/docs/risk-controls"]
keywords: [
  "mapeamento de símbolos mt5",
  "símbolo mt5 para cripto",
  "xauusd para paxgusdt",
  "btcusd vs btcusdt",
  "metatrader 5 futuros cripto",
  "mapeamento de símbolos wolfbot",
  "símbolos de trading entre mercados"
]
sitemap_priority: 0.75
lang: "pt-BR"
translation_of: "docs/mt5-symbol-mapping"
---

# Mapeamento de Símbolos MT5

**Testado com WolfBot Community v0.1.0-beta.2** · Última atualização: 2026-08-18

## Para quem é este guia

- **Se você opera o mesmo mercado tanto em uma exchange de cripto quanto no MT5** — por exemplo, você roda uma estratégia de ouro ou BTC e quer vê-la em um único dashboard — isso explica por que os nomes dos símbolos parecem diferentes e como o WolfBot Community os reconcilia para você.
- **Se você é tecnicamente inclinado** — você verá a tabela de mapeamento real que roda dentro do WolfBot, para saber exatamente para o que um símbolo se resolve antes de abrir uma posição.

## Por que MT5 e exchanges de cripto nomeiam símbolos de forma diferente

Cada venue cota preços no seu próprio formato:

- **MT5 (Forex, Ouro, Índices, Ações/CFDs)** cota no formato **"tipo USD"**: `BTCUSD`, `XAUUSD`, `XAGUSD`, `ETHUSD`.
- **Exchanges de cripto spot/futuros** como Binance, Bybit ou BingX cotam em pares **USDT**: `BTCUSDT`, `XAUUSDT`, `ETHUSDT`.
- O ouro é particularmente diferente: não existe um par "XAU/USDT" na maioria das exchanges de cripto — o WolfBot mapeia ouro para o token `PAXG` (`PAXGUSDT`), um ETF de ouro tokenizado.

Se você conectasse sua corretora MT5 e uma exchange de cripto sem nenhuma reconciliação, a mesma estratégia veria dois símbolos com nomes diferentes e os trataria como dois mercados separados. O WolfBot Community colapsa isso para que UMA visão de portfólio possa mostrar ambos.

## Como o WolfBot Community mapeia símbolos

O WolfBot Community mantém um único mapa de símbolos como fonte da verdade. Quando um sinal ou uma estratégia referencia um símbolo, ele é traduzido para o nome nativo do venue de destino antes de uma ordem ser montada. As regras gerais são:

- `BTCUSD` → `BTCUSDT`, `ETHUSD` → `ETHUSDT`, etc. — os símbolos MT5 cotados em USD para cripto mapeiam para o par `USDT` correspondente.
- `XAUUSD` / `GOLD` → `PAXGUSDT` — ouro mapeia para o par de ouro tokenizado na Binance.
- `XAGUSD` / `SILVER` → `XAGUSDT` — prata tem um par USDT nativo.
- Prata também mapeia para o perpétuo TradFi de prata da BingX com seu id de swap interno.
- Um símbolo **sem** mapeamento é passado adiante sem alteração, então um instrumento personalizado nunca é reescrito por acidente.

Essa tabela vive no código como o mapeamento de símbolos da exchange (`map_symbol(source, target_exchange)`); ela retorna o nome utilizável do venue de destino, ou o símbolo original intocado se não houver entrada.

## O que isso significa para sua configuração

- **Você escreve uma estratégia uma única vez.** Um sinal de ouro no MT5 e uma posição de ouro em cripto aparecem sob um único instrumento na visão unificada de risco e portfólio do WolfBot.
- **Sem re-simbolização manual.** Você não edita cada bot quando adiciona um segundo venue.
- **Determinístico.** O mapa é fixo na plataforma, então o mesmo sinal sempre se resolve para o mesmo símbolo de destino — sem surpresas entre um teste Demo e uma execução Live.

## Um exemplo prático

Considere uma estratégia de prata. Na sua corretora MT5 o símbolo aparece como `XAGUSD`; na Binance é `XAGUSDT`. Quando o WolfBot roteia essa estratégia, ele resolve o símbolo de origem para o nome correto por venue, de modo que a ordem vai para o par certo em cada exchange, e sua visão de portfólio continua sendo um único instrumento "Prata" em vez de dois mercados desconectados.

## Para onde ir a seguir

- [Teste com segurança primeiro →](/docs/simulation) — mapeie e verifique símbolos em uma conta Demo antes de ir para o Live
- [Problemas comuns do MT5 →](/docs/mt5-troubleshooting)
- [Conectar o MT5 →](/brokers/mt5)

## Próximo passo

> **[Solução de problemas do MT5 →](/docs/mt5-troubleshooting)**
