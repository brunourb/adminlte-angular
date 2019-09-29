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
  public barChartLabels: Label[];
  public barChartType: ChartType = "bar";
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartOptions: ChartOptions = {
    responsive: true
  };

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Received Mails" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: "Sent Mails" }
  ];

  constructor(private appSettings: AppSettings) {}

  ngOnInit() {
    this.bindBarChartLabels();
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
