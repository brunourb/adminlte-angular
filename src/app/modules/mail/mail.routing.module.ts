import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from '../../core/services/guards/auth-guard.service';
import { MailComponent } from './mail.component';
import { InboxComponent } from './mail-box/inbox/component/inbox.component';
import { MailBoxRootComponent } from './mail-box/mail-box-root.component';
import { ReadMailComponent } from './mail-box/read/component/read-mail.component';
import { ComposeMailComponent } from './mail-box/compose/component/compose-mail.component';
import { JunkComponent } from './mail-box/junk/component/junk.component';

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
            path: 'compose', component: ComposeMailComponent,
            canActivate: [AuthGuard],
            data: {
              breadcrumb: 'Compose ',
              breadcrumbs: 'Compose ',
              title: 'Compose  ',
              smallText: 'Compose   ',
              isHome: true,
              icon: 'fa fa-home',
              show: false
            },
          },
          {
            path: 'junk', component: JunkComponent,
            canActivate: [AuthGuard],
            data: {
              breadcrumb: 'Junk',
              breadcrumbs: 'Junk',
              title: 'Junk',
              smallText: '13 New Messages',
              isHome: true,
              icon: 'fa fa-home',
              show: false
            },
          },  {
            path: 'sent', component: JunkComponent,
            canActivate: [AuthGuard],
            data: {
              breadcrumb: 'Junk',
              breadcrumbs: 'Junk',
              title: 'Junk',
              smallText: '13 New Messages',
              isHome: true,
              icon: 'fa fa-home',
              show: false
            },
          },
          {
            path: 'trash', component: JunkComponent,
            canActivate: [AuthGuard],
            data: {
              breadcrumb: 'Junk',
              breadcrumbs: 'Junk',
              title: 'Junk',
              smallText: '13 New Messages',
              isHome: true,
              icon: 'fa fa-home',
              show: false
            },
          },
          {
            path: 'trash', component: JunkComponent,
            canActivate: [AuthGuard],
            data: {
              breadcrumb: 'Junk',
              breadcrumbs: 'Junk',
              title: 'Junk',
              smallText: '13 New Messages',
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