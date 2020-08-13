import { Component, OnInit } from '@angular/core';
import { Admin } from './admin.model';
import { AdminsService } from './admins.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
  admins = [];

  adminStates = { Partner: 0, Employee: 0, Active: 0 };

  countersArray = ['Partner', 'Employee', 'Active', this.adminStates];

  fetchingDataVars = { isFetchingError: false, isFetchingDone: false, adminsArrayLength: 0 };

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


  constructor(private adminsService: AdminsService) { }

  ngOnInit() {

    this.adminsService.getAllAdmins().subscribe(admins => {
      this.fetchingDataVars.isFetchingError = false;
      // console.log(admins);
      // console.log(typeof admins);
      this.admins = [...admins];

      if (this.admins.length > 0) {
        this.fetchingDataVars.adminsArrayLength = this.admins.length;
        this.adminStates.Partner = this.admins.length;
        // this.handlingGraphData(); // there is no graph
        this.gettingAdminsStates();
      }
      // this.statesChanged.emit(this.adminStates);
      this.fetchingDataVars.isFetchingDone = true;

    }, error => {
      this.fetchingDataVars.isFetchingError = true;

      console.log(error.message);

    });
  }

  gettingAdminsStates() {
    const countriesArray = [];
    const citiesArray = [];

    this.admins.forEach((admin: Admin) => {

      if (countriesArray.includes(admin.address.country)) {
      } else {
        this.filterQueries[0].selectOptions.push({ label: admin.address.country, value: admin.address.country });
        countriesArray.push(admin.address.country);
      }

      if (citiesArray.includes(admin.address.city)) {
      } else {
        this.filterQueries[1].selectOptions.push({ label: admin.address.city, value: admin.address.city });
        citiesArray.push(admin.address.city);
      }

      if (admin.numberOfEmployees) {
        this.adminStates.Employee += admin.numberOfEmployees;
      }
      // if (admin.pannedState === true) {
      //   this.adminStates.active += 1;
      // }
    });
  }

}
