import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account.component';
import { RegistrationComponent } from './registration/registration.component';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '', redirectTo: '/account/login', pathMatch: 'full'
  },
  {
    path: "", component: AccountComponent,
    children: [
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'registration', component: RegistrationComponent
      }
    ]
  }
];

@NgModule({
  declarations: [AccountComponent, LoginComponent, RegistrationComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AccountModule { }
