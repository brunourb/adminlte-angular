import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import * as $ from 'jquery';
import "jquery";

import { AdminComponent } from './admin.component';
import { UserDetailsComponent } from './manage-user/details/component/user-details.component';

// import { RegisterUserComponent } from './register-user/pages/register-user.component';

import { AdminRoutingModule } from './admin.routing.module';
import { RegisterModule } from '../../shared/components/register/register.module';
import { CardDetailsModule } from '../../shared/components/card-details/card-details.module';
import { UserGridModule } from '../../shared/components/user-grid/user-grid.module';
import { UserDetailModule } from '../../shared/components/user-detail/user-detail.module';

import { ManageUserRootComponent } from './manage-user/manage-user-root.component';
import { AddUserComponent } from './manage-user/add/component/add-user.component';
import { UserListComponent } from './manage-user/list/component/user-list.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    CardDetailsModule,
    RegisterModule,
    UserGridModule,
    UserDetailModule,
    NgxDatatableModule,
  ],
  declarations: [
    AdminComponent,
    UserListComponent,
    UserDetailsComponent,
    ManageUserRootComponent,
    AddUserComponent
  ],
})

export class AdminModule { }
