import { 
  Component, 
  OnDestroy, 
  OnInit, 
  Injector,
  ChangeDetectionStrategy 
}                             from '@angular/core';
import { RoleFormContainer }  from '../form/role.form';
import RoleForm from '../../models/role-form.model';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.container.html',
  styleUrls: ['./update-role.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdateRoleContainer extends RoleFormContainer implements OnInit {
  
  /**
   * Creates an instance of UpdateRoleContainer.
   * 
   * @param {Injector} injector 
   * @memberof UpdateRoleContainer
   */
  constructor(
    injector: Injector
  ) {
    super(injector);
  }

  /**
   * On Init container
   * 
   * @memberof UpdateRoleContainer
   */
  ngOnInit() {
    this.registerSubscriptions();
    this.accessPermissionSandbox.getPermissions();
  }

  /**
   * On role form submit
   * 
   * @param {Event} event 
   * @param {*} form 
   * @memberof UpdateRoleContainer
   */
  public onSubmit(event: Event, form: any) {
    form.id = this.roleId;
    const roleForm = new RoleForm(form);

    this.accessRoleSandbox.updateRole(roleForm);
  }

  /**
   * Unsubscribe from all Observables
   * 
   * @memberof CreateRoleContainer
   */
  public onNgDestroy() {
    this.routerSubscription.unsubscribe();
    this.accessRoleSandbox.unregisterEvents();
    this.accessPermissionSandbox.unregisterEvents();
  }
}
