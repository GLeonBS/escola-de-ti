import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { accountFeatureUsersRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(accountFeatureUsersRoutes)],
})
export class AccountFeatureUsersModule {}
