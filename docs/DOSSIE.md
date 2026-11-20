<!-- Versão Markdown do arquivo "Dossiê Mestre — NÃO PAGA ISSO" (.docx), v1.0, 20/11/2026.
     Fonte de verdade do projeto. Alterações aprovadas ficam registradas em docs/DECISIONS.md. -->

# NÃO PAGA ISSO — Dossiê Mestre do Produto

Visão de produto • UX • arquitetura • regras de negócio • desenvolvimento • testes • publicação

> **MISSÃO**
>
> Ajudar pessoas a tomar decisões de consumo melhores — antes de gastar — combinando um assistente conversacional com ferramentas práticas, cálculos transparentes e recomendações explicáveis.

Versão 1.0 \| 20 de novembro de 2026 \| Android primeiro

# 0. Como usar este dossiê

Este documento é a fonte central de verdade do projeto. Deve ser consultado pelo fundador e pelo agente de programação (Claude Code, Codex ou equivalente) antes de implementar mudanças.

- Não desenvolver funcionalidades fora do escopo sem registrar a decisão.

- Não substituir regras determinísticas por IA generativa ou APIs pagas.

- Não adicionar serviços pagos, analytics externos, anúncios, login obrigatório ou backend sem aprovação expressa.

- Quando houver conflito entre uma sugestão do agente e este documento, preservar este documento e pedir confirmação.

- Atualizar a seção de decisões sempre que escopo, tecnologia ou regra de negócio mudar.

> **REGRA DE OURO**
>
> O aplicativo deve continuar funcionando sem internet, sem conta, sem servidor e sem chamadas a modelos de IA. A conexão só será necessária para instalar/atualizar o app, abrir links externos e, futuramente, validar uma assinatura da loja.

## 0.1 Estado atual do projeto

| **Item**               | **Decisão**                                                             |
| ---------------------- | ----------------------------------------------------------------------- |
| Nome de trabalho       | NÃO PAGA ISSO                                                           |
| Plataforma inicial     | Android                                                                 |
| Experiência            | Assistente guiado + ferramentas de cálculo                              |
| Público inicial        | Pessoas que querem economizar e tomar decisões de compra conscientes    |
| Dados                  | SQLite local no aparelho                                                |
| IA generativa          | Não usar na primeira versão; nenhuma API de tokens                      |
| Monetização            | Validar utilidade primeiro; Premium via Google Play Billing futuramente |
| Custo operacional-alvo | R\$ 0/mês, sem serviços pagos recorrentes                               |
| Editor                 | Visual Studio Code                                                      |

## 0.2 O que este documento não promete

Não existe garantia de ineditismo mundial, aprovação da loja ou custo absolutamente zero em todas as circunstâncias. A proposta é reduzir custos recorrentes a zero no desenho inicial, usar ferramentas gratuitas e verificar preços, limites e políticas antes de cada publicação.

# 1. Visão do produto

## 1.1 Proposta de valor

O NÃO PAGA ISSO é um assistente de decisões de consumo. O usuário pode conversar sobre uma compra ou abrir ferramentas específicas para calcular, comparar e entender o custo real de uma decisão.

Não é banco, marketplace, comparador de preços em tempo real ou consultor financeiro. É uma ferramenta pessoal para avaliar decisões de consumo com informações fornecidas pelo usuário.

## 1.2 Princípios

- Economia comprovável: mostrar conta, dados usados e hipóteses.

- Sem promessas falsas: nunca afirmar que encontrou o menor preço do mercado sem fonte atual verificável.

- Sem julgamento: orientar sem constranger.

- Transparência: separar fatos informados, cálculos matemáticos e estimativas.

- Offline-first: funções centrais disponíveis sem internet.

- Privacidade por padrão: dados permanecem no aparelho.

- Simplicidade: cada análise termina em conclusão clara e próxima ação.

- Acessibilidade: contraste, fontes legíveis e áreas de toque adequadas.

## 1.3 Público e situações de uso

| **Situação**         | **Necessidade**                    | **Resposta do app**                                    |
| -------------------- | ---------------------------------- | ------------------------------------------------------ |
| Comparar embalagens  | Qual custa menos por kg/L/unidade? | Calcula preço unitário e diferença percentual          |
| Avaliar parcelamento | Qual o custo total e mensal?       | Calcula parcelas, total e juros informados             |
| Planejar compra      | Cabe no orçamento informado?       | Calcula comprometimento e saldo estimado               |
| Comparar opções      | Qual opção é mais econômica?       | Compara critérios preenchidos                          |
| Registrar compra     | Quero lembrar quanto paguei        | Histórico local e comparação futura com dados próprios |
| Dúvida aberta        | Quero ajuda para decidir           | Assistente transforma pergunta em dados e cálculos     |

