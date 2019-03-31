import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { AlertModule } from '../../widgets/alert/alert.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule
  ],
  declarations: [
    RegisterComponent,
  ],
  exports: [
    RegisterComponent,
  ]
})
export class RegisterModule { }