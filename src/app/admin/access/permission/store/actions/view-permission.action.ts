import { Action } from '@ngrx/store';
import Permission       from '../../models/permission.model';

export const VIEW_PERMISSION         = '[Permission] View Permission';
export const VIEW_PERMISSION_SUCCESS = '[Permission] View Permission Success';
export const VIEW_PERMISSION_ERROR   = '[Permission] View Permission Error';

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

// Export action types
export type ViewPermissionActions = ViewPermissionAction | ViewPermissionErrorAction | ViewPermissionSuccessAction;