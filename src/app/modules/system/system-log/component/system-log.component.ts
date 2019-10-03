import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LoggerService } from "../../.../../../../core/services/application/logger.service";
import { Observable } from "rxjs/Observable";
@Component({
  selector: "app-system-log",
  templateUrl: "./system-log.component.html",
  styleUrls: ["./system-log.component.css"]
})
export class SystemLogComponent implements OnInit {
  public rows: Observable<any[]>;
  constructor(private log: LoggerService) {}
  ngOnInit() {
    this.bindLog();
  }
  bindLog() {
    this.rows = this.log.get();
    console.log(this.rows);
  }
}
