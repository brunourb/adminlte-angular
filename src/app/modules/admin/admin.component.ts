import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  // private breadcrumb;
  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    // this.breadcrumb = { breadcrumb: "Admin", breadcrumbs: "Admin", title: "Admin", smallText: "Admin", isHome: true };//this.route.snapshot.data || [];
    // console.log("this.breadcrumb");
    // console.log(this.breadcrumb);
  }
}