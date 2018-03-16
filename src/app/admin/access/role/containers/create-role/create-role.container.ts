import { 
  Component, 
  OnDestroy, 
  OnInit, 
  Injector,
  ChangeDetectionStrategy 
}                             from '@angular/core';
import { RoleFormContainer }  from '../form/role.form';
import RoleForm               from '../../models/role-form.model';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.container.html',
  styleUrls: ['./create-role.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateRoleContainer extends RoleFormContainer implements OnInit {
  
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
   * @memberof CreateRoleContainer
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
   * @memberof CreateRoleContainer
   */
  public onSubmit(event: Event, form: any) {
    const formData = {
      name:                     form.name,
      sort:                     form.sort,
      status:                   form.status,
      permissions:              this.getFormPermissions(),
      associated_permissions:   this.getFormPermissions()
    }
    
    this.accessRoleSandbox.createRole(new RoleForm(formData));
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
