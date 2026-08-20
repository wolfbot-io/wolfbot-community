---
title: "Dollar-Cost Averaging (DCA) no WolfBot Community"
description: "Dollar-cost averaging (DCA) distribui uma posição em entradas menores, em vez de uma única compra grande. Veja como o WolfBot Community suporta o DCA e como ele se encaixa no mesmo motor de risco de qualquer outra ordem."
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "intermediate"
estimated_time: "6 minutes"
next_guide: "/docs/risk-controls"
previous_guide: "/docs/take-profit-stop-loss"
related_guides: ["/docs/take-profit-stop-loss", "/docs/risk-controls", "/brokers/bybit"]
keywords: [
  "dollar cost averaging",
  "bot de trading dca",
  "bot de cripto dca",
  "wolfbot dca",
  "bot de trading preço médio"
]
sitemap_priority: 0.75
lang: "pt-BR"
translation_of: "docs/dca-strategy"
---

# Dollar-Cost Averaging (DCA)

**Testado com WolfBot Community v0.1.0-p12-ghcr-rc20** · Última atualização: 2026-08-15

## Para quem é este guia

- **Se você quer uma forma mais suave de entrar em uma posição** — este texto explica o DCA em linguagem simples: o que é, quando ajuda, e como o WolfBot o executa.
- **Se você é mais técnico** — você verá como uma entrada DCA é modelada como uma sequência de sub-ordens (cada uma com seu próprio índice) dentro do mesmo fluxo de execução de ordens, para que os limites de risco ainda se apliquem à posição *inteira*, não apenas à primeira parcela.

## O que é o DCA

Dollar-cost averaging significa comprar uma posição em **várias partes menores, ao longo do tempo ou em diferentes níveis de preço**, em vez de tudo de uma vez a um único preço.

```text
Entrada única:      comprar 100% de uma vez  →  um preço decide tudo
Entrada DCA:         comprar 25% × 4          →  média de vários preços
```

Se o preço continuar caindo depois da sua primeira parcela, as parcelas seguintes compram mais barato, o que reduz seu preço médio de entrada. Você abre mão de parte do ganho se o preço nunca cair, mas elimina o problema de "será que acertei o timing perfeito?".

## Como o WolfBot Community suporta o DCA

O DCA é um dos tipos de ordem que o WolfBot suporta, junto com ordens market, limit e TP/SL. Uma entrada DCA é tratada como um conjunto de sub-ordens menores, em vez de uma única execução grande — cada parcela é rastreada individualmente na camada de execução.

> 🔎 **Para leitores técnicos:** cada sub-ordem DCA carrega seu próprio `dca_index` (`1` para a primeira parcela, incrementando a partir daí), para que o gerenciador de execução saiba qual parcela está executando e possa tratar a sequência como uma única posição lógica para fins de risco.

## Por que ele ainda respeita seus limites de risco

O DCA **não** significa "continuar comprando sem limite". Toda a sequência DCA ainda está sujeita aos mesmos [controles de risco](/docs/risk-controls) de qualquer outra posição:

- O **tamanho total da posição** somando todas as parcelas permanece dentro do seu limite de exposição
- A **proteção de drawdown** ainda pausa as operações se a posição combinada perder demais
- O **TP/SL** ainda se aplica à posição geral, não a cada parcela isoladamente

Esta é a parte importante: o DCA distribui *quando* você compra, não *quanto de risco total* você assume.

## Quando o DCA faz sentido

- Você está confiante na direção de longo prazo, mas não no timing de curto prazo
- Você está entrando em um mercado volátil, onde o preço exato de entrada é difícil de acertar
- Você quer reduzir o arrependimento de uma única entrada mal cronometrada

## Erros comuns

| Erro | Solução |
|---|---|
| Tratar o DCA como "comprar na queda sem limite" | A posição total ainda é limitada pelo seu limite de exposição — defina-o primeiro |
| Não colocar stop-loss em uma posição DCA | A posição inteira ainda precisa de um stop-loss, como qualquer outra operação |
| Adicionar parcelas sem observar a exposição total | Cada parcela se soma à mesma posição; verifique o tamanho combinado |

## Próximo passo

> **[Configure os controles de risco que mantêm o DCA (e tudo o mais) seguro →](/docs/risk-controls)**
