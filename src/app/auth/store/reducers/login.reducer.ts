import { fromLogin } from '../actions';
import LoginUser from "../../models/login-user.model";

/**
 * Login State Interface
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
  error:    null
}

/**
 * Login Reducer
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
        loading: true
      };
    }

    case fromLogin.LOGIN_SUCCESS: {
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        loading: false,
        loaded: true
      };
    }

    case fromLogin.LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }

  return state;
}