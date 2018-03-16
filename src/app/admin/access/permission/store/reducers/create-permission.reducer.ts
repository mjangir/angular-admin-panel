import * as fromCreatePermission from '../actions/create-permission.action';
import Permission from '../../models/permission.model';

/**
 * Create Permission State
 * 
 * @export
 * @interface CreatePermissionState
 */
export interface CreatePermissionState {
  loading:  boolean;
  loaded:   boolean;
  failed:   boolean;
  error?:   any;
  permission:     Permission;
}

export const initialState: CreatePermissionState = {
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
 * @param {CreatePermissionState} [state=initialState] 
 * @param {fromCreatePermission.CreatePermissionActions} action 
 * @returns 
 */
export function reducer(
  state: CreatePermissionState = initialState,
  action: fromCreatePermission.CreatePermissionActions
) {

  switch(action.type) {
    case fromCreatePermission.CREATE_PERMISSION: {
      return {
        ...state,
        loading: true,
        loaded: false,
        failed: false,
        error: null,
        permission: null
      }
    }

    case fromCreatePermission.CREATE_PERMISSION_ERROR: {
      return {
        ...state,
        failed: true,
        loading: false,
        loaded: false,
        error: action.payload,
        permission: null
      }
    }

    case fromCreatePermission.CREATE_PERMISSION_SUCCESS: {
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

export const getCreatePermissionLoading = (state: CreatePermissionState) => state.loading;
export const getCreatePermissionLoaded  = (state: CreatePermissionState) => state.loaded;
export const getCreatePermissionFailed  = (state: CreatePermissionState) => state.failed;
export const getCreatePermissionError   = (state: CreatePermissionState) => state.error;
export const getCreatedPermission       = (state: CreatePermissionState) => state.permission;