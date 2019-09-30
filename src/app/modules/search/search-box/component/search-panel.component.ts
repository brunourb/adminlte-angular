import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-search-panel",
  templateUrl: "./search-panel.component.html",
  styleUrls: ["./search-panel.component.css"]
})
export class SearchPanleComponent implements OnInit {
  private words: string;
  private subscriber: any;
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.subscriber = this.route.queryParams.subscribe(params => {
      this.words = params["page"];
    });
  }
  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}
