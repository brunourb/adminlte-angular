import { Component, Input, OnInit, Output, EventEmitter, ElementRef, Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { delay, map } from "rxjs/operators";
import { MessageService } from '../../../core/services/application/message.service';
import { User } from '../../../shared/models/user';
import { PagedData, CorporateEmployee, Page } from '../../../shared/models/page';

@Component({
  selector: 'app-mail-grid',
  templateUrl: './mail-grid.component.html',
  styleUrls: ['./mail-grid.component.css'],
})

export class MailGridComponent implements OnInit {
  editing = {};
  page = new Page();
  rows = new Array<User>();
  reorderable: boolean = true;
  loadingIndicator: boolean = false;
  pageInfo: any;

  constructor(private messageService: MessageService) {
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
    console.log(this.messageService.getMessage());
    // this.messageService.getMessage(this.page).subscribe(pagedData => {
    //   this.page = pagedData.page;
    //   this.rows = pagedData.data;
    //   this.loadingIndicator = false;      
    // });
  }
  
}