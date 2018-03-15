import { Action } from '@ngrx/store';
import Permission       from '../../models/permission.model';
import PermissionForm   from '../../models/permission-form.model';

export const UPDATE_PERMISSION         = '[Permission] Update Permission';
export const UPDATE_PERMISSION_SUCCESS = '[Permission] Update Permission Success';
export const UPDATE_PERMISSION_ERROR   = '[Permission] Update Permission Error';

/**
 * Update permission action
 * 
 * @export
 * @class UpdatePermissionAction
 * @implements {Action}
 */
export class UpdatePermissionAction implements Action {
  readonly type: string = UPDATE_PERMISSION;

  constructor(public payload: PermissionForm){}
}

/**
 * Error while updating permissions
 * 
 * @export
 * @class UpdatePermissionErrorAction
 * @implements {Action}
 */
export class UpdatePermissionErrorAction implements Action {
  readonly type: string = UPDATE_PERMISSION_ERROR;

  constructor(public payload: any){}
}

/**
 * Permission update succeed
 * 
 * @export
 * @class UpdatePermissionSuccessAction
 * @implements {Action}
 */
export class UpdatePermissionSuccessAction implements Action {
  readonly type: string = UPDATE_PERMISSION_SUCCESS;

  constructor(public payload: Permission){}
}

// Export action types
export type UpdatePermissionActions = UpdatePermissionAction | UpdatePermissionErrorAction | UpdatePermissionSuccessAction;