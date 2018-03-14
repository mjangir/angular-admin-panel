import { Action } from '@ngrx/store';
import Role       from '../../models/role.model';

export const LOAD_ROLES         = '[Role] Load Roles';
export const LOAD_ROLES_SUCCESS = '[Role] Load Roles Success';
export const LOAD_ROLES_ERROR   = '[Role] Load Roles Error';
export const ADD_ROLE_TO_LIST   = '[Role] Add Role To List';

/**
 * Load roles action
 * 
 * @export
 * @class LoadRolesAction
 * @implements {Action}
 */
export class LoadRolesAction implements Action {
  readonly type: string = LOAD_ROLES;

  constructor(public payload: any = null) {}
}

/**
 * Error while loading roles
 * 
 * @export
 * @class LoadRolesErrorAction
 * @implements {Action}
 */
export class LoadRolesErrorAction implements Action {
  readonly type: string = LOAD_ROLES_ERROR;

  constructor(public payload: any) {}
}

/**
 * Loading roles succeed
 * 
 * @export
 * @class LoadRolesSuccessAction
 * @implements {Action}
 */
export class LoadRolesSuccessAction implements Action {
  readonly type: string = LOAD_ROLES_SUCCESS;

  constructor(public payload: Array<Role[]>) {}
}

// Export action types
export type LoadRolesActions = LoadRolesAction | LoadRolesErrorAction | LoadRolesSuccessAction;