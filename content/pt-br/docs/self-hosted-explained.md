---
title: "Plataforma de Trading Self-Hosted Explicada — Por Que Rodar o WolfBot na Sua Máquina"
description: "O que é uma plataforma de trading unificada self-hosted? Benefícios de rodar o WolfBot Community na sua própria máquina: controle total, privacidade máxima, custo zero — em mercados de cripto e MT5."
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "getting-started"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/getting-started"
related_guides: ["/community-vs-cloud", "/getting-started", "/security"]
keywords: ["bot de trading self hosted", "bot de cripto self hosted", "o que é trading self hosted", "bot de trading no meu próprio servidor", "bot de trading local", "plataforma de trading unificada self hosted"]
sitemap_priority: 0.80
lang: "pt-BR"
translation_of: "docs/self-hosted-explained"
---

# Plataforma de Trading Self-Hosted Explicada

**Testado com WolfBot Community v0.1.0-p12-ghcr-rc20** · Última atualização: 2026-08-15

## O Que Significa "Self-Hosted"?

Uma plataforma de trading self-hosted roda no **seu** computador — seu PC Windows, máquina Linux, ou VPS. Você instala, você configura, você controla. Todos os seus mercados, todas as suas estratégias, todos os seus dados — sob o seu controle.

```text
Hospedado na nuvem:
Seu navegador → Servidor de outra pessoa → Exchange

Self-hosted (WolfBot Community):
Sua máquina → Exchange (diretamente)
```

---

## Por Que Optar pelo Self-Hosting?

### 1. Controle Total
- Sua máquina, suas regras
- Nenhum terceiro pode pausar suas operações
- Você decide quando atualizar
- Nenhum serviço pode ser descontinuado para você

### 2. Privacidade
- As chaves de API ficam na sua máquina
- Os dados de trading ficam locais
- Nenhum banco de dados na nuvem armazenando suas estratégias
- Nenhum terceiro vê suas posições — em nenhum mercado

### 3. Custo Zero
- O WolfBot Community é totalmente gratuito
- Sem taxas de assinatura
- Sem taxas por operação
- O único custo é sua própria energia elétrica/internet
- Uma plataforma cobrindo todos os seus mercados — cripto, futuros e MT5

### 4. Segurança
- Não-custodial: nenhum terceiro detém seus fundos
- Chaves de API somente-negociação: saques são impossíveis
- Seu firewall, suas próprias regras de segurança
- Nenhuma superfície de ataque de infraestrutura compartilhada

### 5. Personalização
- Acesso total a todos os recursos
- Rode estratégias personalizadas em todos os mercados conectados
- Integre com suas próprias ferramentas
- Adapte ao seu fluxo de trabalho

---

## O Que Você Precisa

| Requisito | Mínimo |
|---|---|
| Computador | Qualquer PC com Windows 10/11 ou Ubuntu |
| RAM | 4 GB |
| Disco | 2 GB livres |
| Internet | Conexão estável |
| Tempo ativo (opcional) | VPS para operação 24/7 |

---

## Self-Hosted vs Cloud: Comparação Rápida

| | Self-Hosted | Cloud |
|---|---|---|
| Custo | Gratuito | Assinatura paga |
| Controle | Total | Limitado |
| Privacidade | Máxima | Infraestrutura compartilhada |
| Configuração | Você instala | Pronto para usar |
| Manutenção | Você gerencia | O provedor gerencia |
| Tempo ativo | Sua responsabilidade | SLA do provedor |

[Comparação completa →](/community-vs-cloud)

---

## Dúvidas Comuns

### "Eu preciso de um servidor?"
Não. O WolfBot Community roda bem em um PC comum com Windows ou Linux. Uma [VPS só é necessária se você quiser trading 24/7](/docs/run-24-7-on-a-vps) sem manter seu PC ligado. Ele lida tão bem com exchanges de cripto quanto com corretoras MT5, em qualquer ambiente.

### "E se meu PC travar?"
Suas posições estão na exchange, não no seu PC. O WolfBot Community é não-custodial. Quando você reinicia, ele recupera suas posições automaticamente — sejam pares de cripto ou instrumentos MT5.

### "É seguro?"
Sim — em muitos aspectos, mais seguro do que soluções na nuvem. Suas chaves de API nunca saem da sua máquina. Você controla o acesso à rede. Chaves de API somente-negociação impedem saques mesmo que alguém obtenha acesso.

### "Posso usar mesmo não sendo técnico?"
Sim. O instalador do Windows é um assistente de instalação padrão — duplo clique, instalar, abrir. O Linux usa um pacote .deb padrão. Nenhuma experiência com programação ou Docker é necessária.

---

## O Self-Hosting É Certo para Você?

### ✅ O self-hosting é bom se você:
- Quer manter os custos em zero
- Prefere controlar sua própria infraestrutura
- Valoriza privacidade e propriedade dos dados
- Tem um computador que pode ficar ligado (ou uma VPS)
- Está confortável com configuração básica de computador

### ❌ O Cloud pode ser melhor se você:
- Não quer gerenciar nenhuma infraestrutura
- Precisa de tempo ativo 24/7 garantido
- Prefere suporte direto
- Quer uma experiência totalmente gerenciada

[Compare Community vs Cloud →](/community-vs-cloud)

---

## Primeiros Passos

1. [Baixe o WolfBot Community](/download)
2. [Instale no Windows](/install/windows) ou [Linux](/install/linux)
3. [Leia os Primeiros Passos](/getting-started)
4. Conecte uma conta Demo — risco zero, teste em todos os mercados

---

## Próximo passo

> **[Primeiros Passos →](/getting-started)**
