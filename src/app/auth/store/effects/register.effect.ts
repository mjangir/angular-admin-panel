import { Injectable }       from "@angular/core";
import { Effect, Actions }  from '@ngrx/effects';
import { Action }           from '@ngrx/store';
import { switchMap, map }   from 'rxjs/operators';
import { of ,  Observable }               from 'rxjs';
import * as registerActions from '../actions/register.action';
import { AuthApiClient }    from "../../services/auth-api-client.service";
import { RegisterForm }     from "../../models/register-form.model";

/**
 * Register effects
 * 
 * @export
 * @class RegisterEffects
 */
@Injectable()
export class RegisterEffects {

  /**
   * Creates an instance of RegisterEffects.
   * 
   * @param {Actions} actions$ 
   * @param {AuthApiClient} authApiClient 
   * @memberof RegisterEffects
   */
  constructor(
    private actions$: Actions,
    private authApiClient: AuthApiClient
  ) {}

  /**
   * Register user effect
   * 
   * @type {Observable<Action>}
   * @memberof RegisterEffects
   */
  @Effect()
  registerUser$: Observable<Action> = this.actions$
  .ofType(registerActions.REGISTER)
  .map((action: registerActions.RegisterAction) => action.payload)
  .switchMap(state => {
    return this.authApiClient.register(state)
      .map(token    => new registerActions.RegisterSuccessAction(token))
      .catch(error => of(new registerActions.RegisterErrorAction(error)));
  });
}