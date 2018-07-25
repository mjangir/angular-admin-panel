import { 
  OnInit, 
  OnDestroy, 
  Injector 
}                                   from "@angular/core";
import { 
  FormBuilder, 
  FormGroup, 
  Validators 
}                                   from "@angular/forms";
import { 
  Observable, 
  Subscription 
}                                   from "rxjs";
import { inject }                   from "@angular/core/testing";

import { ActivatedRoute }           from '@angular/router';
import { TranslateService }         from 'ng2-translate';


import { AccessRoleSandbox }        from '../../role.sandbox';
import { AccessPermissionSandbox }  from '../../../permission/permission.sandbox';
import RoleForm                     from '../../models/role-form.model';
import Role                         from "../../models/role.model";
import Permission                   from "../../../permission/models/permission.model";

/**
 * Role form container class
 * 
 * @export
 * @class RoleFormContainer
 */
export class RoleFormContainer implements OnInit, OnDestroy{

  /**
   * Translate service
   * 
   * @protected
   * @type {TranslateService}
   * @memberof RoleFormContainer
   */
  protected translateService: TranslateService;

  /**
   * Form Builder
   * 
   * @protected
   * @type {FormBuilder}
   * @memberof RoleFormContainer
   */
  protected formBuilder: FormBuilder;

  /**
   * Activated route
   * 
   * @protected
   * @type {ActivatedRoute}
   * @memberof RoleFormContainer
   */
  protected route: ActivatedRoute;

  /**
   * Role create/update form
   * 
   * @type {FormGroup}
   * @memberof UpdateRoleContainer
   */
  public form: FormGroup;

  /**
   * Access role sandbox
   * 
   * @protected
   * @type {AccessRoleSandbox}
   * @memberof RoleFormContainer
   */
  protected accessRoleSandbox: AccessRoleSandbox;

  /**
   * Access permission sandbox
   * 
   * @protected
   * @type {AccessPermissionSandbox}
   * @memberof RoleFormContainer
   */
  protected accessPermissionSandbox: AccessPermissionSandbox;

  /**
   * Role ID
   * 
   * @private
   * @type {number}
   * @memberof UpdateRoleContainer
   */
  protected roleId: number;

  /**
   * All permissions object
   * 
   * @type {Array<any>}
   * @memberof CreateRoleContainer
   */
  public allPermissions: Array<any>;

  /**
   * Selected permissions
   * 
   * @type {Array<any>}
   * @memberof RoleFormContainer
   */
  public selectedPermissions: Array<any> = [];
  
  /**
   * Multiselect dropdown settings
   * 
   * @type {*}
   * @memberof CreateRoleContainer
   */
  public multiselectSettings: any;

  /**
   * Subscriptions
   * 
   * @type {Array<Subscription>}
   * @memberof RoleFormContainer
   */
  public subscriptions: Array<Subscription>;

  /**
   * Form title
   * 
   * @type {string}
   * @memberof RoleFormContainer
   */
  public formTitle: string;

  /**
   * Loading icon on submit button decider
   * 
   * @type {Observable<any>}
   * @memberof RoleFormContainer
   */
  public loadingObservable$: Observable<any>;

  /**
   * Creates an instance of RoleFormContainer.
   * 
   * @param {Injector} injector 
   * @memberof RoleFormContainer
   */
  constructor(
    injector: Injector
  ) {
      this.accessRoleSandbox        = injector.get(AccessRoleSandbox);
      this.accessPermissionSandbox  = injector.get(AccessPermissionSandbox);
      this.translateService         = injector.get(TranslateService);
      this.formBuilder              = injector.get(FormBuilder);
      this.route                    = injector.get(ActivatedRoute);

      this.createForm();
      this.setMultiselectSettings();
  }

  /**
   * On Init container
   * 
   * @memberof CreateRoleContainer
   */
  ngOnInit() {
    this.registerSubscriptions();
    this.accessPermissionSandbox.getPermissions();
  }

  /**
   * Unsubscribe from all Observables
   * 
   * @memberof CreateRoleContainer
   */
  public ngOnDestroy() {
    this.unregisterSubscriptions();
    this.accessPermissionSandbox.resetLoadState();
    this.accessRoleSandbox.resetViewState();
  }

  /**
   * Register subscriptions
   * 
   * @memberof CreateRoleContainer
   */
  public registerSubscriptions() {
    const allPermissions$ = this.accessPermissionSandbox.permissions$;
    const viewingRole$    = this.accessRoleSandbox.viewingRole$;

    const routerSubscription = this.route.params.subscribe(params => {
      if(params && params.hasOwnProperty('id')) {
        this.roleId = params['id'];
        this.accessRoleSandbox.viewRole(this.roleId);
      }
    });

    // const viewRoleSubscription = viewingRole$.switchMap(
    //   () => allPermissions$,
    //   (role: Role, perms: Array<Permission>) => {
    //     this.allPermissions = this.normalizePermissions(perms);
    //     return role;
    //   }
    // ).subscribe(role => this.updateFormValues(role));

    // this.subscriptions = [routerSubscription, viewRoleSubscription];
  }

  /**
   * Un-register subscriptions
   * 
   * @memberof RoleFormContainer
   */
  public unregisterSubscriptions() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Create form
   * 
   * @memberof RoleFormContainer
   */
  private createForm() {
    this.form = this.getForm();
  }

  /**
   * Get form
   * 
   * @private
   * @returns {FormGroup} 
   * @memberof RoleFormContainer
   */
  private getForm(): FormGroup {
    return this.formBuilder.group({
      name:         ["", Validators.required],
      sort:         ["", Validators.required],
      status:       ["", Validators.required],
      permissions:  []
    });
  }

  /**
   * Update form values
   * 
   * @param {Role} role 
   * @memberof RoleFormContainer
   */
  private updateFormValues(role: Role) {
    if(role) {
      this.form.setValue({
        name:           role.name,
        sort:           role.sort,
        status:         role.status,
        permissions:    this.getMultiselectPermissionObjects(role.permissions)
      });
    }
  }

  /**
   * Get multiselected permission objects by display names
   * 
   * @param {any} selected 
   * @returns 
   * @memberof RoleFormContainer
   */
  getMultiselectPermissionObjects(selected) {
    return this.allPermissions.filter(p => selected.indexOf(p.itemName) > -1);
  }

  /**
   * Set multiselect settings
   * 
   * @memberof RoleFormContainer
   */
  setMultiselectSettings() {
    this.multiselectSettings = {
      text:                   this.translateService.instant('accessPermission.selectPermissions'),
      selectAllText:          this.translateService.instant('lbl.selectAll'),
      unSelectAllText:        this.translateService.instant('lbl.unselectAll'),
      classes:                'custom-multiselect-checkbox-dp',
      enableSearchFilter:     true,
      searchPlaceholderText:  `${this.translateService.instant('accessPermission.searchPermissions')}...`,
      badgeShowLimit:         5
    };
  }

  /**
   * Normalize permissions array
   * 
   * @param {any} permissions 
   * @returns 
   * @memberof CreateRoleContainer
   */
  public normalizePermissions(permissions) {
    return permissions.map(permission => ({
      id: permission.id,
      itemName: permission.displayName
    }));
  }

  /**
   * Get form permissions
   * 
   * @returns 
   * @memberof RoleFormContainer
   */
  public getFormPermissions() {
    return this.selectedPermissions.map(permission => permission.id);
  }
}