import { Action } from '@ngrx/store';
import { Permission } from '../../../models/admin/access';

export const LOAD_PERMISSIONS           = '[ALL] Permissions';
export const LOAD_PERMISSIONS_SUCCESS   = '[ALL] Permissions Success';
export const LOAD_PERMISSIONS_ERROR     = '[ALL] Permissions Error';

export const LOAD_PERMISSION            = '[GET] Permission';
export const LOAD_PERMISSION_SUCCESS    = '[GET] Permissions Success';
export const LOAD_PERMISSION_ERROR      = '[GET] Permissions Error';

export const CREATE_PERMISSION          = '[CREATE] Permission';
export const CREATE_PERMISSION_SUCCESS  = '[CREATE] Permission Success';
export const CREATE_PERMISSION_ERROR    = '[CREATE] Permission Error';

export const DELETE_PERMISSION          = '[DELETE] Permission';
export const DELETE_PERMISSION_SUCCESS  = '[DELETE] Permission Success';
export const DELETE_PERMISSION_ERROR    = '[DELETE] Permission Error';

export const UPDATE_PERMISSION          = '[UPDATE] Permission';
export const UPDATE_PERMISSION_SUCCESS  = '[UPDATE] Permission Success';
export const UPDATE_PERMISSION_ERROR    = '[UPDATE] Permission Error';


/****************************************
 * GET All Permissions
 ****************************************/
export class LoadAllPermissions implements Action {
  readonly type = LOAD_PERMISSIONS;
}

export class LoadAllPermissionsSuccess implements Action {
  readonly type = LOAD_PERMISSIONS_SUCCESS;

  constructor(public payload: Array<Permission>) { }
}

export class LoadAllPermissionsError implements Action {
  readonly type = LOAD_PERMISSIONS_ERROR;

  constructor(public payload: Error) { }
}


/****************************************
 * GET Permission By ID
 ****************************************/
export class LoadPermission implements Action {
  readonly type = LOAD_PERMISSION;

  constructor(public payload: number) { }
}

export class LoadPermissionSuccess implements Action {
  readonly type = LOAD_PERMISSION_SUCCESS;

  constructor(public payload: Permission) { }
}

export class LoadPermissionError implements Action {
  readonly type = LOAD_PERMISSION_ERROR;

  constructor(public payload: Error) { }
}

/****************************************
 * CREATE New Permission
 ****************************************/
export class CreatePermission implements Action {
  readonly type = CREATE_PERMISSION;

  constructor(public payload: Permission) { }
}

export class CreatePermissionSuccess implements Action {
  readonly type = CREATE_PERMISSION_SUCCESS;

  constructor(public payload: number) { }
}

export class CreatePermissionError implements Action {
  readonly type = CREATE_PERMISSION_ERROR;

  constructor(public payload: Error) { }
}

/****************************************
 * UPDATE Permission By ID
 ****************************************/
export class UpdatePermission implements Action {
  readonly type = UPDATE_PERMISSION;

  constructor(public payload: Permission) { }
}

export class UpdatePermissionSuccess implements Action {
  readonly type = UPDATE_PERMISSION_SUCCESS;
}

export class UpdatePermissionError implements Action {
  readonly type = UPDATE_PERMISSION_ERROR;

  constructor(public payload: Error) { }
}

/****************************************
 * DELETE a Permission By ID
 ****************************************/
export class DeletePermission implements Action {
  readonly type = DELETE_PERMISSION;

  constructor(public payload: number) { }
}

export class DeletePermissionSuccess implements Action {
  readonly type = DELETE_PERMISSION_SUCCESS;

  constructor(public payload: Permission) { }
}

export class DeletePermissionError implements Action {
  readonly type = DELETE_PERMISSION_ERROR;

  constructor(public payload: Error) { }
}

export type Actions
  = LoadAllPermissions
  | LoadAllPermissionsSuccess
  | LoadAllPermissionsError
  | CreatePermission
  | CreatePermissionSuccess
  | CreatePermissionError
  | UpdatePermission
  | UpdatePermissionSuccess
  | UpdatePermissionError
  | DeletePermission
  | DeletePermissionSuccess
  | DeletePermissionError;