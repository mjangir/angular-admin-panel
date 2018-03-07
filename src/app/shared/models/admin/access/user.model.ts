export default class User {
  public id:                    number;
  public firstName:             string;
  public lastName:              string;
  public email:                 string;
  public active:                boolean;
  public confirmed:             boolean;
  public sendConfirmationEmail: boolean;
  public role:                  number;

  constructor(user: any = null) {
    this.id                     = user ? user.id : null;
    this.firstName              = user ? user.firstName : '';
    this.lastName               = user ? user.lastName : '';
    this.email                  = user ? user.email : '';
    this.active                 = user ? user.active : false;
    this.confirmed              = user ? user.confirmed : false;
    this.sendConfirmationEmail  = user ? user.sendConfirmationEmail : false;
    this.role                   = user ? user.role : null;
  }
}