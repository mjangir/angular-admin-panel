import { Action } from '@ngrx/store';
import Permission       from '../../models/permission.model';
import PermissionForm   from '../../models/permission-form.model';

export const SAVE_PERMISSION          = '[Permission] Save Permission';
export const SAVE_PERMISSION_SUCCESS  = '[Permission] Save Permission Success';
export const SAVE_PERMISSION_ERROR    = '[Permission] Save Permission Error';
export const RESET_SAVE_PERMISSION    = '[Permission] Reset Save Permission';

/**
 * Save permission action
 * 
 * @export
 * @class SavePermissionAction
 * @implements {Action}
 */
export class SavePermissionAction implements Action {
  readonly type: string = SAVE_PERMISSION;

  constructor(public payload: PermissionForm){}
}

/**
 * Error while creating permission
 * 
 * @export
 * @class SavePermissionErrorAction
 * @implements {Action}
 */
export class SavePermissionErrorAction implements Action {
  readonly type: string = SAVE_PERMISSION_ERROR;

  constructor(public payload: any){}
}

/**
 * Permission create succeed
 * 
 * @export
 * @class SavePermissionSuccessAction
 * @implements {Action}
 */
export class SavePermissionSuccessAction implements Action {
  readonly type: string = SAVE_PERMISSION_SUCCESS;

  constructor(public payload: Permission){}
}

/**
 * Reset to initial state
 * 
 * @export
 * @class ResetSavePermissionAction
 * @implements {Action}
 */
export class ResetSavePermissionAction implements Action {
  readonly type: string = RESET_SAVE_PERMISSION;

  constructor(public payload?: any) {}
}

// Export action types
export type SavePermissionActions = SavePermissionAction 
                                      | SavePermissionErrorAction 
                                      | SavePermissionSuccessAction
                                      | ResetSavePermissionAction;