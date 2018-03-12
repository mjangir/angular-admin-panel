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
}