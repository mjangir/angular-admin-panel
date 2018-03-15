import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPermissionsContainer } from './containers/list-permissions/list-permissions.container';
import { CreatePermissionContainer } from './containers/create-permission/create-permission.container';
import { UpdatePermissionContainer } from './containers/update-permission/update-permission.container';
import { ViewPermissionContainer } from './containers/view-permission/view-permission.container';
import { PermissionComponent } from './permission.component';

const routes: Routes = [
  {
    path: '',
    component: PermissionComponent,
    children: [
      {
        path: '',
        component: ListPermissionsContainer
      },
      {
        path: 'list',
        component: ListPermissionsContainer
      },
      {
        path: 'create',
        component: CreatePermissionContainer
      },
      {
        path: 'update/:id',
        component: UpdatePermissionContainer
      },
      {
        path: 'view/:id',
        component: ViewPermissionContainer
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionRoutingModule { }
