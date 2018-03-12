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
  public confirmed:             boolean;
  public password:              string;
  public password_confirmation: string;
  public assignees_roles:       Array<number>;
  public permissions:           Array<number>

  constructor(form: any = null) {
    this.first_name             = form ? form.first_name : '';
    this.last_name              = form ? form.last_name : '';
    this.email                  = form ? form.email : ''
    this.confirmed              = form ? form.confirmed : false;
    this.password               = form ? form.password : '',
    this.password_confirmation  = form ? form.password_confirmation : '';
    this.assignees_roles        = form ? form.assignees_roles : [];
    this.permissions            = form ? form.permissions : [];
  }
}