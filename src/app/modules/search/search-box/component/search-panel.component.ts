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
      this.searchService.searchRepositoriesByName(this.words).subscribe(
        (data: any) => {
          // this._loaderService.setVisiblility(false);
          // this.searchSubmitted = true;
          const { total_count: totalCount, items } = data;

          if (totalCount > 0) {
            // this.repositoryList = items;
          } else {
            // this.repositoryList = [];
            // this.error =
            "Not found. Please try again or use a different name is the search input above.";
          }
        },
        // (err: HttpErrorResponse) => {
        (err: any) => {
          // this._loaderService.setVisiblility(false);
          // this.searchSubmitted = true;
          // this.error = err.statusText;
          console.log(err)
        }
      );
    });
  }
  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
 
}
