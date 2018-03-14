import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'access/user',
    loadChildren: './access/user/user.module#UserModule'
  },
  {
    path: 'access/role',
    loadChildren: './access/role/role.module#RoleModule'
  },
  {
    path: 'access/permission',
    loadChildren: './access/permission/permission.module#PermissionModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
