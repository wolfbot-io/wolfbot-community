---
title: "Take-Profit e Stop-Loss — As Duas Ordens Que Protegem Cada Operação"
description: "Take-profit (TP) e stop-loss (SL) são as duas ordens que decidem quanto você ganha e quanto você pode perder. Veja como o WolfBot Community as coloca automaticamente e como ajustá-las."
tested_version: "0.1.0-beta.4"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "risk-controls"
difficulty: "beginner"
estimated_time: "6 minutes"
next_guide: "/docs/dca-strategy"
previous_guide: "/docs/automated-trading-workflow"
related_guides: ["/docs/risk-controls", "/docs/smart-terminal", "/docs/automated-trading-workflow"]
keywords: [
  "take profit stop loss",
  "bot de trading tp sl",
  "bot de trading stop loss",
  "ordem de take profit",
  "stop loss bot de trading"
]
sitemap_priority: 0.80
lang: "pt-BR"
translation_of: "docs/take-profit-stop-loss"
---

# Take-Profit e Stop-Loss

**Testado com WolfBot Community v0.1.0-beta.4** · Última atualização: 2026-08-15

## Para quem é este guia

- **Se você quer proteger cada operação sem ficar vigiando a tela** — este texto explica as duas ordens que fazem essa proteção, e como o WolfBot as anexa às suas operações automaticamente.
- **Se você é mais técnico** — você verá como o TP/SL é derivado das suas configurações de risco (percentuais de recompensa e perda) e onde sobrepô-los.

## As duas ordens, em linguagem simples

Uma operação, por si só, não tem plano de saída. Duas ordens dão a ela um:

| Ordem | O Que Faz | Por Que Importa |
|---|---|---|
| **Stop-loss (SL)** | Fecha a posição automaticamente se o preço se mover contra você em um valor determinado | Limita quanto você pode perder em uma única operação |
| **Take-profit (TP)** | Fecha a posição automaticamente quando o preço atinge seu alvo | Garante o ganho, em vez de esperar por mais e acabar devolvendo tudo |

Sem elas, "ficar de olho na posição" é a única estratégia de saída — e ninguém consegue vigiar a cada segundo, especialmente ao operar em mercados de cripto e MT5 ao mesmo tempo.

## Como o WolfBot Community trata o TP/SL

O WolfBot anexa TP/SL **automaticamente** a cada operação que você faz pelo [Terminal Inteligente](/docs/smart-terminal), e deriva os níveis a partir das suas configurações de risco:

- **Stop-loss** — definido a partir da sua tolerância de perda configurada, para que uma única operação nunca perca mais do que um valor limitado
- **Take-profit** — definido a partir da sua relação de recompensa, para que os ganhos sejam garantidos em um alvo, em vez de ficarem em aberto

Você ainda pode ajustar qualquer um dos níveis pelo painel de posição depois, mas o padrão é "um stop-loss está anexado" — não "você esqueceu de adicionar um".

> 🛡️ O motor de risco do WolfBot trata a ausência de stop-loss como um problema, não uma escolha: o terminal exige que toda posição tenha um stop-loss (isso é configurável, mas vem ativado por padrão).

## Como pensar sobre os números

Os dois percentuais que importam são sua **perda por operação** e sua **recompensa por operação**:

```text
Arriscar 1,5% para ganhar 3%   →  relação risco/recompensa de 1:2
```

Uma relação de 1:2 significa que você só precisa acertar um pouco mais de um terço das vezes para empatar, porque os ganhos são duas vezes o tamanho das perdas. É por isso que TP/SL não são apenas segurança — eles são a base de qualquer estratégia consistente.

## Ajustando o TP/SL no WolfBot

1. Defina sua tolerância base de perda na página de **Risco** (isso alimenta o stop-loss)
2. Defina seu alvo de recompensa (isso alimenta o take-profit)
3. Faça uma operação no **Terminal Inteligente** — o TP/SL é anexado automaticamente
4. Ajuste finamente uma posição específica pelo painel de posição, se necessário

> Para bots automatizados, a mesma lógica de TP/SL se aplica: um bot não pode entrar em uma operação que viole seus limites configurados, e suas saídas respeitam o mesmo comportamento de take-profit/stop-loss.

## Erros comuns

| Erro | Solução |
|---|---|
| Mover o stop-loss para mais longe "para dar espaço" | Isso aumenta o risco no meio da operação — decida seu risco *antes* da entrada e depois mantenha |
| Não definir take-profit, esperando por um grande ganho | Garanta os ganhos em um alvo; você sempre pode reentrar |
| Regras diferentes de TP/SL por mercado | Use um único motor de risco para que as operações de cripto e MT5 se comportem da mesma forma |
| Desativar o stop-loss obrigatório | Mantenha-o ativo — é a proteção mais importante de todas |

## Próximo passo

> **[Dollar-Cost Averaging (DCA) — uma forma diferente de entrar em uma posição →](/docs/dca-strategy)**
