/**
 * User model
 * 
 * @export
 * @class User
 */
export default class User {
  public id:          number;
  public firstName:   string;
  public lastName:    string;
  public email:       string;
  public confirmed:   boolean;
  public role:        string;
  public status:      boolean;

  constructor(user: any = null) {
    this.id           = user ? user.id : null;
    this.firstName    = user ? user.first_name : '';
    this.lastName     = user ? user.last_name : '';
    this.email        = user ? user.email : '';
    this.confirmed    = user ? user.confirmed : false;
    this.role         = user ? user.role : '';
    this.status       = user ? user.status : false;
  }
}