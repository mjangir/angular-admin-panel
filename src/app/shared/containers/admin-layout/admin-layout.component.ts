import { Component, OnInit } from '@angular/core';
import * as fromStore from '../../../app.store';
import { Store } from '@ngrx/store';
import { AuthSandbox } from '../../../auth/auth.sandbox';
import { LogoutAction } from '../../../auth/store/index';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(
    private store: Store<fromStore.State>,
    private authSandbox: AuthSandbox
  ) { }

  ngOnInit() {
    
  }

  logout() {
    this.authSandbox.logout();
  }

}
