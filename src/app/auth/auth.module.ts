import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { AlertModule }      from 'ngx-bootstrap';
import { TranslateModule }  from 'ng2-translate';
import { 
  FormsModule, 
  ReactiveFormsModule 
}                           from "@angular/forms";

// NGRX
import { 
  reducers, 
  effects 
}                           from './store';
import { StoreModule }      from '@ngrx/store';
import { EffectsModule }    from '@ngrx/effects';

// Containers
import * as fromContainers from './containers';

// Routing
import { AuthRoutingModule } from './auth-routing.module';

// Services
import { AuthService }      from './services/auth.service';
import { AuthApiClient }    from './services/auth-api-client.service';
import { AuthSandbox }      from './auth.sandbox';

/**
 * Auth module
 * 
 * @export
 * @class AuthModule
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    AlertModule.forRoot(),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature(effects),
    AuthRoutingModule
  ],
  declarations: [
    ...fromContainers.containers
  ],
  providers: [AuthService, AuthApiClient, AuthSandbox]
})
export class AuthModule { }
