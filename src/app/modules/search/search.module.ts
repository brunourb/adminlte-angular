import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import * as $ from "jquery";
import "jquery";

import { SearchPanleComponent } from "./search-box/component/search-panel.component";
import { SearchComponent } from "./search.component";

// import { SearchBoxRootComponent } from "./search-box/search-box-root.component";

import { SearchRoutingModule } from "./search.routing.module";
@NgModule({
  imports: [CommonModule, FormsModule, SearchRoutingModule],
  declarations: [SearchPanleComponent, SearchComponent]
})
export class SearchModule {}
