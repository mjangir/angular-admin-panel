import { Action } from '@ngrx/store';
import LoginUser  from '../../models/login-user.model';
import LoginForm  from '../../models/login-form.model';

export const LOGIN            = '[Auth] Login';
export const LOGIN_ERROR      = '[Auth] Login Error';
export const LOGIN_SUCCESS    = '[Auth] Login Success';
export const RESET_LOGIN      = '[Auth] Reset Login';

/**
 * Login
 * 
 * @class LoginAction
 * @implements {Action}
 */
export class LoginAction implements Action {
  readonly type: string = LOGIN;

  constructor(public payload: LoginForm) {}
}

/**
 * Login error
 * 
 * @class LoginErrorAction
 * @implements {Action}
 */
export class LoginErrorAction implements Action {
  readonly type: string = LOGIN_ERROR;

  constructor(public payload?: any) {}
}

/**
 * Logged in successfully
 * 
 * @class LoginSuccessAction
 * @implements {Action}
 */
export class LoginSuccessAction implements Action {
  readonly type: string = LOGIN_SUCCESS;

  constructor(public payload: {token: string, user: LoginUser}) {}
}

/**
 * Login reset
 * 
 * @class ResetLoginAction
 * @implements {Action}
 */
export class ResetLoginAction implements Action {
  readonly type: string = RESET_LOGIN;

  constructor(public payload?: any) {}
}

/**
 * Actions type.
 * @type {LoginActions}
 */
export type LoginActions = LoginAction | LoginErrorAction | LoginSuccessAction | ResetLoginAction;