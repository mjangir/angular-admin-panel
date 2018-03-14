import { RoleModule } from './role.module';

describe('RoleModule', () => {
  let roleModule: RoleModule;

  beforeEach(() => {
    roleModule = new RoleModule();
  });

  it('should create an instance', () => {
    expect(roleModule).toBeTruthy();
  });
});