## 1.4 Diferencial

O diferencial não é 'IA que sabe tudo'. É o fluxo unificado: o usuário conversa, o app identifica a operação necessária, pede apenas os dados que faltam, executa cálculo determinístico e explica o resultado.

> **EXEMPLO**
>
> 900 g por R$ 18 = R$ 20/kg. 1,5 kg por R$ 27 = R$ 18/kg. A segunda opção custa 10% menos por kg. O app também alerta que embalagem maior só é economia se a pessoa realmente consumir a quantidade.

# 2. Escopo funcional

## 2.1 MVP obrigatório

| **ID** | **Funcionalidade**           | **Critério de conclusão**                                   |
| ------ | ---------------------------- | ----------------------------------------------------------- |
| MVP-01 | Tela inicial e navegação     | Acesso a Assistente, Ferramentas, Histórico e Configurações |
| MVP-02 | Assistente guiado sem IA     | Fluxos suportados pedem dados e não inventam respostas      |
| MVP-03 | Comparador de preço unitário | Compara peso, volume, unidades e preço                      |
| MVP-04 | Calculadora de parcelamento  | Calcula parcela, total e custo adicional informado          |
| MVP-05 | Calculadora de orçamento     | Compara compra com orçamento informado                      |
| MVP-06 | Comparador de ofertas        | Compara valores totais e critérios preenchidos              |
| MVP-07 | Histórico local              | Salva, abre, renomeia e exclui análises                     |
| MVP-08 | Exportação                   | Exporta histórico em CSV ou JSON                            |
| MVP-09 | Privacidade                  | Explica armazenamento local e permite apagar dados          |
| MVP-10 | Validação e erros            | Mensagens claras para dados ausentes ou inválidos           |

## 2.2 Fora do MVP

- IA generativa, chatbot online ou API com cobrança por token.

- Busca automática de preços em lojas ou supermercados.

- Scraping de sites ou coleta automática de preços.

- OCR de nota fiscal/etiqueta (fase posterior).

- Login, sincronização em nuvem, conta ou backup em servidor.

- Integração bancária, Open Finance, cartões ou extratos.

- Publicidade, afiliados, marketplace ou ofertas patrocinadas.

- Assinatura paga na primeira versão de validação.

- Push, geolocalização ou localização em segundo plano.

## 2.3 Fases posteriores

| **Fase** | **Recurso possível**             | **Condição**                          |
| -------- | -------------------------------- | ------------------------------------- |
| V1.1     | OCR local de etiquetas/recibos   | MVP estável e demanda comprovada      |
| V1.2     | Favoritos e metas de economia    | Feedback indicar valor                |
| V1.3     | Premium via Google Play Billing  | Disposição a pagar demonstrada        |
| V1.4     | Links de afiliados identificados | Parcerias reais e transparência       |
| V2       | Sincronização/backup opcional    | Necessidade real e orçamento aprovado |

# 3. UX e estrutura de telas

## 3.1 Navegação

| **Aba**       | **Objetivo**       | **Conteúdo**                                                                       |
| ------------- | ------------------ | ---------------------------------------------------------------------------------- |
| Início        | Acesso rápido      | Saudação, campo 'O que você está pensando em comprar?', atalhos e últimas análises |
| Assistente    | Conduzir decisão   | Conversa guiada, perguntas, resumo e veredito                                      |
| Ferramentas   | Cálculos diretos   | Preço por unidade, parcelamento, orçamento e comparação                            |
| Histórico     | Recuperar análises | Lista por data, tipo, resultado e pesquisa local                                   |
| Configurações | Controle           | Moeda, orçamento opcional, privacidade, exportar/apagar dados                      |

## 3.2 Direção visual

- Personalidade: direta, inteligente, acolhedora e levemente irreverente; nunca agressiva.

- Paleta sugerida: azul-marinho para confiança; verde para economia calculada; âmbar para atenção; vermelho apenas para erro/custo maior.

- Evitar excesso de cards, gráficos e gradientes. Priorizar hierarquia tipográfica e espaço em branco.

- Frases possíveis: 'Antes de pagar, pensa.' e 'Seu dinheiro merece uma segunda opinião.'

