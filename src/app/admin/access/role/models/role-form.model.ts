/**
 * Role create/update form
 * 
 * @export
 * @class RoleForm
 */
export default class RoleForm {
  public id?:         number;
  public name:        string;
  public sort:        number;
  public permissions: Array<number>;
  public status:      number;

  constructor(form: any = null) {
    this.id           = form.id || null;
    this.name         = form.name || '';
    this.sort         = form.sort || 0;
    this.status       = form.status ? +form.status : 0;
    this.permissions  = [form.permissions] || [];
  }
}