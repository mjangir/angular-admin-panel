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
import { RoleService }        from './services/role.service';
import { RoleApiClient }      from './services/role-api-client.service';
import { AccessRoleSandbox }  from './role.sandbox';

import { RoleRoutingModule }  from './role-routing.module';
import { RoleComponent }      from './role.component';
import { SweetAlert2Module }  from '@toverux/ngx-sweetalert2';
import { 
  TooltipModule, 
  BsDropdownModule 
}                             from 'ngx-bootstrap';
import { 
  AngularMultiSelectModule 
}                             from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';

// Containers
import {fromContainers} from './containers';
import { AccessPermissionSandbox } from '../permission/permission.sandbox';

const containers = [
  RoleComponent,
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
    StoreModule.forFeature('accessRole', reducers),
    EffectsModule.forFeature(effects),
    SweetAlert2Module,
    AngularMultiSelectModule,
    RoleRoutingModule
  ],
  declarations: containers,
  providers: [
    RoleService,
    RoleApiClient,
    AccessRoleSandbox,
    AccessPermissionSandbox
  ]
})
export class RoleModule { }
