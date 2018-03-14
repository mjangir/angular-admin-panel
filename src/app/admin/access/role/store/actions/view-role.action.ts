import { Action } from '@ngrx/store';
import Role       from '../../models/role.model';

export const VIEW_ROLE         = '[Role] View Role';
export const VIEW_ROLE_SUCCESS = '[Role] View Role Success';
export const VIEW_ROLE_ERROR   = '[Role] View Role Error';

/**
 * View role action
 * 
 * @export
 * @class ViewRoleAction
 * @implements {Action}
 */
export class ViewRoleAction implements Action {
  readonly type: string = VIEW_ROLE;

  constructor(public payload: number){}
}

/**
 * Error while viewing role
 * 
 * @export
 * @class ViewRoleErrorAction
 * @implements {Action}
 */
export class ViewRoleErrorAction implements Action {
  readonly type: string = VIEW_ROLE_ERROR;

  constructor(public payload: any){}
}

/**
 * View role succeed
 * 
 * @export
 * @class ViewRoleSuccessAction
 * @implements {Action}
 */
export class ViewRoleSuccessAction implements Action {
  readonly type: string = VIEW_ROLE_SUCCESS;

  constructor(public payload: Role){}
}

// Export action types
export type ViewRoleActions = ViewRoleAction | ViewRoleErrorAction | ViewRoleSuccessAction;