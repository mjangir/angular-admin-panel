import { Injectable }         from "@angular/core";
import { Effect, Actions }    from '@ngrx/effects';
import { Action }             from '@ngrx/store';
import { switchMap, map }     from 'rxjs/operators';
import { of }                 from 'rxjs/observable/of';
import { Observable }         from 'rxjs/Observable';
import { UserApiClient }      from "../../services/user-api-client.service";
import UserForm               from "../../models/user-form.model";
import * as loadUsersActions  from '../actions/load-users.action';
import * as createUserActions from '../actions/create-user.action';
import * as updateUserActions from '../actions/update-user.action';
import * as viewUserActions   from '../actions/view-user.action';
import * as deleteUserActions from '../actions/delete-user.action';

/**
 * Access user effects
 * 
 * @export
 * @class AccessUserEffects
 */
@Injectable()
export class AccessUserEffects {

  /**
   * Creates an instance of AccessUserEffects.
   * 
   * @param {Actions} actions$ 
   * @param {UserApiClient} userApiClient 
   * @memberof AccessUserEffects
   */
  constructor(
    private actions$: Actions,
    private userApiClient: UserApiClient
  ) {}

  /**
   * Load users effect
   * 
   * @type {Observable<Action>}
   * @memberof AccessUserEffects
   */
  @Effect()
  loadUsers$: Observable<Action> = this.actions$
    .ofType(loadUsersActions.LOAD_USERS)
    .switchMap(state => {
      return this.userApiClient.all()
        .map(users => new loadUsersActions.LoadUsersSuccessAction(users))
        .catch(error => of(new loadUsersActions.LoadUsersErrorAction(error)));
    });

  /**
   * Get user effect
   * 
   * @type {Observable<Action>}
   * @memberof AccessUserEffects
   */
  @Effect()
  viewUser$: Observable<Action> = this.actions$
    .ofType(viewUserActions.VIEW_USER)
    .map((action: viewUserActions.ViewUserAction) => action.payload)
    .switchMap(id => {
      return this.userApiClient.get(id)
        .map(user => new viewUserActions.ViewUserSuccessAction(user))
        .catch(error => of(new viewUserActions.ViewUserErrorAction(error)));
    });

  /**
   * Create user effect
   * 
   * @type {Observable<Action>}
   * @memberof AccessUserEffects
   */
  @Effect()
  createUser$: Observable<Action> = this.actions$
    .ofType(createUserActions.CREATE_USER)
    .map((action: createUserActions.CreateUserAction) => action.payload)
    .switchMap(state => {
      return this.userApiClient.create(state)
        .map(user => new createUserActions.CreateUserSuccessAction(user))
        .catch(error => of(new createUserActions.CreateUserErrorAction(error)));
    });

  /**
   * Update user effect
   * 
   * @type {Observable<Action>}
   * @memberof AccessUserEffects
   */
  @Effect()
  updateUser$: Observable<Action> = this.actions$
    .ofType(updateUserActions.UPDATE_USER)
    .map((action: updateUserActions.UpdateUserAction) => action.payload)
    .switchMap(userForm => {
      return this.userApiClient.update(userForm, userForm.id)
        .map(user => new updateUserActions.UpdateUserSuccessAction(user))
        .catch(error => of(new updateUserActions.UpdateUserErrorAction(error)));
    });
}