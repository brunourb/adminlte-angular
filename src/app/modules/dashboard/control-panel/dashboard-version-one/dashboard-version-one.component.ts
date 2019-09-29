import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { AppSettings } from "../../../../core/services/application/app-settings.service";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";

@Component({
  selector: "dashboard-version-one",
  templateUrl: "./dashboard-version-one.component.html",
  styleUrls: ["./dashboard-version-one.component.css"]
})
export class DashbardVersionOneComponent implements OnInit {
  public barChartOptions: ChartOptions;
  public barChartPlugins = [];
  public barChartLabels: Label[];
  public barChartData: ChartDataSets[];

  public barChartLegend = true;
  public barChartType: ChartType = "bar";
  constructor() {}
  ngOnInit() {
    this.bindBarChartLabels();
    this.bindBarChartOptions();
    this.bindBarChartData();
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
      "2006",
      "2007",
      "2008",
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017"
    ];
  }
}
