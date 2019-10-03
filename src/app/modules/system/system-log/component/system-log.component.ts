import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LoggerService } from "../../.../../../../core/services/application/logger.service";

@Component({
  selector: "app-system-log",
  templateUrl: "./system-log.component.html",
  styleUrls: ["./system-log.component.css"]
})
export class SystemLogComponent implements OnInit {
  constructor(private log: LoggerService) {}
  ngOnInit() {}
  ngOnDestroy() {}
}