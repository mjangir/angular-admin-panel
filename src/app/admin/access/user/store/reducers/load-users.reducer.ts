import * as fromLoadUsers from '../actions/load-users.action';
import User from '../../models/user.model';

/**
 * Load users state
 * 
 * @export
 * @interface LoadUsersState
 */
export interface LoadUsersState {
  loading:  boolean;
  loaded:   boolean;
  failed:   boolean;
  error?:   any;
  data:     Array<User>
}

export const initialState: LoadUsersState = {
  loading:  false,
  loaded:   false,
  failed:   false,
  data:     [],
  error:    null
}

/**
 * Reducer
 * 
 * @export
 * @param {LoadUsersState} [state=initialState] 
 * @param {fromLoadUsers.LoadUsersActions} action 
 * @returns 
 */
export function reducer(
  state: LoadUsersState = initialState,
  action: fromLoadUsers.LoadUsersActions
) {

  switch(action.type) {
    case fromLoadUsers.LOAD_USERS: {
      return {
        ...state,
        loading: true,
        loaded: false,
        failed: false
      }
    }

    case fromLoadUsers.LOAD_USERS_ERROR: {
      return {
        ...state,
        failed: true,
        loading: false,
        loaded: false,
        error: action.payload
      }
    }

    case fromLoadUsers.LOAD_USERS_SUCCESS: {
      return {
        ...state,
        failed: false,
        loading: false,
        loaded: true,
        data: action.payload
      }
    }
  }

  return state;
}

export const getLoadUsersLoading  = (state: LoadUsersState) => state.loading;
export const getLoadUsersLoaded   = (state: LoadUsersState) => state.loaded;
export const getLoadUsersFailed   = (state: LoadUsersState) => state.failed;
export const getLoadUsersError    = (state: LoadUsersState) => state.error;
export const getLoadUsersData     = (state: LoadUsersState) => state.data;