import { Injectable } 	    from '@angular/core';
import { Router }           from '@angular/router';
import { Store }      	    from '@ngrx/store';
import { Subscription ,  Observable }     from "rxjs";
import { Sandbox } 			    from '../../../shared/sandbox/base.sandbox';
import * as fromStore       from './store';
import Role                 from './models/role.model';
import RoleForm             from './models/role-form.model';
import { ToastrService } from 'ngx-toastr';
import { ConfigService }    from '../../../app-config.service';
import { TranslateService } from 'ng2-translate';
import { UtilService } from '../../../shared/utils';

@Injectable()
export class AccessRoleSandbox extends Sandbox {

  /**
   * List roles data
   * 
   * @type {Observable<Role[]>}
   * @memberof AccessRoleSandbox
   */
  public roles$: Observable<Role[]> = this.store.select(fromStore.getLoadRolesData);

  /**
   * Create role loading
   * 
   * @type {Observable<boolean>}
   * @memberof AccessRoleSandbox
   */
  public createRoleLoading$: Observable<boolean> = this.store.select(fromStore.getCreateRoleLoading);

  /**
   * Create role loaded
   * 
   * @type {Observable<boolean>}
   * @memberof AccessRoleSandbox
   */
  public createRoleLoaded$: Observable<boolean> = this.store.select(fromStore.getCreateRoleLoaded);

  /**
   * Create role error
   * 
   * @type {Observable<any>}
   * @memberof AccessRoleSandbox
   */
  public createRoleError$: Observable<any> = this.store.select(fromStore.getCreateRoleError);

  /**
   * Update role loading
   * 
   * @type {Observable<boolean>}
   * @memberof AccessRoleSandbox
   */
  public updateRoleLoading$: Observable<boolean> = this.store.select(fromStore.getUpdateRoleLoading);

  /**
   * Update role loaded
   * 
   * @type {Observable<boolean>}
   * @memberof AccessRoleSandbox
   */
  public updateRoleLoaded$: Observable<boolean> = this.store.select(fromStore.getUpdateRoleLoaded);

  /**
   * Update role error
   * 
   * @type {Observable<any>}
   * @memberof AccessRoleSandbox
   */
  public updateRoleError$: Observable<any> = this.store.select(fromStore.getUpdateRoleError);

  /**
   * Viewing role
   * 
   * @type {Observable<Role>}
   * @memberof AccessRoleSandbox
   */
  public viewingRole$: Observable<Role> = this.store.select(fromStore.getViewingRole);

  /**
   * Delete role loading
   * 
   * @type {Observable<boolean>}
   * @memberof AccessRoleSandbox
   */
  public deleteRoleLoading$: Observable<boolean> = this.store.select(fromStore.getDeleteRoleLoading);

  /**
   * Delete role loaded
   * 
   * @type {Observable<boolean>}
   * @memberof AccessRoleSandbox
   */
  public deleteRoleLoaded$: Observable<boolean> = this.store.select(fromStore.getDeleteRoleLoaded);

  /**
   * Subscriptions for AccessRole
   * 
   * @private
   * @type {Array<Subscription>}
   * @memberof AccessRoleSandbox
   */
  private subscriptions: Array<Subscription> = [];

  /**
   * Creates an instance of AccessRoleSandbox.
   * 
   * @param {Router} router 
   * @param {Store<fromStore.AccessRoleState>} store 
   * @memberof AccessRoleSandbox
   */
  constructor(
    private router: Router,
    private store: Store<fromStore.AccessRoleState>,
    private notificationsService: ToastrService,
    private configService: ConfigService,
    private translateService: TranslateService,
    private utilService: UtilService
  ) {
    super();
  }

