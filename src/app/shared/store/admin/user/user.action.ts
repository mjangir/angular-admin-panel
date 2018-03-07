import { Action } from '@ngrx/store';
import { User } from '../../../models/admin/access';

export const LOAD_USERS           = '[ALL] Users';
export const LOAD_USERS_SUCCESS   = '[ALL] Users Success';
export const LOAD_USERS_ERROR     = '[ALL] Users Error';

export const LOAD_USER            = '[GET] User';
export const LOAD_USER_SUCCESS    = '[GET] Users Success';
export const LOAD_USER_ERROR      = '[GET] Users Error';

export const CREATE_USER          = '[CREATE] User';
export const CREATE_USER_SUCCESS  = '[CREATE] User Success';
export const CREATE_USER_ERROR    = '[CREATE] User Error';

export const DELETE_USER          = '[DELETE] User';
export const DELETE_USER_SUCCESS  = '[DELETE] User Success';
export const DELETE_USER_ERROR    = '[DELETE] User Error';

export const UPDATE_USER          = '[UPDATE] User';
export const UPDATE_USER_SUCCESS  = '[UPDATE] User Success';
export const UPDATE_USER_ERROR    = '[UPDATE] User Error';


/****************************************
 * GET All Users
 ****************************************/
export class LoadAllUsers implements Action {
  readonly type = LOAD_USERS;
}

export class LoadAllUsersSuccess implements Action {
  readonly type = LOAD_USERS_SUCCESS;

  constructor(public payload: Array<User>) { }
}

export class LoadAllUsersError implements Action {
  readonly type = LOAD_USERS_ERROR;

  constructor(public payload: Error) { }
}


/****************************************
 * GET User By ID
 ****************************************/
export class LoadUser implements Action {
  readonly type = LOAD_USER;

  constructor(public payload: number) { }
}

export class LoadUserSuccess implements Action {
  readonly type = LOAD_USER_SUCCESS;

  constructor(public payload: User) { }
}

export class LoadUserError implements Action {
  readonly type = LOAD_USER_ERROR;

  constructor(public payload: Error) { }
}

/****************************************
 * CREATE New User
 ****************************************/
export class CreateUser implements Action {
  readonly type = CREATE_USER;

  constructor(public payload: User) { }
}

export class CreateUserSuccess implements Action {
  readonly type = CREATE_USER_SUCCESS;

  constructor(public payload: number) { }
}

export class CreateUserError implements Action {
  readonly type = CREATE_USER_ERROR;

  constructor(public payload: Error) { }
}

/****************************************
 * UPDATE User By ID
 ****************************************/
export class UpdateUser implements Action {
  readonly type = UPDATE_USER;

  constructor(public payload: User) { }
}

export class UpdateUserSuccess implements Action {
  readonly type = UPDATE_USER_SUCCESS;
}

export class UpdateUserError implements Action {
  readonly type = UPDATE_USER_ERROR;

  constructor(public payload: Error) { }
}

/****************************************
 * DELETE a User By ID
 ****************************************/
export class DeleteUser implements Action {
  readonly type = DELETE_USER;

  constructor(public payload: number) { }
}

export class DeleteUserSuccess implements Action {
  readonly type = DELETE_USER_SUCCESS;

  constructor(public payload: User) { }
}

export class DeleteUserError implements Action {
  readonly type = DELETE_USER_ERROR;

  constructor(public payload: Error) { }
}

export type Actions
  = LoadAllUsers
  | LoadAllUsersSuccess
  | LoadAllUsersError
  | CreateUser
  | CreateUserSuccess
  | CreateUserError
  | UpdateUser
  | UpdateUserSuccess
  | UpdateUserError
  | DeleteUser
  | DeleteUserSuccess
  | DeleteUserError;