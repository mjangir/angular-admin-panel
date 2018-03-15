import { 
  Component, 
  OnInit
}                       from '@angular/core';
import { Store }        from '@ngrx/store';
import { Router }       from '@angular/router';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html'
})
export class PermissionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('... Initializing Permissions component');
  }
  
}
