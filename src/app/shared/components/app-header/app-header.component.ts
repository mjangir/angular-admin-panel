import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent { 
  @Output()
  logout: EventEmitter<any> = new EventEmitter();

  logoutUser() {
    this.logout.emit();
  }
}
