import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule }              from 'ng2-translate';
import { NgxDatatableModule }   from '@swimlane/ngx-datatable';
import { 
  FormsModule, 
  ReactiveFormsModule 
}                           from "@angular/forms";

// Pipes
import { CommonPipesModule } from '../../../shared/pipes/common-pipes.module';

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

import { UserRoutingModule }  from './user-routing.module';
import { UserComponent }      from './user.component';
import { SweetAlert2Module }  from '@toverux/ngx-sweetalert2';
import { 
  TooltipModule, 
  BsDropdownModule 
}                             from 'ngx-bootstrap';

// Containers
import {fromContainers} from './containers';

const containers = [
  UserComponent,
  ...fromContainers.containers
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgxDatatableModule,
    CommonPipesModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    SweetAlert2Module,
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
