/**
 * Login user model
 * 
 * @export
 * @class LoginUser
 */
export default class LoginUser {
  public firstName: string;
  public lastName:  string;
  public email:     string;
  public avatar:    string;

  constructor(user: any = null) {
    this.firstName  = user ? user.first_name : '';
    this.lastName   = user ? user.last_name : '';
    this.email      = user ? user.email : '';
    this.avatar     = user ? user.avatar : '';
  }
}