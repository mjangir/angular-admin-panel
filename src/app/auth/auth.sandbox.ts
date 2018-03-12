import { Injectable } 	  from '@angular/core';
import { Router }         from '@angular/router';
import { Store }      	  from '@ngrx/store';
import { Subscription }   from "rxjs";
import { Observable }     from "rxjs/Observable";
import { Sandbox } 			  from '../shared/sandbox/base.sandbox';
import * as fromStore     from './store';
import LoginUser          from "./models/login-user.model";
import LoginForm          from "./models/login-form.model";

@Injectable()
export class AuthSandbox extends Sandbox { 

  /**
   * Login Loading
   * 
   * @type {Observable<boolean>}
   * @memberof AuthSandbox
   */
  public loginLoading$: Observable<boolean> = this.store.select(fromStore.getLoginLoading);

  /**
   * Login Loaded
   * 
   * @type {Observable<boolean>}
   * @memberof AuthSandbox
   */
  public loginLoaded$: Observable<boolean>  = this.store.select(fromStore.getLoginLoaded);

  /**
   * Login Error
   * 
   * @type {Observable<any>}
   * @memberof AuthSandbox
   */
  public loginError$: Observable<any>       = this.store.select(fromStore.getLoginError);

  /**
   * Login Token
   * 
   * @type {Observable<string>}
   * @memberof AuthSandbox
   */
  public loginToken$: Observable<string>    = this.store.select(fromStore.getLoginToken);

  /**
   * Login User
   * 
   * @type {Observable<LoginUser>}
   * @memberof AuthSandbox
   */
  public loginUser$: Observable<LoginUser>  = this.store.select(fromStore.getLoginUser);

  /**
   * Subscriptions For Auth
   * 
   * @private
   * @type {Array<Subscription>}
   * @memberof AuthSandbox
   */
  private subscriptions: Array<Subscription> = [];

  /**
   * Creates an instance of AuthSandbox.
   * 
   * @param {Router} router 
   * @param {Store<fromStore.AuthState>} store 
   * @memberof AuthSandbox
   */
  constructor(
    private router: Router,
    private store: Store<fromStore.AuthState>,
  ) {
    super();
    this.registerAuthEvents();
  }

  /**
   * Un-Register Events
   * 
   * @memberof AuthSandbox
   */
  public unregisterEvents() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Register Auth Events
   * 
   * @private
   * @memberof AuthSandbox
   */
  private registerAuthEvents(): void {
    this.subscriptions.push(
      this.loginLoaded$.subscribe((loaded: boolean) => {
        if (loaded) {
          this.router.navigate(['/admin/access/user/list']);
        }
      })
    );
  }

  public login(loginForm: LoginForm) {
    this.store.dispatch(new fromStore.LoginAction(loginForm));
  }
}