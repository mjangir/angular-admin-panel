/**
 * User create/update form
 * 
 * @export
 * @class UserForm
 */
export default class UserForm {
  public id?:                   number;
  public first_name:            string;
  public last_name:             string;
  public email:                 string;
  public confirmed:             number;
  public password:              string;
  public password_confirmation: string;
  public assignees_roles:       Array<number>;
  public permissions:           Array<number>;
  public status:                number;
  public confirmation_email:    number;

  constructor(form: any = null) {
    this.id                     = form.id || null;
    this.first_name             = form.first_name || '';
    this.last_name              = form.last_name || '';
    this.email                  = form.email || '';
    this.confirmed              = form.confirmed ? +form.confirmed : 0;
    this.status                 = form.status ? +form.status : 0;
    this.password               = form.password || '',
    this.password_confirmation  = form.password_confirmation || '';
    this.assignees_roles        = [form.assignees_roles] || [];
    this.permissions            = [form.permissions] || [];
    this.confirmation_email     = form.confirmation_email ? +form.confirmation_email : 0;
  }
}