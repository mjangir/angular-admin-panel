import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule }              from 'ng2-translate';
import { NgxDatatableModule }   from '@swimlane/ngx-datatable';

// NGRX
import { 
  reducers, 
  effects 
}                           from './store';
import { StoreModule }      from '@ngrx/store';
import { EffectsModule }    from '@ngrx/effects';

// Services
import { UserService }        from './services/user.service';
import { UserApiClient }      from './services/user-api-client.service';
import { AccessUserSandbox }  from './user.sandbox';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { TooltipModule, BsDropdownModule }      from 'ngx-bootstrap';

// Containers
import fromContainers from './containers';

const containers = [
  UserComponent,
  ...fromContainers
]

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NgxDatatableModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    StoreModule.forFeature('accessUser', reducers),
    EffectsModule.forFeature(effects),
    UserRoutingModule
  ],
  declarations: containers,
  providers: [
    UserService,
    UserApiClient,
    AccessUserSandbox
  ]
})
export class UserModule { }
