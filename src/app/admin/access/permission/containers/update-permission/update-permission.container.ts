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
import { AccessPermissionSandbox }  from '../../permission.sandbox';
import PermissionForm               from '../../models/permission-form.model';
import { ActivatedRoute }     from '@angular/router';

@Component({
  selector: 'app-update-permission',
  templateUrl: './update-permission.container.html',
  styleUrls: ['./update-permission.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdatePermissionContainer implements OnInit {

  /**
   * Form Group
   * 
   * @type {FormGroup}
   * @memberof UpdatePermissionContainer
   */
  public form: FormGroup;
  
  /**
   * Router Subscription
   * 
   * @private
   * @type {*}
   * @memberof UpdatePermissionContainer
   */
  private routerSubscription: any;

  /**
   * Permission ID
   * 
   * @private
   * @type {number}
   * @memberof UpdatePermissionContainer
   */
  private permissionId: number;
  
  /**
   * Creates an instance of UpdatePermissionContainer.
   * 
   * @param {AccessPermissionSandbox} accessPermissionSandbox 
   * @param {FormBuilder} formBuilder 
   * @memberof UpdatePermissionContainer
   */
  constructor(
    public accessPermissionSandbox: AccessPermissionSandbox,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  /**
   * On Init container
   * 
   * @memberof UpdatePermissionContainer
   */
  ngOnInit() {
    this.form = this.getForm();

    this.routerSubscription = this.route.params.subscribe(params => {
      this.permissionId = +params['id'];
      this.accessPermissionSandbox.viewPermission(this.permissionId);
    });

    this.accessPermissionSandbox.viewingPermission$.subscribe((permission) => {
      this.updateFormValues(permission);
    });
  }

  /**
   * Get permission form
   * 
   * @returns 
   * @memberof UpdatePermissionContainer
   */
  getForm() {
    return this.formBuilder.group({
      name:           ["", Validators.required],
      display_name:   ["", Validators.required],
      sort:           ["", Validators.required]
    });
  }
  /**
   * Update permission form values
   * 
   * @param {*} permission 
   * @memberof UpdatePermissionContainer
   */
  updateFormValues(permission: any) {
    if(permission) {
      this.form.setValue({
        name:         permission.name,
        sort:         permission.sort,
        display_name: permission.displayName || 1
      });
    }
  }

  /**
   * On permission form submit
   * 
   * @param {Event} event 
   * @param {*} form 
   * @memberof UpdatePermissionContainer
   */
  public onSubmit(event: Event, form: any) {
    form.id = this.permissionId;
    const permissionForm = new PermissionForm(form);

    this.accessPermissionSandbox.updatePermission(permissionForm);
  }

  /**
   * Unsubscribe from all Observables
   * 
   * @memberof CreatePermissionContainer
   */
  public onNgDestroy() {
    this.routerSubscription.unsubscribe();
    this.accessPermissionSandbox.unregisterEvents();
  }

}
