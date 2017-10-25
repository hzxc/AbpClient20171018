import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagesComponent } from './languages/languages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountRoutingModule } from './account-routing.module';
import { MaterialModule } from '../material/material.module';
import { LoginService } from './login/login.service';
import { AccountComponent } from './account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ServiceProxyModule } from '../shared/service-proxies/service-proxy.module';
import { ThemeSwitcherModule } from '../shared/modules/theme-switcher/theme-switcher.module';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    ServiceProxyModule,
    ReactiveFormsModule,
    ThemeSwitcherModule
  ],
  providers: [
    LoginService
  ],
  declarations: [
    AccountComponent,
    LanguagesComponent,
    LoginComponent, 
    RegisterComponent, 
  ],
})
export class AccountModule { }
