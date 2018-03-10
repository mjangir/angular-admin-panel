import { Action } from '@ngrx/store';
import { ForgotPasswordForm } from '../../models/forgot-password-form.model';

export const FORGOT_PASSWORD          = '[Auth] Forgot Password';
export const FORGOT_PASSWORD_ERROR    = '[Auth] Forgot Password Error';
export const FORGOT_PASSWORD_SUCCCESS = '[Auth] Forgot Password Success';

/**
 * Forgot Password Action
 * 
 * @export
 * @class ForgotPasswordAction
 * @implements {Action}
 */
export class ForgotPasswordAction implements Action {
  readonly type: string = FORGOT_PASSWORD;

  constructor(public payload: ForgotPasswordForm) {}
}

/**
 * Forgot Password Error Action
 * 
 * @export
 * @class ForgotPasswordErrorAction
 * @implements {Action}
 */
export class ForgotPasswordErrorAction implements Action {
  readonly type: string = FORGOT_PASSWORD_ERROR;

  constructor(public payload?: any) {}
}

/**
 * Forgot Password Success Action
 * 
 * @export
 * @class ForgotPasswordSuccessAction
 * @implements {Action}
 */
export class ForgotPasswordSuccessAction implements Action {
  readonly type: string = FORGOT_PASSWORD_SUCCCESS;

  constructor(public payload: any) {}
}

/**
 * Actions type.
 * @type {ForgotPasswordActions}
 */
export type ForgotPasswordActions = ForgotPasswordAction | ForgotPasswordErrorAction | ForgotPasswordSuccessAction;