- Não usar vergonha, medo ou urgência artificial.

## 3.3 Tela inicial

1.  Cabeçalho com marca e saudação discreta.

2.  Campo principal: 'O que você está pensando em comprar?'

3.  Ação principal: 'Analisar compra'.

4.  Atalhos: Comparar preços, Parcelamento, Cabe no orçamento?, Comparar opções.

5.  Bloco 'Suas últimas análises', com estado vazio no primeiro uso.

6.  Navegação principal no rodapé.

## 3.4 Estrutura de resposta do assistente

7.  Entendimento: repetir em uma frase o que foi entendido.

8.  Dados usados: preço, quantidade, prazo, juros ou orçamento.

9.  O que falta: pedir somente campos indispensáveis.

10. Cálculo: mostrar fórmula ou memória simplificada.

11. Veredito: conclusão objetiva ou aviso de dados insuficientes.

12. Próxima ação: salvar, editar ou comparar outra opção.

## 3.5 Estados obrigatórios

- Primeiro uso sem dados.

- Campo inválido ou vazio.

- Resultado inconclusivo.

- Erro inesperado com opção de tentar novamente.

- Histórico vazio.

- Confirmação antes de apagar dados.

- Aviso de exportação concluída.

# 4. Motor de análise e regras de negócio

O motor deve ser determinístico, testável e separado da interface. A mesma entrada deve produzir sempre a mesma saída. Não usar IA para fazer contas.

## 4.1 Preço por unidade

Fórmula: preço unitário = preço total ÷ quantidade normalizada. Comparar somente unidades compatíveis. Converter g para kg e ml para L.

```text
preco_por_kg = preco / (quantidade_em_gramas / 1000)
preco_por_litro = preco / (quantidade_em_ml / 1000)
preco_por_unidade = preco / numero_de_unidades
```

Exemplo: 900 g por R\$ 18 = R\$ 20/kg. 1.500 g por R\$ 27 = R\$ 18/kg. A segunda opção custa 10% menos por kg.

Mostrar também o desembolso total. Embalagem maior pode ter menor preço unitário e ainda não ser melhor para quem não consumirá tudo.

## 4.2 Parcelamento

Total = entrada + valor da parcela × quantidade. Custo adicional = total − preço à vista. Percentual adicional = custo adicional ÷ preço à vista × 100. Incluir taxas, frete e seguros somente se informados.

Se o usuário informar apenas valor financiado, taxa mensal e prazo, usar fórmula de prestação fixa e declarar que é estimativa; pode divergir do CET real. Nunca presumir juros.

## 4.3 Orçamento

Comprometimento = valor da compra ÷ orçamento × 100. Saldo estimado = orçamento − compra. O app não infere renda nem acessa conta bancária.

## 4.4 Comparação de alternativas

Comparar somente critérios preenchidos: preço, quantidade, preço unitário, prazo, custo total, garantia informada e observações. Não afirmar qualidade superior sem dados verificáveis.

## 4.5 Linguagem do veredito

| **Situação**         | **Linguagem permitida**                                                    |
| -------------------- | -------------------------------------------------------------------------- |
| Opção A mais barata  | A opção A custa X% menos por unidade.                                      |
| Parcelamento maior   | Parcelando, você pagará R\$ X a mais que o preço à vista informado.        |
| Ultrapassa orçamento | Essa compra ultrapassa o limite informado em R\$ X.                        |
| Faltam dados         | Ainda não dá para concluir. Falta informar...                              |
| Diferença pequena    | As opções têm custo unitário parecido; considere quantidade e necessidade. |

## 4.6 Precisão

- Representar dinheiro em centavos inteiros sempre que possível.

- Evitar erros de ponto flutuante em operações financeiras.

- Exibir moeda no padrão brasileiro: R\$ 1.234,56.

- Arredondar apenas na apresentação.

- Validar valores positivos, quantidade maior que zero e unidade compatível.

# 5. Assistente sem IA paga

O assistente da V1 é um fluxo guiado com intenções limitadas e regras locais. Não deve fingir ser um modelo de linguagem nem responder perguntas gerais fora do domínio.

## 5.1 Intenções

