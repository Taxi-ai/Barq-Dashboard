import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CompaniesService } from './companies.service';
import { Company } from './company.model';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies = [];
  // @Output() statesChanged = new EventEmitter<any>();

  companyStates = { Partner: 0, Employee: 0, Active: 0 };

  dataArray = ['Partner', 'Employee', 'Active', this.companyStates];

  fetchingDataVars = { isFetchingError: false, isFetchingDone: false, companiesArrayLength: 0 };


  constructor(private companiesService: CompaniesService) { }

  ngOnInit() {

    this.companiesService.getAllCompanies().subscribe(companies => {
      this.fetchingDataVars.isFetchingError = false;
      // console.log(companies);
      // console.log(typeof companies);
      this.companies = [...companies];

      if (this.companies.length > 0) {
        this.fetchingDataVars.companiesArrayLength = this.companies.length;
        this.companyStates.Partner = this.companies.length;
        // this.handlingGraphData(); // there is no graph
        this.gettingCompaniesStates();
      }
      // this.statesChanged.emit(this.companyStates);
      this.fetchingDataVars.isFetchingDone = true;

    }, error => {
      this.fetchingDataVars.isFetchingError = true;

      console.log(error.message);

    });
  }

  gettingCompaniesStates() {
    this.companies.forEach((company: Company) => {
      if (company.numberOfEmployees) {
        this.companyStates.Employee += company.numberOfEmployees;
      }
      // if (company.pannedState === true) {
      //   this.companyStates.active += 1;
      // }
    });
  }

}
