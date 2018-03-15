import { Injectable } 	  from '@angular/core';
import { Router }         from '@angular/router';
import { Store }      	  from '@ngrx/store';
import { Subscription }   from "rxjs";
import { Observable }     from "rxjs/Observable";
import { Sandbox } 			  from '../shared/sandbox/base.sandbox';
import * as fromStore     from './store';
import LoginUser          from "./models/login-user.model";
import LoginForm          from "./models/login-form.model";
import { RegisterForm } from './models/register-form.model';
import { UtilService } from '../shared/utils';

/**
 * Auth sandbox class
 * 
 * @export
 * @class AuthSandbox
 * @extends {Sandbox}
 */
@Injectable()
export class AuthSandbox extends Sandbox { 

  /**
   * Login loading
   * 
   * @type {Observable<boolean>}
   * @memberof AuthSandbox
   */
  public loginLoading$: Observable<boolean> = this.store.select(fromStore.getLoginLoading);

  /**
   * Login loaded
   * 
   * @type {Observable<boolean>}
   * @memberof AuthSandbox
   */
  public loginLoaded$: Observable<boolean>  = this.store.select(fromStore.getLoginLoaded);

  /**
   * Login error
   * 
   * @type {Observable<any>}
   * @memberof AuthSandbox
   */
  public loginError$: Observable<any>       = this.store.select(fromStore.getLoginError);

  /**
   * Login token
   * 
   * @type {Observable<string>}
   * @memberof AuthSandbox
   */
  public loginToken$: Observable<string>    = this.store.select(fromStore.getLoginToken);

  /**
   * Login user
   * 
   * @type {Observable<LoginUser>}
   * @memberof AuthSandbox
   */
  public loginUser$: Observable<LoginUser>  = this.store.select(fromStore.getLoginUser);

  /**
   * Register loading
   * 
   * @type {Observable<boolean>}
   * @memberof AuthSandbox
   */
  public registerLoading$: Observable<boolean> = this.store.select(fromStore.getRegisterLoading);

  /**
   * Register loaded
   * 
   * @type {Observable<boolean>}
   * @memberof AuthSandbox
   */
  public registerLoaded$: Observable<boolean>  = this.store.select(fromStore.getRegisterLoaded);

  /**
   * Register error
   * 
   * @type {Observable<any>}
   * @memberof AuthSandbox
   */
  public registerError$: Observable<any>       = this.store.select(fromStore.getRegisterError);

  /**
   * Logout loaded
   * 
   * @type {Observable<boolean>}
   * @memberof AuthSandbox
   */
  public logoutLoaded$: Observable<boolean>  = this.store.select(fromStore.getLogoutLoaded);

  /**
   * Subscriptions for Auth
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
    private utilService: UtilService
  ) {
    super();
    this.registerAuthEvents();
  }

  /**
   * Un-Register events
   * 
   * @memberof AuthSandbox
   */
  public unregisterEvents() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Register auth events
   * 
   * @private
   * @memberof AuthSandbox
   */
  private registerAuthEvents(): void {
    this.subscriptions.push(
      this.loginLoaded$.subscribe((loaded: boolean) => {
        if (loaded) {
          this.utilService.navigateAfter(['/admin/dashboard']);
        }
      })
    );

    this.subscriptions.push(
      this.registerLoaded$.subscribe((loaded: boolean) => {
        if (loaded) {
          this.utilService.navigateAfter(['/auth/login'], 2000);
        }
      })
    );

    this.subscriptions.push(
      this.logoutLoaded$.subscribe((loaded: boolean) => {
        if (loaded) {
          this.utilService.navigateAfter(['/auth/login']);
        }
      })
    )
  }

  /**
   * Dispatch login action
   * 
   * @param {LoginForm} loginForm 
   * @memberof AuthSandbox
   */
  public login(loginForm: LoginForm) {
    this.store.dispatch(new fromStore.LoginAction(loginForm));
  }

  /**
   * Dispatch logout action
   * 
   * @memberof AuthSandbox
   */
  public logout() {
    this.store.dispatch(new fromStore.LogoutAction());
  }

  /**
   * Dispatch register action
   * 
   * @param {RegisterForm} registerForm 
   * @memberof AuthSandbox
   */
  public register(registerForm: RegisterForm) {
    this.store.dispatch(new fromStore.RegisterAction(registerForm));
  }

  /**
   * Dispatch register reset action
   * 
   * @memberof AuthSandbox
   */
  public resetRegister() {
    this.store.dispatch(new fromStore.ResetRegisterAction());
  }
}