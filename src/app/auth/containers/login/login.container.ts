import { 
  Component, 
  OnDestroy, 
  OnInit, 
  ChangeDetectionStrategy 
}                     from "@angular/core";
import { 
  FormBuilder, 
  FormGroup, 
  Validators 
}                     from "@angular/forms";
import { Store }      from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import * as fromStore from '../../store';

@Component({
  selector: 'app-login',
  templateUrl: './login.container.html',
  styleUrls: ['./login.container.scss']
})
export class LoginContainer implements OnInit, OnDestroy {

  constructor(private store: Store<fromStore.AuthState>) {

  }

  ngOnInit() {
    this.store.select(fromStore.getLoginState).subscribe(function(state) {
      console.log(state);
    })
  }

  ngOnDestroy() {

  }
}