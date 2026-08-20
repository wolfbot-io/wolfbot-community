---
title: "Sinais Externos — Envie Sinais de Mercado para o WolfBot Community de Qualquer Fonte"
description: "Conecte sinais de trading externos — alertas do TradingView, webhooks personalizados, serviços de sinais — ao seu bot WolfBot Community self-hosted através de um único pipeline assinado e protegido por risco."
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-18"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "intermediate"
estimated_time: "10 minutes"
next_guide: "/docs/tradingview"
related_guides: ["/docs/tradingview", "/docs/automated-trading-workflow", "/docs/simulation", "/docs/risk-controls"]
keywords: [
  "sinais de trading externos",
  "bot de trading webhook",
  "sinais personalizados para bot de trading",
  "serviço de sinais wolfbot",
  "automação webhook assinado",
  "sinais externos self hosted"
]
sitemap_priority: 0.75
lang: "pt-BR"
translation_of: "docs/external-signals"
---

# Sinais Externos

**Testado com WolfBot Community v0.1.0-p12-ghcr-rc20** · Última atualização: 2026-08-18

## Para quem é este guia

- **Se você já recebe sinais de outro lugar** — um alerta do TradingView, um serviço de sinais pago, ou seu próprio script — e quer que eles abram posições no seu próprio bot em vez de executar manualmente.
- **Se você é tecnicamente inclinado** — você verá o único pipeline pelo qual todo sinal externo passa (verificar → analisar → normalizar → risco → executar), para conectar sua própria fonte sem inventar um novo caminho.

## O que "sinal externo" significa aqui

Um sinal externo é qualquer instrução de compra/venda que vem de **fora** do WolfBot Community e precisa se tornar uma operação. Exemplos:

- Webhooks de alertas do TradingView (veja o [guia dedicado do TradingView](/docs/tradingview)).
- Um webhook personalizado que seu próprio script ou serviço dispara.
- Um serviço de sinais em que você confia o suficiente para conectar à sua camada de risco.

Todos eles compartilham um único ponto de entrada assinado em vez de cada um ser uma integração sob medida.

## O único pipeline que todo sinal externo usa

Não importa a origem, todo sinal recebido percorre o mesmo caminho:

```text
HTTP POST (assinado)
   → verificação de assinatura (HMAC com seu segredo de webhook)
   → analisar sinal (símbolo, direção, from/to)
   → normalizar símbolo para sua corretora alvo
   → anexar identidade (fonte, estratégia, camada)
   → enfileirar entrada através da camada compartilhada de risco/execução
```

Como toda fonte passa pelo mesmo pipeline, você tem as mesmas garantias independentemente de onde o sinal veio:

- **Autenticado** — apenas requisições assinadas com seu segredo podem executar.
- **Protegido por risco** — as entradas ainda passam pelos mesmos controles de risco de ordens manuais ou de estratégias.
- **Símbolo normalizado** — o nome MT5/USD do seu sinal é mapeado para o par correto na sua exchange alvo.

## Camadas mantêm os sinais adequados à sua fonte

Sinais externos usam o mesmo modelo de payload em três camadas, então tanto um sinal leve quanto uma requisição completa de ordem são suportados:

- `signal_only` — direção/símbolo apenas; o WolfBot cuida do dimensionamento e da proteção.
- `signal_and_risk` — adiciona campos de valor nocional e take-profit.
- `full_entry_request` — completo, incluindo a conta alvo.

Comece uma nova fonte externa em `signal_only` e só suba de nível depois de ver um ciclo limpo em Simulação.

## Teste toda nova fonte primeiro na Simulação

Para qualquer fonte externa:

1. Aponte-a para uma estratégia de **Simulação** com sua própria URL de webhook + segredo.
2. Dispare um sinal de teste e confirme que ele chega, autenticado, no símbolo pretendido.
3. Verifique se a entrada protegida por risco se comporta como esperado.
4. Só então mude uma cópia para Live.

## Notas de segurança

- Toda fonte externa recebe **seu próprio segredo de webhook** — trate cada um como uma chave de API. Mantenha-os fora de gráficos/repositórios públicos.
- Mantenha a rota do webhook atrás do seu próprio host; a assinatura é o que autentica, não o sigilo da própria URL.
- Um serviço de sinais que você aponta para o seu bot deve ser um em que você confia — o pipeline autentica a requisição, mas não pode julgar se a ideia do sinal é boa.

## Para onde ir a seguir

- [Alertas do TradingView →](/docs/tradingview) — a fonte externa mais comum, passo a passo
- [Fluxo de Trading Automatizado →](/docs/automated-trading-workflow)
- [Simulação primeiro →](/docs/simulation)

## Próximo passo

> **[Alertas do TradingView →](/docs/tradingview)**
