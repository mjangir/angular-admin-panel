import { 
  Component, 
  OnDestroy, 
  OnInit, 
  ChangeDetectionStrategy 
}                             from '@angular/core';
import { 
  FormBuilder, 
  FormGroup, 
  Validators 
}                             from "@angular/forms";
import { AccessRoleSandbox }  from '../../role.sandbox';
import RoleForm               from '../../models/role-form.model';
import { ActivatedRoute }     from '@angular/router';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.container.html',
  styleUrls: ['./update-role.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdateRoleContainer implements OnInit {

  /**
   * Form Group
   * 
   * @type {FormGroup}
   * @memberof UpdateRoleContainer
   */
  public form: FormGroup;
  
  /**
   * Router Subscription
   * 
   * @private
   * @type {*}
   * @memberof UpdateRoleContainer
   */
  private routerSubscription: any;

  /**
   * Role ID
   * 
   * @private
   * @type {number}
   * @memberof UpdateRoleContainer
   */
  private roleId: number;
  
  /**
   * Creates an instance of UpdateRoleContainer.
   * 
   * @param {AccessRoleSandbox} accessRoleSandbox 
   * @param {FormBuilder} formBuilder 
   * @memberof UpdateRoleContainer
   */
  constructor(
    public accessRoleSandbox: AccessRoleSandbox,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  /**
   * On Init container
   * 
   * @memberof UpdateRoleContainer
   */
  ngOnInit() {
    this.form = this.getForm();

    this.routerSubscription = this.route.params.subscribe(params => {
      this.roleId = +params['id'];
      this.accessRoleSandbox.viewRole(this.roleId);
    });

    this.accessRoleSandbox.viewingRole$.subscribe((role) => {
      this.updateFormValues(role);
    });
  }

  /**
   * Get role form
   * 
   * @returns 
   * @memberof UpdateRoleContainer
   */
  getForm() {
    return this.formBuilder.group({
      name:         ["", Validators.required],
      sort:         ["", Validators.required],
      status:       ["", Validators.required],
      permissions:  [[1]]
    });
  }
  /**
   * Update role form values
   * 
   * @param {*} role 
   * @memberof UpdateRoleContainer
   */
  updateFormValues(role: any) {
    if(role) {
      this.form.setValue({
        name:         role.name,
        sort:         role.sort,
        status:       role.status || 1,
        permissions:  [1]
      });
    }
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
  }

}
