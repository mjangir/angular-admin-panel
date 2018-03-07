import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Injectable }             from '@angular/core';
import { Effect, Actions }        from '@ngrx/effects';
import { Action }                 from '@ngrx/store';
import { Observable }             from 'rxjs/Observable';
import { of }                     from 'rxjs/observable/of';
import {
  LOAD_USERS,
  LOAD_USER,
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER
}                               from './user.action';
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
}                               from './user.action';
import { User }                 from '../../../models/admin/access';


@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions) {}

  @Effect()
  loadAllUsers$: Observable<Action> = this.actions$
    .ofType(LOAD_USERS)
    .switchMap(() => Observable.of([]))
    .map(users => new LoadAllUsersSuccess(users))
    .catch((err) => of(new LoadAllUsersError(err)));

  @Effect()
  loadUser$ = this.actions$
    .ofType(LOAD_USER)
    .map((action: LoadUser) => action.payload)
    .switchMap(id => Observable.of(new User()))
    .map(user => new LoadUserSuccess(user))
    .catch((err) => [new GetGameError(err)]);

  @Effect()
  updateGame$ = this.actions$
    .ofType(gameActions.UPDATE_GAME)
    .map((action: UpdateGame) => action.payload)
    .switchMap(game => this.svc.update(game))
    .map(() => new UpdateGameSuccess())
    .catch((err) => [new UpdateGameError(err)]);

  @Effect()
  createGame$ = this.actions$
    .ofType(gameActions.CREATE_GAME)
    .map((action: AddGame) => action.payload)
    .switchMap(newGame => this.svc.insert(newGame))
    .map((response) => new AddGameSuccess(response.id))
    .catch((err) => [new AddGameError(err)]);

  @Effect()
  removeGame$ = this.actions$
    .ofType(gameActions.DELETE_GAME)
    .map((action: RemoveGame) => action.payload)
    .switchMap(id => this.svc.delete(id))
    .map((hero: Game) => new RemoveGameSuccess(hero))
    .catch((err) => [new RemoveGameError(err)]);
}