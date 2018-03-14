import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListRolesContainer } from './containers/list-roles/list-roles.container';
import { CreateRoleContainer } from './containers/create-role/create-role.container';
import { UpdateRoleContainer } from './containers/update-role/update-role.container';
import { ViewRoleContainer } from './containers/view-role/view-role.container';
import { RoleComponent } from './role.component';

const routes: Routes = [
  {
    path: '',
    component: RoleComponent,
    children: [
      {
        path: '',
        component: ListRolesContainer
      },
      {
        path: 'list',
        component: ListRolesContainer
      },
      {
        path: 'create',
        component: CreateRoleContainer
      },
      {
        path: 'update/:id',
        component: UpdateRoleContainer
      },
      {
        path: 'view/:id',
        component: ViewRoleContainer
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
