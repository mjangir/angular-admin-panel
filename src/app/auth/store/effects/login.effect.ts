import { Injectable }       from "@angular/core";
import { Effect, Actions }  from '@ngrx/effects';
import { Action }           from '@ngrx/store';
import { switchMap, map }   from 'rxjs/operators';
import { of }               from 'rxjs/observable/of';
import { Observable }       from 'rxjs/Observable';
import * as loginActions    from '../actions/login.action';
import { AuthApiClient }    from "../../services/auth-api-client.service";
import LoginForm from "../../models/login-form.model";

@Injectable()
export class LoginEffects {

  constructor(
    private actions$: Actions,
    private authApiClient: AuthApiClient
  ) {}

  @Effect()
  loginUser$: Observable<Action> = this.actions$
  .ofType(loginActions.LOGIN)
  .map((action: loginActions.LoginAction) => action.payload)
  .switchMap((payload: LoginForm) => this.authApiClient.login(payload))
  .map(token => new loginActions.LoginSuccessAction(token))
  .catch((err) => of(new loginActions.LoginErrorAction(err)));
}