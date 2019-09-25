import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy
}                             from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { AccessRoleSandbox } from '../../role.sandbox';
import { SwalComponent } from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.container.html',
  styleUrls: ['./list-roles.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListRolesContainer implements OnInit {

  title = 'Roles List';

  @ViewChild(DatatableComponent,{static:false})
  table: DatatableComponent;

  @ViewChild('filterInput'),{static:false}
  private filterInput : ElementRef;

  @ViewChild('deleteSingleSwal'),{static:false}
  private deleteSingleSwal: SwalComponent;

  @ViewChild('deleteMultipleSwal'),{static:false}
  private deleteMultipleSwal: SwalComponent;

  @ViewChild('noRecordSelectedSwal'),{static:false}
  private noRecordSelectedSwal: SwalComponent;

  private selectedIds: Array<number> = [];

  constructor(
    public accessRoleSandbox: AccessRoleSandbox
  ) {

  }

  ngOnInit() {
    this.accessRoleSandbox.getRoles();
  }

  /**
   * Update filter roles
   *
   * @param event
   */
  updateFilter(event) {
    this.accessRoleSandbox.roles$ = this.accessRoleSandbox.roles$
    .map(roles => roles.filter(role => {
      let term = event.target.value;
      return role.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    }));
    this.table.offset = 0;
  }

  clearFilter(event) {
    this.filterInput.nativeElement.value = "";
    this.accessRoleSandbox.roles$ = this.accessRoleSandbox.roles$.map(roles => roles);
    this.table.offset = 0;
  }

  /**
   * Handle single record delete
   *
   * @param {any} event
   * @param {number} id
   * @memberof ListRolesContainer
   */
  handleSingleDelete(event, id: number) {
    this.accessRoleSandbox.deleteRole(id);
  }

  /**
   * Handle multiple records delete
   *
   * @memberof ListRolesContainer
   */
  handleMultipleDelete() {
    this.accessRoleSandbox.deleteMultipleRoles(this.selectedIds);
  }

  /**
   * On table row select
   *
   * @param {any} {selected}
   * @memberof ListRolesContainer
   */
  onRowSelect({selected}) {
    this.selectedIds = selected.map(role => role.id);
  }
}
