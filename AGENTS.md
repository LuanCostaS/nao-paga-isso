# Instruções para agentes de código

Projeto **NÃO PAGA ISSO**: app Android, Expo SDK 58 + TypeScript. Antes de qualquer alteração, leia:

1. `docs/DOSSIE.md`: fonte de verdade (escopo, regras de cálculo, proibições).
2. `docs/DECISIONS.md`: decisões aprovadas depois do dossiê.
3. `docs/ROADMAP.md`: etapa atual. Implemente somente a etapa atual e pare para validação do proprietário.

## Regras inegociáveis

- Orçamento operacional zero: nenhuma API paga, IA por API, serviço por token, backend, Supabase/Firebase, analytics ou serviço de nuvem.
- Funções centrais funcionam offline. Dados ficam no aparelho (SQLite local).
- Builds de produção são locais (Android SDK). **Não usar EAS Build/Submit/Update** sem autorização expressa.
- Cálculos em funções puras, tipadas e testadas; dinheiro em centavos inteiros.
- Nenhuma dependência nova sem explicar finalidade, licença, manutenção e custo. Instale com `npx expo install <pacote>` para obter versões compatíveis com o SDK.
- Não inventar preços, lojas, ofertas ou características.
- Explicar comandos importantes antes de executá-los; nada destrutivo sem autorização.

## Convenções

- Rotas apenas em `src/app/`; regras de negócio, banco e tema fora dela.
- Cores, espaçamentos e tipografia sempre via `@/theme`, nunca valores soltos nas telas.
- Expo muda a cada SDK: consulte `https://docs.expo.dev/versions/v58.0.0/` em vez da memória.
- Antes de concluir uma tarefa: `npm run check`.
