/**
 * Role model
 * 
 * @export
 * @class Role
 */
export default class Role {
  public id:          number;
  public name:        string;
  public sort:        number;
  public status:      number;
  public permissions: Array<string>;
  public createdOn:   string;
  public updatedOn:   string;

  constructor(role: any = null) {
    this.id           = role ? role.id : null;
    this.name         = role ? role.name : '';
    this.sort         = role ? role.sort : 0;
    this.status       = role ? role.status : 0;
    this.createdOn    = role ? role.registered_at : '';
    this.updatedOn    = role ? role.last_updated_at : '';
    this.permissions  = role ? role.permissions : [];
  }
}