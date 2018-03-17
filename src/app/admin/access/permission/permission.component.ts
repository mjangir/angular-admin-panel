import { 
  Component, 
  OnInit,
  OnDestroy
}                       from '@angular/core';
import { Store }        from '@ngrx/store';
import { Router }       from '@angular/router';
import { AccessPermissionSandbox } from './permission.sandbox';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html'
})
export class PermissionComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private accessPermissionSandbox: AccessPermissionSandbox
  ) { }

  ngOnInit() {
    this.accessPermissionSandbox.resetAllStates();
    this.accessPermissionSandbox.registerSubscribers();
  }

  ngOnDestroy() {
    this.accessPermissionSandbox.unregisterSubscribers();
  }
  
}
