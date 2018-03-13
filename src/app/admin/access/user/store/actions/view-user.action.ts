import { Action } from '@ngrx/store';
import User       from '../../models/user.model';

export const VIEW_USER         = '[User] View User';
export const VIEW_USER_SUCCESS = '[User] View User Success';
export const VIEW_USER_ERROR   = '[User] View User Error';

/**
 * View user action
 * 
 * @export
 * @class ViewUserAction
 * @implements {Action}
 */
export class ViewUserAction implements Action {
  readonly type: string = VIEW_USER;

  constructor(public payload: number){}
}

/**
 * Error while viewing user
 * 
 * @export
 * @class ViewUserErrorAction
 * @implements {Action}
 */
export class ViewUserErrorAction implements Action {
  readonly type: string = VIEW_USER_ERROR;

  constructor(public payload: any){}
}

/**
 * View user succeed
 * 
 * @export
 * @class ViewUserSuccessAction
 * @implements {Action}
 */
export class ViewUserSuccessAction implements Action {
  readonly type: string = VIEW_USER_SUCCESS;

  constructor(public payload: User){}
}

// Export action types
export type ViewUserActions = ViewUserAction | ViewUserErrorAction | ViewUserSuccessAction;