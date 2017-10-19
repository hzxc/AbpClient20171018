import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagesComponent } from './languages/languages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountRoutingModule } from './account-routing.module';
import { MaterialModule } from '../material/material.module';
import { LoginService } from './login/login.service';
import { AccountComponent } from './account.component';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialModule
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
