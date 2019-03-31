import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DefaultRoutingModule } from './default.routing.module';
import { LoginComponent } from './login/component/login.component';
import { DefaultComponent } from './default.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/component/terms-and-conditions.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    DefaultRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginComponent,
    DefaultComponent,
    TermsAndConditionsComponent
  ],
})
export class DefaultModule { }
