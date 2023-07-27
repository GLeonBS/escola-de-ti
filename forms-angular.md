# Formas de lidar com formulários em Angular 

Em Angular, existem duas formas principais de lidar com formulários:

## 1. Reactive (Reativos)

Os formulários reativos fornecem acesso direto e explícito ao objeto do formulário. Eles são mais escaláveis, reutilizáveis e testáveis. Se os formulários são uma parte fundamental do seu aplicativo, é recomendado usar a abordagem reativa.

## 2. Template-driven (Dirigidos por Template)

Os formulários template-driven são uma opção mais simples quando a lógica do formulário é básica. Eles são úteis para adicionar um formulário mais simples ao aplicativo, mas não escalam tão bem como os reativos.

## Escalabilidade

### Reactive (Reativos)

- Se você deseja reutilizar formulários em diferentes partes do aplicativo, utilize a abordagem reativa.
- Formulários reativos fornecem acesso direto à API de formulário e usam fluxo de dados **síncrono** entre a view e o modelo de dados.
- Formulários reativos exigem menos configuração para testes e são mais compreensíveis.

### Template-driven (Dirigidos por Template)

- Formulários template-driven são mais adequados para cenários mais simples e menos reutilizáveis.
- Eles usam o fluxo de dados **assíncrono** entre a view e o modelo de dados.
- A abstração desses formulários afeta os testes, que dependem profundamente da execução e detecção de alterações para fluírem corretamente e, portanto, precisam de mais configurações.

Em resumo, se o formulário é uma parte crítica do seu aplicativo e você deseja reutilizá-lo em diferentes partes do código, opte pelos formulários reativos. Por outro lado, se o formulário é simples e não requer muita complexidade, os formulários template-driven podem ser uma escolha mais rápida, porém menos escalável. A escolha entre as abordagens dependerá das necessidades específicas do seu projeto.

### Configurações

- Os 2 formulários identificam a mudança de valores depois que os usuários interagem com o form data no componente de seu model
- Os forms diferem em como são gerenciadas as instâncias comuns de controle de formulário

### Classes básicas

- **FormControl** : Rastreia o valor e o status de validação de um controle de formulário individual
- **FormGroup** : Rastreia os mesmos valores e status, porém, para uma coleção de FormControls
- **FomrArray** : Rastreia os mesmos valores e status, porém para uma matriz de FormControls
- **ControlValueAccessor** : Cria uma ponte entre o FormControl instances e elementos integrados da DOM

### Configurações de cada formulário

#### Formlários Reactives

- Você define o modelo de formulário diretamente na classe de componente
- A diretiva `[formcontrol]` vincula explicitamente um elemento do formulário específico no view à isntancia criada de FormControl
- **Exemplo**:

```typescript
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-reactive-favorite-color'
    template: `
        Favorite Color: <input type="text" [formControl]="favoriteColorControl">
    `
})
export class FavoriteColorComponent {
    favoriteColorControl = new FormControl('');
}
```

### Formulários template-driven

- O modelo do formulário é implícito e não explícito como no Reactive
- A diretiva NgModel cria e gerencia uma instância FormControl para um determinado elemento do formulário
- **Exemplo**:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-favorite-color',
  template: ` Favorite Color: <input type="text" [(ngModel)]="favoriteColor" /> `,
})
export class FavoriteColorComponent {
  favoriteColor = '';
}
```

- Em formulários template-driven não se tem acesso direto à instância do FormControl criada
