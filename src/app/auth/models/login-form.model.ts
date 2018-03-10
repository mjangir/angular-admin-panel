export default class LoginForm {
  public email:     string;
  public password:  string;

  constructor(loginForm: any) {
    this.email    = loginForm.email || '';
    this.password = loginForm.password || '';
  }
}