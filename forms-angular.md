# Formas de lidar com formulários em Angular 2

Em Angular 2, existem duas formas principais de lidar com formulários:

## 1. Reactive (Reativos)

Os formulários reativos fornecem acesso direto e explícito ao objeto do formulário. Eles são mais escaláveis, reutilizáveis e testáveis. Se os formulários são uma parte fundamental do seu aplicativo, é recomendado usar a abordagem reativa.

## 2. Template-driven (Dirigidos por Template)

Os formulários template-driven são uma opção mais simples quando a lógica do formulário é básica. Eles são úteis para adicionar um formulário mais simples ao aplicativo, mas não escalam tão bem como os reativos.

### Notas sobre cada abordagem:

#### Reactive (Reativos)

- Se você deseja reutilizar formulários em diferentes partes do aplicativo, utilize a abordagem reativa.
- Formulários reativos fornecem acesso direto à API de formulário e usam fluxo de dados **síncrono** entre a view e o modelo de dados.
- Formulários reativos exigem menos configuração para testes e são mais compreensíveis.

#### Template-driven (Dirigidos por Template)

- Formulários template-driven são mais adequados para cenários mais simples e menos reutilizáveis.
- Eles usam o fluxo de dados **assíncrono** entre a view e o modelo de dados.
- A abstração desses formulários afeta os testes, que dependem profundamente da execução e detecção de alterações para fluírem corretamente e, portanto, precisam de mais configurações.

Em resumo, se o formulário é uma parte crítica do seu aplicativo e você deseja reutilizá-lo em diferentes partes do código, opte pelos formulários reativos. Por outro lado, se o formulário é simples e não requer muita complexidade, os formulários template-driven podem ser uma escolha mais rápida, porém menos escalável. A escolha entre as abordagens dependerá das necessidades específicas do seu projeto.
