import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MailComponent } from './mail.component';

import { MailRoutingModule } from './mail.routing.module';

// import { CardDetailsModule } from '../../shared/components/card-details/card-details.module';
// import { DashbardControlPanelComponent } from './control-panel/pages/dashboard-control-panel.component'

@NgModule({
  imports: [
    CommonModule,
    MailRoutingModule,
    FormsModule,
    // CardDetailsModule,
  ],
  declarations: [
    MailComponent,
    // DashbardControlPanelComponent
  ],
})

export class MailModule { }
