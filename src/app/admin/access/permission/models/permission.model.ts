/**
 * Permission model
 * 
 * @export
 * @class Permission
 */
export default class Permission {
  public id:          number;
  public name:        string;
  public displayName: string;
  public sort:        number;
  public createdOn:   string;
  public updatedOn:   string;

  constructor(permission: any = null) {
    this.id           = permission ? permission.id : null;
    this.name         = permission ? permission.name : '';
    this.displayName  = permission ? permission.display_name : '';
    this.sort         = permission ? permission.sort : 0;
    this.createdOn    = permission ? permission.registered_at : '';
    this.updatedOn    = permission ? permission.last_updated_at : '';
  }
}