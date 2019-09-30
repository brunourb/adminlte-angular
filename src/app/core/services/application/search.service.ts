import { Injectable } from "@angular/core";
// import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";

import {
  HttpClient,
  HttpHeaders,
  HttpClientModule
} from "@angular/common/http";

@Injectable()
export class SearchService {
  baseUrl: string = "https://api.cdnjs.com/libraries";
  queryUrl: string = "?search=";
  httpOptions = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "*"
    })
  };
  constructor(private http: HttpClient) {}

  public search(key): Observable<any> {
    return this.http.get(
      "https://www.googleapis.com/customsearch/v1?key=AIzaSyD6vu4LBh19zdXHhLItH-NEGbEZn38efIQ&cx=017576662512468239146:omuauf_lfve&q=" +
        key +
        "&callback=hndlr"
    );
  }
}
