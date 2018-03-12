import { Action } from '@ngrx/store';
import RegisterForm from '../../models/register-form.model';

export const REGISTER         = '[Auth] Register';
export const REGISTER_ERROR   = '[Auth] Register Error';
export const REGISTER_SUCCES  = '[Auth] Register Success';

/**
 * Register User
 * 
 * @export
 * @class RegisterAction
 * @implements {Action}
 */
export class RegisterAction implements Action {
  readonly type: string = REGISTER;

  constructor(public payload: RegisterForm) { }
}

/**
 * Register Error
 * 
 * @export
 * @class RegisterErrorAction
 * @implements {Action}
 */
export class RegisterErrorAction implements Action {
  readonly type: string = REGISTER_ERROR;

  constructor(public payload?: any) { }
}

/**
 * Registered Successfully
 * 
 * @export
 * @class RegisterSuccessAction
 * @implements {Action}
 */
export class RegisterSuccessAction implements Action {
  readonly type: string = REGISTER_SUCCES;

  constructor(public payload?: any) { }
}

/**
 * Actions type.
 * @type {RegisterActions}
 */
export type RegisterActions = | RegisterAction | RegisterErrorAction | RegisterSuccessAction;