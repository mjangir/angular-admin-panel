import { BrowserModule }        from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  NgModule, 
  APP_INITIALIZER }             from '@angular/core';
import { 
  HttpModule,
  RequestOptions,
  XHRBackend,
  Http
}                               from '@angular/http';

// Routes
import { AppRoutingModule }     from './app-routing.module';

// Modules
import { AppComponent }         from './app.component';
import { ContainersModule }     from './shared/containers/containers.module';

// Services
import { ConfigService }        from './app-config.service';
import { HttpServiceModule }    from './shared/asyncServices/http/http.module';
import { UtilityModule, UtilService }        from './shared/utils';

// Third party libraries
import {
  TranslateModule,
  TranslateLoader,
  TranslateStaticLoader
}                               from 'ng2-translate';
import { 
  StoreModule, 
  ActionReducerMap 
}                               from '@ngrx/store';
import { EffectsModule }        from '@ngrx/effects';
import { StoreDevtoolsModule }  from '@ngrx/store-devtools';
import { ToastrModule } from 'ngx-toastr';
import { TranslateService }     from 'ng2-translate';
import { SweetAlert2Module }    from '@toverux/ngx-sweetalert2';

// NGRX Effects
import { AuthGuard }      from './shared/guards/auth.guard';
import { AuthService }    from './auth/services/auth.service';
import { AuthApiClient }  from './auth/services/auth-api-client.service';
import { UserApiClient }  from './admin/access/user/services/user-api-client.service';

// For App Store
import { reducers, reducerProvider, reducerToken } from './store/app.reducer';
import { effects } from './store/app.effect';
import { RoleApiClient } from './admin/access/role/services/role-api-client.service';
import { PermissionApiClient } from './admin/access/permission/services/permission-api-client.service';

/**
 * Function for loading application config
 * 
 * @param config 
 */
export function configServiceFactory (config: ConfigService) {
  return () => config.load()
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    TranslateModule.forRoot(),
    ToastrModule.forRoot(),
    StoreModule.forRoot(reducerToken),
    EffectsModule.forRoot(effects),
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-success mr-2 btn-lg',
      cancelButtonClass: 'btn btn-danger btn-lg'
    }),
    UtilityModule.forRoot(),

    // App custom dependencies
    HttpServiceModule.forRoot(),

    ContainersModule,
    AppRoutingModule
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configServiceFactory,
      deps: [ConfigService], 
      multi: true
    },
    AuthGuard,
    AuthService,
    AuthApiClient,
    UserApiClient,
    RoleApiClient,
    PermissionApiClient,
    UtilService,
    reducerProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
