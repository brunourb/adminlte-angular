import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CardDetailsComponent } from './card-details.component';
import { TruncateTextModule } from '../../pipes/truncate-text/truncate-text.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TruncateTextModule
  ],
  declarations: [
    CardDetailsComponent,
  ],
  exports: [
    CardDetailsComponent
  ]
})
export class CardDetailsModule { }