import { Action } from '@ngrx/store';
import Role       from '../../models/role.model';
import RoleForm   from '../../models/role-form.model';

export const CREATE_ROLE         = '[Role] Create Role';
export const CREATE_ROLE_SUCCESS = '[Role] Create Role Success';
export const CREATE_ROLE_ERROR   = '[Role] Create Role Error';

/**
 * Create role action
 * 
 * @export
 * @class CreateRoleAction
 * @implements {Action}
 */
export class CreateRoleAction implements Action {
  readonly type: string = CREATE_ROLE;

  constructor(public payload: RoleForm){}
}

/**
 * Error while creating role
 * 
 * @export
 * @class CreateRoleErrorAction
 * @implements {Action}
 */
export class CreateRoleErrorAction implements Action {
  readonly type: string = CREATE_ROLE_ERROR;

  constructor(public payload: any){}
}

/**
 * Role create succeed
 * 
 * @export
 * @class CreateRoleSuccessAction
 * @implements {Action}
 */
export class CreateRoleSuccessAction implements Action {
  readonly type: string = CREATE_ROLE_SUCCESS;

  constructor(public payload: Role){}
}

// Export action types
export type CreateRoleActions = CreateRoleAction | CreateRoleErrorAction | CreateRoleSuccessAction;