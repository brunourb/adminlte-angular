import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import "jquery";
import * as $ from "jquery";

import { SystemComponent } from "./system.component";
import { SearchRoutingModule } from "./system.routing.module";
@NgModule({
  imports: [CommonModule, FormsModule, SearchRoutingModule],
  declarations: [SystemComponent]
})
export class SystemModule {}
