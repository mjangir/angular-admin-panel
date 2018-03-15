import { PermissionModule } from './permission.module';

describe('PermissionModule', () => {
  let permissionModule: PermissionModule;

  beforeEach(() => {
    permissionModule = new PermissionModule();
  });

  it('should create an instance', () => {
    expect(permissionModule).toBeTruthy();
  });
});
