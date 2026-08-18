---
title: "Como Verificar um Bot de Trading Baixado — Confira o Que Você Está Prestes a Instalar"
description: "Antes de instalar qualquer bot de trading, verifique a fonte e o arquivo. Veja como conferir um download contra o release oficial, o digest e a assinatura, para nunca rodar software de trading não verificado."
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-18"
platforms: ["windows", "linux"]
category: "security"
difficulty: "beginner"
estimated_time: "7 minutes"
next_guide: "/security"
related_guides: ["/security", "/faq", "/about", "/download"]
keywords: [
  "verificar bot de trading baixado",
  "verificar checksum do bot de trading",
  "autenticidade de software de trading",
  "verificar sha256 do download do wolfbot",
  "instalação segura de bot de trading",
  "verificar download do bot no linux"
]
sitemap_priority: 0.7
lang: "pt-BR"
translation_of: "docs/how-to-verify-a-downloaded-trading-bot"
---

# Como Verificar um Bot de Trading Baixado

**Testado com WolfBot Community v0.1.0-p12-ghcr-rc8** · Última atualização: 2026-08-18

## Para quem é este guia

- **Se você baixou um bot de trading (ou está prestes a baixar) e quer ter certeza de que é o original** — este guia mostra as duas verificações que levam dois minutos.
- **Se você é tecnicamente inclinado** — você verá como confirmar de forma independente um binário usando o digest e a assinatura que os mantenedores publicam.

## Por que verificar

Software de trading toca suas exchanges e seu dinheiro. Qualquer pessoa pode publicar um binário chamado "WolfBot" — o hábito mais seguro é confirmar que um arquivo realmente é o que seu nome afirma **antes** de você executá-lo. Dois sinais tornam isso verificável:

1. **De onde ele veio** — a fonte oficial do release.
2. **O que o arquivo realmente é** — digest e assinatura correspondentes.

## A verificação de dois minutos

**1. Use a fonte oficial.**

Baixe apenas do repositório oficial do GitHub (`github.com/wolfbot-io/wolfbot-community`) ou de `community.wolfbot.io`. Um arquivo oferecido em outro lugar — um blog qualquer, um site espelho, uma DM — é, por definição, não verificado.

**2. Compare o checksum.**

O WolfBot publica o **digest SHA-256** de cada instalador (você o verá na página de download e nas notas de release). Depois de baixar:

```bash
# Linux/macOS
sha256sum WolfBot-Setup-linux-amd64.deb
# Windows (PowerShell)
Get-FileHash .\WolfBot-Setup.exe -Algorithm SHA256
```

A saída deve corresponder exatamente ao digest publicado. Uma divergência significa que o arquivo não é o original — não o instale.

**3. (Técnico) verifique a assinatura.**

Releases oficiais são assinados criptograficamente. Verificar a assinatura contra a chave pública do projeto confirma quem o construiu, independentemente do arquivo com hash.

## Sinais de alerta

- O digest **não** corresponde ao que foi publicado.
- O arquivo veio de uma fonte que não é o repositório oficial / site da comunidade.
- A página de onde você baixou não é o domínio real wolfbot.io/github.
- Você é solicitado a executar um instalador como administrador vindo de uma fonte não verificada.

Pare em qualquer um desses casos e baixe do release oficial em vez disso.

## Por que o WolfBot Community publica isso

Transparência faz parte do self-hosting seguro. Como você sempre pode verificar o que instala, nunca precisa confiar apenas no nome de uma página de download.

## Para onde ir a seguir

- [Segurança →](/security)
- [Sobre e fontes oficiais →](/about)
- [Baixe o release oficial →](/download)

## Próximo passo

> **[Leia a página de Segurança →](/security)**
