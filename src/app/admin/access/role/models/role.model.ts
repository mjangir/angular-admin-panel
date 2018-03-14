/**
 * Role model
 * 
 * @export
 * @class Role
 */
export default class Role {
  public id:      number;
  public name:    string;
  public sort:    number;
  public status:  number;

  constructor(role: any = null) {
    this.id       = role ? role.id : null;
    this.name     = role ? role.name : '';
    this.sort     = role ? role.sort : 0;
    this.status   = role ? role.status : 0;
  }
}