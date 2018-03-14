/**
 * Permission create/update form
 * 
 * @export
 * @class PermissionForm
 */
export default class PermissionForm {
  public id?:           number;
  public name:          string;
  public display_name:  string;
  public sort:          number;

  constructor(form: any = null) {
    this.id           = form ? form.id : null;
    this.name         = form ? form.name : '';
    this.display_name = form ? form.display_name : '';
    this.sort         = form ? form.sort : 0;
  }
}