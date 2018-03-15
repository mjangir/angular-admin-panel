import {
  Injectable,
  Inject,
  forwardRef
}               from '@angular/core';
import Permission from '../models/permission.model';

@Injectable()
export class PermissionService {

  /**
   * Transforms grid data usres recieved from the API into array of 'Permission' instances
   *
   * @param permissions
   */
  static gridAdapter(permissions: any): Array<Permission> {
    return permissions.data ? permissions.data.map(permission => new Permission(permission)): [];
  }

  /**
   * Transforms permission details recieved from the API into instance of 'Permission'
   *
   * @param permission
   */
  static permissionDetailsAdapter(response: any): Permission {
    return new Permission(response.data);
  }

  static createPermissionAdapter(permission: any): Permission{
    return new Permission(permission);
  }
}