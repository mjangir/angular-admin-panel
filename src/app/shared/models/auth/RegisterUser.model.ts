export default class RegisterUser {
  public firstName: string;
  public lastName:  string;
  public email:     string;
  public password:  string;

  constructor(user: any = null) {
    this.firstName  = user ? user.first_name : '';
    this.lastName   = user ? user.last_name : '';
    this.email      = user ? user.email : '';
    this.password   = user ? user.password : '';
  }
}