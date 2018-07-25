import { Injectable } 	    from '@angular/core';
import { Router }           from '@angular/router';
import { Store }      	    from '@ngrx/store';
import { Subscription ,  Observable }     from "rxjs";
import { Sandbox } 			    from '../../../shared/sandbox/base.sandbox';
import * as fromStore       from './store';
import Permission                 from './models/permission.model';
import PermissionForm             from './models/permission-form.model';
import { ToastrService } from 'ngx-toastr';
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
   * Save permission pending
   * 
   * @type {Observable<boolean>}
   * @memberof AccessPermissionSandbox
   */
  public savePermissionPending$: Observable<boolean> = this.store.select(fromStore.getSavePermissionPending);

  /**
   * Save permission completed
   * 
   * @type {Observable<boolean>}
   * @memberof AccessPermissionSandbox
   */
  public savePermissionCompleted$: Observable<boolean> = this.store.select(fromStore.getSavePermissionCompleted);

  /**
   * Save permission error
   * 
   * @type {Observable<any>}
   * @memberof AccessPermissionSandbox
   */
  public savePermissionError$: Observable<any> = this.store.select(fromStore.getSavePermissionError);

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
   * @memberof AccessPermissionSandbox
   */
  public unregisterSubscribers() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Register subscribers
   * 
   * @private
   * @memberof AccessPermissionSandbox
   */
  public registerSubscribers(): void {
    const saveCompleted = this.savePermissionCompleted$.subscribe(completed => {
      if(completed) {
        this.utilService.displayNotification('accessPermission.savedSuccessfully', 'success');
        this.utilService.navigateAfter(['/admin/access/permission/list']);
      }
    });

    const saveError = this.savePermissionError$.subscribe(err => {
      if(err) {
        this.utilService.displayNotification(err.json().error.message, 'error');
      }
    });

    const deleteSub = this.deletePermissionLoaded$.subscribe(loaded => {
      if(loaded) {
        this.utilService.displayNotification('accessPermission.deletedSuccessfully', 'success');
      }
    });

    this.subscriptions = [deleteSub, saveCompleted, saveError];
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
    this.store.dispatch(new fromStore.SavePermissionAction(form));
  }

  /**
   * Update permission
   * 
   * @param {PermissionForm} form 
   * @memberof AccessPermissionSandbox
   */
  public updatePermission(form: PermissionForm) {
    this.store.dispatch(new fromStore.SavePermissionAction(form));
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

  /**
   * Reset all states
   * 
   * @memberof AccessPermissionSandbox
   */
  public resetAllStates() {
    this.store.dispatch(new fromStore.ResetLoadPermissionAction());
    this.store.dispatch(new fromStore.ResetDeletePermissionAction());
    this.store.dispatch(new fromStore.ResetViewPermissionAction());
    this.store.dispatch(new fromStore.ResetSavePermissionAction());
  }

  /**
   * Reset load state
   * 
   * @memberof AccessPermissionSandbox
   */
  public resetLoadState() {
    this.store.dispatch(new fromStore.ResetLoadPermissionAction());
  }

  /**
   * Reset delete state
   * 
   * @memberof AccessPermissionSandbox
   */
  public resetDeleteState() {
    this.store.dispatch(new fromStore.ResetDeletePermissionAction());
  }

  /**
   * Reset view state
   * 
   * @memberof AccessPermissionSandbox
   */
  public resetViewState() {
    this.store.dispatch(new fromStore.ResetViewPermissionAction());
  }

  /**
   * Reset save state
   * 
   * @memberof AccessPermissionSandbox
   */
  public resetSaveState() {
    this.store.dispatch(new fromStore.ResetSavePermissionAction());
  }
}