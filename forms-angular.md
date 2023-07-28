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

## Configurações

- Os 2 formulários identificam a mudança de valores depois que os usuários interagem com o form data no componente de seu model
- Os forms diferem em como são gerenciadas as instâncias comuns de controle de formulário

## Classes básicas

- **FormControl** : Rastreia o valor e o status de validação de um controle de formulário individual
- **FormGroup** : Rastreia os mesmos valores e status, porém, para uma coleção de `FormControl`
- **FomrArray** : Rastreia os mesmos valores e status, porém para uma matriz de `FormControl`
- **ControlValueAccessor** : Cria uma ponte entre o `FormControl` instances e elementos integrados da DOM

## Configurações de cada formulário

### Formlários Reactives

- Você define o modelo de formulário diretamente na classe de componente
- A diretiva `[formcontrol]` vincula explicitamente um elemento do formulário específico no view à isntancia criada de `FormControl`
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
- A diretiva NgModel cria e gerencia uma instância `FormControl` para um determinado elemento do formulário
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

- Em formulários template-driven não se tem acesso direto à instância do `FormControl` criada

## Fluxo de dados
- Quando o App possui um formulário, o Angular deve manter o modelo do componente sincronizado com a view e vice e versa
- Conforme os usuários interagem e alteram valores na view, os novos valores devem ser refletidos no data model
- Da mesma forma que quando a lógica do programa altera os valores no data model, esses valores devem ser refletidos na view
- Os formulários Reactives e template-driven diferem no modo que lidam com os dados que fluem do usuário ou de alterações programáticas

### Fluxo em formulários reactives
- Em formulários reactives, cada elemento do formlário está diretamente ligado ao modelo do formulário (Uma instância `FormControl`). 
- As atualizações da view para o modelo e do modelo para a view são síncronas e não dependem de como a interface do usuário é renderizada

**Etapas realizadas de como os valores fluem quando um campo de entrada é alterado da view:**
1. O usuário digita um valor no elemento de entrada, como em um input de cor favorita Azul .
2. O elemento de entrada do formulário emite um evento "input" com o valor mais recente.
3. O control value accessor que está ouvindo eventos no elemento de entrada do formulário retransmite imediatamente o novo valor para a instância `FormControl`.
4. A instância `FormControl` emite o novo valor por meio do `valueChanges` observable.
5. Quaisquer subscribers do `valueChanges` observable recebem o novo valor.

**Etapas realizadas de como os valores fluem quando um campo de entrada é alterado através de código:**
1. O usuário chama o método `favoriteColorControl.setValue()`, que atualiza o valor do FormControl.
2. Após isso a instância `FormControl` emite o novo valor por meio do `valueChanges` observable.
3. Quaisquer subscribers do `valueChanges` observable recebem o novo valor.
4. O control value accessor no elemento de entrada do formulário atualiza o elemento com o novo valor.

### Fluxo em formulários template-driven
- Em formulários template-driven, cada elemento do formulário está vinculado a uma diretiva que gerencia o modelo do formulário internamente

**Etapas realizadas de como os valores fluem quando um campo de entrada é alterado da view:**
1. O usuário digita Azul no elemento de entrada("Azul")
2. O elemento de entrada emite um evento Input com o valor Azul
3. O control value accessor anexado à entrada aciona o método `setValue()` na instância `FormControl`
4. A instância `FormControl` emite o novo valor por meio do observable `valueChanges`
5. Quaisquer subscribers do observable `valueChanges` recebem o novo valor
6. O control value accessor também chama o método `NgModel.viewToModelUpdate()` que emite um evento `ngModelChange` 
7. Como o modelo de componente usa a ligação de dados bidirecional para a propriedade `favoriteColor`, a mesma é atualizada no componente com o valor emitido pelo evento `ngModelChange`(que nesse caso é o Azul)

**Etapas realizadas de como os valores fluem quando um campo de entrada é alterado através de código:**
1. O valor `favoriteColor` é atualizado no componente
2. A detecção de alterações começa
3. Durante a detecção de alterações, o gancho de ciclo de vida`ngOnChanges` é chamado na instância `NgModel` da diretiva, porque o valor de uma de suas entradas foi alterado
4. O método `ngOnChanges()` enfileira uma tarefa assíncrona para definir o valor para a instância `FormControl` é executada
5. A detecção de valores foi concluída
6. Após isso, a tarefa para definir o valor da instância `FormControl` é executado
7. A instância `FormControl`emite o valor mais recente por meio do observable `valueChanges`.
8. Todos os subscribers do observable `valueChanges` recebem um novo valor
9. O control value accessor atualiza o elemento de entrada do formlário na view com o `favoriteColor` mais recente
