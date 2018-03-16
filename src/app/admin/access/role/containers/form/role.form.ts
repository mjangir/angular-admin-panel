import { 
  FormBuilder, 
  FormGroup, 
  Validators 
}                                   from "@angular/forms";
import { AccessRoleSandbox }        from '../../role.sandbox';
import RoleForm                     from '../../models/role-form.model';
import { ActivatedRoute }           from '@angular/router';
import { AccessPermissionSandbox }  from '../../../permission/permission.sandbox';
import { TranslateService }         from 'ng2-translate';
import { Injector } from "@angular/core/src/di/injector";
import { inject } from "@angular/core/testing";

/**
 * Role form container class
 * 
 * @export
 * @class RoleFormContainer
 */
export class RoleFormContainer {

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
  public roleForm: FormGroup;
  
  /**
   * Router Subscription
   * 
   * @private
   * @type {*}
   * @memberof UpdateRoleContainer
   */
  protected routerSubscription: any;

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
  public selectedPermissions: Array<any>;
  
  /**
   * Multiselect dropdown settings
   * 
   * @type {*}
   * @memberof CreateRoleContainer
   */
  public multiselectSettings: any;

  /**
   * Creates an instance of RoleFormContainer.
   * 
   * @param {Injector} injector 
   * @memberof RoleFormContainer
   */
  constructor(
    injector: Injector
  ) {
      this.accessRoleSandbox        = injector.get(AccessRoleSandbox),
      this.accessPermissionSandbox  = injector.get(AccessPermissionSandbox),
      this.translateService         = injector.get(TranslateService),
      this.formBuilder              = injector.get(FormBuilder),
      this.route                    = injector.get(ActivatedRoute)

      this.createForm();
      this.setMultiselectSettings();
  }

  /**
   * Register subscriptions
   * 
   * @memberof CreateRoleContainer
   */
  public registerSubscriptions() {
    this.accessPermissionSandbox.permissions$.subscribe(data => {
      this.allPermissions = this.normalizePermissions(data);
    });

    this.routerSubscription = this.route.params.subscribe(params => {
      if(params && params.hasOwnProperty('id')) {
        this.roleId = params['id'];
        this.accessRoleSandbox.viewRole(this.roleId);
      }
    });
  }

  /**
   * Create form
   * 
   * @memberof RoleFormContainer
   */
  createForm() {
    this.roleForm = this.formBuilder.group({
      name:         ["", Validators.required],
      sort:         ["", Validators.required],
      status:       ["", Validators.required],
      permissions:  []
    });
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
    return this.roleForm.get('permissions').value.map(permission => permission.id);
  }
}