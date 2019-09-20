import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MailComponent } from './mail.component';

import { MailRoutingModule } from './mail.routing.module';
import { MailGridModule } from '../../shared/components/mail-grid/mail-grid.module';
import { InboxComponent } from './mail-box/inbox/component/inbox.component'

@NgModule({
  imports: [
    CommonModule,
    MailRoutingModule,
    FormsModule,
    MailGridModule
  ],
  declarations: [
    MailComponent,
    InboxComponent
  ],
})

export class MailModule { }
