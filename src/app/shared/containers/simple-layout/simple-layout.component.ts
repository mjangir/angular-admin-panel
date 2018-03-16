import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../app.store';

@Component({
  selector: 'app-simple-layout',
  templateUrl: './simple-layout.component.html',
  styleUrls: ['./simple-layout.component.css']
})
export class SimpleLayoutComponent implements OnInit {

  constructor(
    private store: Store<fromStore.State>
  ) { }

  ngOnInit() {
    this.store.subscribe(function(s) {
      console.log("s", s);
    })
  }

}
