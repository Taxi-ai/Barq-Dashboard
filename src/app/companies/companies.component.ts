import { Component, OnInit } from '@angular/core';
import { CompaniesService } from './companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies = [];

  fetchingDataVars = { isFetchingError: false, isFetchingDone: false, companiesArrayLength: 0 };


  constructor(private companiesService: CompaniesService) { }

  ngOnInit() {

    this.companiesService.getAllCompanies().subscribe(companies => {
      this.fetchingDataVars.isFetchingError = false;
      this.companies = companies;
      if (this.companies.length > 0) {
        this.fetchingDataVars.companiesArrayLength = this.companies.length;
        // this.handlingGraphData(); // there is no graph
        // this.gettingCompaniesStates(); //company won't be banned
      }
      this.fetchingDataVars.isFetchingDone = true;
    }, error => {
      this.fetchingDataVars.isFetchingError = true;
      console.log(new Error(error.message));

    });
  }

  postCompany() {
    // remove this method after removing its button in the UI
    this.companiesService.postCompany();
  }

}
