# Roadmap

Referência: [Dossiê Mestre, seção 12](./DOSSIE.md). Uma etapa só avança após validação do proprietário.

**Etapa atual: 0 — Fundação (aguardando teste em Android real)**

| Etapa                 | Entrega                                                     | Concluída quando          | Status                                   |
| --------------------- | ----------------------------------------------------------- | ------------------------- | ---------------------------------------- |
| 0 — Fundação          | Node, Git, Expo, estrutura, TypeScript, navegação           | App abre no Android       | 🟡 Implementada; falta teste no aparelho |
| 1 — Identidade visual | Cores, tipografia, componentes, navegação, telas iniciais   | Telas consistentes        | ⚪ Pendente                              |
| 2 — Ferramentas       | Preço unitário, parcelamento, orçamento, comparação         | Testes passam             | ⚪ Pendente                              |
| 3 — Assistente        | Intenções, parser local, formulários, respostas             | Fluxos funcionam offline  | ⚪ Pendente                              |
| 4 — Persistência      | SQLite, migrations, salvar/abrir/renomear/excluir           | Dados persistem           | ⚪ Pendente                              |
| 5 — Privacidade       | Exportar/importar/apagar, textos                            | Usuário controla os dados | ⚪ Pendente                              |
| 6 — Qualidade         | Testes automatizados, acessibilidade, Android real, offline | Critérios cumpridos       | ⚪ Pendente                              |
| 7 — Publicação        | Build local, AAB, ícone, splash, materiais da loja          | Pronto para envio         | ⚪ Pendente                              |

## Etapa 0 — checklist

- [x] Node.js, npm e Git verificados
- [x] Projeto Expo SDK 58 criado (TypeScript estrito, Expo Router)
- [x] Exemplos do template removidos
- [x] Navegação: 5 abas + rota `analysis/[id]`
- [x] Tema base (tokens de cor, espaçamento, tipografia)
- [x] Jest + Testing Library com testes-sentinela
- [x] ESLint + Prettier
- [x] Documentação (README, DOSSIE, DECISIONS, ROADMAP, CHANGELOG)
- [x] TypeScript, lint, testes e bundle Android sem erros
- [ ] **Abrir no Android real com Expo Go** (proprietário)
- [ ] **Alterar um texto e ver a atualização no aparelho** (proprietário)
- [ ] `npx expo-doctor` com internet no computador do proprietário
