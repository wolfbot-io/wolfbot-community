---
title: "Conectar a KuCoin ao WolfBot Community — Passo a Passo"
description: "Conecte a KuCoin ao WolfBot Community — crie chaves de API com passphrase e comece a operar automaticamente em Spot e Futuros."
tested_version: "0.1.0-p12-ghcr-rc17"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
brokers: ["kucoin"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "8 minutes"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls"]
keywords: ["bot de trading kucoin", "bot api kucoin", "conectar kucoin ao wolfbot"]
sitemap_priority: 0.80
lang: "pt-BR"
translation_of: "brokers/kucoin"
---

# Conectar a KuCoin ao WolfBot Community

**Testado com WolfBot Community v0.1.0-p12-ghcr-rc17** · Última atualização: 2026-08-15

**Status de suporte à KuCoin:** Estável · Demo ✅ · Live ✅ · Terminal ✅ · Estratégia ✅

## Para quem é este guia

Para quem está conectando uma conta KuCoin ao WolfBot Community.

## O que você precisa

- Uma conta KuCoin ([cadastre-se](https://www.kucoin.com/r/broker/WOLFBOTIO))
- WolfBot Community instalado
- 5 minutos

---

## Passo 1: Criar uma Chave de API da KuCoin

1. Faça login em [kucoin.com](https://www.kucoin.com/r/broker/WOLFBOTIO)
2. Vá em **Conta → Gerenciamento de API**
3. Clique em **Criar API**
4. Nomeie como "WolfBot Community"
5. Defina uma **Passphrase de API** (obrigatória na KuCoin — não esqueça!)
6. Permissões:
   - Trading Spot: ✅ LIGADO
   - Trading de Futuros: ✅ LIGADO (se for usar futuros)
   - Saque: ❌ DESLIGADO
   - Transferência: ❌ DESLIGADO
7. (Recomendado) Vincule um endereço IP
8. Complete a verificação → salve a Key, Secret e Passphrase

> ⚠️ A KuCoin exige uma passphrase. Guarde-a com segurança — você vai precisar dela no WolfBot.

---

## Passo 2: Adicionar no WolfBot

1. WolfBot → **Contas em Exchanges → Adicionar Conta**
2. Selecione **KuCoin**
3. Escolha o tipo de conta: **Spot** ou **Futuros**
4. Insira a API Key, Secret Key **e a Passphrase**
5. Clique em **Testar Conexão**

---

## Passo 3: Teste

1. Terminal Inteligente → selecione o par de trading
2. Comece com sua API key Demo → depois uma pequena ordem live
3. Verifique na KuCoin → cancele

---

## Notas Específicas da KuCoin

- **Passphrase obrigatória** — diferente da maioria das corretoras, a KuCoin exige uma passphrase de API
- **Demo:** Sandbox da KuCoin disponível para testes
- **Futuros:** Disponível
- **Variedade de tokens:** a KuCoin suporta muitos pares de altcoins

---

## Problemas Comuns

| Problema | Solução |
|---|---|
| "Passphrase incorrect" (passphrase incorreta) | Digite novamente; a passphrase diferencia maiúsculas de minúsculas |
| Chave de API inválida | Gere uma nova na KuCoin |
| Permissão negada | Habilite o Trading Spot |
| Tempo de conexão esgotado | Verifique o firewall |

---

## Próximo passo

> **[Configurar Controles de Risco →](/docs/risk-controls)**
