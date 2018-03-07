import { 
  Component, 
  OnInit 
}                     from '@angular/core';
import { 
  Router, 
  NavigationEnd 
}                     from '@angular/router';
import { AppSandbox } from './app.sandbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppSandbox]
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private router: Router, public appSandbox: AppSandbox) { }

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
