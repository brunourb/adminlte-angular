import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserDetailsComponent } from './manage-user/details/component/user-details.component';
import { UserDetailComponent } from '../../shared/components/user-detail/user-detail.component';
import { UserGridComponent } from '../../shared/components/user-grid/user-grid.component';
import { AuthGuardService as AuthGuard } from '../../core/services/guards/auth-guard.service';

import { ManageUserRootComponent } from './manage-user/manage-user-root.component';
import { AddUserComponent } from './manage-user/add/component/add-user.component';
import { UserListComponent } from './manage-user/list/component/user-list.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'user', component: ManageUserRootComponent,
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'User',
          breadcrumbs: 'User',
          title: 'User Title',
          smallText: 'User Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false
        },
        children: [
          {
            path: '', component: UserListComponent,
            canActivate: [AuthGuard],
            data: {
              breadcrumb: 'User',
              breadcrumbs: 'User',
              title: 'User Title',
              smallText: 'User Small Text',
              isHome: true,
              icon: 'fa fa-home',
              show: false
            },
          },
          {
            path: 'add', component: AddUserComponent,
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
            path: 'detail/:id', component: UserDetailComponent,
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
export class SearchRoutingModule { }