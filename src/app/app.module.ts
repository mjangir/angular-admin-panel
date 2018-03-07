import { BrowserModule }   from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  NgModule, 
  APP_INITIALIZER }         from '@angular/core';
import { 
  HttpModule,
  RequestOptions,
  XHRBackend,
  Http
}                           from '@angular/http';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Modules
import { AppComponent }     from './app.component';
import { ContainersModule } from './shared/containers/containers.module';

// Services
import { ConfigService }    from './app-config.service';

// Third party libraries
import {
  TranslateModule,
  TranslateLoader,
  TranslateStaticLoader
}                           from 'ng2-translate';
import { TranslateService } from 'ng2-translate';
import { ToastModule }      from 'ng2-toastr/ng2-toastr';

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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
