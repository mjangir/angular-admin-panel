import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { TranslateModule } from 'ng2-translate';
// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AuthSandbox } from '../../auth/auth.sandbox';
// Import components
import { AppBreadcrumbsComponent, AppFooterComponent, AppHeaderComponent, AppSidebarComponent, AppSidebarMinimizerComponent, APP_SIDEBAR_NAV } from '../components';
// Import directives
import { AsideToggleDirective, NAV_DROPDOWN_DIRECTIVES, ReplaceDirective, SIDEBAR_TOGGLE_DIRECTIVES } from '../directives';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { LayoutSandbox } from './layout.sandbox';
import { SimpleLayoutComponent } from './simple-layout/simple-layout.component';



const APP_COMPONENTS = [
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV
];



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
