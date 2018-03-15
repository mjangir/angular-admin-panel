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

@Component({
  selector: 'app-create-permission',
  templateUrl: './create-permission.container.html',
  styleUrls: ['./create-permission.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatePermissionContainer implements OnInit {

  /**
   * Form Group
   * 
   * @type {FormGroup}
   * @memberof CreatePermissionContainer
   */
  public form: FormGroup;

  /**
   * Creates an instance of CreatePermissionContainer.
   * 
   * @param {AccessPermissionSandbox} accessPermissionSandbox 
   * @param {FormBuilder} formBuilder 
   * @memberof CreatePermissionContainer
   */
  constructor(
    public accessPermissionSandbox: AccessPermissionSandbox,
    private formBuilder: FormBuilder
  ) { }

  /**
   * On Init container
   * 
   * @memberof CreatePermissionContainer
   */
  ngOnInit() {
    this.form = this.formBuilder.group({
      name:           ["", Validators.required],
      display_name:   ["", Validators.required],
      sort:           ["", Validators.required]
    });
  }

  /**
   * On permission form submit
   * 
   * @param {Event} event 
   * @param {*} form 
   * @memberof CreatePermissionContainer
   */
  public onSubmit(event: Event, form: any) {
    const permissionForm = new PermissionForm(form);

    this.accessPermissionSandbox.createPermission(permissionForm);
  }

  /**
   * Unsubscribe from all Observables
   * 
   * @memberof CreatePermissionContainer
   */
  public onNgDestroy() {
    this.accessPermissionSandbox.unregisterEvents();
  }
}
