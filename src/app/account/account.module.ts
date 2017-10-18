import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagesComponent } from './languages/languages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountRoutingModule } from './account-routing.module';
import { MaterialModule } from '../material/material.module';
import { LoginService } from './login/login.service';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialModule
  ],
  providers: [
    LoginService
  ],
  declarations: [LanguagesComponent, LoginComponent, RegisterComponent],
})
export class AccountModule { }
