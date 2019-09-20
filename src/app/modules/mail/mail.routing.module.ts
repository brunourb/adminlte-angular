import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailComponent } from './mail.component';
// import { DashbardControlPanelComponent } from './control-panel/pages/dashboard-control-panel.component';
import { AuthGuardService as AuthGuard } from '../../core/services/guards/auth-guard.service';
const routes: Routes = [
  {
    path: '',
    component: MailComponent,
    children: [
      {
        // path: '', component: DashbardControlPanelComponent,
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Dashboard',
          breadcrumbs: 'Dashboard',
          title: 'Dashboard Title',
          smallText: 'Dashboard Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false
        },
      },
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class MailRoutingModule { }