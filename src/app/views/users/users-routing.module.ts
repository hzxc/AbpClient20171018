import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
    { path: '', component: UsersComponent, data: { title: 'Users' } },
    { path: 'create', component: CreateUserComponent, data: { title: 'CreateUsers' } }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {}