| **Intenção**       | **Exemplo**                                     | **Ação**                     |
| ------------------ | ----------------------------------------------- | ---------------------------- |
| UNIT_PRICE_COMPARE | Qual compensa mais? 500 g por 8 ou 1 kg por 15? | Comparador de preço unitário |
| INSTALLMENT        | Quanto dá 12 vezes de 230?                      | Calculadora de parcelamento  |
| BUDGET_CHECK       | Cabe no meu orçamento de 500?                   | Análise de orçamento         |
| COMPARE_OPTIONS    | Compare estas duas opções                       | Comparador                   |
| SAVE_ANALYSIS      | Salvar essa análise                             | Salvar no histórico          |
| HELP               | O que você consegue fazer?                      | Mostrar exemplos             |

## 5.2 Estratégia

13. Começar com botões de exemplos e formulários estruturados.

14. Adicionar parser local simples para números, moeda, unidades e expressões comuns.

15. Se houver ambiguidade, perguntar em vez de adivinhar.

16. Converter intenção em objeto estruturado.

17. Executar função pura de cálculo.

18. Montar resposta com templates locais.

## 5.3 Exemplo de objeto

```text
{
"intent": "UNIT_PRICE_COMPARE",
"options": [
{ "priceCents": 1800, "quantity": 900, "unit": "g" },
{ "priceCents": 2700, "quantity": 1500, "unit": "g" }
],
"source": "user_input",
"confidence": "high"
}
```

Se não conseguir extrair preço, quantidade ou unidade com segurança, abrir o formulário correspondente.

## 5.4 Limites

- Não responder como especialista jurídico, médico, tributário ou de investimentos.

- Não prometer economia futura.

- Não inventar preços atuais, lojas, promoções ou características.

- Não fazer scraping ou consultas escondidas.

- Não enviar dados do usuário a servidores.

# 6. Arquitetura técnica

## 6.1 Stack aprovada

| **Camada**    | **Tecnologia**                           | **Motivo**                      |
| ------------- | ---------------------------------------- | ------------------------------- |
| Editor        | Visual Studio Code                       | Ambiente principal              |
| Linguagem     | TypeScript                               | Tipagem e manutenção            |
| App           | React Native + Expo                      | Base única Android e futuro iOS |
| Navegação     | Expo Router                              | Rotas por arquivos              |
| Banco local   | expo-sqlite                              | Persistência no dispositivo     |
| Estado        | React Context; Zustand só se necessário  | Evitar complexidade             |
| Validação     | Zod ou validação tipada                  | Validar entradas                |
| Testes        | Jest/Vitest compatível + Testing Library | Testar regras e fluxos          |
| Versionamento | Git                                      | Histórico e recuperação         |
| Build         | Android Studio/SDK; EAS apenas opcional  | Gerar APK/AAB localmente        |

## 6.2 Regra de custo

> **ARQUITETURA LOCAL-FIRST**
>
> Não usar Supabase, Firebase, servidor próprio, banco remoto, API de IA, analytics, armazenamento em nuvem ou push remoto na V1. SQLite fica no aparelho. O app deve funcionar em modo avião para as funções centrais.

Expo e bibliotecas do SDK são open source e podem ser usados sem assinatura. Serviços de nuvem da Expo são opcionais e podem ter limites de plano; para evitar dependência de cobrança, priorizar compilação local com Android SDK/Android Studio. Consultar: https://docs.expo.dev/faq/ e https://docs.expo.dev/guides/local-app-overview/.

## 6.3 Por que não usar Supabase agora?

- O MVP não exige login nem sincronização entre aparelhos.

- SQLite reduz infraestrutura e custos recorrentes.

- Dados pessoais permanecem no dispositivo.

- Menos integrações significa menos pontos de falha.

Trade-off: desinstalar o app ou perder o aparelho pode apagar dados. Por isso, exportar/importar backup JSON local faz parte do MVP.

## 6.4 Estrutura de pastas

```text
nao-paga-isso/
app/
(tabs)/
index.tsx
assistant.tsx
tools.tsx
history.tsx
settings.tsx
analysis/[id].tsx
_layout.tsx
src/
components/
features/
assistant/intentParser.ts
assistant/responseTemplates.ts
assistant/assistantService.ts
calculators/unitPrice.ts
calculators/installments.ts
calculators/budget.ts
calculators/comparison.ts
history/historyRepository.ts
database/database.ts
database/migrations.ts
database/schema.ts
domain/types.ts
domain/validators.ts
domain/formatters.ts
theme/
utils/
assets/
tests/
calculators/
assistant/
docs/
DOSSIÊ.md
DECISIONS.md
app.json
package.json
tsconfig.json
README.md
```

## 6.5 Banco de dados

