import * as fromUsers from './admin/user/user.reducer';

export interface AppState {
  users: fromUsers.State;
}