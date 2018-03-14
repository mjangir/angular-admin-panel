import { 
  Component, 
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy
}                             from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { AccessUserSandbox } from '../../user.sandbox';
import { SwalComponent } from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.container.html',
  styleUrls: ['./list-users.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListUsersContainer implements OnInit {

  title = 'Users List';
  
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
    public accessUserSandbox: AccessUserSandbox
  ) {

  }

  ngOnInit() {
    this.accessUserSandbox.getUsers();
  }

  /**
   * Update filter users
   * 
   * @param event 
   */
  updateFilter(event) {
    this.accessUserSandbox.users$ = this.accessUserSandbox.users$
    .map(users => users.filter(user => {
      let term = event.target.value;
      return user.firstName.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
      user.lastName.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
      user.email.toLowerCase().indexOf(term.toLowerCase()) > -1;
    }));
    this.table.offset = 0;
  }

  clearFilter(event) {
    this.filterInput.nativeElement.value = "";
    this.accessUserSandbox.users$ = this.accessUserSandbox.users$.map(users => users);
    this.table.offset = 0;
  }

  /**
   * Handle single record delete
   * 
   * @param {any} event 
   * @param {number} id 
   * @memberof ListUsersContainer
   */
  handleSingleDelete(event, id: number) {
    this.accessUserSandbox.deleteUser(id);
  }

  /**
   * Handle multiple records delete
   * 
   * @memberof ListUsersContainer
   */
  handleMultipleDelete() {
    console.log(this.selectedIds);
    this.accessUserSandbox.deleteMultipleUsers(this.selectedIds);
  }

  /**
   * On table row select
   * 
   * @param {any} {selected} 
   * @memberof ListUsersContainer
   */
  onRowSelect({selected}) {
    this.selectedIds = selected.map(user => user.id);
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
