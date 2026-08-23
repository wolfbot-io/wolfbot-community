---
title: "Risco Unificado vs Risco por Bot — Por Que Um Único Motor de Risco É Mais Seguro para Trading Multi-Mercado"
description: "Rodar regras de risco separadas por bot deixa brechas entre elas. Este guia explica como o motor de risco unificado do WolfBot Community trata posições de cripto e MT5 como um único portfólio, e por que isso impede um drawdown disperso."
tested_version: "0.1.0-beta.2"
last_updated: "2026-08-18"
platforms: ["windows", "linux"]
category: "risk-controls"
difficulty: "intermediate"
estimated_time: "8 minutes"
next_guide: "/docs/risk-controls"
related_guides: ["/docs/risk-controls", "/docs/why-bots-fail-risk-management", "/docs/how-to-reduce-drawdown"]
keywords: [
  "gerenciamento de risco unificado",
  "risco unificado vs risco por bot",
  "risco em nível de portfólio no trading",
  "risco unificado cripto mt5",
  "controle de drawdown entre bots",
  "gerenciamento de risco wolfbot"
]
sitemap_priority: 0.8
lang: "pt-BR"
translation_of: "docs/how-unified-risk-differs-from-per-bot-risk"
---

# Risco Unificado vs Risco por Bot

**Testado com WolfBot Community v0.1.0-beta.2** · Última atualização: 2026-08-18

## Para quem é este guia

- **Se você roda mais de uma estratégia e quer que elas se comportem como um único portfólio, não como estranhas** — este guia explica a diferença entre risco por bot e risco em tudo.
- **Se você é tecnicamente inclinado** — você verá como um único motor de risco enxerga toda a sua exposição em vez de fragmentá-la por estratégia.

## A armadilha do risco por bot

Muitas configurações dão **a cada bot suas próprias regras de risco**: esta estratégia tem um limite de drawdown de 10%, aquela outra tem outro. O problema é que esses limites não conversam entre si. Se cada bot pode sofrer um pequeno drawdown, e todos sofrem ao mesmo tempo — o que costuma acontecer quando os mercados se movem juntos — cada um individualmente "obedece ao seu limite" enquanto sua conta total sangra em todos eles.

Risco por bot é como cada cômodo de uma casa ter seu próprio aspersor, mas ninguém vigiando o prédio inteiro.

## O que risco unificado significa

Um motor de risco unificado observa sua **posição total em todas as contas conectadas** — futuros de cripto e MT5 incluídos — antes e durante cada operação. Regras como limites de drawdown, tetos de exposição e proteções são avaliadas no nível do portfólio, não por estratégia isoladamente.

Então "não exceda X% de drawdown" significa X% do seu **portfólio inteiro**, não importa quantos bots e corretoras geraram as posições por trás disso.

## Resultado na prática

- **Um stop é um stop de verdade.** Atingir o limite de drawdown do portfólio pausa a atividade em todas as estratégias, não apenas na que ultrapassou o limite.
- **Sem correlação escondida.** Se dez estratégias dependem do mesmo movimento de preço, o motor unificado enxerga essa exposição de uma só vez.
- **Cripto e MT5, a mesma regra.** Uma posição de ouro no MT5 e uma posição de cripto fazem parte do mesmo quadro de risco.

## Compare os dois

| | Risco por bot | Risco unificado |
|---|---|---|
| Leitura do drawdown | por estratégia | portfólio inteiro |
| Posições correlacionadas | invisível | agrupada |
| Ação do stop | apenas aquele bot | toda a atividade |
| Cripto + MT5 | separado | junto |

## Comece com segurança

- [Configure seus Controles de Risco →](/docs/risk-controls)
- [Por que os bots falham →](/docs/why-bots-fail-risk-management)
- [Como reduzir o drawdown →](/docs/how-to-reduce-drawdown)

## Próximo passo

> **[Leia o guia de Controles de Risco →](/docs/risk-controls)**