| **Tabela**    | **Campos principais**                                            | **Uso**                     |
| ------------- | ---------------------------------------------------------------- | --------------------------- |
| analyses      | id, type, title, created_at, updated_at, input_json, result_json | Análises salvas             |
| settings      | key, value                                                       | Preferências locais         |
| products      | id, name, brand, notes, created_at                               | Cadastro manual opcional    |
| price_entries | id, product_id, price_cents, quantity, unit, recorded_at         | Histórico pessoal de preços |

Usar migrations versionadas. Consultas parametrizadas; nunca concatenar texto do usuário em SQL.

## 6.6 Segurança e privacidade

- Não pedir CPF, dados bancários, senha, cartão ou credenciais.

- Não coletar localização.

- Não incluir analytics externo na V1.

- Não transmitir análises para fora do aparelho.

- Oferecer apagar histórico e exportar dados.

- Não registrar dados sensíveis em logs.

- Política de privacidade deve refletir o funcionamento real.

- Solicitar apenas permissões estritamente necessárias.

# 7. Ambiente VS Code

O desenvolvimento ocorre no computador do fundador; o Android será usado para testes. O agente deve explicar comandos e nunca sobrescrever arquivos sem inspecionar.

## 7.1 Instalações

19. Visual Studio Code: https://code.visualstudio.com/

20. Node.js LTS: https://nodejs.org/

21. Git: https://git-scm.com/

22. Expo Go no Android para testes iniciais.

23. Android Studio e Android SDK para builds de produção locais.

## 7.2 Criar projeto

```text
npx create-expo-app@latest nao-paga-isso
cd nao-paga-isso
code .
npx expo start
```

Versões e templates mudam. O agente deve consultar a documentação oficial vigente e escolher versões compatíveis.

## 7.3 Primeiro teste

- Executar npx expo start.

- Abrir Expo Go no Android e ler o QR Code na mesma rede Wi-Fi.

- Confirmar que a tela inicial abre.

- Alterar um texto e confirmar atualização no aparelho.

Expo Go serve para protótipos iniciais. Para projetos de produção, a Expo recomenda development builds, especialmente quando forem necessários módulos nativos adicionais. Ver https://docs.expo.dev/develop/development-builds/faq/.

## 7.4 Extensões úteis

- Expo Tools (opcional).

- ESLint.

- Prettier.

- GitLens (opcional).

Instalar somente extensões necessárias e gratuitas.

# 8. Qualidade e testes

## 8.1 Testes unitários obrigatórios

| **Caso**             | **Entrada**            | **Resultado esperado**         |
| -------------------- | ---------------------- | ------------------------------ |
| Preço/kg             | 900 g / R\$ 18,00      | R\$ 20,00/kg                   |
| Preço/kg             | 1.500 g / R\$ 27,00    | R\$ 18,00/kg                   |
| Diferença            | 20 contra 18 por kg    | 10% mais barato para R\$ 18/kg |
| Parcelamento         | 12 × R\$ 230           | R\$ 2.760 total                |
| Entrada + parcelas   | R\$ 300 + 10 × R\$ 200 | R\$ 2.300 total                |
| Orçamento            | Compra 600; limite 500 | Ultrapassa R\$ 100             |
| Quantidade zero      | 0 g                    | Bloquear cálculo               |
| Preço negativo       | −R\$ 10                | Bloquear entrada               |
| Unidade incompatível | kg vs unidade          | Não comparar sem conversão     |

## 8.2 Testes manuais

- Instalar e abrir em Android real.

- Fechar e abrir; histórico persiste.

- Ativar modo avião; ferramentas continuam funcionando.

- Inserir valores com vírgula e ponto decimal.

- Testar telas pequenas e fonte ampliada.

- Testar botão voltar do Android.

- Exportar backup, apagar e importar backup.

- Verificar permissões desnecessárias.

- Testar entradas longas, símbolos e campos vazios.

## 8.3 Critérios de aceite

- Nenhuma chamada de rede para cálculos centrais.

- Nenhuma chave de API ou token exigido.

- Nenhum recurso essencial depende de login.

- Cálculos principais cobertos por testes.

- Resultados mostram dados usados e explicação.

- Usuário consegue apagar e exportar dados.

- Sem crashes conhecidos nos fluxos principais.

- Interface utilizável em Android real.

# 9. Modelo de negócio

## 9.1 Estratégia

Não cobrar antes de provar que o app resolve um problema recorrente. Lançar MVP gratuito, observar retenção e entrevistar usuários. Só então escolher recursos que justifiquem Premium.

