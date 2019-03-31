import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MainSidebarComponent } from './main-sidebar.component';
import * as $ from 'jquery'

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    MainSidebarComponent,
  ],
  exports: [
    MainSidebarComponent,
    RouterModule
  ]
})
export class MainSidebarModule { }