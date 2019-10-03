import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService as AuthGuard } from "../../core/services/guards/auth-guard.service";
import { SystemComponent } from "./system.component";
// import { SearchPanleComponent } from "./search-box/component/search-panel.component";

// import { SearchBoxRootComponent } from "./search-box/search-box-root.component";

const routes: Routes = [
  {
    path: "",
    component: SystemComponent,
    children: [
      {
        path: "",
        component: SystemComponent,
        canActivate: [AuthGuard],
        data: {
          breadcrumb: "search",
          breadcrumbs: "search",
          title: "search",
          smallText: "search",
          isHome: true,
          icon: "fa fa-home",
          show: false
        },
        children: [
          {
            path: "log",
            component: SystemComponent,
            canActivate: [AuthGuard],
            data: {
              title: "Inbox",
              smallText: "13 New Messages",
              isHome: true,
              icon: "fa fa-home",
              show: false
            }
          }
        ]
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule {}
