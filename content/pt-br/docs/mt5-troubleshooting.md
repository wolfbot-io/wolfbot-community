---
title: "Solução de Problemas do MT5 — Corrija Erros Comuns de Conexão e Configuração do MT5 no WolfBot Community"
description: "O MT5 não conecta, uma conta não pode ser provisionada, ou um símbolo não aparece? Aqui estão os erros concretos de conexão e configuração do MT5 no WolfBot Community e exatamente o que verificar em cada um."
tested_version: "0.1.0-p12-ghcr-rc19"
last_updated: "2026-08-18"
platforms: ["linux", "windows"]
category: "troubleshooting"
difficulty: "intermediate"
estimated_time: "10 minutes"
next_guide: "/brokers/mt5"
related_guides: ["/brokers/mt5", "/docs/mt5-without-windows-vps", "/docs/mt5-symbol-mapping", "/docs/risk-controls"]
keywords: [
  "solução de problemas mt5",
  "mt5 não conecta wolfbot",
  "mt5 provisioning failed",
  "erro de configuração da conta mt5",
  "solução de problemas metatrader 5",
  "erro mt5 wolfbot",
  "problema de configuração mt5 linux"
]
sitemap_priority: 0.75
lang: "pt-BR"
translation_of: "docs/mt5-troubleshooting"
---

# Solução de Problemas do MT5

**Testado com WolfBot Community v0.1.0-p12-ghcr-rc19** · Última atualização: 2026-08-18

## Para quem é este guia

- **Se você encontrou um erro ao conectar o MT5 ao WolfBot Community** — tente as soluções abaixo em ordem; cada uma aponta para logs que você mesmo pode ler em vez de adivinhar.
- **Se você é tecnicamente inclinado** — a seção de causa raiz diz exatamente qual componente registra o quê, para que você possa diagnosticar na sua própria máquina.

## Antes de começar

Duas verificações rápidas resolvem muitos problemas de conexão MT5 mais rápido do que qualquer outra coisa:

1. **Demo vs Live.** Certifique-se de estar conectando primeiro uma conta MT5 **Demo (testnet)**, exatamente como o guia de conexão faz. Uma conta Live pode falhar nas verificações de prontidão (e é mais arriscada para testar).
2. **A ponte (bridge) MT5 faz parte apenas da instalação Linux.** O MT5 roda dentro de um container no Linux (ativado com um comando) — ele não está empacotado da mesma forma em uma build Windows que ainda não foi lançada. Confirme que sua plataforma corresponde ao guia que você está seguindo.

## Erros comuns e o que verificar

### "Could not set up the MT5 account. Please try again." (`MT5_PROVISIONING_FAILED`)

Este é o principal erro relatado em instalações ao vivo. Ele acontece quando o **passo de provisionamento por conta** do terminal/bridge MT5 não consegue completar. Não altere suas credenciais de API primeiro — verifique, em ordem:

1. **Leia os logs do control/api** para a tentativa de provisionamento e a falha exata retornada. A mensagem registra `container_provisioned=false` quando os containers de terminal/bridge não puderam ser criados.
2. **Confirme que o runtime de containers está acessível.** Em uma instalação Community, um mount ausente do socket do Docker para o controle da bridge significa que os containers por conta nunca podem ser criados — essa é a causa estrutural por trás de muitos erros `MT5_PROVISIONING_FAILED`. Se seus logs mostram um erro de socket/permissão, esse é o gargalo.
3. **Confirme que a imagem da bridge está presente.** Se a imagem da bridge MT5 não foi baixada (pull), o provisionamento falha com um erro de imagem-não-encontrada mesmo que tudo mais esteja certo.
4. **Tente novamente depois de verificar os logs.** Esta não é uma situação de "apagar e readicionar a chave"; o estado está no passo de provisionamento, e o log vai nomear a falha real.

### A conta conecta mas não mostra símbolos

- Se sua estratégia referencia um símbolo que não tem mapeamento para o venue, o WolfBot o passa adiante sem alteração. Confirme a grafia exata do símbolo e consulte o [guia de mapeamento de símbolos](/docs/mt5-symbol-mapping).
- Se a lista de símbolos parece vazia, verifique o arquivo de símbolos selecionados da conta MT5 e confirme que o market watch no MT5 realmente tem os instrumentos carregados.

### Conexão cai ou erros de ordem logo após o início

- Verifique se a estratégia está configurada como **Simulação** primeiro, para que um erro de digitação ou um instrumento errado nunca abra uma posição real enquanto você ainda está testando.
- Verifique o log da bridge MT5 quanto ao estado do terminal; um terminal headless que ainda não fez login na corretora vai rejeitar ordens até que a sessão seja estabelecida.

### Ainda travado?

A forma mais rápida de obter uma resposta definitiva é reproduzir o erro exato com os logs na sua frente:

- **Logs do control/api** — provisionamento e prontidão da conta (o que realmente falha).
- **Logs da bridge MT5** — login do terminal e estado das ordens.

Ao abrir um tópico de suporte, cole a linha de erro específica (como `MT5_PROVISIONING_FAILED`) e o trecho de log correspondente — é isso que torna o problema resolvível em uma única passagem em vez de idas e vindas.

## Comece com o pé direito

- [Mapeamento de símbolos MT5 →](/docs/mt5-symbol-mapping) — veja exatamente como os símbolos se resolvem antes de abrir uma posição
- [Rode o MT5 sem um VPS Windows →](/docs/mt5-without-windows-vps)
- [Conectar o MT5 →](/brokers/mt5)

## Próximo passo

> **[Conectar o MT5 →](/brokers/mt5)**
