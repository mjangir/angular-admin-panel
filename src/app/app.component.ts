import { 
  Component, 
  OnInit,
  ViewContainerRef
}                         from '@angular/core';
import { 
  Router, 
  NavigationEnd 
}                         from '@angular/router';
import { AppSandbox }     from './app.sandbox';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppSandbox]
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    private router: Router, 
    public appSandbox: AppSandbox,
    public toastr: ToastrService,
    vRef: ViewContainerRef
  ) {
    // this.toastr.setRootViewContainerRef(vRef);
  }

  ngOnInit() {
    this.appSandbox.setupLanguage();
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
}
