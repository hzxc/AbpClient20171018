import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenAuthServiceProxy, AuthenticateModel, AuthenticateResultModel, ExternalLoginProviderInfoModel, ExternalAuthenticateModel, ExternalAuthenticateResultModel } from '../../shared/service-proxies/service-proxies';
import { UrlHelper } from '../../shared/helpers/UrlHelper';
import { AppConsts } from '../../shared/AppConsts';

import { MessageService } from 'abp-ng2-module/src/message/message.service';
import { LogService } from 'abp-ng2-module/src/log/log.service';
import { TokenService } from 'abp-ng2-module/src/auth/token.service';
import { UtilsService } from 'abp-ng2-module/src/utils/utils.service';

import * as _ from 'lodash';

@Injectable()
export class LoginService {

    static readonly twoFactorRememberClientTokenName = 'TwoFactorRememberClientToken';

    authenticateModel: AuthenticateModel;
    authenticateResult: AuthenticateResultModel;

    rememberMe: boolean;

    constructor(
        private _tokenAuthService: TokenAuthServiceProxy,
        private _router: Router,
        private _utilsService: UtilsService,
        private _messageService: MessageService,
        private _tokenService: TokenService,
        private _logService: LogService
    ) {
        this.clear();
    }

    authenticate(data:any,finallyCallback?: () => void): void {
        
        this.authenticateModel.init(data);
        
        finallyCallback = finallyCallback || (() => { });
        var si=setInterval(function(){finallyCallback();clearInterval(si);},2000);
        // this._tokenAuthService
        //     .authenticate(this.authenticateModel)
        //     .finally(finallyCallback)
        //     .subscribe((result: AuthenticateResultModel) => {
        //         this.processAuthenticateResult(result);
        //     });
    }

    private processAuthenticateResult(authenticateResult: AuthenticateResultModel) {
        this.authenticateResult = authenticateResult;

        if (authenticateResult.accessToken) {
            //Successfully logged in
            this.login(authenticateResult.accessToken, authenticateResult.encryptedAccessToken, authenticateResult.expireInSeconds, this.rememberMe);

        } else {
            //Unexpected result!

            this._logService.warn('Unexpected authenticateResult!');
            this._router.navigate(['account/login']);
        }
    }

    private login(accessToken: string, encryptedAccessToken: string, expireInSeconds: number, rememberMe?: boolean): void {

        var tokenExpireDate = rememberMe ? (new Date(new Date().getTime() + 1000 * expireInSeconds)) : undefined;

        this._tokenService.setToken(
            accessToken,
            tokenExpireDate
        );

        this._utilsService.setCookieValue(
            AppConsts.authorization.encrptedAuthTokenName,
            encryptedAccessToken,
            tokenExpireDate,
            abp.appPath
        );

        var initialUrl = UrlHelper.initialUrl;
        if (initialUrl.indexOf('/login') > 0) {
            initialUrl = AppConsts.appBaseUrl;
        }

        location.href = initialUrl;
    }

    private clear(): void {
        this.authenticateModel = new AuthenticateModel();
        this.authenticateModel.rememberClient = false;
        this.authenticateResult = null;
        this.rememberMe = false;
    }
}