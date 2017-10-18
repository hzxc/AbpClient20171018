import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
    {
        path: '',
        children:[
            {
                path: '404',
                component: NotFoundComponent,
                data: { title: 'Not Found' }
            },
            {
                path: 'error',
                component: ErrorComponent,
                data: { title: 'Error' }
            }
        ]
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SessionsRoutingModule {}
