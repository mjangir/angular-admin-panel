import { 
  ActionReducerMap,
  createSelector,
  createFeatureSelector
}                           from "@ngrx/store";
import * as fromLoadUsers   from '../reducers/load-users.reducer';
import * as fromCreateUser  from '../reducers/create-user.reducer';
import * as fromUpdateUser  from '../reducers/update-user.reducer';
import * as fromDeleteUser  from '../reducers/delete-user.reducer';
import * as fromViewUser    from '../reducers/view-user.reducer';

/**
 * Access user state
 * 
 * @export
 * @interface AccessUserState
 */
export interface AccessUserState {
  load:   fromLoadUsers.LoadUsersState;
  create: fromCreateUser.CreateUserState;
  update: fromUpdateUser.UpdateUserState;
  view:   fromViewUser.ViewUserState;
  delete: fromDeleteUser.DeleteUserState
}

export const reducers: ActionReducerMap<AccessUserState> = {
  load:   fromLoadUsers.reducer,
  create: fromCreateUser.reducer,
  update: fromUpdateUser.reducer,
  view:   fromViewUser.reducer,
  delete: fromDeleteUser.reducer
}

// Main Access User State
export const getAccessUserState = createFeatureSelector<AccessUserState>('accessUser');

// Load User States
export const getLoadUsersState    = createSelector(getAccessUserState, (state: AccessUserState) => state.load);
export const getLoadUsersLoading  = createSelector(getLoadUsersState, fromLoadUsers.getLoadUsersLoading);
export const getLoadUsersLoaded   = createSelector(getLoadUsersState, fromLoadUsers.getLoadUsersLoaded);
export const getLoadUsersFailed   = createSelector(getLoadUsersState, fromLoadUsers.getLoadUsersFailed);
export const getLoadUsersError    = createSelector(getLoadUsersState, fromLoadUsers.getLoadUsersError);
export const getLoadUsersData     = createSelector(getLoadUsersState, fromLoadUsers.getLoadUsersData);

// Create User States
export const getCreateUserState   = createSelector(getAccessUserState, (state: AccessUserState) => state.create);
export const getCreateUserLoading = createSelector(getCreateUserState, fromCreateUser.getCreateUserLoading);
export const getCreateUserLoaded  = createSelector(getCreateUserState, fromCreateUser.getCreateUserLoaded);
export const getCreateUserFailed  = createSelector(getCreateUserState, fromCreateUser.getCreateUserFailed);
export const getCreateUserError   = createSelector(getCreateUserState, fromCreateUser.getCreateUserError);
export const getCreatedUser       = createSelector(getCreateUserState, fromCreateUser.getCreatedUser);

// Update User States
export const getUpdateUserState   = createSelector(getAccessUserState, (state: AccessUserState) => state.update);
export const getUpdateUserLoading = createSelector(getUpdateUserState, fromUpdateUser.getUpdateUserLoading);
export const getUpdateUserLoaded  = createSelector(getUpdateUserState, fromUpdateUser.getUpdateUserLoaded);
export const getUpdateUserFailed  = createSelector(getUpdateUserState, fromUpdateUser.getUpdateUserFailed);
export const getUpdateUserError   = createSelector(getUpdateUserState, fromUpdateUser.getUpdateUserError);
export const getUpdatedUser       = createSelector(getUpdateUserState, fromUpdateUser.getUpdatedUser);

// View User States
export const getViewUserState     = createSelector(getAccessUserState, (state: AccessUserState) => state.view);
export const getViewUserLoading   = createSelector(getViewUserState, fromViewUser.getViewUserLoading);
export const getViewUserLoaded    = createSelector(getViewUserState, fromViewUser.getViewUserLoaded);
export const getViewUserFailed    = createSelector(getViewUserState, fromViewUser.getViewUserFailed);
export const getViewUserError     = createSelector(getViewUserState, fromViewUser.getViewUserError);
export const getViewingUser       = createSelector(getViewUserState, fromViewUser.getViewingUser);

// Delete User States
export const getDeleteUserState   = createSelector(getAccessUserState, (state: AccessUserState) => state.delete);
export const getDeleteUserLoading = createSelector(getDeleteUserState, fromDeleteUser.getDeleteUserLoading);
export const getDeleteUserLoaded  = createSelector(getDeleteUserState, fromDeleteUser.getDeleteUserLoaded);
export const getDeleteUserFailed  = createSelector(getDeleteUserState, fromDeleteUser.getDeleteUserFailed);
export const getDeleteUserError   = createSelector(getDeleteUserState, fromDeleteUser.getDeleteUserError);

