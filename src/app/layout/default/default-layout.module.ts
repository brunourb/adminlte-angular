import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DefaultLayoutComponent } from './default-layout.component';
import { DefaultLayoutRoutingModule } from './default-layout.routing.module'
import { FooterModule } from '../../shared/components/footer/footer.module';
@NgModule({
  imports: [
    DefaultLayoutRoutingModule,
     FooterModule,
  ],
  declarations: [
    DefaultLayoutComponent
  ],
  exports: [
    DefaultLayoutComponent
  ]
})
export class DefaultLayoutModule { }