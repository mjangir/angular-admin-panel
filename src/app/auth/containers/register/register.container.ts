import { 
  Component, 
  OnDestroy, 
  OnInit, 
  ChangeDetectionStrategy 
}                       from "@angular/core";
import { 
  FormBuilder, 
  FormGroup, 
  Validators 
}                       from "@angular/forms";
import { Store }        from '@ngrx/store';
import { Observable }   from "rxjs";
import * as fromStore   from '../../store';
import { RegisterForm } from '../../models/register-form.model';
import { AuthSandbox }  from "../../auth.sandbox";

/**
 * Register container class
 * 
 * @export
 * @class RegisterContainer
 * @implements {OnInit}
 * @implements {OnDestroy}
 */
@Component({
  selector: 'app-register',
  templateUrl: './register.container.html',
  styleUrls: ['./register.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterContainer implements OnInit, OnDestroy {

  /**
   * Form Group
   * 
   * @type {FormGroup}
   * @memberof RegisterContainer
   */
  public form: FormGroup;

  /**
   * Creates an instance of RegisterContainer.
   * 
   * @param {AuthSandbox} authSandbox 
   * @param {FormBuilder} formBuilder 
   * @memberof RegisterContainer
   */
  constructor(
    public authSandbox: AuthSandbox,
    private formBuilder: FormBuilder
  ) {
  }

  /**
   * On Init container
   * 
   * @memberof RegisterContainer
   */
  ngOnInit() {
    this.authSandbox.resetRegister();
    
    this.form = this.formBuilder.group({
      first_name:             ["", Validators.required],
      last_name:              [""],
      email:                  ["", Validators.required],
      password:               ["", Validators.required],
      password_confirmation:  ["", Validators.required],
      is_term_accept:         [false, Validators.required]
    });
  }

  /**
   * On register form submit
   * 
   * @param {Event} event 
   * @param {*} form 
   * @memberof RegisterContainer
   */
  public onSubmit(event: Event, form: any) {

    const registerForm = new RegisterForm(form);

    this.authSandbox.register(registerForm);
  }

  ngOnDestroy() {

  }
}