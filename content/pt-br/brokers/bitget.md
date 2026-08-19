---
title: "Conectar a Bitget ao WolfBot Community — Passo a Passo"
description: "Conecte a Bitget ao WolfBot Community — crie chaves de API somente-negociação e comece a operar automaticamente em Spot e Futuros."
tested_version: "0.1.0-p12-ghcr-rc17"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["bitget"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "8 minutes"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls"]
keywords: ["bot de trading bitget", "bot api bitget", "conectar bitget ao wolfbot"]
sitemap_priority: 0.80
lang: "pt-BR"
translation_of: "brokers/bitget"
---

# Conectar a Bitget ao WolfBot Community

**Testado com WolfBot Community v0.1.0-p12-ghcr-rc17** · Última atualização: 2026-08-15

**Status de suporte à Bitget:** Estável · Demo ✅ · Live ✅ · Terminal ✅ · Estratégia ✅

## Para quem é este guia

Para quem está conectando uma conta Bitget ao WolfBot Community.

## O que você precisa

- Uma conta Bitget ([cadastre-se](https://partner.bitget.com/bg/WOLFBOT))
- WolfBot Community instalado
- 5 minutos

---

## Passo 1: Criar uma Chave de API da Bitget

1. Faça login em [bitget.com](https://partner.bitget.com/bg/WOLFBOT)
2. Vá em **Conta → Gerenciamento de API**
3. Clique em **Criar Chave de API**
4. Nomeie como "WolfBot Community"
5. Defina as permissões:
   - Trade: ✅ LIGADO
   - Saque: ❌ DESLIGADO
   - Transferência: ❌ DESLIGADO
6. (Recomendado) Vincule um endereço IP
7. Complete a verificação → salve a Key + Secret

---

## Passo 2: Adicionar no WolfBot

1. WolfBot → **Contas em Exchanges → Adicionar Conta**
2. Selecione **Bitget**
3. Escolha **Spot** ou **Futuros**
4. Insira a API Key + Secret → **Testar Conexão**

---

## Passo 3: Teste

1. Terminal Inteligente → selecione o par de trading
2. Comece com sua API key Demo → depois uma pequena ordem limitada live
3. Verifique na Bitget → cancele

---

## Notas Específicas da Bitget

- **Trading Demo:** testnet da Bitget disponível para testes
- **Futuros:** Disponível
- **Copy trading:** O WolfBot não interage com o recurso de copy trading da Bitget

---

## Problemas Comuns

| Problema | Solução |
|---|---|
| Chave de API inválida | Gere uma nova na Bitget |
| Permissão negada | Habilite a permissão Trade |
| Erro de restrição de IP | Adicione seu IP ou desative a restrição |

---

## Próximo passo

> **[Configurar Controles de Risco →](/docs/risk-controls)**
