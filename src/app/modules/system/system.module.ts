import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import "jquery";
import * as $ from "jquery";

import { SystemComponent } from "./system.component"; 
import { SystemRoutingModule } from "./system.routing.module"; 
import { SystemLogComponent } from "./system-log/component/system-log.component"; 
@NgModule({
  imports: [CommonModule, FormsModule, SystemRoutingModule],
  declarations: [SystemComponent, SystemLogComponent]
})
export class SystemModule {}
