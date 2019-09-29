import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { AppSettings } from "../../../../core/services/application/app-settings.service";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";
import { User } from "../../../../shared/models/user";
import { Message } from "../../../../shared/models/message";
import { LocalStorageService } from "../../../../core/services/helpers/local-storage.service";
import { MessageService } from "../../../../core/services/application/message.service";
import { _ } from "lodash";

import {
  PagedData,
  CorporateEmployee,
  Page
} from "../../../../shared/models/page";

@Component({
  selector: "dashboard-version-one",
  templateUrl: "./dashboard-version-one.component.html",
  styleUrls: ["./dashboard-version-one.component.css"]
})
export class DashbardVersionOneComponent implements OnInit {
  private user: User;
  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartPlugins;
  public barChartLabels: Label[] = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24"
  ];
  public barChartData: ChartDataSets[] = [];

  public barChartLegend = true;
  public barChartType: ChartType = "bar";
  private sendMailRecords: any;
  private receivedMailRecords: any;

  page = new Page();
  rows = new Array<Message>();
  receivedPage = new Page();
  receivedRows = new Array<Message>();
  pageInfo: any;
  records: boolean;
  constructor(
    private messageService: MessageService,
    private localStorage: LocalStorageService
  ) {
    this.page.pageNumber = 0;
    this.page.size = 1000;
    this.bindUserDetails();
    this.getSendMailsDetails({ offset: 0 });
    this.getReceivedMailsDetails({ offset: 0 });

    this.bindBarChartLabels();
    this.bindBarChartOptions();
  }
  ngOnInit() {
    this.records = false;
  }
  bindUserDetails() {
    this.user = JSON.parse(this.localStorage.getItem("userSession"));
  }
  bindBarChartOptions() {
    this.barChartOptions = {
      responsive: true
    };
  }

  bindBarChartLabels() {
    this.barChartLabels = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24"
    ];
  }
  getSendMailsDetails(pageInfo) {
    this.pageInfo = pageInfo;
    this.page.pageNumber = pageInfo.offset;
    this.messageService
      .getFromMessages(this.page, this.user.username)
      .subscribe(pagedData => {
        this.page = pagedData.page;
        this.rows = pagedData.data;
        for (let i = 0; i < this.rows.length; i++) {
          this.rows[i].hour = new Date(this.rows[i].time).getHours() + 1;
        }
        this.sendMailRecords = _.countBy(this.rows, "hour");
        for (let i = 0; i < 25; i++) {
          if (
            !(
              this.sendMailRecords[i] != null ||
              this.sendMailRecords[i] != undefined
            )
          ) {
            this.sendMailRecords[i] = 0;
          }
        }
        this.barChartData.push({
          data: _.values(this.sendMailRecords),
          label: "Sent Mails"
        });
        console.log(this.barChartData);
      });
  }

  getReceivedMailsDetails(pageInfo) {
    this.pageInfo = pageInfo;
    this.receivedPage.pageNumber = pageInfo.offset;
    this.messageService
      .getMessages(this.receivedPage, this.user.username, "ALL")
      .subscribe(pagedData => {
        this.receivedPage = pagedData.page;
        this.receivedRows = pagedData.data;

        for (let i = 0; i < this.receivedRows.length; i++) {
          this.receivedRows[i].hour =
            new Date(this.receivedRows[i].time).getHours() + 1;
        }
        this.receivedMailRecords = _.countBy(this.rows, "hour");
        for (let i = 0; i < 25; i++) {
          if (
            !(
              this.receivedMailRecords[i] != null ||
              this.receivedMailRecords[i] != undefined
            )
          ) {
            this.receivedMailRecords[i] = 0;
          }
        }

        this.barChartData.push({
          data: _.values(this.receivedMailRecords),
          label: "Received Mails"
        });
        console.log(this.barChartData);
      });
  }
}
