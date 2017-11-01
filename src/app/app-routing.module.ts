import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './core/layouts/admin-layout/admin-layout.component';
import { AppRouteGuard } from './shared/auth/auth-route-guard';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'dashboard', 
    pathMatch: 'full' 
  },
  {
    path: '', 
    component: AuthLayoutComponent,
    children: [
      { 
        path: 'account',
        loadChildren: './account/account.module#AccountModule',
        data: { title: 'Account'}
      },
      { 
        path: 'sessions', 
        loadChildren: './views/sessions/sessions.module#SessionsModule',
        data: { title: 'Session'} 
      }
    ]
  },
  {
    path:'',
    component: AdminLayoutComponent,
    children:[
      {
        path: 'dashboard', 
        loadChildren: './views/dashboard/dashboard.module#DashboardModule', 
        // canActivate:[AppRouteGuard],
        data: { title: 'Dashboard', breadcrumb: 'Dashboard'}
      },
      {
        path: 'users', 
        loadChildren: './views/users/users.module#UsersModule', 
        data: { title: 'Users', breadcrumb: 'Users'}
      },
    ]
  },
  { 
    path: '**', 
    redirectTo: 'sessions/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
