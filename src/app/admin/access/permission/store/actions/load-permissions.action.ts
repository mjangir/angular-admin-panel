import { Action } from '@ngrx/store';
import Permission       from '../../models/permission.model';

export const LOAD_PERMISSIONS         = '[Permission] Load Permissions';
export const LOAD_PERMISSIONS_SUCCESS = '[Permission] Load Permissions Success';
export const LOAD_PERMISSIONS_ERROR   = '[Permission] Load Permissions Error';
export const ADD_PERMISSION_TO_LIST   = '[Permission] Add Permission To List';
export const RESET_LOAD_PERMISSION    = '[Permission] Reset Load Permission';

/**
 * Load permissions action
 * 
 * @export
 * @class LoadPermissionsAction
 * @implements {Action}
 */
export class LoadPermissionsAction implements Action {
  readonly type: string = LOAD_PERMISSIONS;

  constructor(public payload: any = null) {}
}

/**
 * Error while loading permissions
 * 
 * @export
 * @class LoadPermissionsErrorAction
 * @implements {Action}
 */
export class LoadPermissionsErrorAction implements Action {
  readonly type: string = LOAD_PERMISSIONS_ERROR;

  constructor(public payload: any) {}
}

/**
 * Loading permissions succeed
 * 
 * @export
 * @class LoadPermissionsSuccessAction
 * @implements {Action}
 */
export class LoadPermissionsSuccessAction implements Action {
  readonly type: string = LOAD_PERMISSIONS_SUCCESS;

  constructor(public payload: Array<Permission[]>) {}
}

/**
 * Reset to initial state
 * 
 * @export
 * @class ResetLoadPermissionAction
 * @implements {Action}
 */
export class ResetLoadPermissionAction implements Action {
  readonly type: string = RESET_LOAD_PERMISSION;

  constructor(public payload?: any) {}
}

// Export action types
export type LoadPermissionsActions = LoadPermissionsAction 
                                    | LoadPermissionsErrorAction 
                                    | LoadPermissionsSuccessAction
                                    | ResetLoadPermissionAction;