## 9.2 Plano futuro hipotético

| **Gratuito**            | **Premium futuro**                 |
| ----------------------- | ---------------------------------- |
| Calculadoras principais | Histórico avançado e filtros       |
| Assistente guiado       | Mais análises salvas e relatórios  |
| Comparações manuais     | Modelos personalizados e metas     |
| Histórico local básico  | Exportações avançadas e categorias |
| Sem anúncios            | Sem anúncios                       |

R\$ 4,99/mês é hipótese para teste, não decisão. Não assumir disposição a pagar sem validação.

## 9.3 Assinatura sem servidor próprio

Se houver Premium, avaliar Google Play Billing. A loja processa a compra; o app consulta o estado da assinatura pela biblioteca oficial. Validação confiável e recursos de servidor podem exigir backend. Para manter custo zero, não implementar cobrança na V1; validar documentação e políticas atuais antes de lançar.

Não guardar cartão. Não criar pagamento próprio para contornar regras da loja.

## 9.4 Afiliados

Comissão de afiliado é remuneração recebida quando alguém compra por link rastreável. Não é necessária no MVP, não é renda garantida e exige parceria, conexão e identificação clara de publicidade/link remunerado.

## 9.5 Métricas

- Ativação: percentual que conclui primeira análise.

- Retenção: usuários que voltam após 7 e 30 dias.

- Frequência: análises por usuário ativo por semana.

- Conclusão: percentual de análises com resultado útil.

- Satisfação: 'Isso ajudou você a decidir?'

- Disposição a pagar: entrevistas e teste de preço, sem cobrar antes de Billing estar correto.

# 10. Privacidade e responsabilidade

Informações de consumo e orçamento devem ser tratadas com cuidado. Minimizar coleta é a melhor estratégia.

- Criar política de privacidade clara e coerente.

- Informar que os dados do MVP ficam no dispositivo.

- Permitir exclusão e exportação.

- Não declarar que o app garante economia.

- Não recomendar crédito, investimento ou endividamento como consultoria profissional.

- Distinguir cálculo matemático de recomendação.

- Se OCR, anúncios, afiliados, analytics ou conta online forem adicionados, revisar privacidade e consentimentos.

Antes da publicação, revisar políticas vigentes da Google Play, classificação de conteúdo, declaração de segurança de dados e exigências de política de privacidade.

# 11. Publicação Google Play

## 11.1 Caminho

24. Definir nome, ícone, descrição curta/longa, screenshots e categoria.

25. Gerar build de produção Android em formato AAB.

26. Criar conta Google Play e concluir verificação.

27. Preencher ficha, política de privacidade e declarações.

28. Executar testes internos e fechados.

29. Resolver crashes e problemas apontados.

30. Enviar para revisão e acompanhar aprovação.

## 11.2 Taxa e testes

A documentação oficial consultada informa taxa única de US\$ 25 para conta de distribuição completa no Android Developer Console. Confirmar valor, nomenclatura e fluxo no momento da inscrição.

Para novas contas pessoais criadas após 13/11/2023, a documentação do Google Play informa teste fechado com pelo menos 12 testadores inscritos continuamente por 14 dias antes de solicitar acesso à produção. Confirmar se a regra se aplica à conta e ao tipo de distribuição no lançamento.

Fontes: https://support.google.com/android-developer-console/answer/16604405 e https://support.google.com/googleplay/android-developer/answer/14151465.

## 11.3 Custos previstos

| **Item**                                   | **Planejamento**                                                                                              |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| VS Code, Node, Git, React Native, Expo SDK | Gratuitos/open source                                                                                         |
| SQLite local                               | Sem servidor                                                                                                  |
| Build Android local                        | Sem taxa de serviço; requer computador e SDK                                                                  |
| Conta Google Play distribuição completa    | US\$ 25, pagamento único, conforme regra consultada                                                           |
| Expo cloud build                           | Opcional; evitar dependência                                                                                  |
| IA por API                                 | Não usar                                                                                                      |
| Servidor/backend                           | Não usar na V1                                                                                                |
| Domínio/site                               | Não obrigatório para desenvolver; pode ser necessário endereço público de política conforme exigência da loja |

> **ATENÇÃO**
>
> Não é correto prometer que o único custo possível será a taxa da loja: podem existir impostos, conversão cambial, verificação, requisitos de política de privacidade ou mudanças futuras. O objetivo é não criar despesas técnicas recorrentes.

## 11.4 Checklist de lançamento

