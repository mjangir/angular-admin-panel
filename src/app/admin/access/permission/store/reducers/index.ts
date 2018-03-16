import { 
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  combineReducers
}                                 from "@ngrx/store";
import * as fromLoadPermissions   from '../reducers/load-permissions.reducer';
import * as fromCreatePermission  from '../reducers/create-permission.reducer';
import * as fromUpdatePermission  from '../reducers/update-permission.reducer';
import * as fromDeletePermission  from '../reducers/delete-permission.reducer';
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
  create: fromCreatePermission.CreatePermissionState;
  update: fromUpdatePermission.UpdatePermissionState;
  view:   fromViewPermission.ViewPermissionState;
  delete: fromDeletePermission.DeletePermissionState
}

export const reducers: ActionReducerMap<AccessPermissionState> = {
  load:   fromLoadPermissions.reducer,
  create: fromCreatePermission.reducer,
  update: fromUpdatePermission.reducer,
  view:   fromViewPermission.reducer,
  delete: fromDeletePermission.reducer
}

export const combinedReducers = compose(combineReducers)(reducers);

// Main Access Permission State
export const getAccessPermissionState = createFeatureSelector<AccessPermissionState>('accessPermission');

// Load Permission States
export const getLoadPermissionsState    = createSelector(getAccessPermissionState, (state: AccessPermissionState) => state.load);
export const getLoadPermissionsLoading  = createSelector(getLoadPermissionsState, fromLoadPermissions.getLoadPermissionsLoading);
export const getLoadPermissionsLoaded   = createSelector(getLoadPermissionsState, fromLoadPermissions.getLoadPermissionsLoaded);
export const getLoadPermissionsFailed   = createSelector(getLoadPermissionsState, fromLoadPermissions.getLoadPermissionsFailed);
export const getLoadPermissionsError    = createSelector(getLoadPermissionsState, fromLoadPermissions.getLoadPermissionsError);
export const getLoadPermissionsData     = createSelector(getLoadPermissionsState, fromLoadPermissions.getLoadPermissionsData);

// Create Permission States
export const getCreatePermissionState   = createSelector(getAccessPermissionState, (state: AccessPermissionState) => state.create);
export const getCreatePermissionLoading = createSelector(getCreatePermissionState, fromCreatePermission.getCreatePermissionLoading);
export const getCreatePermissionLoaded  = createSelector(getCreatePermissionState, fromCreatePermission.getCreatePermissionLoaded);
export const getCreatePermissionFailed  = createSelector(getCreatePermissionState, fromCreatePermission.getCreatePermissionFailed);
export const getCreatePermissionError   = createSelector(getCreatePermissionState, fromCreatePermission.getCreatePermissionError);
export const getCreatedPermission       = createSelector(getCreatePermissionState, fromCreatePermission.getCreatedPermission);

// Update Permission States
export const getUpdatePermissionState   = createSelector(getAccessPermissionState, (state: AccessPermissionState) => state.update);
export const getUpdatePermissionLoading = createSelector(getUpdatePermissionState, fromUpdatePermission.getUpdatePermissionLoading);
export const getUpdatePermissionLoaded  = createSelector(getUpdatePermissionState, fromUpdatePermission.getUpdatePermissionLoaded);
export const getUpdatePermissionFailed  = createSelector(getUpdatePermissionState, fromUpdatePermission.getUpdatePermissionFailed);
export const getUpdatePermissionError   = createSelector(getUpdatePermissionState, fromUpdatePermission.getUpdatePermissionError);
export const getUpdatedPermission       = createSelector(getUpdatePermissionState, fromUpdatePermission.getUpdatedPermission);

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

