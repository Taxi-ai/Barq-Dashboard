import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fetched-nothing',
  templateUrl: './fetched-nothing.component.html',
  styleUrls: ['./fetched-nothing.component.css']
})
export class FetchedNothingComponent implements OnInit {

  @Input() dataType;

  constructor() { }

  ngOnInit() {
  }

}
