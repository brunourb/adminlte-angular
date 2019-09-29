import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import $ from 'jquery';

import { AppSettings } from '../../../../core/services/application/app-settings.service'
// import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'dashboard-version-one',
  templateUrl: './dashboard-version-one.component.html',
  styleUrls: ['./dashboard-version-one.component.css'],
})

export class DashbardVersionOneComponent implements OnInit {
  private cards: any;

  constructor(private appSettings: AppSettings) {
  }

  ngOnInit() {
    this.bindCards(); 
  }

  clcikMe() {
    this.bindCards();
  }

  bindCards() {
    this.appSettings.getCustomerDetails().subscribe(
      cards =>
        (
          this.cards = cards
        )
    );
  }

  onValueChange($event) {
    console.log('onValueChange start');
    console.log($event);
    alert($event);
    console.log('onValueChange end');
  }
}