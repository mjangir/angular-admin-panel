import { Action } from '@ngrx/store';
import { Role } from '../../../models/admin/access';

export const LOAD_ROLES           = '[ALL] Roles';
export const LOAD_ROLES_SUCCESS   = '[ALL] Roles Success';
export const LOAD_ROLES_ERROR     = '[ALL] Roles Error';

export const LOAD_ROLE            = '[GET] Role';
export const LOAD_ROLE_SUCCESS    = '[GET] Roles Success';
export const LOAD_ROLE_ERROR      = '[GET] Roles Error';

export const CREATE_ROLE          = '[CREATE] Role';
export const CREATE_ROLE_SUCCESS  = '[CREATE] Role Success';
export const CREATE_ROLE_ERROR    = '[CREATE] Role Error';

export const DELETE_ROLE          = '[DELETE] Role';
export const DELETE_ROLE_SUCCESS  = '[DELETE] Role Success';
export const DELETE_ROLE_ERROR    = '[DELETE] Role Error';

export const UPDATE_ROLE          = '[UPDATE] Role';
export const UPDATE_ROLE_SUCCESS  = '[UPDATE] Role Success';
export const UPDATE_ROLE_ERROR    = '[UPDATE] Role Error';


/****************************************
 * GET All Roles
 ****************************************/
export class LoadAllRoles implements Action {
  readonly type = LOAD_ROLES;
}

export class LoadAllRolesSuccess implements Action {
  readonly type = LOAD_ROLES_SUCCESS;

  constructor(public payload: Array<Role>) { }
}

export class LoadAllRolesError implements Action {
  readonly type = LOAD_ROLES_ERROR;

  constructor(public payload: Error) { }
}


/****************************************
 * GET Role By ID
 ****************************************/
export class LoadRole implements Action {
  readonly type = LOAD_ROLE;

  constructor(public payload: number) { }
}

export class LoadRoleSuccess implements Action {
  readonly type = LOAD_ROLE_SUCCESS;

  constructor(public payload: Role) { }
}

export class LoadRoleError implements Action {
  readonly type = LOAD_ROLE_ERROR;

  constructor(public payload: Error) { }
}

/****************************************
 * CREATE New Role
 ****************************************/
export class CreateRole implements Action {
  readonly type = CREATE_ROLE;

  constructor(public payload: Role) { }
}

export class CreateRoleSuccess implements Action {
  readonly type = CREATE_ROLE_SUCCESS;

  constructor(public payload: number) { }
}

export class CreateRoleError implements Action {
  readonly type = CREATE_ROLE_ERROR;

  constructor(public payload: Error) { }
}

/****************************************
 * UPDATE Role By ID
 ****************************************/
export class UpdateRole implements Action {
  readonly type = UPDATE_ROLE;

  constructor(public payload: Role) { }
}

export class UpdateRoleSuccess implements Action {
  readonly type = UPDATE_ROLE_SUCCESS;
}

export class UpdateRoleError implements Action {
  readonly type = UPDATE_ROLE_ERROR;

  constructor(public payload: Error) { }
}

/****************************************
 * DELETE a Role By ID
 ****************************************/
export class DeleteRole implements Action {
  readonly type = DELETE_ROLE;

  constructor(public payload: number) { }
}

export class DeleteRoleSuccess implements Action {
  readonly type = DELETE_ROLE_SUCCESS;

  constructor(public payload: Role) { }
}

export class DeleteRoleError implements Action {
  readonly type = DELETE_ROLE_ERROR;

  constructor(public payload: Error) { }
}

export type Actions
  = LoadAllRoles
  | LoadAllRolesSuccess
  | LoadAllRolesError
  | CreateRole
  | CreateRoleSuccess
  | CreateRoleError
  | UpdateRole
  | UpdateRoleSuccess
  | UpdateRoleError
  | DeleteRole
  | DeleteRoleSuccess
  | DeleteRoleError;