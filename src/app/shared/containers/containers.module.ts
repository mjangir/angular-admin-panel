import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule }              from 'ng2-translate';
import { SimpleLayoutComponent } from './simple-layout/simple-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';

// Import components
import {
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV
} from '../components';

const APP_COMPONENTS = [
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV
];


// Import directives
import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
} from '../directives';
import { LayoutSandbox } from './layout.sandbox';
import { AuthSandbox } from '../../auth/auth.sandbox';

const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
]

export const CONTAINERS = [
  SimpleLayoutComponent,
  AdminLayoutComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule
  ],
  declarations: [
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
    ...CONTAINERS
  ],
  exports: [RouterModule, ...CONTAINERS],
  providers: [LayoutSandbox, AuthSandbox]
})
export class ContainersModule { }
