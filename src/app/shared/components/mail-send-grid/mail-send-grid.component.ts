import { Component, Input, OnInit, Output, EventEmitter, ElementRef, Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { delay, map } from "rxjs/operators";
import { MessageService } from '../../../core/services/application/message.service';
import { User } from '../../../shared/models/user';
import { PagedData, CorporateEmployee, Page } from '../../../shared/models/page';
import { Message } from '../../../shared/models/message';
import { LocalStorageService } from '../../../core/services/helpers/local-storage.service';

@Component({
  selector: 'app-mail-grid',
  templateUrl: './mail-send-grid.component.html',
  styleUrls: ['./mail-send-grid.component.css'],
})

export class MailSendGridComponent implements OnInit {
 

  private user: User;
  editing = {};
  page = new Page();
  rows = new Array<Message>();
  reorderable: boolean = true;
  loadingIndicator: boolean = false;
  pageInfo: any;

  constructor(
    private messageService: MessageService,
    private localStorage: LocalStorageService
  ) {
    this.page.pageNumber = 0;
    this.page.size = 10;
  }

  ngOnInit() {
    this.bindUserDetails();
    this.setPage({ offset: 0 });
  }
  bindUserDetails() {
    this.user = JSON.parse(this.localStorage.getItem("userSession"));
  }
  setPage(pageInfo) {
    this.loadingIndicator = true;
    this.pageInfo = pageInfo;
    this.page.pageNumber = pageInfo.offset;

    this.messageService.getMessages(this.page, this.user.username, this.messageType).subscribe(pagedData => {
      this.page = pagedData.page;
      this.rows = pagedData.data;
      console.log(this.rows)
      this.loadingIndicator = false;
    });
  }
}