---
title: Introdução
sidebar_position: 1
---

# Introdução

O Ion é a API de pagamentos da Northwind Cloud: charges, métodos de pagamento salvos, assinaturas e
reembolsos em mais de 135 moedas, com armazenamento de cartões compatível com PCI-DSS Nível 1, para que
números de cartão nunca cheguem aos seus servidores.

## Modo de teste vs. modo real

Toda conta Ion tem chaves separadas de teste (`sk_test_`) e reais (`sk_live_`). O modo de teste usa as
mesmas regras de validação do modo real, mas nunca movimenta dinheiro de verdade — construa e teste toda
a sua integração, incluindo caminhos de falha, no modo de teste antes de trocar de chave.

## Principais recursos

- Mais de 135 moedas e métodos de pagamento locais
- Armazenamento de cartões compatível com PCI-DSS Nível 1
- Cobrança por uso e por assinatura, com dunning automático em falhas

## Antes de começar

Leia [Conceitos](./concepts.md) — em especial como os valores são representados como inteiros e como
funcionam as chaves de idempotência — antes de escrever código de criação de charges.
