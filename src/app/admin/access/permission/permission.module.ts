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
// Containers
import { fromContainers } from './containers';
import { PermissionRoutingModule } from './permission-routing.module';
import { PermissionComponent } from './permission.component';
import { AccessPermissionSandbox } from './permission.sandbox';
import { PermissionApiClient } from './services/permission-api-client.service';
// Services
import { PermissionService } from './services/permission.service';


const containers = [
  PermissionComponent,
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
    PermissionRoutingModule
  ],
  declarations: containers,
  providers: [
    PermissionService,
    PermissionApiClient,
    AccessPermissionSandbox
  ]
})
export class PermissionModule { }
