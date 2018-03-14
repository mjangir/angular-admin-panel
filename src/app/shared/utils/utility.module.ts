import {
  NgModule,
  ModuleWithProviders
}                       from "@angular/core";
import { UtilService }  from './utility.service';

@NgModule()
export class UtilityModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UtilityModule,

      providers: [
        UtilService
      ]
    };
  }
}