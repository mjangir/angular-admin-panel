export class RegisterForm {
  public first_name:            string;
  public last_name:             string;
  public email:                 string;
  public password:              string;
  public password_confirmation: string;
  public is_term_accept:        number;

  constructor(registerForm: any = null) {
    this.first_name             = registerForm.first_name || '';
    this.last_name              = registerForm.last_name || '';
    this.email                  = registerForm.email || '';
    this.password               = registerForm.password || '';
    this.password_confirmation  = registerForm.password_confirmation || '';
    this.is_term_accept         = registerForm.is_term_accept ? +registerForm.is_term_accept : 0;
  }
}