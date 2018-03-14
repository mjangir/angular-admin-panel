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

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.container.html',
  styleUrls: ['./create-role.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateRoleContainer implements OnInit {

  /**
   * Form Group
   * 
   * @type {FormGroup}
   * @memberof CreateRoleContainer
   */
  public form: FormGroup;

  itemList = [];
  selectedItems = [];
  settings = {};

  /**
   * Creates an instance of CreateRoleContainer.
   * 
   * @param {AccessRoleSandbox} accessRoleSandbox 
   * @param {FormBuilder} formBuilder 
   * @memberof CreateRoleContainer
   */
  constructor(
    public accessRoleSandbox: AccessRoleSandbox,
    private formBuilder: FormBuilder
  ) { }

  /**
   * On Init container
   * 
   * @memberof CreateRoleContainer
   */
  ngOnInit() {
    this.form = this.formBuilder.group({
      name:         ["", Validators.required],
      sort:         ["", Validators.required],
      status:       ["", Validators.required],
      permissions:  [[], Validators.required]
    });

    this.itemList = [
      { "id": 1, "itemName": "Angular" },
      { "id": 2, "itemName": "JavaScript" },
      { "id": 3, "itemName": "HTML" },
      { "id": 4, "itemName": "CSS" },
      { "id": 5, "itemName": "ReactJS" },
      { "id": 6, "itemName": "HTML5" },
      { "id": 1, "itemName": "Angular" },
      { "id": 2, "itemName": "JavaScript" },
      { "id": 3, "itemName": "HTML" },
      { "id": 4, "itemName": "CSS" },
      { "id": 5, "itemName": "ReactJS" },
      { "id": 6, "itemName": "HTML5" }
  ];
  this.selectedItems = [{ "id": 2, "itemName": "JavaScript" }];
  this.settings = {
      text: "Select Permissions",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "custom-multiselect-checkbox-dp",
      enableSearchFilter: true,
      searchPlaceholderText: 'Search Permissions...',
      badgeShowLimit: 5
  };
  }

  /**
   * On role form submit
   * 
   * @param {Event} event 
   * @param {*} form 
   * @memberof CreateRoleContainer
   */
  public onSubmit(event: Event, form: any) {
    const roleForm = new RoleForm(form);

    this.accessRoleSandbox.createRole(roleForm);
  }

  /**
   * Unsubscribe from all Observables
   * 
   * @memberof CreateRoleContainer
   */
  public onNgDestroy() {
    this.accessRoleSandbox.unregisterEvents();
  }

  public onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }

  public OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }

  public onSelectAll(items: any) {
    console.log(items);
  }

  public onDeSelectAll(items: any) {
    console.log(items);
  }
}