- Nome e identidade visual revisados.

- Ícone adaptativo e splash screen.

- Descrição e screenshots reais.

- Política de privacidade alinhada ao app.

- Formulário de segurança de dados correto.

- Classificação de conteúdo concluída.

- AAB assinado e testado.

- Testes internos/fechados concluídos conforme conta.

- Contato de suporte definido.

- Plano de resposta a bugs e avaliações preparado.

# 12. Roadmap

| **Etapa**         | **Entrega**                                     | **Concluída quando**          |
| ----------------- | ----------------------------------------------- | ----------------------------- |
| 0 — Fundação      | VS Code, Node, Git, Expo                        | App abre no Android           |
| 1 — Design system | Cores, tipografia, botões e navegação           | Telas consistentes            |
| 2 — Ferramentas   | Preço unitário, parcelas, orçamento, comparação | Testes passam                 |
| 3 — Assistente    | Intenções, formulários e respostas locais       | Fluxos funcionam offline      |
| 4 — Histórico     | SQLite, salvar, abrir, editar, excluir          | Dados persistem               |
| 5 — Privacidade   | Exportar/importar/apagar e textos               | Usuário controla os dados     |
| 6 — Testes        | Testes automatizados e Android real             | Critérios cumpridos           |
| 7 — Beta          | Grupo de usuários e feedback                    | Problemas críticos resolvidos |
| 8 — Loja          | AAB, ficha, políticas e revisão                 | Google Play aprova            |
| 9 — Monetização   | Pesquisa Premium e Billing                      | Valor validado                |

## 12.1 Prioridade

Ter um app pequeno, funcional e confiável. Não gastar semanas com OCR, IA, gráficos, cadastro, sincronização ou monetização antes de os cálculos e o assistente básico funcionarem.

# 13. Registro de decisões

| **Decisão**                 | **Estado**                     | **Observação**                                        |
| --------------------------- | ------------------------------ | ----------------------------------------------------- |
| Nome NÃO PAGA ISSO          | Aprovado como nome de trabalho | Verificar marca e disponibilidade antes do lançamento |
| Android primeiro            | Aprovado                       | iOS em fase posterior                                 |
| Assistente + ferramentas    | Aprovado                       | Experiência unificada                                 |
| VS Code                     | Aprovado                       | Editor principal                                      |
| React Native + Expo         | Stack escolhida                | Revalidar versões e compatibilidade                   |
| SQLite local                | Recomendado                    | Sem backend na V1                                     |
| Sem API de IA paga          | Obrigatório                    | Sem tokens ou consumo por consulta                    |
| Sem serviço pago recorrente | Objetivo obrigatório           | Revisar dependências                                  |
| Premium R\$ 4,99            | Hipótese                       | Não implementar antes de validar                      |

## 13.1 Questões em aberto

- Identidade visual, logotipo e ícone.

- Nome final após busca de marca e loja.

- Limites do plano gratuito.

- Se o primeiro lançamento será totalmente gratuito.

- Política de privacidade e endereço público.

- Estratégia de backup e restauração.

- Requisitos exatos da conta Google Play no lançamento.

# 14. Instruções para agente de programação

> **INSTRUÇÃO CRÍTICA**
>
> O agente deve ler o dossiê inteiro antes de alterar ou criar arquivos. Trabalhar por etapas pequenas, explicar comandos, executar testes e parar diante de decisão de produto não especificada.

## 14.1 Prompt mestre para Claude Code / agente de código

