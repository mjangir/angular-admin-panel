import { Action } from '@ngrx/store';
import Role       from '../../models/role.model';
import RoleForm   from '../../models/role-form.model';

export const UPDATE_ROLE          = '[Role] Update Role';
export const UPDATE_ROLE_SUCCESS  = '[Role] Update Role Success';
export const UPDATE_ROLE_ERROR    = '[Role] Update Role Error';
export const RESET_UPDATE_ROLE    = '[Role] Reset Update Error'

/**
 * Update role action
 * 
 * @export
 * @class UpdateRoleAction
 * @implements {Action}
 */
export class UpdateRoleAction implements Action {
  readonly type: string = UPDATE_ROLE;

  constructor(public payload: RoleForm){}
}

/**
 * Error while updating roles
 * 
 * @export
 * @class UpdateRoleErrorAction
 * @implements {Action}
 */
export class UpdateRoleErrorAction implements Action {
  readonly type: string = UPDATE_ROLE_ERROR;

  constructor(public payload: any){}
}

/**
 * Role update succeed
 * 
 * @export
 * @class UpdateRoleSuccessAction
 * @implements {Action}
 */
export class UpdateRoleSuccessAction implements Action {
  readonly type: string = UPDATE_ROLE_SUCCESS;

  constructor(public payload: Role){}
}

/**
 * Reset to initial state
 * 
 * @export
 * @class ResetUpdateRoleAction
 * @implements {Action}
 */
export class ResetUpdateRoleAction implements Action {
  readonly type: string = RESET_UPDATE_ROLE;

  constructor(public payload?: any) {}
}

// Export action types
export type UpdateRoleActions = UpdateRoleAction 
                                | UpdateRoleErrorAction 
                                | UpdateRoleSuccessAction
                                | ResetUpdateRoleAction;