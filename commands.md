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
```
 npx nx graph
```
```
 npx nx g @nx/nest:resource --name=auth --project=back-auth --type=rest --directory=app --crud=false
```
```
 npm i --save @nestjs/jwt
```
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
