import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Injectable }             from '@angular/core';
import { Effect, Actions }        from '@ngrx/effects';
import { Action, UPDATE }         from '@ngrx/store';
import { Observable }             from 'rxjs/Observable';
import { of }                     from 'rxjs/observable/of';
import {
  LOAD_USERS,
  LOAD_USER,
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER
}                                 from './user.action';
import {
  LoadAllUsers,
  LoadAllUsersSuccess,
  LoadAllUsersError,
  LoadUser,
  LoadUserSuccess,
  LoadUserError,
  CreateUser,
  CreateUserSuccess,
  CreateUserError,
  UpdateUser,
  UpdateUserSuccess,
  UpdateUserError,
  DeleteUser,
  DeleteUserSuccess,
  DeleteUserError
}                                 from './user.action';
import { User }                   from '../../../models/admin/access';


@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions) {}

  /**
   * Load All Users
   */
  @Effect()
  loadAllUsers$: Observable<Action> = this.actions$
    .ofType(LOAD_USERS)
    .switchMap(() => Observable.of([]))
    .map(users => new LoadAllUsersSuccess(users))
    .catch((err) => of(new LoadAllUsersError(err)));

  /**
   * Load Single User
   */
  @Effect()
  loadUser$ = this.actions$
    .ofType(LOAD_USER)
    .map((action: LoadUser) => action.payload)
    .switchMap(id => Observable.of(new User()))
    .map(user => new LoadUserSuccess(user))
    .catch((err) => of(new LoadUserError(err)));

  /**
   * Create New User
   */
  @Effect()
  createUser$ = this.actions$
    .ofType(CREATE_USER)
    .map((action: CreateUser) => action.payload)
    .switchMap(newUser => Observable.of(newUser))
    .map((response) => new CreateUserSuccess(response.id))
    .catch((err) => of(new CreateUserError(err)));

  /**
   * Update User
   */
  @Effect()
  updateUser$ = this.actions$
    .ofType(UPDATE_USER)
    .map((action: UpdateUser) => action.payload)
    .switchMap(user => Observable.of(user))
    .map(() => new UpdateUserSuccess())
    .catch((err) => of(new UpdateUserError(err)));

  /**
   * Delete User
   */
  @Effect()
  deleteUser$ = this.actions$
    .ofType(DELETE_USER)
    .map((action: DeleteUser) => action.payload)
    .switchMap(id => Observable.of(new User()))
    .map((user: User) => new DeleteUserSuccess(user))
    .catch((err) => of(new DeleteUserError(err)));
}