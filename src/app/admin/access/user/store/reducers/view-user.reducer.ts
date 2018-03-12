import * as fromViewUser from '../actions/view-user.action';
import User from '../../models/user.model';

/**
 * View user state
 * 
 * @export
 * @interface ViewUserState
 */
export interface ViewUserState {
  loading: boolean;
  loaded: boolean;
  failed: boolean;
  error?: any,
  user:   User
}

export const initialState: ViewUserState = {
  loading:  false,
  loaded:   false,
  failed:   false,
  error:    null,
  user:     null
}

/**
 * Reducer
 * 
 * @export
 * @param {ViewUserState} [state=initialState] 
 * @param {fromViewUser.ViewUserActions} action 
 * @returns 
 */
export function reducer(
  state: ViewUserState = initialState,
  action: fromViewUser.ViewUserActions
) {

  switch(action.type) {
    case fromViewUser.VIEW_USER: {
      return {
        ...state,
        loading: true,
        loaded: false,
        failed: false
      }
    }

    case fromViewUser.VIEW_USER_ERROR: {
      return {
        ...state,
        loading: false,
        loaded: false,
        failed: true,
        error: action.payload,
        user: null
      }
    }

    case fromViewUser.VIEW_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        failed: false,
        error: null,
        user: action.payload
      }
    }
  }

  return state;
}

export const getViewUserLoading = (state: ViewUserState) => state.loading;
export const getViewUserLoaded  = (state: ViewUserState) => state.loaded;
export const getViewUserFailed  = (state: ViewUserState) => state.failed;
export const getViewUserError   = (state: ViewUserState) => state.error;
export const getViewingUser     = (state: ViewUserState) => state.user;