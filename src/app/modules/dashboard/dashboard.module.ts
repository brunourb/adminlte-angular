import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import "jquery";
// import * as $ from 'jquery';

import { DashboardComponent } from './dashboard.component';
import { CardDetailsModule } from '../../shared/components/card-details/card-details.module';
import { DashbardControlPanelComponent } from './control-panel/pages/dashboard-control-panel.component'
import { DashboardRoutingModule } from './dashboard.routing.module'


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    CardDetailsModule,
  ],
  declarations: [
    DashboardComponent,
    DashbardControlPanelComponent
  ],
})

export class DashboardModule { }
