import { 
  Component, 
  OnInit
}                       from '@angular/core';
import { Store }        from '@ngrx/store';
import { Router }       from '@angular/router';
import { LoadAllUsers } from '../../../shared/store/admin/user/user.action';
import { AppState }     from '../../../shared/store/root.reducer';
import {
  getCreateError,
  getDeleteError,
  getUsersError,
  getUpdateError,
  isCreated,
  isDeleted,
  isUpdated
}                       from '../../../shared/store/admin/user/user.reducer';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router,
    private store: Store<AppState>) { }

  ngOnInit() {
    console.log('... Initializing Users component');
    this.store.dispatch(new LoadAllUsers());

    // subscriptions when success or error action
    this.store.select(getUsersError).subscribe((error) => this.loadingError(error));
    this.store.select(isDeleted).subscribe((done) => {
      this.actionSuccess(done, 'The user was deleted successfully!!!');
    });
    this.store.select(getDeleteError).subscribe((error) => {
      this.actionError(error, 'Error while deleting the user');
    });
    this.store.select(isUpdated).subscribe((done) => {
      this.actionSuccess(done, 'The user was updated successfully!!!');
    });
    this.store.select(getUpdateError).subscribe((error) => {
      this.actionError(error, 'Error while updating the user');
    });
    this.store.select(isCreated).subscribe((done) => {
      this.actionSuccess(done, 'The user was created successfully!!!');
    });
    this.store.select(getCreateError).subscribe((error) => {
      this.actionError(error, 'Error while creating the user');
    });
  }

  /**
   * Display error message if load of users fails
   */
  loadingError(error) {
    if (error) {
      //this.toastr.error(error, 'Error');
      //alert('Error while loading the list of users');
    }
  }

  /**
   * Display success message after execute specific action over the user
   * @param done true if action was completed or false
   * @param message the message to be displayed
   */
  actionSuccess(done: boolean, message: string) {
    if (done) {
      alert(message);
      this.router.navigate(['/users']);
    }
  }

  /**
   * Display error message is execution of action fails
   * @param error the error thrown
   * @param message the message to be displayed
   */
  actionError(error, message: string) {
    if (error) {
      //this.toastr.error(message, 'Error');
      //alert(message);
    }
  }

}
