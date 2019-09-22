import { NgModule, Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MailComponent } from './mail.component';

import { MailRoutingModule } from './mail.routing.module';
import { MailGridModule } from '../../shared/components/mail-grid/mail-grid.module';
import { InboxComponent } from './mail-box/inbox/component/inbox.component';
import { MailBoxRootComponent } from './mail-box/mail-box-root.component';
import { ReadMailComponent } from './mail-box/read/component/read-mail.component';
import { ComposeMailComponent } from './mail-box/compose/component/compose-mail.component';
import { MailMenuModule } from '../../shared/components/mail-menu/mail-menu.module';
import { MailComposeModule } from '../../shared/components/mail-compose/mail-compose.module';
import { JunkComponent } from './mail-box/junk/component/junk.component';
import { TrashComponent } from './mail-box/trash/component/trash.component';
import { MailSendGridModule } from '../../shared/components/mail-send-grid/mail-send-grid.module';
import { SendComponent } from './mail-box/send/component/send.component';  


@NgModule({
  imports: [
    CommonModule,
    MailRoutingModule,
    FormsModule,
    MailGridModule,
    MailMenuModule,
    MailComposeModule,
    MailSendGridModule,
  ],
  declarations: [
    MailComponent,
    InboxComponent,
    MailBoxRootComponent,
    ReadMailComponent,
    ComposeMailComponent,
    JunkComponent,
    TrashComponent,
    SendComponent
  ],
})

export class MailModule { }
