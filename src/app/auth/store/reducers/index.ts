import { 
  ActionReducerMap,
  createSelector,
  createFeatureSelector
}                           from "@ngrx/store";
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

// Main Auth State
export const getAuthState = createFeatureSelector<AuthState>('auth');

// All Login States
export const getLoginState    = createSelector(getAuthState, (state: AuthState) => state.login);
export const getLoginLoading  = createSelector(getLoginState, fromLogin.getLoginLoading);
export const getLoginLoaded   = createSelector(getLoginState, fromLogin.getLoginLoaded);
export const getLoginToken    = createSelector(getLoginState, fromLogin.getLoginToken);
export const getLoginUser     = createSelector(getLoginState, fromLogin.getLoginUser);
export const getLoginError    = createSelector(getLoginState, fromLogin.getLoginError);

// All Register States
export const getRegisterState    = createSelector(getAuthState, (state: AuthState) => state.register);
export const getRegisterLoading  = createSelector(getRegisterState, fromRegister.getRegisterLoading);
export const getRegisterLoaded   = createSelector(getRegisterState, fromRegister.getRegisterLoaded);
export const getRegisterError    = createSelector(getRegisterState, fromRegister.getRegisterError);

// All Logout States
export const getLogoutState    = createSelector(getAuthState, (state: AuthState) => state.logout);
export const getLogoutLoading  = createSelector(getLogoutState, fromLogout.getLogoutLoading);
export const getLogoutLoaded   = createSelector(getLogoutState, fromLogout.getLogoutLoaded);
export const getLogoutError    = createSelector(getLogoutState, fromLogout.getLogoutError);