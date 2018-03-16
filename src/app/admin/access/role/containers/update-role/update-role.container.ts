import { 
  Component,
  Injector,
  ChangeDetectionStrategy 
}                             from '@angular/core';
import { RoleFormContainer }  from '../form/role.form';
import RoleForm               from '../../models/role-form.model';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.container.html',
  styleUrls: ['./update-role.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdateRoleContainer extends RoleFormContainer {
  
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
    this.formTitle          = this.translateService.instant('accessRole.heading.update');
    this.loadingObservable$ = this.accessRoleSandbox.updateRoleLoading$;
  }

  /**
   * On role form submit
   * 
   * @param {Event} event 
   * @param {*} form 
   * @memberof UpdateRoleContainer
   */
  public onSubmit(event: Event, form: any) {
    const formData = {
      id:                       this.roleId,
      name:                     form.name,
      sort:                     form.sort,
      status:                   form.status,
      permissions:              this.getFormPermissions(),
      associated_permissions:   this.getFormPermissions()
    }

    this.accessRoleSandbox.updateRole(new RoleForm(formData));
  }
}
