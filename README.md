# NÃO PAGA ISSO

> Antes de pagar, pensa.

Aplicativo Android de decisões de consumo: um assistente guiado mais ferramentas de cálculo (preço por unidade, parcelamento, orçamento e comparação de ofertas). Funciona offline, sem conta, sem servidor e sem IA paga. Os dados ficam no aparelho.

- Escopo e regras: [`docs/DOSSIE.md`](docs/DOSSIE.md)
- Decisões aprovadas: [`docs/DECISIONS.md`](docs/DECISIONS.md)
- Etapa atual: [`docs/ROADMAP.md`](docs/ROADMAP.md)

## Tecnologias

| Camada    | Tecnologia                                        |
| --------- | ------------------------------------------------- |
| App       | React Native 0.88 + Expo SDK 58                   |
| Linguagem | TypeScript 6 (modo estrito)                       |
| Navegação | Expo Router (rotas por arquivos em `src/app/`)    |
| Testes    | Jest (`jest-expo`) + React Native Testing Library |
| Qualidade | ESLint (`eslint-config-expo`) + Prettier          |

Todas as dependências são gratuitas e open source (MIT/BSD). Nenhuma exige conta ou assinatura.

## Pré-requisitos

1. [Node.js LTS](https://nodejs.org/) (testado com 22.x)
2. [Git](https://git-scm.com/)
3. [Visual Studio Code](https://code.visualstudio.com/). Ao abrir o projeto, aceite instalar as extensões recomendadas (Expo Tools, ESLint, Prettier).
4. App **Expo Go** no celular Android (Google Play)

## Primeira execução

```bash
git clone https://github.com/LuanCostaS/nao-paga-isso.git
cd nao-paga-isso
npm install          # baixa as dependências listadas no package.json para node_modules/
npx expo start       # inicia o servidor de desenvolvimento (Metro) e mostra um QR Code
```

No celular, abra o **Expo Go**, toque em **Scan QR code** e leia o QR Code do terminal. O computador e o celular precisam estar na **mesma rede Wi-Fi**.

**Opcional (privacidade):** a ferramenta de linha de comando da Expo envia estatísticas anônimas de uso dos comandos. Para desligar:

- Windows (PowerShell): `$env:EXPO_NO_TELEMETRY=1` antes do `npx expo start` (ou defina como variável de ambiente do usuário)
- macOS/Linux: `export EXPO_NO_TELEMETRY=1`

## Scripts

| Comando             | O que faz                                                      |
| ------------------- | -------------------------------------------------------------- |
| `npm start`         | Inicia o servidor de desenvolvimento                           |
| `npm test`          | Roda os testes automatizados                                   |
| `npm run typecheck` | Verifica os tipos TypeScript sem gerar arquivos                |
| `npm run lint`      | Procura problemas no código (ESLint)                           |
| `npm run format`    | Formata o código (Prettier)                                    |
| `npm run check`     | Tipos + lint + formatação + testes (rode antes de cada commit) |

## Estrutura

```text
src/
  app/                  Telas (cada arquivo é uma rota)
    _layout.tsx         Pilha raiz
    (tabs)/             As 5 abas: index, assistant, tools, history, settings
    analysis/[id].tsx   Detalhe de uma análise salva
  components/           Componentes de interface reutilizáveis
  theme/                Cores, espaçamento e tipografia (tokens)
tests/                  Testes automatizados
docs/                   Dossiê, decisões e roadmap
```

As pastas `src/domain`, `src/features` e `src/database` (dossiê 6.4) serão criadas nas etapas que as utilizam.

## Problemas comuns

- **O QR Code não conecta:** confirme a mesma rede Wi-Fi e permita o Node.js no firewall do Windows (redes privadas).
- **"Project is incompatible with this version of Expo Go":** atualize o Expo Go na Play Store. O projeto usa o SDK 58.
