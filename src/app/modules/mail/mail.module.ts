import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MailComponent } from './mail.component';

import { MailRoutingModule } from './mail.routing.module';
import { MailGridModule } from '../../shared/components/mail-grid/mail-grid.module';
import { InboxComponent } from './mail-box/inbox/component/inbox.component';
import { MailBoxRootComponent } from './mail-box/mail-box-root.component';
import { ReadMailComponent } from './mail-box/read/component/read-mail.component';
import { MailMenuModule } from '../../shared/components/mail-menu/mail-menu.module';

@NgModule({
  imports: [
    CommonModule,
    MailRoutingModule,
    FormsModule,
    MailGridModule,
    MailMenuModule,
    MailComposeModule
  ],
  declarations: [
    MailComponent,
    InboxComponent,
    MailBoxRootComponent,
    ReadMailComponent,
    ComposeComponent
  ],
})

export class MailModule { }
