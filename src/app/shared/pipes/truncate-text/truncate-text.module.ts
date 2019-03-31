import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TruncatePipe } from './truncate-text'

@NgModule({
  imports: [],
  declarations: [
    TruncatePipe
  ],
  exports: [
    TruncatePipe
  ]
})
export class TruncateTextModule { }