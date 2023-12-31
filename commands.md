# Commands

```
 npx create-nx-workspace@latest escola-de-ti
```
-  Criar novo workspace para começar a trabalhar

```
 npm i -D @nx/angular
```
- Instalar o plugin nx para o Angular

```
 npm i -D @nx/nest
```
- Instalar o plugin nx para o Nest

```
 nx list
```
- Lista os plugins instalados e os que temos disponíveis

```
 npx nx g @nx/angular:application --name=mobile --directory=front --routing=true --style=scss --no-interactive
```
- Se quiser apenas simular adicione "-d" ao final do comando

```
 npx nx g @nx/nest:application --name=auth -frontendProject=front-mobile --directory=back --strict-true
```
- Gerar o projeto Front

```
 npx nx graph
```
- UI para verificar seus projetos 

```
 npx nx g @nx/nest:resource --name=auth --project=back-auth --type=rest --directory=app --crud=false
```
- Gerar um peojeto no back

```
 npx nx g @nx/angular:library --name=feature-users --directory=account --lazy=true --parent=apps\front\mobile\src\app\app.routes.ts --routing=true --changeDetection=OnPush --displayBlock=true --prefix=user --style=scss --tags=type:feature,scope:account -d
```
- Criar uma Lib

```
npx nx g c account-feature-users --project account-feature-users --flat   
```

```
npm i @angular/material
```
- Instala a biblioteca material do Angular no projeto

```
npx nx generate @angular/material:ng-add --project front-mobile
```
- Adiciona a biblioteca no projeto

```
npx nx g @nx/angular:library --name=feature-products --directory=store --lazy=true --parent=apps/front/mobile/src/app/app.routes.ts --routing=true --changeDetection=OnPush --displayBlock=true --prefix=store --style=scss
```
- Lib store

```
https://fonts.google.com/icons
```
- Icones utilizaveis

```
nx g c store-featue-products --project=store-feature-products --flat -d
```
- Gera um componente para Store

- Gerar um componente para sua Lib

```
 npx nx run-many -t serve
```
- Executa as aplicações front e back

```
 npm audit fix
```
- Verifica se o Angular resolveu os problemas de vulnerabilidade 

# Commits
```
 npx git-cz
```

- **feat/** : Uma nova funcionalidade ou uma modificação grande que foi adicionada ao projeto

- **fix/** : Correção de bugs

- **chore/** : Correções de código pequenas que não são consideradas importantes o suficiente para receber um commit próprio

- **style/** : É usado para mudar a formatação do código ou adição de newlines e espaços.

# Versions
- 1.3.1
## Break Changes
Primeiro número

##
Segundo número

## Feat, novas funcionalidades
Terceiro número
