import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'activeBadge'})
export class ActiveBadge implements PipeTransform {
  transform(value: number, type: any = 0): string {
    let className   = value == 1 ? 'success' : 'danger';
    var statusText  = "";

    switch(type) {
      case '0':
        statusText = value == 1 ? 'Active' : 'In-Active';
      break;
      case '1':
        statusText = value == 1 ? 'Yes' : 'No';
      break;
      case '2':
        statusText = value == 1 ? 'Enabled' : 'Disabled';
      break;
      default:
        statusText = value == 1 ? 'Active' : 'In-Active';
      break;
    }
    
    return `<h6>
              <span class="badge badge-${className}">${statusText}</span>
            </h6>`;
  }
}