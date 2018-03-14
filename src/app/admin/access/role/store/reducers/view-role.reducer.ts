import * as fromViewRole from '../actions/view-role.action';
import Role from '../../models/role.model';

/**
 * View role state
 * 
 * @export
 * @interface ViewRoleState
 */
export interface ViewRoleState {
  loading: boolean;
  loaded: boolean;
  failed: boolean;
  error?: any,
  role:   Role
}

export const initialState: ViewRoleState = {
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
 * @param {ViewRoleState} [state=initialState] 
 * @param {fromViewRole.ViewRoleActions} action 
 * @returns 
 */
export function reducer(
  state: ViewRoleState = initialState,
  action: fromViewRole.ViewRoleActions
) {

  switch(action.type) {
    case fromViewRole.VIEW_ROLE: {
      return {
        ...state,
        loading: true,
        loaded: false,
        failed: false
      }
    }

    case fromViewRole.VIEW_ROLE_ERROR: {
      return {
        ...state,
        loading: false,
        loaded: false,
        failed: true,
        error: action.payload,
        role: null
      }
    }

    case fromViewRole.VIEW_ROLE_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        failed: false,
        error: null,
        role: action.payload
      }
    }
  }

  return state;
}

export const getViewRoleLoading = (state: ViewRoleState) => state.loading;
export const getViewRoleLoaded  = (state: ViewRoleState) => state.loaded;
export const getViewRoleFailed  = (state: ViewRoleState) => state.failed;
export const getViewRoleError   = (state: ViewRoleState) => state.error;
export const getViewingRole     = (state: ViewRoleState) => state.role;