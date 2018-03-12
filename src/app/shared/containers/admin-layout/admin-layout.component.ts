import { Component, OnInit } from '@angular/core';
import * as fromStore from '../../../auth/store'
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(
    private store: Store<fromStore.AuthState>
  ) { }

  ngOnInit() {
    this.store.select<any>('auth').subscribe(function(user) {
      console.log(user);
    })
  }

}
