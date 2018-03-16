import { 
  ActionReducer, 
  combineReducers 
}                   from '@ngrx/store';
import { compose }  from '@ngrx/core/compose';

import * as fromAuth        from '../auth/store';
import * as fromUser        from '../admin/access/user/store';
import * as fromRole        from '../admin/access/role/store';
import * as fromPermission  from '../admin/access/permission/store';

export interface State {
  auth:             fromAuth.AuthState,
  accessUser:       fromUser.AccessUserState,
  accessRole:       fromRole.AccessRoleState,
  accessPermission: fromPermission.AccessPermissionState
};

export const reducers = {
  auth:             fromAuth.combinedReducers,
  accessUser:       fromUser.combinedReducers,
  accessRole:       fromRole.combinedReducers,
  accessPermission: fromPermission.combinedReducers
};