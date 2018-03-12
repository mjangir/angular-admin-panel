import { Injectable } 	  from '@angular/core';
import { Router }         from '@angular/router';
import { Store }      	  from '@ngrx/store';
import { Subscription }   from "rxjs";
import { Observable }     from "rxjs/Observable";
import { Sandbox } 			  from '../../../shared/sandbox/base.sandbox';
import * as fromStore     from './store';
import User               from './models/user.model';
import UserForm           from './models/user-form.model';

@Injectable()
export class AccessUserSandbox extends Sandbox {

  /**
   * List users data
   * 
   * @type {Observable<User[]>}
   * @memberof AccessUserSandbox
   */
  public users$: Observable<User[]> = this.store.select(fromStore.getLoadUsersData);

  /**
   * Subscriptions for AccessUser
   * 
   * @private
   * @type {Array<Subscription>}
   * @memberof AccessUserSandbox
   */
  private subscriptions: Array<Subscription> = [];

  /**
   * Creates an instance of AccessUserSandbox.
   * 
   * @param {Router} router 
   * @param {Store<fromStore.AccessUserState>} store 
   * @memberof AccessUserSandbox
   */
  constructor(
    private router: Router,
    private store: Store<fromStore.AccessUserState>,
  ) {
    super();
    this.registerAuthEvents();
  }

  /**
   * Un-Register events
   * 
   * @memberof AccessUserSandbox
   */
  public unregisterEvents() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Register auth events
   * 
   * @private
   * @memberof AccessUserSandbox
   */
  private registerAuthEvents(): void {
  }

  /**
   * Get all users
   * 
   * @memberof AccessUserSandbox
   */
  public getUsers() {
    this.store.dispatch(new fromStore.LoadUsersAction());
  }
}