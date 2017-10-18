import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, Injector, LOCALE_ID } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { AbpModule,ABP_HTTP_PROVIDER } from 'abp-ng2-module/src/abp.Module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ServiceProxyModule } from './shared/service-proxies/service-proxy.module';
import { AppRoutingModule } from './app-routing.module';
import { API_BASE_URL } from './shared/service-proxies/service-proxies';
import { AppConsts } from './shared/AppConsts';
import { AppPreBootstrap } from './AppPreBootstrap';
import { AppSessionService } from './shared/session/app-session.service';
import { CoreModule } from './core/core.module';

export function appInitializerFactory(injector: Injector) {
  return () => {

    // abp.ui.setBusy();
    return new Promise<boolean>((resolve, reject) => {
      AppPreBootstrap.run(() => {
        var appSessionService: AppSessionService = injector.get(AppSessionService);
        appSessionService.init().then(
          (result) => {
            // abp.ui.clearBusy();
            resolve(result);
          },
          (err) => {
            // abp.ui.clearBusy();
            reject(err);
          }
        );
      });
    });
  }
}
export function getRemoteServiceBaseUrl(): string {
  return AppConsts.remoteServiceBaseUrl;
}

export function getCurrentLanguage(): string {
  return abp.localization.currentLanguage.name;
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    ServiceProxyModule,
    AppRoutingModule,
    HttpModule,
    CoreModule
  ],
  providers: [
    ABP_HTTP_PROVIDER,
    { provide: API_BASE_URL, useFactory: getRemoteServiceBaseUrl },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [Injector],
      multi: true
    },
      {
          provide: LOCALE_ID,
          useFactory: getCurrentLanguage
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


