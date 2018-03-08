export default class Role {
  public id:          number;
  public name:        string;
  public sort:        number;
  public active:      boolean;
  public permissions: Array<number>;

  constructor(role: any = null) {
    this.id           = role ? role.id : null;
    this.name         = role ? role.name : '';
    this.sort         = role ? role.sort : 0;
    this.active       = role ? role.active : false;
    this.permissions  = role ? role.permissions : [];
  }
}