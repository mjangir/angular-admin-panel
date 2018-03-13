import * as fromCreateUser from '../actions/create-user.action';
import User from '../../models/user.model';

/**
 * Create User State
 * 
 * @export
 * @interface CreateUserState
 */
export interface CreateUserState {
  loading:  boolean;
  loaded:   boolean;
  failed:   boolean;
  error?:   any;
  user:     User;
}

export const initialState: CreateUserState = {
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
 * @param {CreateUserState} [state=initialState] 
 * @param {fromCreateUser.CreateUserActions} action 
 * @returns 
 */
export function reducer(
  state: CreateUserState = initialState,
  action: fromCreateUser.CreateUserActions
) {

  switch(action.type) {
    case fromCreateUser.CREATE_USER: {
      return {
        ...state,
        loading: true,
        loaded: false,
        failed: false
      }
    }

    case fromCreateUser.CREATE_USER_ERROR: {
      return {
        ...state,
        failed: true,
        loading: false,
        loaded: false,
        error: action.payload,
        user: null
      }
    }

    case fromCreateUser.CREATE_USER_SUCCESS: {
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

export const getCreateUserLoading = (state: CreateUserState) => state.loading;
export const getCreateUserLoaded  = (state: CreateUserState) => state.loaded;
export const getCreateUserFailed  = (state: CreateUserState) => state.failed;
export const getCreateUserError   = (state: CreateUserState) => state.error;
export const getCreatedUser       = (state: CreateUserState) => state.user;