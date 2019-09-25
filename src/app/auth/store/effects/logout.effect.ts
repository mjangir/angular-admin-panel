import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { switchMap, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import * as logoutActions from '../actions/logout.action';
import { AuthApiClient } from "../../services/auth-api-client.service";
import { AuthService } from "../../services/auth.service";

/**
 * Logout effects
 *
 * @export
 * @class LogoutEffects
 */
@Injectable()
export class LogoutEffects {

  /**
   * Creates an instance of LogoutEffects.
   *
   * @param {Actions} actions$
   * @param {AuthApiClient} authApiClient
   * @memberof LogoutEffects
   */
  constructor(
    private actions$: Actions,
    private authApiClient: AuthApiClient,
    private authService: AuthService
  ) { }

  /**
   * Logout user effect
   *
   * @type {Observable<Action>}
   * @memberof LogoutEffects
   */
  @Effect()
  logoutUser$: Observable<Action> = this.actions$.pipe(
    ofType(logoutActions.LOGOUT),
    map((action: logoutActions.LogoutAction) => action.payload),
    switchMap(state => {
      this.authService.removeToken();
      return of(new logoutActions.LogoutSuccessAction())
    })
  );
}
