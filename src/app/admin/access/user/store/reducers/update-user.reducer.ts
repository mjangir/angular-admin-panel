import * as fromUpdateUser from '../actions/update-user.action';
import User from '../../models/user.model';

/**
 * Update User State
 * 
 * @export
 * @interface UpdateUserState
 */
export interface UpdateUserState {
  loading:  boolean;
  loaded:   boolean;
  failed:   boolean;
  error?:   any;
  user:     User;
}

export const initialState: UpdateUserState = {
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
 * @param {UpdateUserState} [state=initialState] 
 * @param {fromUpdateUser.UpdateUserActions} action 
 * @returns 
 */
export function reducer(
  state: UpdateUserState = initialState,
  action: fromUpdateUser.UpdateUserActions
) {

  switch(action.type) {
    case fromUpdateUser.UPDATE_USER: {
      return {
        ...state,
        loading: true,
        loaded: false,
        failed: false
      }
    }

    case fromUpdateUser.UPDATE_USER_ERROR: {
      return {
        ...state,
        failed: true,
        loading: false,
        loaded: false,
        error: action.payload,
        user: null
      }
    }

    case fromUpdateUser.UPDATE_USER_SUCCESS: {
      return {
        ...state,
        failed: false,
        loading: false,
        loaded: true,
        error: null,
        user: action.payload
      }
    }
  }

  return state;
}

export const getUpdateUserLoading = (state: UpdateUserState) => state.loading;
export const getUpdateUserLoaded  = (state: UpdateUserState) => state.loaded;
export const getUpdateUserFailed  = (state: UpdateUserState) => state.failed;
export const getUpdateUserError   = (state: UpdateUserState) => state.error;
export const getUpdatedUser       = (state: UpdateUserState) => state.user;