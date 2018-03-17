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
import { ActivatedRoute }     from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.container.html',
  styleUrls: ['./update-user.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdateUserContainer implements OnInit {

  /**
   * Form Group
   * 
   * @type {FormGroup}
   * @memberof UpdateUserContainer
   */
  public form: FormGroup;
  
  /**
   * Router Subscription
   * 
   * @private
   * @type {*}
   * @memberof UpdateUserContainer
   */
  private routerSubscription: any;

  /**
   * User ID
   * 
   * @private
   * @type {number}
   * @memberof UpdateUserContainer
   */
  private userId: number;
  
  /**
   * Creates an instance of UpdateUserContainer.
   * 
   * @param {AccessUserSandbox} accessUserSandbox 
   * @param {FormBuilder} formBuilder 
   * @memberof UpdateUserContainer
   */
  constructor(
    public accessUserSandbox: AccessUserSandbox,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  /**
   * On Init container
   * 
   * @memberof UpdateUserContainer
   */
  ngOnInit() {
    this.form = this.getForm();

    this.routerSubscription = this.route.params.subscribe(params => {
      this.userId = +params['id'];
      this.accessUserSandbox.viewUser(this.userId);
    });

    this.accessUserSandbox.viewingUser$.subscribe((user) => {
      this.updateFormValues(user);
    });
  }

  /**
   * Get user form
   * 
   * @returns 
   * @memberof UpdateUserContainer
   */
  getForm() {
    return this.formBuilder.group({
      first_name:             ["", Validators.required],
      last_name:              ["", Validators.required],
      email:                  ["", Validators.required],
      confirmed:              [true],
      status:                 [true],
      assignees_roles:        ["3"],
      permissions:            [1]
    });
  }
  /**
   * Update user form values
   * 
   * @param {*} user 
   * @memberof UpdateUserContainer
   */
  updateFormValues(user: any) {
    if(user) {
      this.form.setValue({
        first_name:         user.firstName,
        last_name:          user.lastName,
        email:              user.email,
        confirmed:          user.confirmed,
        status:             user.status,
        assignees_roles:    "3",
        permissions:        1
      });
    }
  }

  /**
   * On user form submit
   * 
   * @param {Event} event 
   * @param {*} form 
   * @memberof UpdateUserContainer
   */
  public onSubmit(event: Event, form: any) {
    form.id = this.userId;
    const userForm = new UserForm(form);

    this.accessUserSandbox.updateUser(userForm);
  }

  /**
   * Unsubscribe from all Observables
   * 
   * @memberof CreateUserContainer
   */
  public onNgDestroy() {
    this.routerSubscription.unsubscribe();
  }

}
