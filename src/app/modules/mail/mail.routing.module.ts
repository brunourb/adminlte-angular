import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailComponent } from './mail.component';
import { InboxComponent } from './mail-box/inbox/component/inbox.component'
import { AuthGuardService as AuthGuard } from '../../core/services/guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: MailComponent,
    children: [
      {
        path: '', component: InboxComponent,
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'MailBox',
          breadcrumbs: 'MailBox',
          title: 'MailBox',
          smallText: '13 New Messages',
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