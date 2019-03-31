import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserGridComponent } from './user-grid.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Routes, RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxDatatableModule,
  ],
  declarations: [
    UserGridComponent,
  ],
  exports: [
    UserGridComponent,
  ]
}) 
export class UserGridModule { }