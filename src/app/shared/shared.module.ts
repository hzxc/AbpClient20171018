import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {
//     MatToolbarModule,
//     MatIconModule,
//     MatButtonModule,
//     MatCardModule,
//     MatInputModule,
//     MatListModule,
//     MatSlideToggleModule,
//     MatGridListModule,
//     MatDialogModule,
//     MatAutocompleteModule,
//     MatMenuModule,
//     MatCheckboxModule,
//     MatTooltipModule
//   } from '@angular/material';
import { AppSessionService } from './session/app-session.service';
import { AppUrlService } from './nav/app-url.service';
import { AppAuthService } from './auth/app-auth.service';
import { AppRouteGuard } from './auth/auth-route-guard';
import { AbpModule } from 'abp-ng2-module/src/abp.Module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        AbpModule,
        RouterModule
    ],
    exports: [
    ],
    providers: [],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                AppSessionService,
                AppUrlService,
                AppAuthService,
                AppRouteGuard
            ]
        }
    }
}