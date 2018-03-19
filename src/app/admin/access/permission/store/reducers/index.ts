import { 
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  combineReducers
}                                 from "@ngrx/store";
import * as fromLoadPermissions   from '../reducers/load-permissions.reducer';
import * as fromDeletePermission  from '../reducers/delete-permission.reducer';
import * as fromSavePermission    from '../reducers/save-permission.reducer';
import * as fromViewPermission    from '../reducers/view-permission.reducer';
import { compose }                from "@ngrx/core/compose";

/**
 * Access permission state
 * 
 * @export
 * @interface AccessPermissionState
 */
export interface AccessPermissionState {
  load:   fromLoadPermissions.LoadPermissionsState;
  view:   fromViewPermission.ViewPermissionState;
  delete: fromDeletePermission.DeletePermissionState;
  save:   fromSavePermission.SavePermissionState
}

export const reducers: ActionReducerMap<AccessPermissionState> = {
  load:   fromLoadPermissions.reducer,
  view:   fromViewPermission.reducer,
  delete: fromDeletePermission.reducer,
  save:   fromSavePermission.reducer
}

export const combinedReducers = combineReducers(reducers);

// Main Access Permission State
export const getAccessPermissionState = createFeatureSelector<AccessPermissionState>('accessPermission');

// Load Permission States
export const getLoadPermissionsState    = createSelector(getAccessPermissionState, (state: AccessPermissionState) => state.load);
export const getLoadPermissionsLoading  = createSelector(getLoadPermissionsState, fromLoadPermissions.getLoadPermissionsLoading);
export const getLoadPermissionsLoaded   = createSelector(getLoadPermissionsState, fromLoadPermissions.getLoadPermissionsLoaded);
export const getLoadPermissionsFailed   = createSelector(getLoadPermissionsState, fromLoadPermissions.getLoadPermissionsFailed);
export const getLoadPermissionsError    = createSelector(getLoadPermissionsState, fromLoadPermissions.getLoadPermissionsError);
export const getLoadPermissionsData     = createSelector(getLoadPermissionsState, fromLoadPermissions.getLoadPermissionsData);

// View Permission States
export const getViewPermissionState     = createSelector(getAccessPermissionState, (state: AccessPermissionState) => state.view);
export const getViewPermissionLoading   = createSelector(getViewPermissionState, fromViewPermission.getViewPermissionLoading);
export const getViewPermissionLoaded    = createSelector(getViewPermissionState, fromViewPermission.getViewPermissionLoaded);
export const getViewPermissionFailed    = createSelector(getViewPermissionState, fromViewPermission.getViewPermissionFailed);
export const getViewPermissionError     = createSelector(getViewPermissionState, fromViewPermission.getViewPermissionError);
export const getViewingPermission       = createSelector(getViewPermissionState, fromViewPermission.getViewingPermission);

// Delete Permission States
export const getDeletePermissionState   = createSelector(getAccessPermissionState, (state: AccessPermissionState) => state.delete);
export const getDeletePermissionLoading = createSelector(getDeletePermissionState, fromDeletePermission.getDeletePermissionLoading);
export const getDeletePermissionLoaded  = createSelector(getDeletePermissionState, fromDeletePermission.getDeletePermissionLoaded);
export const getDeletePermissionFailed  = createSelector(getDeletePermissionState, fromDeletePermission.getDeletePermissionFailed);
export const getDeletePermissionError   = createSelector(getDeletePermissionState, fromDeletePermission.getDeletePermissionError);

// Save Permission States
export const getSavePermissionState     = createSelector(getAccessPermissionState, (state: AccessPermissionState) => state.save);
export const getSavePermissionPending   = createSelector(getSavePermissionState, fromSavePermission.getSavePermissionPending);
export const getSavePermissionCompleted = createSelector(getSavePermissionState, fromSavePermission.getSavePermissionCompleted);
export const getSavePermissionError     = createSelector(getSavePermissionState, fromSavePermission.getSavePermissionError);

