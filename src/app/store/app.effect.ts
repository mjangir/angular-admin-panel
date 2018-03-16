import { effects as AuthEffects }       from '../auth/store/effects';
import { effects as UserEffects }       from '../admin/access/user/store/effects';
import { effects as RoleEffects }       from '../admin/access/role/store/effects';
import { effects as PermissionEffects } from '../admin/access/permission/store/effects';

export const effects: Array<any> = [
  ...AuthEffects,
  UserEffects,
  RoleEffects,
  PermissionEffects
]