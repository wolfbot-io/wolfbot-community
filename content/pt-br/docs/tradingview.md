---
title: "TradingView para um Bot de Trading Auto-Hospedado — Conecte Alertas do TradingView ao WolfBot Community"
description: "Envie um webhook de alerta do TradingView diretamente para o seu bot WolfBot Community auto-hospedado. Como funcionam a URL de webhook, a assinatura HMAC e os templates de alerta em camadas, e como testar com segurança primeiro na Simulação."
tested_version: "0.1.0-beta.4"
last_updated: "2026-08-18"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "intermediate"
estimated_time: "12 minutes"
next_guide: "/docs/automated-trading-workflow"
related_guides: ["/docs/automated-trading-workflow", "/docs/simulation", "/docs/risk-controls", "/docs/mt5-symbol-mapping"]
keywords: [
  "tradingview para bot de trading",
  "bot webhook tradingview",
  "tradingview para bot auto-hospedado",
  "automação de alertas tradingview",
  "conectar tradingview ao wolfbot",
  "webhook tradingview auto-hospedado"
]
sitemap_priority: 0.8
lang: "pt-BR"
translation_of: "docs/tradingview"
---

# TradingView para um Bot de Trading Auto-Hospedado

**Testado com WolfBot Community v0.1.0-beta.4** · Última atualização: 2026-08-18

## Para quem é este guia

- **Se você já escreve alertas no TradingView e quer que eles ajam no seu próprio bot, não em um caderno de anotações** — isto te dá a única URL e o único template de alerta que você precisa conectar, e uma forma segura de testar antes de tocar dinheiro real.
- **Se você é tecnicamente inclinado** — você verá exatamente como o webhook é autenticado (HMAC), como o payload do alerta é estruturado, e como os símbolos são normalizados para sua corretora antes de qualquer ordem existir.

## Como o TradingView se conecta ao WolfBot Community

Os alertas do TradingView podem disparar um **webhook HTTP**. O WolfBot Community expõe um endpoint de webhook para esse alerta, verifica que ele realmente veio de você, e o transforma em um sinal de estratégia que passa pelo mesmo pipeline de risco e execução que qualquer outra entrada.

O fluxo:

```text
Alerta do TradingView
   → HTTP POST para sua URL de webhook
   → WolfBot verifica a assinatura HMAC
   → analisa o alerta (símbolo, direção, de/para)
   → normaliza o símbolo para sua corretora de destino
   → enfileira uma entrada através da camada compartilhada de risco/execução
```

## 1. Obtenha sua URL de webhook e o segredo

Cada fonte do TradingView recebe um endpoint dedicado. O formato do caminho é:

```text
/api/v1/strategy-webhooks/{source_id}
```

Você faz o URL-encode disso contra o seu próprio host do WolfBot Community (o mesmo host em que você faz login), e o combina com um segredo de webhook por fonte. Esse segredo é o que o WolfBot usa para verificar que cada requisição é genuinamente sua.

## 2. Use um template de alerta (três camadas)

O WolfBot vem com templates de alerta em três camadas, então você chama apenas com o que cada situação precisa:

- **`signal_only`** — apenas direção e símbolo; sem detalhes de risco ou de conta. O WolfBot decide o dimensionamento e a proteção.
- **`signal_and_risk`** — adiciona campos de risco como notional solicitado e take-profit, mas sem seleção de conta.
- **`full_entry_request`** — o payload completo incluindo o `account_id` de destino, para quando você quer que um alerta conduza uma conta específica.

Cada camada carrega seus campos de identidade — `tenant_id`, `source_id`, instância/versão da estratégia, e um `definition_hash` — para que o sinal seja sempre atribuído exatamente à estratégia que você pretendia disparar.

## 3. A assinatura HMAC

Para impedir que qualquer outra pessoa dispare o seu bot, o webhook é assinado. A requisição HTTP que você envia do TradingView inclui uma assinatura calculada sobre o corpo com o seu segredo de webhook (o exemplo curl pronto já vem com essa receita HMAC correta). O WolfBot recalcula do lado do servidor e só aceita uma requisição cuja assinatura corresponda. Uma assinatura incompatível é simplesmente rejeitada — nada é executado.

## 4. Os símbolos são normalizados para você

O `symbol` no seu alerta pode estar na forma MT5/USD (`XAGUSD`) enquanto o destino da sua ordem é a Binance (`XAGUSDT`). O WolfBot passa o símbolo do alerta pelo mesmo mapeador de símbolos consciente da corretora usado em todo o resto, então o alerta cai no par correto. Se não houver mapeamento, o símbolo é passado adiante sem alteração em vez de ser reescrito silenciosamente. Veja o [guia de mapeamento de símbolos](/docs/mt5-symbol-mapping) para a tabela completa.

## 5. Teste na Simulação antes de qualquer coisa real

Antes de apontar o alerta para uma estratégia Live:

1. Crie uma estratégia em uma conta de **Simulação** e dê a ela a URL de webhook + um alerta de teste.
2. Dispare um alerta de teste do TradingView (ou use o exemplo curl) e observe o sinal chegar no WolfBot.
3. Confirme que o símbolo se resolveu para o par que você esperava e que os campos da camada parecem corretos.
4. Só então mude a estratégia para Live.

## Notas de segurança

- Mantenha seu segredo de webhook privado — é a única coisa que permite que uma requisição seja confiada. Trate-o como uma chave de API.
- Rode sua instância Community no seu próprio host/porta, não exponha a rota do webhook à internet aberta sem a assinatura verificada.
- Comece com `signal_only`, adicione campos de risco/take-profit apenas depois de ver um ciclo completo funcionar na Simulação.

## Para onde ir a seguir

- [Fluxo de Trabalho de Trading Automatizado →](/docs/automated-trading-workflow) — o loop maior no qual seu alerta se encaixa
- [Simulação primeiro →](/docs/simulation)
- [Controles de Risco →](/docs/risk-controls)

## Próximo passo

> **[Fluxo de Trabalho de Trading Automatizado →](/docs/automated-trading-workflow)**
