import { Component, OnInit } from '@angular/core';
import { PackagesService } from './packages.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {


  companyPackages = [];

  fetchingDataVars = { isFetchingError: false, isFetchingDone: false, arrayLength: 0 };


  constructor(private packagesService: PackagesService) { }

  ngOnInit() {
    this.packagesService.getAllPackages().subscribe(companyPackages => {
      this.fetchingDataVars.isFetchingError = false;
      // console.log(companyPackages);
      // console.log(typeof companyPackages);
      this.companyPackages = [...companyPackages];

      if (this.companyPackages.length > 0) {
        this.fetchingDataVars.arrayLength = this.companyPackages.length;
        // this.offersStates.Issue = this.companyPackages.length;
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
