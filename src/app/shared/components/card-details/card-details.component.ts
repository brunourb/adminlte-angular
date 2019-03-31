import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css'],  
})
export class CardDetailsComponent implements OnInit {
  @Input() cards: any;
  @Output()
  valueChange = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }
  onClick(id: string) {
    console.log(id);
    this.valueChange.emit(id);
  }
}