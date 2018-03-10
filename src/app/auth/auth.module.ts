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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AlertModule.forRoot(),
    ReactiveFormsModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', reducers)
  ],
  declarations: [
    ForgotComponent, 
    LoginComponent, 
    RegisterComponent
  ]
})
export class AuthModule { }
