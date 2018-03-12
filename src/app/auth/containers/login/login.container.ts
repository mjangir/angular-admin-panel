import { 
  Component, 
  OnDestroy, 
  OnInit, 
  ChangeDetectionStrategy 
}                     from "@angular/core";
import { 
  FormBuilder, 
  FormGroup, 
  Validators 
}                     from "@angular/forms";
import { Store }      from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import * as fromStore from '../../store';
import LoginUser      from "../../models/login-user.model";
import LoginForm      from "../../models/login-form.model";
import { AuthSandbox } from "../../auth.sandbox";

@Component({
  selector: 'app-login',
  templateUrl: './login.container.html',
  styleUrls: ['./login.container.scss']
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
   * @param {Store<fromStore.AuthState>} store 
   * @memberof LoginContainer
   */
  constructor(
    public authSandbox: AuthSandbox,
    private formBuilder: FormBuilder
  ) {
  }

  /**
   * On Init Container
   * 
   * @memberof LoginContainer
   */
  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  public onSubmit(event: Event, form: any) {
    
    const email: string     = this.form.get("email").value;
    const password: string  = this.form.get("password").value;

    // Trim Values
    email.trim();
    password.trim();

    const loginForm = new LoginForm(email, password);

    this.authSandbox.login(loginForm);
  }

  ngOnDestroy() {

  }
}