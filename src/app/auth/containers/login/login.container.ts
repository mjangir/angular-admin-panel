import { 
  Component, 
  OnDestroy, 
  OnInit, 
  ChangeDetectionStrategy 
}                       from "@angular/core";
import { 
  FormBuilder, 
  FormGroup, 
  Validators 
}                       from "@angular/forms";
import { Store }        from '@ngrx/store';
import { Observable }   from "rxjs/Observable";
import * as fromStore   from '../../store';
import LoginUser        from "../../models/login-user.model";
import LoginForm        from "../../models/login-form.model";
import { AuthSandbox }  from "../../auth.sandbox";

/**
 * Login container class
 * 
 * @export
 * @class LoginContainer
 * @implements {OnInit}
 * @implements {OnDestroy}
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.container.html',
  styleUrls: ['./login.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginContainer implements OnInit, OnDestroy {

  /**
   * Form Group
   * 
   * @type {FormGroup}
   * @memberof LoginContainer
   */
  public form: FormGroup;

  /**
   * Creates an instance of LoginContainer.
   * 
   * @param {AuthSandbox} authSandbox 
   * @param {FormBuilder} formBuilder 
   * @memberof LoginContainer
   */
  constructor(
    public authSandbox: AuthSandbox,
    private formBuilder: FormBuilder
  ) {
  }

  /**
   * On Init container
   * 
   * @memberof LoginContainer
   */
  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  /**
   * On login form submit
   * 
   * @param {Event} event 
   * @param {*} form 
   * @memberof LoginContainer
   */
  public onSubmit(event: Event, form: any) {
    
    const email: string     = this.form.get("email").value;
    const password: string  = this.form.get("password").value;

    // Trim values
    email.trim();
    password.trim();

    const loginForm = new LoginForm(email, password);

    this.authSandbox.login(loginForm);
  }


  ngOnDestroy() {

  }
}