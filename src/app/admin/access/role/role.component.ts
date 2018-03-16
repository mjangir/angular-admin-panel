import { 
  Component, 
  OnInit
}                       from '@angular/core';
import { Store }        from '@ngrx/store';
import { Router }       from '@angular/router';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html'
})
export class RoleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
}
