import * as fromLoadRoles from '../actions/load-roles.action';
import Role from '../../models/role.model';

/**
 * Load roles state
 * 
 * @export
 * @interface LoadRolesState
 */
export interface LoadRolesState {
  loading:  boolean;
  loaded:   boolean;
  failed:   boolean;
  error?:   any;
  data:     Array<Role>
}

export const initialState: LoadRolesState = {
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
 * @param {LoadRolesState} [state=initialState] 
 * @param {fromLoadRoles.LoadRolesActions} action 
 * @returns 
 */
export function reducer(
  state: LoadRolesState = initialState,
  action: fromLoadRoles.LoadRolesActions
) {

  switch(action.type) {
    case fromLoadRoles.LOAD_ROLES: {
      return {
        ...state,
        loading: true,
        loaded: false,
        failed: false
      }
    }

    case fromLoadRoles.LOAD_ROLES_ERROR: {
      return {
        ...state,
        failed: true,
        loading: false,
        loaded: false,
        error: action.payload
      }
    }

    case fromLoadRoles.LOAD_ROLES_SUCCESS: {
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

export const getLoadRolesLoading  = (state: LoadRolesState) => state.loading;
export const getLoadRolesLoaded   = (state: LoadRolesState) => state.loaded;
export const getLoadRolesFailed   = (state: LoadRolesState) => state.failed;
export const getLoadRolesError    = (state: LoadRolesState) => state.error;
export const getLoadRolesData     = (state: LoadRolesState) => state.data;