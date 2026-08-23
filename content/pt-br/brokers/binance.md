---
title: "Conectar a Binance ao WolfBot Community — Passo a Passo"
description: "Conecte a Binance ao WolfBot Community — crie chaves de API somente-negociação e comece a operar automaticamente em Spot e Futuros."
tested_version: "0.1.0-beta.2"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["binance"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/docs/risk-controls"
previous_guide: "/brokers/api-key-guide"
related_guides: ["/docs/simulation", "/docs/risk-controls", "/brokers/api-key-guide"]
keywords: ["bot de trading binance", "bot api binance", "conectar binance ao wolfbot", "trading unificado binance", "bot self hosted binance"]
sitemap_priority: 0.85
lang: "pt-BR"
translation_of: "brokers/binance"
---

# Conectar a Binance ao WolfBot Community

**Testado com WolfBot Community v0.1.0-beta.2** · Última atualização: 2026-08-15

**Status de suporte à Binance:** Estável · Demo ✅ · Live ✅ · Terminal ✅ · Estratégia ✅

## Para quem é este guia

Para quem deseja conectar uma conta Binance ao WolfBot Community para operar em vários mercados.

## O que você precisa

- Uma conta Binance ([cadastre-se](https://www.binance.com/register?ref=WOLFBOT))
- WolfBot Community instalado e em execução
- 5 minutos

---

## Passo 1: Criar uma Chave de API da Binance

### Para Trading Spot

1. Faça login em [binance.com](https://www.binance.com/register?ref=WOLFBOT)
2. Vá em **Perfil → Gerenciamento de API**
3. Clique em **Criar API**
4. Escolha o tipo de chave **Gerada pelo Sistema**
5. Nomeie como "WolfBot Community"
6. Complete a verificação de segurança
7. **Crítico — Editar restrições:**
   - Habilitar Trading Spot e Margem: ✅ LIGADO
   - Habilitar Saques: ❌ DESLIGADO
   - Habilitar Transferência Universal: ❌ DESLIGADO
8. (Recomendado) Restringir a IPs confiáveis
9. Clique em **Salvar**

> ⚠️ Nunca habilite Saques. O WolfBot só precisa de permissão de negociação.

---

## Passo 2: Adicionar a Conta Binance no WolfBot

1. Abra o WolfBot Community → **Contas em Exchanges → Adicionar Conta**
2. Selecione **Binance** → escolha **Spot** ou **Futuros**
3. Insira sua API Key e Secret Key
4. Clique em **Testar Conexão**

---

## Passo 3: Teste

1. Vá em **Terminal Inteligente** → selecione BTC/USDT
2. Comece primeiro com uma conta **Demo**
3. Depois mude para uma conta **Live** e faça uma pequena ordem limitada
4. Verifique na Binance se a ordem aparece → Cancele-a

---

## Notas Específicas da Binance

- **Limites de Taxa:** O WolfBot respeita automaticamente os limites de taxa da API da Binance (1200 de peso/min)
- **Restrição de IP:** Fortemente recomendada para chaves de produção
- **Tipos de Ordem:** Market, Limit, Stop-Limit e OCO totalmente suportados

---

## Problemas Comuns

| Problema | Solução |
|---|---|
| "API key invalid" (chave inválida) | Gere uma nova chave na Binance |
| "IP not whitelisted" (IP não autorizado) | Adicione seu IP ou desative a restrição |
| "Insufficient permissions" (permissões insuficientes) | Habilite o Trading Spot na Binance |
| "Connection timeout" (tempo de conexão esgotado) | Verifique o firewall/rede |

---

## Próximo passo

> **[Configurar Controles de Risco →](/docs/risk-controls)**
