import { Injectable } 	    from '@angular/core';
import { Router }           from '@angular/router';
import { Store }      	    from '@ngrx/store';
import { Subscription }     from "rxjs";
import { Observable }       from "rxjs/Observable";
import { Sandbox } 			    from '../../../shared/sandbox/base.sandbox';
import * as fromStore       from './store';
import Permission                 from './models/permission.model';
import PermissionForm             from './models/permission-form.model';
import { ToastsManager }    from 'ng2-toastr/src/toast-manager';
import { ConfigService }    from '../../../app-config.service';
import { TranslateService } from 'ng2-translate';
import { UtilService } from '../../../shared/utils';

@Injectable()
export class AccessPermissionSandbox extends Sandbox {

  /**
   * List permissions data
   * 
   * @type {Observable<Permission[]>}
   * @memberof AccessPermissionSandbox
   */
  public permissions$: Observable<Permission[]> = this.store.select(fromStore.getLoadPermissionsData);

  /**
   * Create permission loading
   * 
   * @type {Observable<boolean>}
   * @memberof AccessPermissionSandbox
   */
  public createPermissionLoading$: Observable<boolean> = this.store.select(fromStore.getCreatePermissionLoading);

  /**
   * Create permission loaded
   * 
   * @type {Observable<boolean>}
   * @memberof AccessPermissionSandbox
   */
  public createPermissionLoaded$: Observable<boolean> = this.store.select(fromStore.getCreatePermissionLoaded);

  /**
   * Create permission error
   * 
   * @type {Observable<any>}
   * @memberof AccessPermissionSandbox
   */
  public createPermissionError$: Observable<any> = this.store.select(fromStore.getCreatePermissionError);

  /**
   * Update permission loading
   * 
   * @type {Observable<boolean>}
   * @memberof AccessPermissionSandbox
   */
  public updatePermissionLoading$: Observable<boolean> = this.store.select(fromStore.getUpdatePermissionLoading);

  /**
   * Update permission loaded
   * 
   * @type {Observable<boolean>}
   * @memberof AccessPermissionSandbox
   */
  public updatePermissionLoaded$: Observable<boolean> = this.store.select(fromStore.getUpdatePermissionLoaded);

  /**
   * Update permission error
   * 
   * @type {Observable<any>}
   * @memberof AccessPermissionSandbox
   */
  public updatePermissionError$: Observable<any> = this.store.select(fromStore.getUpdatePermissionError);

  /**
   * Viewing permission
   * 
   * @type {Observable<Permission>}
   * @memberof AccessPermissionSandbox
   */
  public viewingPermission$: Observable<Permission> = this.store.select(fromStore.getViewingPermission);

  /**
   * Delete permission loading
   * 
   * @type {Observable<boolean>}
   * @memberof AccessPermissionSandbox
   */
  public deletePermissionLoading$: Observable<boolean> = this.store.select(fromStore.getDeletePermissionLoading);

  /**
   * Delete permission loaded
   * 
   * @type {Observable<boolean>}
   * @memberof AccessPermissionSandbox
   */
  public deletePermissionLoaded$: Observable<boolean> = this.store.select(fromStore.getDeletePermissionLoaded);

  /**
   * Subscriptions for AccessPermission
   * 
   * @private
   * @type {Array<Subscription>}
   * @memberof AccessPermissionSandbox
   */
  private subscriptions: Array<Subscription> = [];

  /**
   * Creates an instance of AccessPermissionSandbox.
   * 
   * @param {Router} router 
   * @param {Store<fromStore.AccessPermissionState>} store 
   * @memberof AccessPermissionSandbox
   */
  constructor(
    private router: Router,
    private store: Store<fromStore.AccessPermissionState>,
    private notificationsService: ToastsManager,
    private configService: ConfigService,
    private translateService: TranslateService,
    private utilService: UtilService
  ) {
    super();
    this.registerAuthEvents();
  }

  /**
   * Un-Register events
   * 
   * @memberof AccessPermissionSandbox
   */
  public unregisterEvents() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Register auth events
   * 
   * @private
   * @memberof AccessPermissionSandbox
   */
  private registerAuthEvents(): void {
    const createSub = this.createPermissionLoaded$.subscribe(loaded => {
      if(loaded) {
        this.utilService.displayNotification('accessPermission.createdSuccessfully', 'success');
        this.utilService.navigateAfter(['/admin/access/permission/list']);
      }
    });

    const updateSub = this.updatePermissionLoaded$.subscribe(loaded => {
      if(loaded) {
        this.utilService.displayNotification('accessPermission.updatedSuccessfully', 'success');
        this.utilService.navigateAfter(['/admin/access/permission/list']);
      }
    });

    const deleteSub = this.deletePermissionLoaded$.subscribe(loaded => {
      if(loaded) {
        this.utilService.displayNotification('accessPermission.deletedSuccessfully', 'success');
      }
    });

    const createErrSub = this.createPermissionError$.subscribe(data => {
      if(data) {
        this.utilService.displayNotification(data.json().error.message, 'error');
      }
    });
    
    const updateErrSub = this.updatePermissionError$.subscribe(data => {
      if(data) {
        this.utilService.displayNotification(data.json().error.message, 'error');
      }
    });

    this.subscriptions = [createSub, updateSub, deleteSub, createErrSub, updateErrSub];
  }

  /**
   * Get all permissions
   * 
   * @memberof AccessPermissionSandbox
   */
  public getPermissions() {
    this.store.dispatch(new fromStore.LoadPermissionsAction());
  }

  /**
   * Create permission
   * 
   * @param {PermissionForm} form 
   * @memberof AccessPermissionSandbox
   */
  public createPermission(form: PermissionForm) {
    this.store.dispatch(new fromStore.CreatePermissionAction(form));
  }

  /**
   * Update permission
   * 
   * @param {PermissionForm} form 
   * @memberof AccessPermissionSandbox
   */
  public updatePermission(form: PermissionForm) {
    this.store.dispatch(new fromStore.UpdatePermissionAction(form));
  }

  /**
   * View permission by ID
   * 
   * @param {number} id 
   * @memberof AccessPermissionSandbox
   */
  public viewPermission(id: number) {
    this.store.dispatch(new fromStore.ViewPermissionAction(id));
  }

  /**
   * Delete permission by ID
   * 
   * @param {number} id 
   * @memberof AccessPermissionSandbox
   */
  public deletePermission(id: number) {
    this.store.dispatch(new fromStore.DeletePermissionAction(id));
  }

  /**
   * Delete multiple permissions by IDs
   * 
   * @param {Array<number>} ids 
   * @memberof AccessPermissionSandbox
   */
  public deleteMultiplePermissions(ids: Array<number>) {
    this.store.dispatch(new fromStore.DeleteMultiplePermissionAction({ids}));
  }
}