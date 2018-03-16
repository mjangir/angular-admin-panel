import * as fromUpdatePermission from '../actions/update-permission.action';
import Permission from '../../models/permission.model';

/**
 * Update Permission State
 * 
 * @export
 * @interface UpdatePermissionState
 */
export interface UpdatePermissionState {
  loading:  boolean;
  loaded:   boolean;
  failed:   boolean;
  error?:   any;
  permission:     Permission;
}

export const initialState: UpdatePermissionState = {
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
 * @param {UpdatePermissionState} [state=initialState] 
 * @param {fromUpdatePermission.UpdatePermissionActions} action 
 * @returns 
 */
export function reducer(
  state: UpdatePermissionState = initialState,
  action: fromUpdatePermission.UpdatePermissionActions
) {

  switch(action.type) {
    case fromUpdatePermission.UPDATE_PERMISSION: {
      return {
        ...state,
        loading: true,
        loaded: false,
        failed: false,
        error: null,
        permission: null
      }
    }

    case fromUpdatePermission.UPDATE_PERMISSION_ERROR: {
      return {
        ...state,
        failed: true,
        loading: false,
        loaded: false,
        error: action.payload,
        permission: null
      }
    }

    case fromUpdatePermission.UPDATE_PERMISSION_SUCCESS: {
      return {
        ...state,
        failed: false,
        loading: false,
        loaded: true,
        error: null,
        permission: action.payload
      }
    }
  }

  return state;
}

export const getUpdatePermissionLoading = (state: UpdatePermissionState) => state.loading;
export const getUpdatePermissionLoaded  = (state: UpdatePermissionState) => state.loaded;
export const getUpdatePermissionFailed  = (state: UpdatePermissionState) => state.failed;
export const getUpdatePermissionError   = (state: UpdatePermissionState) => state.error;
export const getUpdatedPermission       = (state: UpdatePermissionState) => state.permission;