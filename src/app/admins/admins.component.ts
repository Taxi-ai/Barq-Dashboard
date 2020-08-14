import { Component, OnInit } from '@angular/core';
import { Admin } from './admin.model';
import { AdminsService } from './admins.service';
import { AuthService } from '../admin-login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
  admins = [];

  superAdmin = false;

  adminStates = { Admin: 0, Issues: 0, Online: 0 };

  countersArray = ['Admin', 'Issues', 'Online', this.adminStates];

  fetchingDataVars = { isFetchingError: false, isFetchingDone: false, adminsArrayLength: 0 };

  searchQueries = [
    { label: 'ID', value: 'id', type: 'text' },
    { label: 'Name', value: 'name', type: 'text' },
    { label: 'Email Address', value: 'email', type: 'email' },
    { label: 'Phone Number', value: 'phone', type: 'tel' }
  ];
  filterQueries = [
    { label: 'Employment Date', value: 'date', type: 'date' },

    {
      label: 'Admin State', value: 'state', type: 'select', selectOptions: [
        { label: 'Online', value: 'online' },
        { label: 'Not Online', value: 'not-not' }
      ]
    }
  ];


  constructor(private adminsService: AdminsService, private router: Router, private authService: AuthService) { }

  ngOnInit() {

    const { adminID, adminName, adminEmail } = this.authService.decodingAdminToken(this.authService.gettingStoredData('jwt'));

    if (adminName !== 'mahmoudyoussef97') {
      this.router.navigate(['./dashboard']);
    }

    this.adminsService.getAllAdmins().subscribe(admins => {
      this.fetchingDataVars.isFetchingError = false;
      // console.log(admins);
      // console.log(typeof admins);
      this.admins = [...admins];

      if (this.admins.length > 0) {
        this.fetchingDataVars.adminsArrayLength = this.admins.length;
        this.adminStates.Admin = this.admins.length;
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

      // if (countriesArray.includes(admin.address.country)) {
      // } else {
      //   this.filterQueries[0].selectOptions.push({ label: admin.address.country, value: admin.address.country });
      //   countriesArray.push(admin.address.country);
      // }

      // if (citiesArray.includes(admin.address.city)) {
      // } else {
      //   this.filterQueries[1].selectOptions.push({ label: admin.address.city, value: admin.address.city });
      //   citiesArray.push(admin.address.city);
      // }

      this.adminStates.Online += 1;

      // if (admin.numberOfEmployees) {
      //   this.adminStates.Employee += admin.numberOfEmployees;
      // }
      // if (admin.pannedState === true) {
      //   this.adminStates.online += 1;
      // }
    });
    console.log(this.adminsService.getIssuesNumber());


    this.adminsService.getIssuesNumber().subscribe(issues => {

      const issuesArray = [...issues];

      this.adminStates.Issues = issuesArray.length;

    }, error => {

      this.adminStates.Issues = 0;

    });

  }

}
