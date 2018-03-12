export default class RegisterForm {
  public firstName:       string;
  public lastName:        string;
  public email:           string;
  public password:        string;
  public confirmPassword: string;

  constructor(registerForm: any = null) {
    this.firstName        = registerForm.firstName || '';
    this.lastName         = registerForm.lastName || '';
    this.email            = registerForm.email || '';
    this.password         = registerForm.password || '';
    this.confirmPassword  = registerForm.confirmPassword || '';
  }
}