import { ContainersModule } from './containers.module';

describe('ContainersModule', () => {
  let containersModule: ContainersModule;

  beforeEach(() => {
    containersModule = new ContainersModule();
  });

  it('should create an instance', () => {
    expect(containersModule).toBeTruthy();
  });
});
