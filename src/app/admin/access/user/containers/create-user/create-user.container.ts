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
import { AccessUserSandbox }  from '../../user.sandbox';
import UserForm               from '../../models/user-form.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.container.html',
  styleUrls: ['./create-user.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateUserContainer implements OnInit {

  /**
   * Form Group
   * 
   * @type {FormGroup}
   * @memberof CreateUserContainer
   */
  public form: FormGroup;

  /**
   * Creates an instance of CreateUserContainer.
   * 
   * @param {AccessUserSandbox} accessUserSandbox 
   * @param {FormBuilder} formBuilder 
   * @memberof CreateUserContainer
   */
  constructor(
    public accessUserSandbox: AccessUserSandbox,
    private formBuilder: FormBuilder
  ) { }

  /**
   * On Init container
   * 
   * @memberof CreateUserContainer
   */
  ngOnInit() {
    this.form = this.formBuilder.group({
      first_name:             ["", Validators.required],
      last_name:              ["", Validators.required],
      email:                  ["", Validators.required],
      password:               ["", Validators.required],
      password_confirmation:  ["", Validators.required],
      confirmed:              [true],
      status:                 [true],
      confirmation_email:     [false],
      assignees_roles:        ["3"],
      permissions:            [1]
    });
  }

  /**
   * On user form submit
   * 
   * @param {Event} event 
   * @param {*} form 
   * @memberof CreateUserContainer
   */
  public onSubmit(event: Event, form: any) {
    const userForm = new UserForm(form);

    this.accessUserSandbox.createUser(userForm);
  }

  /**
   * Unsubscribe from all Observables
   * 
   * @memberof CreateUserContainer
   */
  public onNgDestroy() {
    this.accessUserSandbox.unregisterEvents();
  }
}
