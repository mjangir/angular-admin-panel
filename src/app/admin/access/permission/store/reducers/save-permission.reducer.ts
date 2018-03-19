import * as fromSavePermission from '../actions/save-permission.action';
import Permission from '../../models/permission.model';

/**
 * Save Permission State
 * 
 * @export
 * @interface SavePermissionState
 */
export interface SavePermissionState {
  pending:    boolean;
  completed:  boolean;
  error?:     any;
}

export const initialState: SavePermissionState = {
  pending:    false,
  completed:  false,
  error:      null
}

/**
 * Reducer
 * 
 * @export
 * @param {SavePermissionState} [state=initialState] 
 * @param {fromSavePermission.SavePermissionActions} action 
 * @returns 
 */
export function reducer(
  state: SavePermissionState = initialState,
  action: fromSavePermission.SavePermissionActions
) {

  switch(action.type) {
    case fromSavePermission.SAVE_PERMISSION: {
      return {
        ...state,
        pending:    true,
        completed:  false,
        error:      null
      }
    }

    case fromSavePermission.SAVE_PERMISSION_ERROR: {
      return {
        ...state,
        pending:    false,
        completed:  false,
        error:      action.payload
      }
    }

    case fromSavePermission.SAVE_PERMISSION_SUCCESS: {
      return {
        ...state,
        pending:    false,
        completed:  true,
        error:      null
      }
    }

    case fromSavePermission.RESET_SAVE_PERMISSION: {
      return Object.assign({}, initialState);
    }
  }

  return state;
}

export const getSavePermissionPending     = (state: SavePermissionState) => state.pending;
export const getSavePermissionCompleted   = (state: SavePermissionState) => state.completed;
export const getSavePermissionError       = (state: SavePermissionState) => state.error;