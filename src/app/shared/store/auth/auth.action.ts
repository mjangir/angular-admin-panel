// import @ngrx
import { Action } from "@ngrx/store";
import LoginUser from "../../models/auth/LoginUser.model";
import RegisterUser from "../../models/auth/RegisterUser.model";

export const LOGIN           = '[Auth] Login';
export const LOGIN_ERROR     = '[Auth] Login Error';
export const LOGIN_SUCCESS   = '[Auth] Login Success';

export const LOGOUT           = '[Auth] Logout';
export const LOGOUT_ERROR     = '[Auth] Logout Error';
export const LOGOUT_SUCCESS   = '[Auth] Logout Success';

export const REGISTER         = '[Auth] Register';
export const REGISTER_ERROR   = '[Auth] Register Error';
export const REGISTER_SUCCES  = '[Auth] Register Success';


/**
 * Login
 * 
 * @class LoginAction
 * @implements {Action}
 */
export class LoginAction implements Action {
  public type: string = LOGIN;

  constructor(public payload: {email: string, password: string}) {}
}

/**
 * Login Error
 * 
 * @class LoginErrorAction
 * @implements {Action}
 */
export class LoginErrorAction implements Action {
  public type: string = LOGIN_ERROR;

  constructor(public payload?: any) {}
}

/**
 * Logged In Successfully
 * 
 * @class LoginSuccessAction
 * @implements {Action}
 */
export class LoginSuccessAction implements Action {
  public type: string = LOGIN_SUCCESS;

  constructor(public payload: {token: string, user: LoginUser}) {}
}

/**
 * Register User
 * 
 * @export
 * @class RegisterAction
 * @implements {Action}
 */
export class RegisterAction implements Action {
  public type: string = REGISTER;

  constructor(public payload: {user: RegisterUser}) { }
}

/**
 * Register Error
 * 
 * @export
 * @class RegisterErrorAction
 * @implements {Action}
 */
export class RegisterErrorAction implements Action {
  public type: string = REGISTER_ERROR;

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
  public type: string = REGISTER_SUCCES;

  constructor(public payload?: any) { }
}

/**
 * Logout
 * 
 * @export
 * @class LogoutAction
 * @implements {Action}
 */
export class LogoutAction implements Action {
  public type: string = LOGOUT;

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
  public type: string = LOGOUT_ERROR;

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
  public type: string = LOGOUT_SUCCESS;

  constructor(public payload?: any) {}
}

/**
 * Actions type.
 * @type {Actions}
 */
export type Actions = LoginAction
  | LoginErrorAction
  | LoginSuccessAction
  | RegisterAction
  | RegisterErrorAction
  | RegisterSuccessAction
  | LogoutAction
  | LogoutErrorAction
  | LogoutSuccessAction;