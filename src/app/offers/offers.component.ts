import { Component, OnInit } from '@angular/core';
import { OffersService } from './offers.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  offers = [];

  fetchingDataVars = { isFetchingError: false, isFetchingDone: false, arrayLength: 0 };

  constructor(private offersService: OffersService) { }

  ngOnInit(): void {

    this.offersService.getAllOffers().subscribe(offers => {
      this.fetchingDataVars.isFetchingError = false;
      // console.log(offers);
      // console.log(typeof offers);
      this.offers = [...offers];

      if (this.offers.length > 0) {
        this.fetchingDataVars.arrayLength = this.offers.length;
        // this.offersStates.Issue = this.offers.length;
        // this.handlingGraphData(); // there is no graph
        // this.gettingOffersStates(); //company won't be banned
      }

      this.fetchingDataVars.isFetchingDone = true;

    }, error => {
      this.fetchingDataVars.isFetchingError = true;

      console.log(error.message);

    });
  }

}
