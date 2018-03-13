import { Injectable } 	  from '@angular/core';
import { Router }         from '@angular/router';
import { Store }      	  from '@ngrx/store';
import { Subscription }   from "rxjs";
import { Observable }     from "rxjs/Observable";
import { Sandbox } 			  from '../../../shared/sandbox/base.sandbox';
import * as fromStore     from './store';
import User               from './models/user.model';
import UserForm           from './models/user-form.model';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { ConfigService } from '../../../app-config.service';

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
   * Create user loading
   * 
   * @type {Observable<boolean>}
   * @memberof AccessUserSandbox
   */
  public createUserLoading$: Observable<boolean> = this.store.select(fromStore.getCreateUserLoading);

  /**
   * Create user loaded
   * 
   * @type {Observable<boolean>}
   * @memberof AccessUserSandbox
   */
  public createUserLoaded$: Observable<boolean> = this.store.select(fromStore.getCreateUserLoaded);

  /**
   * Update user loading
   * 
   * @type {Observable<boolean>}
   * @memberof AccessUserSandbox
   */
  public updateUserLoading$: Observable<boolean> = this.store.select(fromStore.getUpdateUserLoading);

  /**
   * Update user loaded
   * 
   * @type {Observable<boolean>}
   * @memberof AccessUserSandbox
   */
  public updateUserLoaded$: Observable<boolean> = this.store.select(fromStore.getUpdateUserLoaded);

  /**
   * Viewing user
   */
  public viewingUser$: Observable<User> = this.store.select(fromStore.getViewingUser);

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
    private notificationsService: ToastsManager,
    private configService: ConfigService
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
    this.subscriptions.push(
      this.createUserLoaded$.subscribe(loaded => {
        if(loaded) {
          this.notificationsService.success("User created successfully", 'Success!', this.configService.get('notifications').options);
          setTimeout(() => {
            this.router.navigate(['/admin/access/user/list']);
          }, 500);
        }
      })
    );

    this.subscriptions.push(
      this.updateUserLoaded$.subscribe(loaded => {
        if(loaded) {
          this.notificationsService.success("User updated successfully", 'Success!', this.configService.get('notifications').options);
          setTimeout(() => {
            this.router.navigate(['/admin/access/user/list']);
          }, 500);
        }
      })
    );
  }

  /**
   * Get all users
   * 
   * @memberof AccessUserSandbox
   */
  public getUsers() {
    this.store.dispatch(new fromStore.LoadUsersAction());
  }

  /**
   * Create user
   * 
   * @param {UserForm} form 
   * @memberof AccessUserSandbox
   */
  public createUser(form: UserForm) {
    this.store.dispatch(new fromStore.CreateUserAction(form));
  }

  /**
   * Update user
   * 
   * @param {UserForm} form 
   * @memberof AccessUserSandbox
   */
  public updateUser(form: UserForm) {
    this.store.dispatch(new fromStore.UpdateUserAction(form));
  }

  /**
   * View user by ID
   * 
   * @param {number} id 
   * @memberof AccessUserSandbox
   */
  public viewUser(id: number) {
    this.store.dispatch(new fromStore.ViewUserAction(id));
  }
}