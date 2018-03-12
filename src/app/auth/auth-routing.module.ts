import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginContainer } from './containers/login/login.container';
import { RegisterContainer } from './containers/register/register.container';
import { ForgotContainer } from './containers/forgot/forgot.container';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterContainer
  },
  {
    path: 'login',
    component: LoginContainer
  },
  {
    path: 'forgot-password',
    component: ForgotContainer
  }
];

/**
 * Auth routing module
 * 
 * @export
 * @class AuthRoutingModule
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
