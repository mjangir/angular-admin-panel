export default class Permission {
  public id:          number;
  public name:        string;
  public displayName: string;
  public sort:        number;

  constructor(permission: any = null) {
    this.id           = permission ? permission.id : null;
    this.name         = permission ? permission.name : '';
    this.displayName  = permission ? permission.name : '';
    this.sort         = permission ? permission.sort : 0;
  }
}