  /**
   * Un-Register subscribers
   * 
   * @memberof AccessRoleSandbox
   */
  public unregisterSubscribers() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Register subscribers
   * 
   * @public
   * @memberof AccessRoleSandbox
   */
  public registerSubscribers(): void {
    const createSub = this.createRoleLoaded$.subscribe(loaded => {
      if(loaded) {
        this.utilService.displayNotification('accessRole.createdSuccessfully', 'success');
        this.utilService.navigateAfter(['/admin/access/role/list']);
      }
    });

    const updateSub = this.updateRoleLoaded$.subscribe(loaded => {
      if(loaded) {
        this.utilService.displayNotification('accessRole.updatedSuccessfully', 'success');
        this.utilService.navigateAfter(['/admin/access/role/list']);
      }
    });

    const deleteSub = this.deleteRoleLoaded$.subscribe(loaded => {
      if(loaded) {
        this.utilService.displayNotification('accessRole.deletedSuccessfully', 'success');
      }
    });

    const createErrSub = this.createRoleError$.subscribe(data => {
      if(data) {
        this.utilService.displayNotification(data.json().error.message, 'error');
      }
    });
    
    const updateErrSub = this.updateRoleError$.subscribe(data => {
      if(data) {
        this.utilService.displayNotification(data.json().error.message, 'error');
      }
    });

    this.subscriptions = [createSub, updateSub, deleteSub, createErrSub, updateErrSub];
  }

  /**
   * Get all roles
   * 
   * @memberof AccessRoleSandbox
   */
  public getRoles() {
    this.store.dispatch(new fromStore.LoadRolesAction());
  }

  /**
   * Create role
   * 
   * @param {RoleForm} form 
   * @memberof AccessRoleSandbox
   */
  public createRole(form: RoleForm) {
    this.store.dispatch(new fromStore.CreateRoleAction(form));
  }

  /**
   * Update role
   * 
   * @param {RoleForm} form 
   * @memberof AccessRoleSandbox
   */
  public updateRole(form: RoleForm) {
    this.store.dispatch(new fromStore.UpdateRoleAction(form));
  }

  /**
   * View role by ID
   * 
   * @param {number} id 
   * @memberof AccessRoleSandbox
   */
  public viewRole(id: number) {
    this.store.dispatch(new fromStore.ViewRoleAction(id));
  }

  /**
   * Delete role by ID
   * 
   * @param {number} id 
   * @memberof AccessRoleSandbox
   */
  public deleteRole(id: number) {
    this.store.dispatch(new fromStore.DeleteRoleAction(id));
  }

  /**
   * Delete multiple roles by IDs
   * 
   * @param {Array<number>} ids 
   * @memberof AccessRoleSandbox
   */
  public deleteMultipleRoles(ids: Array<number>) {
    this.store.dispatch(new fromStore.DeleteMultipleRoleAction({ids}));
  }

  /**
   * Reset all states
   * 
   * @memberof AccessRoleSandbox
   */
  public resetAllStates() {
    this.store.dispatch(new fromStore.ResetLoadRoleAction());
    this.store.dispatch(new fromStore.ResetCreateRoleAction());
    this.store.dispatch(new fromStore.ResetUpdateRoleAction());
    this.store.dispatch(new fromStore.ResetDeleteRoleAction());
    this.store.dispatch(new fromStore.ResetViewRoleAction());
  }

  /**
   * Reset load state
   * 
   * @memberof AccessRoleSandbox
   */
  public resetLoadState() {
    this.store.dispatch(new fromStore.ResetLoadRoleAction());
  }

  /**
   * Reset create state
   * 
   * @memberof AccessRoleSandbox
   */
  public resetCreateState() {
    this.store.dispatch(new fromStore.ResetCreateRoleAction());
  }

  /**
   * Reset update state
   * 
   * @memberof AccessRoleSandbox
   */
  public resetUpdateState() {
    this.store.dispatch(new fromStore.ResetUpdateRoleAction());
  }

  /**
   * Reset delete state
   * 
   * @memberof AccessRoleSandbox
   */
  public resetDeleteState() {
    this.store.dispatch(new fromStore.ResetDeleteRoleAction());
  }

  /**
   * Reset view state
   * 
   * @memberof AccessRoleSandbox
   */
  public resetViewState() {
    this.store.dispatch(new fromStore.ResetViewRoleAction());
  }
}