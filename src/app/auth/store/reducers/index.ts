import { ActionReducerMap } from "@ngrx/store";
import * as fromLogin       from "./login.reducer";
import * as fromRegister    from "./register.reducer";
import * as fromLogout      from "./logout.reducer";
import * as fromForgot      from "./forgot.reducer";

/**
 * Auth State
 * 
 * @export
 * @interface AuthState
 */
export interface AuthState {
  login:          fromLogin.LoginState,
  register:       fromRegister.RegisterState,
  forgotPassword: fromForgot.ForgotState,
  logout:         fromLogout.LogoutState
}

export const reducers: ActionReducerMap<AuthState> = {
  login:          fromLogin.reducer,
  register:       fromRegister.reducer,
  forgotPassword: fromForgot.reducer,
  logout:         fromLogout.reducer
}