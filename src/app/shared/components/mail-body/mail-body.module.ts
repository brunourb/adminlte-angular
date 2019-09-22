import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule } from '@angular/forms';
import { MailBodyComponent } from './mail-body.component';
import { Routes, RouterModule } from '@angular/router';
 
@NgModule({
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    RouterModule,   
  ],
  declarations: [
    MailBodyComponent,
  ],
  exports: [
    MailBodyComponent,
  ]
})
export class MailBodyModule { } 