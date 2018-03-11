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

@Component({
  selector: 'app-login',
  templateUrl: './login.container.html',
  styleUrls: ['./login.container.scss']
})
export class LoginContainer implements OnInit, OnDestroy {

  /**
   * Login Loading
   * 
   * @type {Observable<boolean>}
   * @memberof LoginContainer
   */
  public loading: Observable<boolean>;

  /**
   * Login Done
   * 
   * @type {Observable<boolean>}
   * @memberof LoginContainer
   */
  public loaded: Observable<boolean>;

  /**
   * Login Error Occured
   * 
   * @type {Observable<any>}
   * @memberof LoginContainer
   */
  public error: Observable<any>;

  /**
   * JWT Token For Login
   * 
   * @type {Observable<string>}
   * @memberof LoginContainer
   */
  public token: Observable<string>;

  /**
   * Logged In User
   * 
   * @type {Observable<LoginUser>}
   * @memberof LoginContainer
   */
  public user: Observable<LoginUser>;

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
    private store: Store<fromStore.AuthState>,
    private formBuilder: FormBuilder
  ) {
    this.loading  = this.store.select(fromStore.getLoginLoading);
    this.loaded   = this.store.select(fromStore.getLoginLoaded);
    this.error    = this.store.select(fromStore.getLoginError);
    this.token    = this.store.select(fromStore.getLoginToken);
    this.user     = this.store.select(fromStore.getLoginUser);

    this.user.subscribe(function(state) {
      console.log("ssss", state);
    });
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

    this.store.dispatch(new fromStore.LoginAction(loginForm));
  }

  ngOnDestroy() {

  }
}