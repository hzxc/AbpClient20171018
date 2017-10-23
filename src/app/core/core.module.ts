import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { RouterModule } from "@angular/router";
import { ThemeService } from '../services/theme/theme.service';
import { MaterialModule } from '../material/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    FlexLayoutModule,
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  providers: [ThemeService],
  declarations: [AuthLayoutComponent, AdminLayoutComponent, NavigationComponent]
})
export class CoreModule { }
