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

  companyStates = { Partner: 0, Employee: 0, Active: 0 };

  countersArray = ['Partner', 'Employee', 'Active', this.companyStates];

  fetchingDataVars = { isFetchingError: false, isFetchingDone: false, companiesArrayLength: 0 };

  searchQueries = [
    { label: 'ID', value: 'id', type: 'text' },
    { label: 'Name', value: 'name', type: 'text' },
    { label: 'Email Address', value: 'email', type: 'email' },
    { label: 'Phone Number', value: 'phone', type: 'tel' }
  ];
  filterQueries = [
    {
      label: 'Country', value: 'country', type: 'select', selectOptions: []
    },
    {
      label: 'City', value: 'city', type: 'select', selectOptions: []
    },
    { label: 'Max-Employees', value: 'max-employees', type: 'number' },
    { label: 'Min-Employees', value: 'min-employees', type: 'number' }
  ];


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
    const countriesArray = [];
    const citiesArray = [];

    this.companies.forEach((company: Company) => {

      if (countriesArray.includes(company.address.country)) {
      } else {
        this.filterQueries[0].selectOptions.push({ label: company.address.country, value: company.address.country });
        countriesArray.push(company.address.country);
      }

      if (citiesArray.includes(company.address.city)) {
      } else {
        this.filterQueries[1].selectOptions.push({ label: company.address.city, value: company.address.city });
        citiesArray.push(company.address.city);
      }

      if (company.numberOfEmployees) {
        this.companyStates.Employee += company.numberOfEmployees;
      }
      // if (company.pannedState === true) {
      //   this.companyStates.active += 1;
      // }
    });
  }

}
