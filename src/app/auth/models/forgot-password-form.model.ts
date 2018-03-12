export class ForgotPasswordForm {
  public email: string;

  constructor(forgotPasswordForm: any) {
    this.email = forgotPasswordForm.email || '';
  }
}