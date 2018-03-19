import { 
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  combineReducers
}                           from "@ngrx/store";
import * as fromLoadRoles   from '../reducers/load-roles.reducer';
import * as fromCreateRole  from '../reducers/create-role.reducer';
import * as fromUpdateRole  from '../reducers/update-role.reducer';
import * as fromDeleteRole  from '../reducers/delete-role.reducer';
import * as fromViewRole    from '../reducers/view-role.reducer';
import { compose }          from "@ngrx/core/compose";

/**
 * Access role state
 * 
 * @export
 * @interface AccessRoleState
 */
export interface AccessRoleState {
  load:   fromLoadRoles.LoadRolesState;
  create: fromCreateRole.CreateRoleState;
  update: fromUpdateRole.UpdateRoleState;
  view:   fromViewRole.ViewRoleState;
  delete: fromDeleteRole.DeleteRoleState
}

export const reducers: ActionReducerMap<AccessRoleState> = {
  load:   fromLoadRoles.reducer,
  create: fromCreateRole.reducer,
  update: fromUpdateRole.reducer,
  view:   fromViewRole.reducer,
  delete: fromDeleteRole.reducer
}

export const combinedReducers = combineReducers(reducers);

// Main Access Role State
export const getAccessRoleState = createFeatureSelector<AccessRoleState>('accessRole');

// Load Role States
export const getLoadRolesState    = createSelector(getAccessRoleState, (state: AccessRoleState) => state.load);
export const getLoadRolesLoading  = createSelector(getLoadRolesState, fromLoadRoles.getLoadRolesLoading);
export const getLoadRolesLoaded   = createSelector(getLoadRolesState, fromLoadRoles.getLoadRolesLoaded);
export const getLoadRolesFailed   = createSelector(getLoadRolesState, fromLoadRoles.getLoadRolesFailed);
export const getLoadRolesError    = createSelector(getLoadRolesState, fromLoadRoles.getLoadRolesError);
export const getLoadRolesData     = createSelector(getLoadRolesState, fromLoadRoles.getLoadRolesData);

// Create Role States
export const getCreateRoleState   = createSelector(getAccessRoleState, (state: AccessRoleState) => state.create);
export const getCreateRoleLoading = createSelector(getCreateRoleState, fromCreateRole.getCreateRoleLoading);
export const getCreateRoleLoaded  = createSelector(getCreateRoleState, fromCreateRole.getCreateRoleLoaded);
export const getCreateRoleFailed  = createSelector(getCreateRoleState, fromCreateRole.getCreateRoleFailed);
export const getCreateRoleError   = createSelector(getCreateRoleState, fromCreateRole.getCreateRoleError);
export const getCreatedRole       = createSelector(getCreateRoleState, fromCreateRole.getCreatedRole);

// Update Role States
export const getUpdateRoleState   = createSelector(getAccessRoleState, (state: AccessRoleState) => state.update);
export const getUpdateRoleLoading = createSelector(getUpdateRoleState, fromUpdateRole.getUpdateRoleLoading);
export const getUpdateRoleLoaded  = createSelector(getUpdateRoleState, fromUpdateRole.getUpdateRoleLoaded);
export const getUpdateRoleFailed  = createSelector(getUpdateRoleState, fromUpdateRole.getUpdateRoleFailed);
export const getUpdateRoleError   = createSelector(getUpdateRoleState, fromUpdateRole.getUpdateRoleError);
export const getUpdatedRole       = createSelector(getUpdateRoleState, fromUpdateRole.getUpdatedRole);

// View Role States
export const getViewRoleState     = createSelector(getAccessRoleState, (state: AccessRoleState) => state.view);
export const getViewRoleLoading   = createSelector(getViewRoleState, fromViewRole.getViewRoleLoading);
export const getViewRoleLoaded    = createSelector(getViewRoleState, fromViewRole.getViewRoleLoaded);
export const getViewRoleFailed    = createSelector(getViewRoleState, fromViewRole.getViewRoleFailed);
export const getViewRoleError     = createSelector(getViewRoleState, fromViewRole.getViewRoleError);
export const getViewingRole       = createSelector(getViewRoleState, fromViewRole.getViewingRole);

// Delete Role States
export const getDeleteRoleState   = createSelector(getAccessRoleState, (state: AccessRoleState) => state.delete);
export const getDeleteRoleLoading = createSelector(getDeleteRoleState, fromDeleteRole.getDeleteRoleLoading);
export const getDeleteRoleLoaded  = createSelector(getDeleteRoleState, fromDeleteRole.getDeleteRoleLoaded);
export const getDeleteRoleFailed  = createSelector(getDeleteRoleState, fromDeleteRole.getDeleteRoleFailed);
export const getDeleteRoleError   = createSelector(getDeleteRoleState, fromDeleteRole.getDeleteRoleError);

