import { Action } from '@ngrx/store';

export const DELETE_USER          = '[User] Delete User';
export const DELETE_MULTIPLE_USER = '[User] Delete Multiple User';
export const DELETE_USER_SUCCESS  = '[User] Delete User Success';
export const DELETE_USER_ERROR    = '[User] Delete User Error';

/**
 * Delete user action
 * 
 * @export
 * @class DeleteUserAction
 * @implements {Action}
 */
export class DeleteUserAction implements Action {
  readonly type: string = DELETE_USER;

  constructor(public payload: number){}
}

/**
 * Delete multiple user action
 * 
 * @export
 * @class DeleteMultipleUserAction
 * @implements {Action}
 */
export class DeleteMultipleUserAction implements Action {
  readonly type: string = DELETE_MULTIPLE_USER;

  constructor(public payload: {ids: Array<number>}){}
}

/**
 * Error while deleting user
 * 
 * @export
 * @class DeleteUserErrorAction
 * @implements {Action}
 */
export class DeleteUserErrorAction implements Action {
  readonly type: string = DELETE_USER_ERROR;

  constructor(public payload: any){}
}

/**
 * Delete user succeed
 * 
 * @export
 * @class DeleteUserSuccessAction
 * @implements {Action}
 */
export class DeleteUserSuccessAction implements Action {
  readonly type: string = DELETE_USER_SUCCESS;

  constructor(public payload?: any){}
}

// Export action types
export type DeleteUserActions = DeleteUserAction 
                                | DeleteUserErrorAction 
                                | DeleteUserSuccessAction
                                | DeleteMultipleUserAction;