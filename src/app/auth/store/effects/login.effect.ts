import { Injectable }       from "@angular/core";
import { Effect, Actions }  from '@ngrx/effects';
import { Action }           from '@ngrx/store';
import { switchMap, map }   from 'rxjs/operators';
import { of ,  Observable }               from 'rxjs';
import * as loginActions    from '../actions/login.action';
import { AuthApiClient }    from "../../services/auth-api-client.service";
import LoginForm            from "../../models/login-form.model";

/**
 * Login effects
 * 
 * @export
 * @class LoginEffects
 */
@Injectable()
export class LoginEffects {

  /**
   * Creates an instance of LoginEffects.
   * 
   * @param {Actions} actions$ 
   * @param {AuthApiClient} authApiClient 
   * @memberof LoginEffects
   */
  constructor(
    private actions$: Actions,
    private authApiClient: AuthApiClient
  ) {}

  /**
   * Login user effect
   * 
   * @type {Observable<Action>}
   * @memberof LoginEffects
   */
  @Effect()
  loginUser$: Observable<Action> = this.actions$
  .ofType(loginActions.LOGIN)
  .map((action: loginActions.LoginAction) => action.payload)
  .switchMap(state => {
    return this.authApiClient.login(state)
      .map(token    => new loginActions.LoginSuccessAction(token))
      .catch(error => of(new loginActions.LoginErrorAction(error)));
  });
}