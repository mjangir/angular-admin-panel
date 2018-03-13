import { Action } from '@ngrx/store';
import User       from '../../models/user.model';
import UserForm   from '../../models/user-form.model';

export const CREATE_USER         = '[User] Create User';
export const CREATE_USER_SUCCESS = '[User] Create User Success';
export const CREATE_USER_ERROR   = '[User] Create User Error';

/**
 * Create user action
 * 
 * @export
 * @class CreateUserAction
 * @implements {Action}
 */
export class CreateUserAction implements Action {
  readonly type: string = CREATE_USER;

  constructor(public payload: UserForm){}
}

/**
 * Error while creating user
 * 
 * @export
 * @class CreateUserErrorAction
 * @implements {Action}
 */
export class CreateUserErrorAction implements Action {
  readonly type: string = CREATE_USER_ERROR;

  constructor(public payload: any){}
}

/**
 * User create succeed
 * 
 * @export
 * @class CreateUserSuccessAction
 * @implements {Action}
 */
export class CreateUserSuccessAction implements Action {
  readonly type: string = CREATE_USER_SUCCESS;

  constructor(public payload: User){}
}

// Export action types
export type CreateUserActions = CreateUserAction | CreateUserErrorAction | CreateUserSuccessAction;