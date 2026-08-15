---
title: "Canais de Release do WolfBot Community Explicados"
description: "Entenda os canais de release do WolfBot Community: Stable, Beta, RC, Alpha e Dev Preview. Escolha o canal certo."
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "release"
difficulty: "beginner"
estimated_time: "3 minutes"
next_guide: "/docs/updates"
related_guides: ["/docs/updates", "/download"]
keywords: ["canais de release wolfbot", "wolfbot stable beta", "wolfbot dev preview", "versão wolfbot", "versão bot de trading"]
sitemap_priority: 0.80
lang: "pt-BR"
translation_of: "releases/channels"
---

# Canais de Release Explicados

**Testado com WolfBot Community v0.1.0-p12-ghcr-rc8** · Última atualização: 2026-08-15

## Canais Disponíveis

| Canal | Status | Para Quem É | Auto-Atualização |
|---|---|---|---|
| **Stable** | Pronto para produção | Traders ao vivo | ✅ |
| **RC** (Candidato a Release) | Testes finais | Early adopters cautelosos | Opcional |
| **Beta** | Prévia de recursos | Testadores, entusiastas | ✅ |
| **Alpha** | Teste inicial de recursos | Testadores técnicos | Opcional |
| **Dev Preview** | Builds mais recentes | Desenvolvedores, feedback | Manual |

---

## Stable

Releases prontos para produção que passaram por todos os critérios de qualidade.

- **Frequência de atualização:** A cada 1–2 meses
- **Risco:** Mais baixo
- **Ideal para:** Trading ao vivo, uso em produção
- **Suporte:** Suporte completo da comunidade

> ✅ Recomendado para todo trading ao vivo.

---

## Beta

Builds com recursos completos, passando por testes mais amplos.

- **Frequência de atualização:** A cada 1–2 semanas
- **Risco:** Baixo — os recursos funcionam, mas podem ter casos extremos
- **Ideal para:** Testar novos recursos antes do Stable
- **Suporte:** Feedback da comunidade é bem-vindo

---

## Dev Preview

As builds de desenvolvimento mais recentes — os recursos mais novos, menos testados.

- **Frequência de atualização:** Várias vezes por semana
- **Risco:** Médio — os recursos podem estar incompletos
- **Ideal para:** Desenvolvedores, feedback antecipado, entusiastas
- **Suporte:** Melhor esforço possível

> ⚠️ O Dev Preview pode conter recursos incompletos. O modo padrão é Simulação.

---

## Como Funcionam os Canais

```text
Dev Preview (frequente)
    ↓
Alpha (teste de recursos)
    ↓
Beta (testes mais amplos)
    ↓
RC (candidato a release)
    ↓
Stable (produção)
```

Cada build é imutável — nunca modificamos um release já publicado. Se um bug for encontrado, uma nova versão é lançada.

---

## Status Atual

O WolfBot Community está atualmente em **Prévia Pública** (fase Beta).

```text
Stable: Ainda não lançado
Público atual: v0.1.0-p12-ghcr-rc8
```

Isso significa que:
- O software é funcional e instalável
- Os recursos estão sendo testados amplamente
- Mudanças incompatíveis podem ocorrer entre versões
- Recomenda-se usar uma conta Demo durante os testes

---

## Mudando de Canal

Não há um seletor de canal dentro do app — seu canal é simplesmente o release que você baixa e instala. Pegue uma build Beta ou Dev Preview nas [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases) em vez do link Stable na página de download quando quiser experimentar recursos mais novos; o instalador atualiza sua instalação existente no lugar, de qualquer forma.

Ao experimentar um canal mais experimental, recomenda-se testar primeiro em uma conta Demo.

---

## Numeração de Versão

```text
PRINCIPAL.MENOR.CORREÇÃO-canal.NÚMERO

0.1.0-p12-ghcr-rc8
│   │  │
│   │  └── Canal: beta, build 2
│   └───── Versão menor (releases de recursos)
└───────── Versão principal (0 = antes do stable)
```

As versões Stable usarão: `1.0.0`, `1.1.0`, etc.

---

## GitHub Releases

Todos os releases são publicados nas [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases):

- **Pré-release:** Dev Preview, Alpha, Beta, RC
- **Release completo:** Apenas Stable
- Cada release inclui: arquivos do instalador, checksums, notas de release

---

## Próximo passo

> **[Guia de Atualização →](/docs/updates)**
