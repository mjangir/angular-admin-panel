import { 
  Component, 
  OnInit,
  ViewChild,
  ElementRef
}                             from '@angular/core';
import { Observable }         from 'rxjs/Observable';
import { Store }              from '@ngrx/store';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { AppState }           from '../../../../shared/store/root.reducer';
import { User }               from '../../../../shared/models/admin/access';
import { getAllUsers }        from '../../../../shared/store/admin/user/user.reducer';
import { DeleteUser }         from '../../../../shared/store/admin/user/user.action';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  title = 'Users List';
  users: Observable<User[]>;
  
  @ViewChild(DatatableComponent)
  table: DatatableComponent;

  @ViewChild('filterInput') 
	private filterInput : ElementRef;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.users = this.store.select(getAllUsers);
  }

  /**
   * Update filter users
   * 
   * @param event 
   */
  updateFilter(event) {
    this.users = this.users
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
    this.users = this.users.map(users => users);
    this.table.offset = 0;
  }

  /**
   * Delete the selected hero
   * 
   * @param {number} id the hero id
   */
  delete(id: number) {
    if (confirm('Are you sure do you want to delete this Game?')) {
      this.store.dispatch(new DeleteUser(id));
    }
  }

}
