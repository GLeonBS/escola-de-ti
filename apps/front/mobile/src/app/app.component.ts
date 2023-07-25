import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

export class AuthForm extends FormGroup {
  constructor(){
    super({
      username: new FormControl(''),
      password: new FormControl(''),
    })
  }
}

@Component({
  selector: 'escola-de-ti-root',
  template: `
  <form [formGroup]="form" [] = >
    <label>
      <input type="text" formControlName="username">
    </label>

    <label>
      <input type="text" formControlName="password">
    </label>

  </form>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'front-mobile';

  httpClient = inject(HttpClient)
  form = new AuthForm()

  onSubmit()[
    this.httpClient
    .post('/api/auth/login', this.form.value)
    .subscribe(console.log)
  ]
}
