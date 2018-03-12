import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersContainer } from './containers/list-users/list-users.container';
import { CreateUserContainer } from './containers/create-user/create-user.container';
import { UpdateUserContainer } from './containers/update-user/update-user.container';
import { ViewUserContainer } from './containers/view-user/view-user.container';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        component: ListUsersContainer
      },
      {
        path: 'list',
        component: ListUsersContainer
      },
      {
        path: 'create',
        component: CreateUserContainer
      },
      {
        path: 'update',
        component: UpdateUserContainer
      },
      {
        path: 'view',
        component: ViewUserContainer
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
