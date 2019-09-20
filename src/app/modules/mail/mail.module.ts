import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MailComponent } from './mail.component';

import { MailRoutingModule } from './mail.routing.module';

import { InboxComponent } from './mail-box/inbox/component/inbox.component'

@NgModule({
  imports: [
    CommonModule,
    MailRoutingModule,
    FormsModule,
  ],
  declarations: [
    MailComponent,
    InboxComponent
  ],
})

export class MailModule { }
