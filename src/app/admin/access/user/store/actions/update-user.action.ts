import { Action } from '@ngrx/store';
import User       from '../../models/user.model';
import UserForm   from '../../models/user-form.model';

export const UPDATE_USER         = '[User] Update User';
export const UPDATE_USER_SUCCESS = '[User] Update User Success';
export const UPDATE_USER_ERROR   = '[User] Update User Error';

/**
 * Update user action
 * 
 * @export
 * @class UpdateUserAction
 * @implements {Action}
 */
export class UpdateUserAction implements Action {
  readonly type: string = UPDATE_USER;

  constructor(public payload: UserForm){}
}

/**
 * Error while updating users
 * 
 * @export
 * @class UpdateUserErrorAction
 * @implements {Action}
 */
export class UpdateUserErrorAction implements Action {
  readonly type: string = UPDATE_USER_ERROR;

  constructor(public payload: any){}
}

/**
 * User update succeed
 * 
 * @export
 * @class UpdateUserSuccessAction
 * @implements {Action}
 */
export class UpdateUserSuccessAction implements Action {
  readonly type: string = UPDATE_USER_SUCCESS;

  constructor(public payload: User){}
}

// Export action types
export type UpdateUserActions = UpdateUserAction | UpdateUserErrorAction | UpdateUserSuccessAction;