```text
Você é o engenheiro principal do projeto NÃO PAGA ISSO. Leia integralmente o DOSSIÊ MESTRE antes de escrever código.
MISSÃO
Construir um app Android-first chamado NÃO PAGA ISSO usando React Native + Expo + TypeScript, com assistente guiado e ferramentas de decisão de consumo.
REGRAS INEGOCIÁVEIS
1. Não adicionar APIs pagas, IA generativa remota, serviços por token, backend pago ou analytics externo.
2. Não adicionar Supabase, Firebase, autenticação ou servidor na V1.
3. Usar SQLite local para persistência.
4. As funções centrais devem funcionar offline.
5. Não inventar preços de mercado, ofertas, lojas ou características.
6. Não dar aconselhamento financeiro profissional; apresentar cálculos e hipóteses.
7. Não adicionar dependências sem explicar finalidade, licença, manutenção e custo.
8. Não executar comandos destrutivos sem explicar e pedir confirmação.
9. Não sobrescrever arquivos existentes sem inspecionar.
10. Manter cálculos em funções puras, tipadas e testáveis.
MODO DE TRABALHO
- Inspecione o ambiente e arquivos existentes primeiro.
- Apresente um plano curto da etapa atual.
- Implemente uma etapa por vez.
- Ao terminar, execute testes e verifique TypeScript/lint.
- Informe arquivos criados/alterados, comandos, testes e pendências.
- Se faltar decisão, faça uma pergunta objetiva.
- Atualize README e registro de decisões quando necessário.
ORDEM
Etapa 0: validar Node, npm, Git, Expo e criar projeto.
Etapa 1: tema visual e navegação.
Etapa 2: calculadoras de preço unitário, parcelamento, orçamento e comparação.
Etapa 3: assistente por intenções limitadas, parser local e formulários.
Etapa 4: SQLite e migrations.
Etapa 5: exportar/importar JSON e apagar dados.
Etapa 6: testes, acessibilidade e Android real.
Etapa 7: build Android e checklist Google Play.
DEFINIÇÃO DE PRONTO
- App abre no Android.
- Ferramentas funcionam sem internet.
- Cálculos passam nos testes.
- Histórico persiste após reiniciar.
- Usuário exporta e apaga dados.
- Não há APIs pagas ou tokens.
- Assistente não inventa dados e pede esclarecimento quando necessário.
Comece somente pela Etapa 0. Não implemente o app inteiro de uma vez.
```

## 14.2 Prompt para retomar uma sessão

```text
Leia o DOSSIÊ MESTRE do NÃO PAGA ISSO e docs/DECISIONS.md.
Confira em qual etapa do roadmap estamos.
Não altere o escopo sem autorização.
Diga o próximo passo pequeno e execute somente esse passo.
Ao final, rode os testes e atualize o status.
```

## 14.3 Documentos que devem existir no repositório

- README.md — instalar, executar e testar.

- docs/DOSSIE.md — versão Markdown deste documento.

- docs/DECISIONS.md — decisões e alterações aprovadas.

- docs/ROADMAP.md — etapa atual, concluídas e pendentes.

- CHANGELOG.md — mudanças por versão.

# 15. Referências técnicas oficiais

- Expo FAQ/custos: https://docs.expo.dev/faq/

- Expo configuração do ambiente: https://docs.expo.dev/get-started/set-up-your-environment/

- Expo SQLite: https://docs.expo.dev/versions/latest/sdk/sqlite/

- Expo builds locais: https://docs.expo.dev/guides/local-app-overview/

- Expo Go e development builds: https://docs.expo.dev/develop/development-builds/faq/

- Google Play taxa e contas: https://support.google.com/android-developer-console/answer/16604405

- Google Play teste para contas pessoais: https://support.google.com/googleplay/android-developer/answer/14151465

Páginas e políticas podem mudar. Conferir documentação oficial vigente antes de instalação, builds, Billing e publicação. Referências consultadas em 20/11/2026.

# 16. Glossário

| **Termo**     | **Significado**                                                           |
| ------------- | ------------------------------------------------------------------------- |
| MVP           | Versão mínima que entrega valor central e pode ser testada.               |
| React Native  | Framework para interfaces mobile com JavaScript/TypeScript.               |
| Expo          | Ferramentas e bibliotecas que simplificam React Native.                   |
| SQLite        | Banco de dados local incorporado ao app.                                  |
| API           | Interface para um software conversar com outro serviço.                   |
| Token         | Unidade de texto processada por modelos de IA; APIs podem cobrar por uso. |
| AAB           | Android App Bundle usado na Google Play.                                  |
| Build         | Processo que transforma código em app instalável/publicável.              |
| OCR           | Reconhecimento de texto em imagens.                                       |
| Offline-first | Funções essenciais operam sem internet.                                   |
| Billing       | Sistema de compras e assinaturas dentro da loja.                          |

# 17. Visão final

> **O QUE ESTAMOS CONSTRUINDO**
>
> Um aplicativo Android-first, local-first e sem IA paga, que combina um assistente guiado com calculadoras transparentes para ajudar o usuário a pensar melhor antes de gastar.

O sucesso da primeira versão não será medido pela quantidade de telas, pela presença de IA ou pela complexidade técnica. Será medido por uma pergunta simples: depois de usar o NÃO PAGA ISSO, a pessoa tomou uma decisão de compra mais informada?

Construir pequeno, testar cedo, proteger o orçamento e evoluir somente com evidência. Esse é o caminho.
