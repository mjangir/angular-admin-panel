import * as fromCreateRole from '../actions/create-role.action';
import Role from '../../models/role.model';

/**
 * Create Role State
 * 
 * @export
 * @interface CreateRoleState
 */
export interface CreateRoleState {
  loading:  boolean;
  loaded:   boolean;
  failed:   boolean;
  error?:   any;
  role:     Role;
}

export const initialState: CreateRoleState = {
  loading:  false,
  loaded:   false,
  failed:   false,
  error:    null,
  role:     null
}

/**
 * Reducer
 * 
 * @export
 * @param {CreateRoleState} [state=initialState] 
 * @param {fromCreateRole.CreateRoleActions} action 
 * @returns 
 */
export function reducer(
  state: CreateRoleState = initialState,
  action: fromCreateRole.CreateRoleActions
) {

  switch(action.type) {
    case fromCreateRole.CREATE_ROLE: {
      return {
        ...state,
        loading: true,
        loaded: false,
        failed: false
      }
    }

    case fromCreateRole.CREATE_ROLE_ERROR: {
      return {
        ...state,
        failed: true,
        loading: false,
        loaded: false,
        error: action.payload,
        role: null
      }
    }

    case fromCreateRole.CREATE_ROLE_SUCCESS: {
      return {
        ...state,
        failed: false,
        loading: false,
        loaded: true,
        error: null,
        role: action.payload
      }
    }
  }

  return state;
}

export const getCreateRoleLoading = (state: CreateRoleState) => state.loading;
export const getCreateRoleLoaded  = (state: CreateRoleState) => state.loaded;
export const getCreateRoleFailed  = (state: CreateRoleState) => state.failed;
export const getCreateRoleError   = (state: CreateRoleState) => state.error;
export const getCreatedRole       = (state: CreateRoleState) => state.role;