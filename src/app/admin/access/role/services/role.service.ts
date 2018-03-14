import {
  Injectable,
  Inject,
  forwardRef
}               from '@angular/core';
import Role from '../models/role.model';

@Injectable()
export class RoleService {

  /**
   * Transforms grid data usres recieved from the API into array of 'Role' instances
   *
   * @param roles
   */
  static gridAdapter(roles: any): Array<Role> {
    return roles.data ? roles.data.map(role => new Role(role)): [];
  }

  /**
   * Transforms role details recieved from the API into instance of 'Role'
   *
   * @param role
   */
  static roleDetailsAdapter(response: any): Role {
    return new Role(response.data);
  }

  static createRoleAdapter(role: any): Role{
    return new Role(role);
  }
}