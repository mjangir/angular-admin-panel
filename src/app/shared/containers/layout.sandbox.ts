import { Injectable } 	  from '@angular/core';
import { Router }         from '@angular/router';
import { Store }      	  from '@ngrx/store';
import { Subscription ,  Observable }   from "rxjs";
import { Sandbox } 			  from '../../shared/sandbox/base.sandbox';
import * as fromAuthStore     from '../../auth/store';
import LoginUser        from '../../auth/models/login-user.model';


@Injectable()
export class LayoutSandbox extends Sandbox { 

  /**
   * Login loading
   * 
   * @type {Observable<boolean>}
   * @memberof LayoutSandbox
   */
  public loginLoading$: Observable<boolean> = this.store.select(fromAuthStore.getLoginLoading);

  /**
   * Login loaded
   * 
   * @type {Observable<boolean>}
   * @memberof LayoutSandbox
   */
  public loginLoaded$: Observable<boolean>  = this.store.select(fromAuthStore.getLoginLoaded);

  /**
   * Login error
   * 
   * @type {Observable<any>}
   * @memberof LayoutSandbox
   */
  public loginError$: Observable<any>       = this.store.select(fromAuthStore.getLoginError);

  /**
   * Login token
   * 
   * @type {Observable<string>}
   * @memberof LayoutSandbox
   */
  public loginToken$: Observable<string>    = this.store.select(fromAuthStore.getLoginToken);

  /**
   * Login user
   * 
   * @type {Observable<LoginUser>}
   * @memberof LayoutSandbox
   */
  public loginUser$: Observable<LoginUser>  = this.store.select(fromAuthStore.getLoginUser);

  /**
   * Subscriptions for Auth
   * 
   * @private
   * @type {Array<Subscription>}
   * @memberof LayoutSandbox
   */
  private subscriptions: Array<Subscription> = [];

  /**
   * Creates an instance of LayoutSandbox.
   * 
   * @param {Router} router 
   * @param {Store<fromAuthStore.AuthState>} store 
   * @memberof LayoutSandbox
   */
  constructor(
    private router: Router,
    private store: Store<fromAuthStore.AuthState>,
  ) {
    super();
  }
}