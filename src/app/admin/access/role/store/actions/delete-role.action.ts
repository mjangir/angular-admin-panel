import { Action } from '@ngrx/store';

export const DELETE_ROLE          = '[Role] Delete Role';
export const DELETE_MULTIPLE_ROLE = '[Role] Delete Multiple Role';
export const DELETE_ROLE_SUCCESS  = '[Role] Delete Role Success';
export const DELETE_ROLE_ERROR    = '[Role] Delete Role Error';
export const RESET_DELETE_ROLE    = '[Role] Reset Delete Role';

/**
 * Delete role action
 * 
 * @export
 * @class DeleteRoleAction
 * @implements {Action}
 */
export class DeleteRoleAction implements Action {
  readonly type: string = DELETE_ROLE;

  constructor(public payload: number){}
}

/**
 * Delete multiple role action
 * 
 * @export
 * @class DeleteMultipleRoleAction
 * @implements {Action}
 */
export class DeleteMultipleRoleAction implements Action {
  readonly type: string = DELETE_MULTIPLE_ROLE;

  constructor(public payload: {ids: Array<number>}){}
}

/**
 * Error while deleting role
 * 
 * @export
 * @class DeleteRoleErrorAction
 * @implements {Action}
 */
export class DeleteRoleErrorAction implements Action {
  readonly type: string = DELETE_ROLE_ERROR;

  constructor(public payload: any){}
}

/**
 * Delete role succeed
 * 
 * @export
 * @class DeleteRoleSuccessAction
 * @implements {Action}
 */
export class DeleteRoleSuccessAction implements Action {
  readonly type: string = DELETE_ROLE_SUCCESS;

  constructor(public payload?: any){}
}

/**
 * Reset to initial state
 * 
 * @export
 * @class ResetDeleteRoleAction
 * @implements {Action}
 */
export class ResetDeleteRoleAction implements Action {
  readonly type: string = RESET_DELETE_ROLE;

  constructor(public payload?: any) {}
}

// Export action types
export type DeleteRoleActions = DeleteRoleAction 
                                | DeleteRoleErrorAction 
                                | DeleteRoleSuccessAction
                                | DeleteMultipleRoleAction
                                | ResetDeleteRoleAction;