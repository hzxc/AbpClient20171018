import { Component, Injector, ViewChild, ElementRef } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { AbpSessionService } from 'abp-ng2-module/src/session/abp-session.service';
import { AppComponentBase } from '../../shared/app-component-base';
import { MatProgressBar, MatButton } from '@angular/material';

@Component({
  selector: 'account-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AppComponentBase {
  @ViewChild('loginForm') loginForm: ElementRef;
  @ViewChild(MatButton) submitButton: MatButton;

  private loginModel: FormGroup;
  constructor( injector: Injector,
    public loginService: LoginService,
    private _router: Router,
    private _sessionService: AbpSessionService,
    fb: FormBuilder) { 
      super(injector);
      this.loginModel = fb.group({
        userNameOrEmailAddress: ['', [Validators.required, Validators.minLength(6)]],
        password:'',
        rememberMe:false
      });
    }

    ngAfterContentInit(): void {
      $(this.loginForm.nativeElement).find('input:first').focus();
    }

    get multiTenancySideIsTeanant(): boolean {
      return this._sessionService.tenantId > 0;
    }

    get isSelfRegistrationAllowed(): boolean {
      if (!this._sessionService.tenantId) {
          return false;
      }
      return true;
    }
   

    login(): void {
      console.log(this.loginModel.value);
      this.submitButton.disabled = true;
      this.loginService.authenticate(
        this.loginModel.value,
        () => {this.submitButton.disabled = false}
      );
  }
}
