import { 
  ActionReducer, 
  combineReducers 
}                                 from '@ngrx/store';
import { compose }                from '@ngrx/core';
import {combineReducersEnhanced}  from "combine-reducers-enhanced";

import * as fromAuth        from '../auth/store';
import * as fromUser        from '../admin/access/user/store';
import * as fromRole        from '../admin/access/role/store';
import * as fromPermission  from '../admin/access/permission/store';
import { InjectionToken }   from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';

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

export const rootReducer = combineReducersEnhanced(reducers, false);

export const reducerToken = new InjectionToken<ActionReducerMap<State>>('Registered Reducers');

export const reducerProvider = [
  { provide: reducerToken, useValue: rootReducer }
];