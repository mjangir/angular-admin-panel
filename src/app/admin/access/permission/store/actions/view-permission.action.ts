import { Action } from '@ngrx/store';
import Permission       from '../../models/permission.model';

export const VIEW_PERMISSION          = '[Permission] View Permission';
export const VIEW_PERMISSION_SUCCESS  = '[Permission] View Permission Success';
export const VIEW_PERMISSION_ERROR    = '[Permission] View Permission Error';
export const RESET_VIEW_PERMISSION    = '[Permission] Reset View Permission';

/**
 * View permission action
 * 
 * @export
 * @class ViewPermissionAction
 * @implements {Action}
 */
export class ViewPermissionAction implements Action {
  readonly type: string = VIEW_PERMISSION;

  constructor(public payload: number){}
}

/**
 * Error while viewing permission
 * 
 * @export
 * @class ViewPermissionErrorAction
 * @implements {Action}
 */
export class ViewPermissionErrorAction implements Action {
  readonly type: string = VIEW_PERMISSION_ERROR;

  constructor(public payload: any){}
}

/**
 * View permission succeed
 * 
 * @export
 * @class ViewPermissionSuccessAction
 * @implements {Action}
 */
export class ViewPermissionSuccessAction implements Action {
  readonly type: string = VIEW_PERMISSION_SUCCESS;

  constructor(public payload: Permission){}
}

/**
 * Reset to initial state
 * 
 * @export
 * @class ResetViewPermissionAction
 * @implements {Action}
 */
export class ResetViewPermissionAction implements Action {
  readonly type: string = RESET_VIEW_PERMISSION;

  constructor(public payload?: any) {}
}

// Export action types
export type ViewPermissionActions = ViewPermissionAction 
                                    | ViewPermissionErrorAction 
                                    | ViewPermissionSuccessAction
                                    | ResetViewPermissionAction;