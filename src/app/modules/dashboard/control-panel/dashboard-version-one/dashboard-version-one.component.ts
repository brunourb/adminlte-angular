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
  public barChartOptions: ChartOptions;
  public barChartPlugins = [];
  public barChartLabels: Label[];
  public barChartData: ChartDataSets[];

  public barChartLegend = true;
  public barChartType: ChartType = "bar";

  page = new Page();
  rows = new Array<Message>();
  pageInfo: any;

  constructor(
    private messageService: MessageService,
    private localStorage: LocalStorageService
  ) {
    this.page.pageNumber = 0;
    this.page.size = 1000;
  }
  ngOnInit() {
    this.bindUserDetails();
    this.bindBarChartLabels();
    this.bindBarChartOptions();
    this.bindBarChartData();
    this.getSendMailsDetails({ offset: 0 });
  }
  bindUserDetails() {
    this.user = JSON.parse(this.localStorage.getItem("userSession"));
  }
  bindBarChartOptions() {
    this.barChartOptions = {
      responsive: true
    };
  }
  bindBarChartData() {
    this.barChartData = [
      { data: [65, 59, 80, 81, 56, 55, 40], label: "Received Mails" },
      { data: [28, 48, 40, 19, 86, 27, 90], label: "Sent Mails" }
    ];
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
        var records = _.countBy(this.rows, "hour");
        for (let i = 1; i < 25; i++) {
          console.log(i);
        }

        console.log(records);
      });
  }
}
