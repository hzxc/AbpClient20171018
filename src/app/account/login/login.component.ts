import { Component, Injector, ViewChild, ElementRef } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { AbpSessionService } from 'abp-ng2-module/src/session/abp-session.service';
import { AppComponentBase } from '../../shared/app-component-base';

@Component({
  selector: 'account-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AppComponentBase {
  @ViewChild('loginForm') loginForm: ElementRef;
  submitting: boolean = false;
  constructor( injector: Injector,
    public loginService: LoginService,
    private _router: Router,
    private _sessionService: AbpSessionService) { 
      super(injector);
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
      this.submitting = true;
      this.loginService.authenticate(
          () => this.submitting = false
      );
  }

}
