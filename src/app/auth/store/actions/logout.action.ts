import { Action } from '@ngrx/store';

export const LOGOUT           = '[Auth] Logout';
export const LOGOUT_ERROR     = '[Auth] Logout Error';
export const LOGOUT_SUCCESS   = '[Auth] Logout Success';

/**
 * Logout
 * 
 * @export
 * @class LogoutAction
 * @implements {Action}
 */
export class LogoutAction implements Action {
  readonly type: string = LOGOUT;

  constructor(public payload?: any) {}
}

/**
 * Logout Error
 * 
 * @export
 * @class SignOutErrorAction
 * @implements {Action}
 */
export class LogoutErrorAction implements Action {
  readonly type: string = LOGOUT_ERROR;

  constructor(public payload?: any) {}
}

/**
 * Logged Out Successfully
 * 
 * @export
 * @class SignOutSuccessAction
 * @implements {Action}
 */
export class LogoutSuccessAction implements Action {
  readonly type: string = LOGOUT_SUCCESS;

  constructor(public payload?: any) {}
}

/**
 * Actions type.
 * @type {LogoutActions}
 */
export type LogoutActions = LogoutAction | LogoutErrorAction | LogoutSuccessAction;