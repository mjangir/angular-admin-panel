import { ListPermissionsContainer } from './list-permissions/list-permissions.container';
import { CreatePermissionContainer } from './create-permission/create-permission.container';
import { UpdatePermissionContainer } from './update-permission/update-permission.container';
import { ViewPermissionContainer } from './view-permission/view-permission.container';

const containers: Array<any> = [
  ListPermissionsContainer, 
  CreatePermissionContainer, 
  UpdatePermissionContainer, 
  ViewPermissionContainer
];

export const fromContainers = {
  containers
};