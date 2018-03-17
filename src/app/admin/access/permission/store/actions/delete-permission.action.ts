import { Action } from '@ngrx/store';

export const DELETE_PERMISSION          = '[Permission] Delete Permission';
export const DELETE_MULTIPLE_PERMISSION = '[Permission] Delete Multiple Permission';
export const DELETE_PERMISSION_SUCCESS  = '[Permission] Delete Permission Success';
export const DELETE_PERMISSION_ERROR    = '[Permission] Delete Permission Error';
export const RESET_DELETE_PERMISSION    = '[Permission] Reset Delete Permission';

/**
 * Delete permission action
 * 
 * @export
 * @class DeletePermissionAction
 * @implements {Action}
 */
export class DeletePermissionAction implements Action {
  readonly type: string = DELETE_PERMISSION;

  constructor(public payload: number){}
}

/**
 * Delete multiple permission action
 * 
 * @export
 * @class DeleteMultiplePermissionAction
 * @implements {Action}
 */
export class DeleteMultiplePermissionAction implements Action {
  readonly type: string = DELETE_MULTIPLE_PERMISSION;

  constructor(public payload: {ids: Array<number>}){}
}

/**
 * Error while deleting permission
 * 
 * @export
 * @class DeletePermissionErrorAction
 * @implements {Action}
 */
export class DeletePermissionErrorAction implements Action {
  readonly type: string = DELETE_PERMISSION_ERROR;

  constructor(public payload: any){}
}

/**
 * Delete permission succeed
 * 
 * @export
 * @class DeletePermissionSuccessAction
 * @implements {Action}
 */
export class DeletePermissionSuccessAction implements Action {
  readonly type: string = DELETE_PERMISSION_SUCCESS;

  constructor(public payload?: any){}
}

/**
 * Reset to initial state
 * 
 * @export
 * @class ResetDeletePermissionAction
 * @implements {Action}
 */
export class ResetDeletePermissionAction implements Action {
  readonly type: string = RESET_DELETE_PERMISSION;

  constructor(public payload?: any) {}
}

// Export action types
export type DeletePermissionActions = DeletePermissionAction 
                                | DeletePermissionErrorAction 
                                | DeletePermissionSuccessAction
                                | DeleteMultiplePermissionAction
                                | ResetDeletePermissionAction;