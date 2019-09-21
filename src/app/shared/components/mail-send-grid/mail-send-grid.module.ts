import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailSendGridComponent } from './mail-send-grid.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Routes, RouterModule } from '@angular/router'; 
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxDatatableModule,
  ],
  declarations: [
    MailSendGridComponent,
  ],
  exports: [
    MailSendGridComponent,
  ]
}) 
export class MailSendGridModule { }