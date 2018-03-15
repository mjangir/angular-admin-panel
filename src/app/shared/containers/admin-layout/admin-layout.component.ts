import { Component, OnInit } from '@angular/core';
import * as fromStore from '../../../auth/store'
import { Store } from '@ngrx/store';
import { AuthSandbox } from '../../../auth/auth.sandbox';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(
    private store: Store<fromStore.AuthState>,
    private authSandbox: AuthSandbox
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authSandbox.logout();
  }

}
