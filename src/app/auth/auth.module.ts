import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AlertModule } from 'ngx-bootstrap';

import { AuthRoutingModule } from './auth-routing.module';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { reducers } from './store';
import { StoreModule } from '@ngrx/store';

//Containers
import { LoginContainer } from './containers/login/login.container';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AlertModule.forRoot(),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    AuthRoutingModule
  ],
  declarations: [
    ForgotComponent, 
    LoginComponent, 
    RegisterComponent,
    LoginContainer
  ]
})
export class AuthModule { }
