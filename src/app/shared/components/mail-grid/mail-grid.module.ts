import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailGridComponent } from './mail-grid.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Routes, RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxDatatableModule,
  ],
  declarations: [
    MailGridComponent,
  ],
  exports: [
    MailGridComponent,
  ]
}) 
export class MailGridModule { }