import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pipes
import { ActiveBadge } from './active-badge.pipe';

@NgModule({
  imports: [],
  declarations: [
    ActiveBadge
  ],
  exports:[
    ActiveBadge
  ]
})
export class CommonPipesModule { }
