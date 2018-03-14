import * as fromViewPermission from '../actions/view-permission.action';
import Permission from '../../models/permission.model';

/**
 * View permission state
 * 
 * @export
 * @interface ViewPermissionState
 */
export interface ViewPermissionState {
  loading: boolean;
  loaded: boolean;
  failed: boolean;
  error?: any,
  permission:   Permission
}

export const initialState: ViewPermissionState = {
  loading:  false,
  loaded:   false,
  failed:   false,
  error:    null,
  permission:     null
}

/**
 * Reducer
 * 
 * @export
 * @param {ViewPermissionState} [state=initialState] 
 * @param {fromViewPermission.ViewPermissionActions} action 
 * @returns 
 */
export function reducer(
  state: ViewPermissionState = initialState,
  action: fromViewPermission.ViewPermissionActions
) {

  switch(action.type) {
    case fromViewPermission.VIEW_PERMISSION: {
      return {
        ...state,
        loading: true,
        loaded: false,
        failed: false
      }
    }

    case fromViewPermission.VIEW_PERMISSION_ERROR: {
      return {
        ...state,
        loading: false,
        loaded: false,
        failed: true,
        error: action.payload,
        permission: null
      }
    }

    case fromViewPermission.VIEW_PERMISSION_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        failed: false,
        error: null,
        permission: action.payload
      }
    }
  }

  return state;
}

export const getViewPermissionLoading = (state: ViewPermissionState) => state.loading;
export const getViewPermissionLoaded  = (state: ViewPermissionState) => state.loaded;
export const getViewPermissionFailed  = (state: ViewPermissionState) => state.failed;
export const getViewPermissionError   = (state: ViewPermissionState) => state.error;
export const getViewingPermission     = (state: ViewPermissionState) => state.permission;