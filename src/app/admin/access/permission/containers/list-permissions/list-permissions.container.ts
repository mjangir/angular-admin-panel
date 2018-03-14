import { 
  Component, 
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy
}                             from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { AccessPermissionSandbox } from '../../permission.sandbox';
import { SwalComponent } from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-list-permissions',
  templateUrl: './list-permissions.container.html',
  styleUrls: ['./list-permissions.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListPermissionsContainer implements OnInit {

  title = 'Permissions List';
  
  @ViewChild(DatatableComponent)
  table: DatatableComponent;

  @ViewChild('filterInput') 
  private filterInput : ElementRef;

  @ViewChild('deleteSingleSwal') 
  private deleteSingleSwal: SwalComponent;

  @ViewChild('deleteMultipleSwal') 
  private deleteMultipleSwal: SwalComponent;

  @ViewChild('noRecordSelectedSwal') 
  private noRecordSelectedSwal: SwalComponent;
  
  private selectedIds: Array<number> = [];

  constructor(
    public accessPermissionSandbox: AccessPermissionSandbox
  ) {

  }

  ngOnInit() {
    this.accessPermissionSandbox.getPermissions();
  }

  /**
   * Update filter permissions
   * 
   * @param event 
   */
  updateFilter(event) {
    this.accessPermissionSandbox.permissions$ = this.accessPermissionSandbox.permissions$
    .map(permissions => permissions.filter(permission => {
      let term = event.target.value;
      return permission.name.toLowerCase().indexOf(term.toLowerCase()) > -1 || 
            permission.displayName.toLowerCase().indexOf(term.toLowerCase()) > -1;
    }));
    this.table.offset = 0;
  }

  clearFilter(event) {
    this.filterInput.nativeElement.value = "";
    this.accessPermissionSandbox.permissions$ = this.accessPermissionSandbox.permissions$.map(permissions => permissions);
    this.table.offset = 0;
  }

  /**
   * Handle single record delete
   * 
   * @param {any} event 
   * @param {number} id 
   * @memberof ListPermissionsContainer
   */
  handleSingleDelete(event, id: number) {
    this.accessPermissionSandbox.deletePermission(id);
  }

  /**
   * Handle multiple records delete
   * 
   * @memberof ListPermissionsContainer
   */
  handleMultipleDelete() {
    console.log(this.selectedIds);
    this.accessPermissionSandbox.deleteMultiplePermissions(this.selectedIds);
  }

  /**
   * On table row select
   * 
   * @param {any} {selected} 
   * @memberof ListPermissionsContainer
   */
  onRowSelect({selected}) {
    this.selectedIds = selected.map(permission => permission.id);
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
