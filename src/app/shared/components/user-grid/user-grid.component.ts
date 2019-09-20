import { Component, Input, OnInit, Output, EventEmitter, ElementRef, Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { delay, map } from "rxjs/operators";

// import { AppSettings } from '../../../core/services/app-settings.service'
import { UserService } from '../../../core/services/application/user.service';

import { User } from '../../../shared/models/user';
import { PagedData, CorporateEmployee, Page } from '../../../shared/models/page';
@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css'],
})

export class UserGridComponent implements OnInit {
  editing = {};
  page = new Page();
  rows = new Array<User>();
  reorderable: boolean = true;
  loadingIndicator: boolean = false;
  pageInfo: any;

  constructor(private userService: UserService) {
    this.page.pageNumber = 0;
    this.page.size = 10;
  }

  ngOnInit() {
    this.setPage({ offset: 0 });
  }

  setPage(pageInfo) {
    
    this.loadingIndicator = true;
    this.pageInfo = pageInfo;

    this.page.pageNumber = pageInfo.offset;
    this.userService.getResults(this.page).subscribe(pagedData => {
      this.page = pagedData.page;
      this.rows = pagedData.data;
      this.loadingIndicator = false;
      // this.pageInfo.count = this.pageInfo.count - 1;
      // this.pageInfo.offset = (this.pageInfo.count % this.pageInfo.pageSize === 0) ? this.pageInfo.offset - 1 : this.pageInfo.offset;
    });
  }
  delete(id) {
    this.deleteUser(id);
  }
  deleteUser(id): void {
    console.log('a')
    if (id !== 1) {
      this.userService.delete(id)
        .subscribe(
          data => {
            this.setPage({ offset: 0 });
          },
          error => {
            console.log(error);
          }
        );
    }
  }
}


// 	Having more than 9+ Years of IT Experience in Development of Web based Applications with N-tier architectures. 
// 	Expertise in developing Web-based applications in C#, Asp.Net, MVC using .NET Framework 2.0, 3.5, 4.0
// 	Experience in RDBMS Microsoft SQL Server.
// 	Having Experience in Angular 5+, TypeScript, Web Api.
// 	Having Experience in Web application, web services, multithreaded windows services. 
// 	Having Experience in Real Time Application using WebSocket. 
// 	Having Experience in Design Patterns, SOLID, IOC, DI
// 	Having Experience in Object Oriented Design & Development.
// 	Having Experience in MVC, WCF, Linq, Ajax, Rest, TypeScript.
// 	Having Experience in Customized Entity (Table) mapping & defined relationship.
// 	Having Experience in HTML, JQuery, JSon, JavaScript & CSS
// 	Having Experience in Crystal Reports.
// 	Having Experience in J2ME, Blue Tooth Serial Port Protocol Application.
// 	Having Experience in Web Development.
// 	Having Experience in Visual Studio Code, Dreamweaver 8/CS4, Photoshop.
// 	Experience in working with Visual Source Safe, Team Foundation Server.