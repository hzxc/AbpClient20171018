import { Component, Injector, ViewChild, ElementRef, Output, OnDestroy } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { AbpSessionService } from 'abp-ng2-module/src/session/abp-session.service';
import { AppComponentBase } from '../../shared/app-component-base';
import { MatProgressBar, MatButton } from '@angular/material';
import { AccountLoginService } from '../shared-services/account-login-service';

@Component({
  selector: 'account-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends AppComponentBase {
 
  @ViewChild('loginForm') loginForm: ElementRef;
  @ViewChild(MatButton) submitButton: MatButton;
  @Output('progressChange')

  private loginModel: FormGroup;
  submitting: boolean = false;

  constructor( injector: Injector,
    public loginService: LoginService,
    private _router: Router,
    private _sessionService: AbpSessionService,
    fb: FormBuilder,
    private accountLoginService: AccountLoginService) { 
      super(injector);
      this.loginModel = fb.group({
        userNameOrEmailAddress: ['', [Validators.required, Validators.minLength(4)]],
        password:['', [Validators.required, Validators.minLength(6)]],
        rememberClient:false
      });
    }
    
    userNameOrEmailAddressErrorMessage():string {
    return this.loginModel.hasError('required',['userNameOrEmailAddress']) ? 'You must enter a value' :
        this.loginModel.hasError('minlength',['userNameOrEmailAddress']) ? 'minLength length 4' :'';
    }
    passwordErrorMessage():string{
      return this.loginModel.hasError('required',['password']) ? 'You must enter a value' :
      this.loginModel.hasError('minlength',['password']) ? 'minLength length 6' :'';
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

    progressBarChange(){
      this.submitting = !this.submitting;
      this.accountLoginService.progressBarChange(this.submitting);
    }

    login(): void {
      if(this.loginModel.invalid) return;
      console.log(this.loginModel.value);
      this.progressBarChange();
      this.submitButton.disabled = true;
      this.loginService.authenticate(
        this.loginModel.value,
        () => {this.submitButton.disabled = false;this.progressBarChange();}
      );
    }

}
