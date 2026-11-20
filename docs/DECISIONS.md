# Registro de decisões

Complementa a seção 13 do [Dossiê Mestre](./DOSSIE.md). Toda mudança de escopo, tecnologia ou regra de negócio é registrada aqui, com data e estado.

Estados: **Aprovado** (pelo proprietário) · **Técnica** (decisão de implementação sem impacto de produto; pode ser revista) · **Pendente** (aguarda decisão).

## Decisões herdadas do dossiê (v1.0)

| Decisão                                         | Estado                                         |
| ----------------------------------------------- | ---------------------------------------------- |
| Nome de trabalho NÃO PAGA ISSO                  | Aprovado (verificar marca antes do lançamento) |
| Android primeiro                                | Aprovado                                       |
| Assistente + ferramentas                        | Aprovado                                       |
| React Native + Expo + TypeScript                | Aprovado                                       |
| SQLite local, sem backend na V1                 | Aprovado                                       |
| Sem API de IA paga, sem serviço pago recorrente | Obrigatório                                    |
| Premium R$ 4,99                                 | Hipótese — não implementar                     |

## Decisões tomadas durante o desenvolvimento

### D-001 — Repositório próprio · 20/11/2026 · Aprovado

O projeto vive no repositório independente `nao-paga-isso`, separado de qualquer outro projeto.

### D-002 — Histórico: renomear e reabrir · 20/11/2026 · Aprovado

MVP-07 ("salva, abre, renomeia e exclui") prevalece. "Editar" uma análise significa reabri-la na ferramenta para recalcular; o registro salvo pode ser renomeado.

### D-003 — Somente tabelas `analyses` e `settings` na V1 · 20/11/2026 · Aprovado

As tabelas `products` e `price_entries` (dossiê 6.5) não têm tela no MVP. Serão criadas por migration futura, quando houver funcionalidade que as use.

### D-004 — Moeda exclusiva BRL · 20/11/2026 · Aprovado

A V1 trabalha apenas com real brasileiro (R$ 1.234,56). Não haverá seletor de moeda.

### D-005 — Validadores próprios; Zod reavaliado na Etapa 5 · 20/11/2026 · Aprovado

Validação de entradas com funções TypeScript próprias, sem dependência extra. A adoção do Zod será avaliada na Etapa 5 (validação do arquivo de backup).

### D-006 — Expo SDK 58 e template oficial · 20/11/2026 · Técnica

Projeto criado com `create-expo-app@5.0.0 --template default@sdk-58` (Expo 58, React Native 0.88, React 19.3, TypeScript 6). É a versão estável atual e a única aceita pelo Expo Go da Play Store.

### D-007 — Rotas em `src/app/` · 20/11/2026 · Técnica

O dossiê (6.4) mostra `app/` na raiz. O template do SDK 58 adota `src/app/`, mantendo todo o código-fonte dentro de `src/`. A separação do dossiê é preservada: `src/app/` contém somente telas; regras de negócio, banco e tema ficam nas demais pastas de `src/`.

### D-008 — Barra de abas nativa · 20/11/2026 · Técnica

Navegação com `NativeTabs` do Expo Router: barra inferior nativa do Android (Material 3), ícones Material Symbols já embutidos, sem biblioteca de ícones adicional. Botão voltar do Android retorna ao Início antes de sair do app.

### D-009 — Dependências do template removidas · 20/11/2026 · Técnica

Removidos por não serem usados: `@expo/ui`, `expo-glass-effect`, `expo-device`, `expo-web-browser`, `expo-image`. Removidos também as telas, imagens e o script de exemplo do template e o arquivo `LICENSE` do template (copyright da Expo, não se aplica ao app — ver D-P02).

### D-010 — Telemetria da Expo CLI desligada · 20/11/2026 · Técnica

Recomenda-se `EXPO_NO_TELEMETRY=1` no computador de desenvolvimento (ver README). Não afeta o app nem os usuários.

### D-011 — Aparência clara na Etapa 0 · 20/11/2026 · Técnica

`userInterfaceStyle: "light"` até a Etapa 1 definir se haverá tema escuro.

## Pendentes

- **D-P01 — Identificador Android (`android.package`)** — ex.: `com.<seu-nome>.naopagaisso`. É permanente na Google Play; decidir antes da Etapa 7.
- **D-P02 — Licença do código** — privado/todos os direitos reservados ou licença aberta.
- **D-P03 — Tema escuro** — decidir na Etapa 1.
- **D-P04 — Fonte tipográfica própria** — decidir na Etapa 1 (fonte do sistema por enquanto).
