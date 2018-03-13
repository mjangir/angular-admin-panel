import { Action } from '@ngrx/store';
import User       from '../../models/user.model';

export const LOAD_USERS         = '[User] Load Users';
export const LOAD_USERS_SUCCESS = '[User] Load Users Success';
export const LOAD_USERS_ERROR   = '[User] Load Users Error';
export const ADD_USER_TO_LIST   = '[User] Add User To List';

/**
 * Load users action
 * 
 * @export
 * @class LoadUsersAction
 * @implements {Action}
 */
export class LoadUsersAction implements Action {
  readonly type: string = LOAD_USERS;

  constructor(public payload: any = null) {}
}

/**
 * Error while loading users
 * 
 * @export
 * @class LoadUsersErrorAction
 * @implements {Action}
 */
export class LoadUsersErrorAction implements Action {
  readonly type: string = LOAD_USERS_ERROR;

  constructor(public payload: any) {}
}

/**
 * Loading users succeed
 * 
 * @export
 * @class LoadUsersSuccessAction
 * @implements {Action}
 */
export class LoadUsersSuccessAction implements Action {
  readonly type: string = LOAD_USERS_SUCCESS;

  constructor(public payload: Array<User[]>) {}
}

// Export action types
export type LoadUsersActions = LoadUsersAction | LoadUsersErrorAction | LoadUsersSuccessAction;