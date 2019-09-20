import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailMenuComponent } from './mail-menu.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    MailMenuComponent,
  ],
  exports: [
    MailMenuComponent,
  ]
})
export class MailMenuModule { } 