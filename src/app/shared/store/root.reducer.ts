import * as fromUsers from '../../admin/access/user/store/reducers/load-users.reducer';

export interface AppState {
  users: fromUsers.LoadUsersState;
}