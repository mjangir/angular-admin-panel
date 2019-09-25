import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { TranslateModule } from 'ng2-translate';
import { BsDropdownModule, TooltipModule } from 'ngx-bootstrap';
// Pipes
import { CommonPipesModule } from '../../../shared/pipes/common-pipes.module';
import { AccessPermissionSandbox } from '../permission/permission.sandbox';
// Containers
import { fromContainers } from './containers';
import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './role.component';
import { AccessRoleSandbox } from './role.sandbox';
import { RoleApiClient } from './services/role-api-client.service';
// Services
import { RoleService } from './services/role.service';

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
