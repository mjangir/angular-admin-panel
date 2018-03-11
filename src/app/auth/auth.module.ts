import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AlertModule } from 'ngx-bootstrap';

// Containers
import * as fromContainers from './containers';

import { AuthRoutingModule } from './auth-routing.module';

import { AuthService }            from './services/auth.service';
import { AuthApiClient }          from './services/auth-api-client.service';

import { reducers, effects } from './store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

//Containers
import { LoginContainer } from './containers/login/login.container';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AlertModule.forRoot(),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature(effects),
    AuthRoutingModule
  ],
  declarations: [
    ...fromContainers.containers
  ],
  providers: [AuthService, AuthApiClient]
})
export class AuthModule { }
