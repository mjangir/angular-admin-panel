import * as fromDeleteRole from '../actions/delete-role.action';

/**
 * Delete role state
 * 
 * @export
 * @interface DeleteRoleState
 */
export interface DeleteRoleState {
  loading: boolean;
  loaded: boolean;
  failed: boolean;
  error?: any
}

export const initialState: DeleteRoleState = {
  loading:  false,
  loaded:   false,
  failed:   false,
  error:    null
}

/**
 * Reducer
 * 
 * @export
 * @param {DeleteRoleState} [state=initialState] 
 * @param {fromDeleteRole.DeleteRoleActions} action 
 * @returns 
 */
export function reducer(
  state: DeleteRoleState = initialState,
  action: fromDeleteRole.DeleteRoleActions
) {

  switch(action.type) {
    case fromDeleteRole.DELETE_ROLE: {
      return {
        ...state,
        loading: true,
        loaded: false,
        failed: false
      }
    }

    case fromDeleteRole.DELETE_MULTIPLE_ROLE: {
      return {
        ...state,
        loading: true,
        loaded: false,
        failed: false
      }
    }

    case fromDeleteRole.DELETE_ROLE_ERROR: {
      return {
        ...state,
        loading: false,
        loaded: false,
        failed: true,
        error: action.payload
      }
    }

    case fromDeleteRole.DELETE_ROLE_SUCCESS: {
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

export const getDeleteRoleLoading = (state: DeleteRoleState) => state.loading;
export const getDeleteRoleLoaded  = (state: DeleteRoleState) => state.loaded;
export const getDeleteRoleFailed  = (state: DeleteRoleState) => state.failed;
export const getDeleteRoleError   = (state: DeleteRoleState) => state.error;