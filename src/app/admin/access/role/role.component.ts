import { 
  Component, 
  OnInit,
  OnDestroy
}                       from '@angular/core';
import { Store }        from '@ngrx/store';
import { Router }       from '@angular/router';
import { AccessRoleSandbox } from './role.sandbox';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html'
})
export class RoleComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private accessRoleSandbox: AccessRoleSandbox
  ) { }

  ngOnInit() {
    this.accessRoleSandbox.resetAllStates();
    this.accessRoleSandbox.registerSubscribers();
  }

   ngOnDestroy() {
     this.accessRoleSandbox.unregisterSubscribers();
   }
}
