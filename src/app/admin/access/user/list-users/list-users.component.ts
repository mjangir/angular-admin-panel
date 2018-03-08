import { 
  Component, 
  OnInit 
}                       from '@angular/core';
import { Observable }   from 'rxjs/Observable';
import { Store }        from '@ngrx/store';
import { AppState }     from '../../../../shared/store/root.reducer';
import { User }         from '../../../../shared/models/admin/access';
import { DeleteUser }   from '../../../../shared/store/admin/user/user.action';
import { getAllUsers }  from '../../../../shared/store/admin/user/user.reducer';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  title = 'Users List';
  users: Observable<User[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    console.log('... initializing user list component.');
  
    this.users = this.store.select(getAllUsers);
  }

  updateFilter(event) {

  }

  /**
   * Delete the selected hero
   * @param {number} id the hero id
   */
  delete(id: number) {
    if (confirm('Are you sure do you want to delete this Game?')) {
      this.store.dispatch(new DeleteUser(id));
    }
  }

}
