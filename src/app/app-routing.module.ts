import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleLayoutComponent } from './shared/containers/simple-layout/simple-layout.component';
import { AdminLayoutComponent } from './shared/containers/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: 'auth',
    component: SimpleLayoutComponent,
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    loadChildren: './admin/admin.module#AdminModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
