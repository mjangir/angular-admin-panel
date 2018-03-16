import * as fromLogin from '../actions/login.action';
import LoginUser from "../../models/login-user.model";
import { TOKEN_NAME } from '../../services/auth.service';

/**
 * Login state interface
 * 
 * @export
 * @interface LoginState
 */
export interface LoginState {
  loading:  boolean,
  loaded:   boolean,
  error:    any,
  token?:   string,
  user?:    LoginUser
}

export const initialState: LoginState = {
  loading:  false,
  loaded:   false,
  error:    null,
  token:    localStorage.getItem(TOKEN_NAME) || ""
}

/**
 * Login reducer
 * 
 * @export
 * @param {LoginState} [state=initialState] 
 * @param {fromLogin.LoginActions} action 
 * @returns {LoginState}
 */
export function reducer(
  state: LoginState = initialState,
  action: fromLogin.LoginActions
): LoginState {

  switch (action.type) {
    case fromLogin.LOGIN: {
      return {
        ...state,
        loaded: false,
        loading: true,
        error: null
      };
    }

    case fromLogin.LOGIN_SUCCESS: {
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        loading: false,
        loaded: true,
        error: null
      };
    }

    case fromLogin.LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload,
        user: null
      };
    }

    case fromLogin.RESET_LOGIN: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: null,
        user: null
      };
    }
  }

  return state;
}

export const getLoginLoading  = (state: LoginState) => state.loading;
export const getLoginLoaded   = (state: LoginState) => state.loaded;
export const getLoginToken    = (state: LoginState) => state.token;
export const getLoginUser     = (state: LoginState) => state.user;
export const getLoginError    = (state: LoginState) => state.error;