import { fromLogout } from '../actions';

export interface LogoutState {
  loading:  boolean,
  loaded:   boolean,
  error?:   any
}

export const initialState: LogoutState = {
  loading:  false,
  loaded:   false,
  error:    null
}

/**
 * Logout Reducer
 * 
 * @export
 * @param {LogoutState} [state=initialState] Initial State
 * @param {fromLogout.LogoutActions} action Action
 * @returns {LogoutState}
 */
export function reducer(
  state: LogoutState = initialState,
  action: fromLogout.LogoutActions
): LogoutState {

  switch(action.type) {
    case fromLogout.LOGOUT: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case fromLogout.LOGOUT_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }

    case fromLogout.LOGOUT_ERROR: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload.error
      };
    }
  }
  return state;
}