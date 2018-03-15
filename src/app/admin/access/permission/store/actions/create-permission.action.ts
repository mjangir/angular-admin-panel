import { Action } from '@ngrx/store';
import Permission       from '../../models/permission.model';
import PermissionForm   from '../../models/permission-form.model';

export const CREATE_PERMISSION         = '[Permission] Create Permission';
export const CREATE_PERMISSION_SUCCESS = '[Permission] Create Permission Success';
export const CREATE_PERMISSION_ERROR   = '[Permission] Create Permission Error';

/**
 * Create permission action
 * 
 * @export
 * @class CreatePermissionAction
 * @implements {Action}
 */
export class CreatePermissionAction implements Action {
  readonly type: string = CREATE_PERMISSION;

  constructor(public payload: PermissionForm){}
}

/**
 * Error while creating permission
 * 
 * @export
 * @class CreatePermissionErrorAction
 * @implements {Action}
 */
export class CreatePermissionErrorAction implements Action {
  readonly type: string = CREATE_PERMISSION_ERROR;

  constructor(public payload: any){}
}

/**
 * Permission create succeed
 * 
 * @export
 * @class CreatePermissionSuccessAction
 * @implements {Action}
 */
export class CreatePermissionSuccessAction implements Action {
  readonly type: string = CREATE_PERMISSION_SUCCESS;

  constructor(public payload: Permission){}
}

// Export action types
export type CreatePermissionActions = CreatePermissionAction | CreatePermissionErrorAction | CreatePermissionSuccessAction;