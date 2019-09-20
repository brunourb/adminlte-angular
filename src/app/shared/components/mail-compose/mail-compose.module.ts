import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailComposeComponent } from './mail-compose.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    MailComposeComponent,
  ],
  exports: [
    MailComposeComponent,
  ]
})
export class MailComposeModule { } 