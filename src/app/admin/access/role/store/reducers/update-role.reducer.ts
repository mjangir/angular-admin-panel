import * as fromUpdateRole from '../actions/update-role.action';
import Role from '../../models/role.model';

/**
 * Update Role State
 * 
 * @export
 * @interface UpdateRoleState
 */
export interface UpdateRoleState {
  loading:  boolean;
  loaded:   boolean;
  failed:   boolean;
  error?:   any;
  role:     Role;
}

export const initialState: UpdateRoleState = {
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
 * @param {UpdateRoleState} [state=initialState] 
 * @param {fromUpdateRole.UpdateRoleActions} action 
 * @returns 
 */
export function reducer(
  state: UpdateRoleState = initialState,
  action: fromUpdateRole.UpdateRoleActions
) {

  switch(action.type) {
    case fromUpdateRole.UPDATE_ROLE: {
      return {
        ...state,
        loading: true,
        loaded: false,
        failed: false,
        error: null,
        role: null
      }
    }

    case fromUpdateRole.UPDATE_ROLE_ERROR: {
      return {
        ...state,
        failed: true,
        loading: false,
        loaded: false,
        error: action.payload,
        role: null
      }
    }

    case fromUpdateRole.UPDATE_ROLE_SUCCESS: {
      return {
        ...state,
        failed: false,
        loading: false,
        loaded: true,
        error: null,
        role: action.payload
      }
    }

    case fromUpdateRole.RESET_UPDATE_ROLE: {
      return Object.assign({}, initialState);
    }
  }

  return state;
}

export const getUpdateRoleLoading = (state: UpdateRoleState) => state.loading;
export const getUpdateRoleLoaded  = (state: UpdateRoleState) => state.loaded;
export const getUpdateRoleFailed  = (state: UpdateRoleState) => state.failed;
export const getUpdateRoleError   = (state: UpdateRoleState) => state.error;
export const getUpdatedRole       = (state: UpdateRoleState) => state.role;