import { 
  Component, 
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy
}                             from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { AccessUserSandbox } from '../../user.sandbox';

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
   * Delete the selected hero
   * 
   * @param {number} id the hero id
   */
  delete(id: number) {
    if (confirm('Are you sure do you want to delete this Game?')) {
      console.log("hello");
    }
  }

}
