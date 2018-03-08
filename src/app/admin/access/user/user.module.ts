import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule }              from 'ng2-translate';
import { NgxDatatableModule }   from '@swimlane/ngx-datatable';

import { UserRoutingModule } from './user-routing.module';
import { ListUsersComponent } from './list-users/list-users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { UserComponent } from './user.component';
import { TooltipModule, BsDropdownModule }      from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NgxDatatableModule,
    UserRoutingModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  declarations: [
    ListUsersComponent, 
    CreateUserComponent, 
    UpdateUserComponent, 
    ViewUserComponent, 
    UserComponent
  ]
})
export class UserModule { }
