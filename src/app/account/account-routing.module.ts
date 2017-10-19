import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account.component';

const routes: Routes = [
    {
    path: '',
    component:AccountComponent,
    children: [{
      path: 'login',
      component: LoginComponent,
      data: { title: 'Login' }
    }, {
      path: 'register',
      component: RegisterComponent,
      data: { title: 'Register' }
    }]
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule {}
