import * as fromLoadPermissions from '../actions/load-permissions.action';
import Permission from '../../models/permission.model';

/**
 * Load permissions state
 * 
 * @export
 * @interface LoadPermissionsState
 */
export interface LoadPermissionsState {
  loading:  boolean;
  loaded:   boolean;
  failed:   boolean;
  error?:   any;
  data:     Array<Permission>
}

export const initialState: LoadPermissionsState = {
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
 * @param {LoadPermissionsState} [state=initialState] 
 * @param {fromLoadPermissions.LoadPermissionsActions} action 
 * @returns 
 */
export function reducer(
  state: LoadPermissionsState = initialState,
  action: fromLoadPermissions.LoadPermissionsActions
) {

  switch(action.type) {
    case fromLoadPermissions.LOAD_PERMISSIONS: {
      return {
        ...state,
        loading: true,
        loaded: false,
        failed: false
      }
    }

    case fromLoadPermissions.LOAD_PERMISSIONS_ERROR: {
      return {
        ...state,
        failed: true,
        loading: false,
        loaded: false,
        error: action.payload
      }
    }

    case fromLoadPermissions.LOAD_PERMISSIONS_SUCCESS: {
      return {
        ...state,
        failed: false,
        loading: false,
        loaded: true,
        data: action.payload
      }
    }

    case fromLoadPermissions.RESET_LOAD_PERMISSION: {
      return Object.assign({}, initialState);
    }
  }

  return state;
}

export const getLoadPermissionsLoading  = (state: LoadPermissionsState) => state.loading;
export const getLoadPermissionsLoaded   = (state: LoadPermissionsState) => state.loaded;
export const getLoadPermissionsFailed   = (state: LoadPermissionsState) => state.failed;
export const getLoadPermissionsError    = (state: LoadPermissionsState) => state.error;
export const getLoadPermissionsData     = (state: LoadPermissionsState) => state.data;