import * as fromDeletePermission from '../actions/delete-permission.action';

/**
 * Delete permission state
 * 
 * @export
 * @interface DeletePermissionState
 */
export interface DeletePermissionState {
  loading: boolean;
  loaded: boolean;
  failed: boolean;
  error?: any
}

export const initialState: DeletePermissionState = {
  loading:  false,
  loaded:   false,
  failed:   false,
  error:    null
}

/**
 * Reducer
 * 
 * @export
 * @param {DeletePermissionState} [state=initialState] 
 * @param {fromDeletePermission.DeletePermissionActions} action 
 * @returns 
 */
export function reducer(
  state: DeletePermissionState = initialState,
  action: fromDeletePermission.DeletePermissionActions
) {

  switch(action.type) {
    case fromDeletePermission.DELETE_PERMISSION: {
      return {
        ...state,
        loading: true,
        loaded: false,
        failed: false
      }
    }

    case fromDeletePermission.DELETE_MULTIPLE_PERMISSION: {
      return {
        ...state,
        loading: true,
        loaded: false,
        failed: false
      }
    }

    case fromDeletePermission.DELETE_PERMISSION_ERROR: {
      return {
        ...state,
        loading: false,
        loaded: false,
        failed: true,
        error: action.payload
      }
    }

    case fromDeletePermission.DELETE_PERMISSION_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        failed: false,
        error: null
      }
    }

    case fromDeletePermission.RESET_DELETE_PERMISSION: {
      return Object.assign({}, initialState);
    }
  }

  return state;
}

export const getDeletePermissionLoading = (state: DeletePermissionState) => state.loading;
export const getDeletePermissionLoaded  = (state: DeletePermissionState) => state.loaded;
export const getDeletePermissionFailed  = (state: DeletePermissionState) => state.failed;
export const getDeletePermissionError   = (state: DeletePermissionState) => state.error;