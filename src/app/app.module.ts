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
import { ToastModule }          from 'ng2-toastr/ng2-toastr';
import { TranslateService }     from 'ng2-translate';

// NGRX Effects
import { UserEffects }            from './shared/store/admin/user/user.effect';
import { reducer as userReducer}  from './shared/store/admin/user/user.reducer';
import { UserService }            from './admin/access/user/user.service';
import { UserApiClient }          from './admin/access/user/user-api-client.service';
import { AuthGuard } from './shared/guards/auth.guard';
import { AuthService } from './auth/services/auth.service';


export const reducers: ActionReducerMap<any> = {
  users: userReducer
};

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
    ToastModule.forRoot(),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UserEffects]),

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
    UserService,
    UserApiClient,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
