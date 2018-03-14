import * as fromDeleteUser from '../actions/delete-user.action';

/**
 * Delete user state
 * 
 * @export
 * @interface DeleteUserState
 */
export interface DeleteUserState {
  loading: boolean;
  loaded: boolean;
  failed: boolean;
  error?: any
}

export const initialState: DeleteUserState = {
  loading:  false,
  loaded:   false,
  failed:   false,
  error:    null
}

/**
 * Reducer
 * 
 * @export
 * @param {DeleteUserState} [state=initialState] 
 * @param {fromDeleteUser.DeleteUserActions} action 
 * @returns 
 */
export function reducer(
  state: DeleteUserState = initialState,
  action: fromDeleteUser.DeleteUserActions
) {

  switch(action.type) {
    case fromDeleteUser.DELETE_USER: {
      return {
        ...state,
        loading: true,
        loaded: false,
        failed: false
      }
    }

    case fromDeleteUser.DELETE_MULTIPLE_USER: {
      return {
        ...state,
        loading: true,
        loaded: false,
        failed: false
      }
    }

    case fromDeleteUser.DELETE_USER_ERROR: {
      return {
        ...state,
        loading: false,
        loaded: false,
        failed: true,
        error: action.payload
      }
    }

    case fromDeleteUser.DELETE_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        failed: false,
        error: null
      }
    }
  }

  return state;
}

export const getDeleteUserLoading = (state: DeleteUserState) => state.loading;
export const getDeleteUserLoaded  = (state: DeleteUserState) => state.loaded;
export const getDeleteUserFailed  = (state: DeleteUserState) => state.failed;
export const getDeleteUserError   = (state: DeleteUserState) => state.error;