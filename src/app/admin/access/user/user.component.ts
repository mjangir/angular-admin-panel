import { 
  Component, 
  OnInit
}                       from '@angular/core';
import { Store }        from '@ngrx/store';
import { Router }       from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('... Initializing Users component');
  }
  
}
