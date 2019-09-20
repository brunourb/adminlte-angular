import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService as AuthGuard } from '../../core/services/guards/auth-guard.service';

import { MailComponent } from './mail.component';
import { InboxComponent } from './mail-box/inbox/component/inbox.component';
import { MailBoxRootComponent } from './mail-box/mail-box-root.component';

const routes: Routes = [
  {
    // path: '',
    // component: AdminComponent,
    children: [
      {
        path: 'mail', component: MailBoxRootComponent,
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
        children: [
          {
            path: '', component: InboxComponent,
            canActivate: [AuthGuard],
            data: {
              breadcrumb: 'mail',
              breadcrumbs: 'mail',
              title: 'mail Title',
              smallText: 'mail Small Text',
              isHome: true,
              icon: 'fa fa-home',
              show: false
            },
          },
          {
            // path: 'add', component: AddUserComponent,
            // canActivate: [AuthGuard],
            // data: {
            //   breadcrumb: 'Register User',
            //   breadcrumbs: 'Register User',
            //   title: 'Register User Title',
            //   smallText: 'Register User Small Text',
            //   isHome: true,
            //   icon: 'fa fa-home',
            //   show: false
            // },
          },
          {
            // path: 'detail/:id', component: UserDetailComponent,
            // canActivate: [AuthGuard],
            // data: {
            //   breadcrumb: 'User Details',
            //   breadcrumbs: 'User Details',
            //   title: 'User Details Title',
            //   smallText: 'User Details Small Text',
            //   isHome: true,
            //   icon: 'fa fa-home',
            //   show: false
            // },
          },
        ]
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