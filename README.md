# Estrutura de Dados e Algoritmos com JavaScript

Este repositório contém a implementação de exercícios e algoritmos baseados no livro "Estrutura de Dados e Algoritmos com JavaScript" de Loiane Groner. O objetivo deste projeto é praticar e aplicar os conceitos aprendidos ao longo da leitura do livro.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
estrutura-dados-algoritmos-js
├── .eslintignore
├── .eslintrc.json
├── .github
│   ├── ISSUE_TEMPLATE
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   └── workflows
│       └── ci.yml
├── .gitignore
├── .vscode
│   └── launch.json
├── CONTRIBUTING.md
├── package.json
├── README.md
├── scripts
│   ├── update-chapter2.js
│   └── update-readme.js
└── src
    ├── chapter-1
    │   ├── 00-TestRunner.html
    │   ├── 00-TestRunner.js
    │   ├── 01-HelloWorld.js
    │   ├── 02-Variables.js
    │   ├── 03-Operators.js
    │   ├── 04-TruthyFalsy.js
    │   ├── 05-EqualsOperators.js
    │   ├── 06-ConditionalStatements.js
    │   ├── 07-Loops.js
    │   ├── 08-Functions.js
    │   ├── 09-ObjectOrientedJS.js
    │   └── __tests__
    │       ├── 02-Variables.js
    │       ├── 08-Functions.js
    │       └── 09-ObjectOrientedJS.js
    ├── chapter-2
    │   ├── 00-TestRunner.html
    │   ├── 00-TestRunner.js
    │   ├── 10-letconst.js
    │   ├── 11-variableScope.js
    │   ├── 12-stringTemplates.js
    │   ├── 13-arrowFunctions.js
    │   └── ECS.md
    ├── index.html
    ├── index.js
    ├── styles.css
    └── utils
        ├── helper.js
        └── __tests__
            └── helper.js
```

## Como Contribuir

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/estrutura-dados-algoritmos-js.git
   ```

2. **Crie uma nova branch**:
   ```bash
   git checkout -b nome-da-sua-branch
   ```

3. **Faça suas alterações e commit**:
   ```bash
   git commit -m "Descrição das suas alterações"
   ```

4. **Envie suas alterações para o GitHub**:
   ```bash
   git push origin nome-da-sua-branch
   ```

5. **Abra um Pull Request**.

## Issues

Para relatar um bug ou solicitar uma nova funcionalidade, utilize os templates disponíveis na pasta `.github/ISSUE_TEMPLATE`.

## CI/CD

O projeto utiliza um fluxo de trabalho de Integração Contínua (CI) definido no arquivo `.github/workflows/ci.yml`. Certifique-se de que todos os testes estejam passando antes de enviar suas alterações.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.