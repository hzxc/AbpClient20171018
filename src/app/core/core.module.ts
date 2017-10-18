import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { RouterModule } from "@angular/router";
import { ThemeService } from '../services/theme/theme.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [ThemeService],
  declarations: [AuthLayoutComponent, AdminLayoutComponent]
})
export class CoreModule { }
