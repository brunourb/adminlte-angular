import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService as AuthGuard } from '../../core/services/guards/auth-guard.service';

import { MailComponent } from './mail.component';
import { InboxComponent } from './mail-box/inbox/component/inbox.component';
import { MailBoxRootComponent } from './mail-box/mail-box-root.component';
import { ReadMailComponent } from './mail-box/read/component/read-mail.component';


const routes: Routes = [
  {
    path: '',
    component: MailComponent,
    children: [
      {
        path: '', component: MailBoxRootComponent,
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'inbox',
          breadcrumbs: 'inbox',
          title: 'inbox',
          smallText: '13 New Messages',
          isHome: true,
          icon: 'fa fa-home',
          show: false
        },
        children: [
          {
            path: '', redirectTo: 'inbox'
          },
          {
            path: 'inbox', component: InboxComponent,
            canActivate: [AuthGuard],
            data: {
              title: 'Inbox',
              smallText: '13 New Messages',
              isHome: true,
              icon: 'fa fa-home',
              show: false
            },
          },
          {
            path: 'read', component: ReadMailComponent,
            canActivate: [AuthGuard],
            data: {
              breadcrumb: 'Register User',
              breadcrumbs: 'Register User',
              title: 'Register User Title',
              smallText: 'Register User Small Text',
              isHome: true,
              icon: 'fa fa-home',
              show: false
            },
          },
          {
            path: 'read/:id', component: ReadMailComponent,
            canActivate: [AuthGuard],
            data: {
              breadcrumb: 'User Details',
              breadcrumbs: 'User Details',
              title: 'User Details Title',
              smallText: 'User Details Small Text',
              isHome: true,
              icon: 'fa fa-home',
              show: false
            },
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