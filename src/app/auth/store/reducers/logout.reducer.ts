import * as fromLogout from '../actions/logout.action';

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
        loaded: false,
        error: null
      };
    }

    case fromLogout.LOGOUT_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        error: null
      };
    }

    case fromLogout.LOGOUT_ERROR: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload
      };
    }
  }
  return state;
}

export const getLogoutLoading  = (state: LogoutState) => state.loading;
export const getLogoutLoaded   = (state: LogoutState) => state.loaded;
export const getLogoutError    = (state: LogoutState) => state.error;