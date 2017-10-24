import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { RouterModule } from "@angular/router";
import { ThemeService } from '../services/theme/theme.service';
import { MaterialModule } from '../material/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavigationService } from './services/navigation.service';
import { SideNavAccordionDirective } from './directives/sidenav-accordion.directive';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  imports: [
    FlexLayoutModule,
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  providers: [ThemeService,NavigationService],
  declarations: [
    AuthLayoutComponent, 
    AdminLayoutComponent, 
    NavigationComponent,
    SideNavAccordionDirective, 
    TopbarComponent],
})
export class CoreModule { }
