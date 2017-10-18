import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { SessionsRoutingModule } from './sessions.routing';
import { ErrorComponent } from './error/error.component';

@NgModule({
  imports: [
    CommonModule,
    SessionsRoutingModule
  ],
  declarations: [NotFoundComponent,ErrorComponent]
})
export class SessionsModule { }
