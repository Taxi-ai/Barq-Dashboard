import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-information-cards',
  templateUrl: './information-cards.component.html',
  styleUrls: ['./information-cards.component.css']
})
export class InformationCardsComponent implements OnInit {

  // [ prob1,prob2,prob3,arrayLength,statesObject{} ]
  @Input() dataArray: [string, string, string, {}];

  constructor() { }

  ngOnInit() {
  }

}
