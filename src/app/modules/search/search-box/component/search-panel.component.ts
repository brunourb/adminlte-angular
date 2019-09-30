import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SearchService } from "../../../../core/services/application/search.service";
import { Subject } from "rxjs/Subject";
@Component({
  selector: "app-search-panel",
  templateUrl: "./search-panel.component.html",
  styleUrls: ["./search-panel.component.css"],
  providers: [SearchService]
})
export class SearchPanleComponent implements OnInit {
  private words: string;
  private subscriber: any;
  results: Object;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchService: SearchService
  ) {}
  ngOnInit() {
    this.subscriber = this.route.queryParams.subscribe(params => {
      this.words = params["q"];
      this.searchService.search(params["q"]).subscribe(
        results => {
          this.results = results.results;
          // console.log(results);
        },
        error => {
          // console.log(error);
        }
      );
    });
  }
  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}
