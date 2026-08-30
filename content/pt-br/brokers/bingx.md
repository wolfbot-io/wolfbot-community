---
title: "Conectar a BingX ao WolfBot Community — Passo a Passo"
description: "Conecte a BingX ao WolfBot Community — crie chaves de API somente-negociação e comece a operar automaticamente em Futuros Padrão e Perpétuos."
tested_version: "0.1.0-beta.4"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["bingx"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "8 minutes"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls", "/brokers/bybit"]
keywords: ["bot de trading bingx", "bot api bingx", "conectar bingx ao wolfbot"]
sitemap_priority: 0.80
lang: "pt-BR"
translation_of: "brokers/bingx"
---

# Conectar a BingX ao WolfBot Community

**Testado com WolfBot Community v0.1.0-beta.4** · Última atualização: 2026-08-15

**Status de suporte à BingX:** Estável · Demo ✅ · Live ✅ · Terminal ✅ · Estratégia ✅

## Para quem é este guia

Para quem deseja conectar uma conta BingX ao WolfBot Community para trading automatizado em Futuros Padrão ou Perpétuos.

## O que você precisa

- Uma conta BingX ([cadastre-se](https://bingxdao.com/partner/Wolfbot/))
- WolfBot Community instalado
- 5 minutos

---

## Passo 1: Criar uma Chave de API da BingX

1. Faça login em [bingx.com](https://bingxdao.com/partner/Wolfbot/)
2. Vá em **Gerenciamento de API** (em perfil/configurações)
3. Clique em **Criar Chave de API**
4. Nomeie como "WolfBot Community"
5. Defina as permissões:
   - Trading Padrão/Contratos: ✅ LIGADO
   - Saque: ❌ DESLIGADO
6. (Recomendado) Vincule um endereço IP
7. Complete a verificação → salve a Key + Secret

> ⚠️ Nunca habilite o Saque — o WolfBot só precisa de negociação.

---

## Passo 2: Adicionar no WolfBot

1. WolfBot → **Contas em Exchanges → Adicionar Conta**
2. Selecione **BingX**
3. Escolha **Padrão** ou **Futuros Perpétuos**
4. Insira a API Key + Secret → **Testar Conexão**

---

## Passo 3: Teste

1. Terminal Inteligente → selecione o par de trading (ex.: BTC/USDT)
2. Comece com sua API key Demo → depois uma pequena ordem limitada live
3. Verifique na BingX → cancele a ordem de teste

---

## Notas Específicas da BingX

- **Trading Demo:** Disponível no app em Derivativos → Futuros Perpétuos → Demo Trading (usa fundos virtuais) — chaves de API separadas
- **Futuros:** Use o tipo de conta Futuros Perpétuos no WolfBot
- **Copy trading:** O WolfBot não interage com o copy trading da BingX

---

## Problemas Comuns

| Problema | Solução |
|---|---|
| Chave de API inválida | Gere uma nova na BingX |
| Erro de permissão | Habilite o Trading Padrão/Contratos |
| Tempo de conexão esgotado | Verifique o firewall; a BingX pode estar restrita na sua região |

---

## Próximo passo

> **[Configurar Controles de Risco →](/docs/risk-controls)**
