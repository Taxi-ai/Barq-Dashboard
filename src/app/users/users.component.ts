import { Component, OnInit } from '@angular/core';
import { UserX } from './user.model';
import { UsersService } from './users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserX[] = [];
  usersStates = { active: 0, panned: 0 };
  finalCounter: number[] = new Array(12); // array with numbers of months duplicates
  selectForSearch = 'name';
  selectForFilter = 'date';
  fetchingDataVars = { isFetchingError: false, isFetchingDone: false, usersArrayLength: 0 };


  constructor(private usersService: UsersService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {

    this.usersService.getAllUsers().subscribe(users => {
      this.fetchingDataVars.isFetchingError = false;
      // console.log(users);
      // console.log(typeof users);
      this.users = [...users];
      // console.log(this.users);
      // console.log(typeof this.users);

      if (this.users.length > 0) {
        this.fetchingDataVars.usersArrayLength = this.users.length;
        this.handlingGraphData();
        // this.gettingUsersStates();
      }
      this.fetchingDataVars.isFetchingDone = true;
    }, error => {
      this.fetchingDataVars.isFetchingError = true;
      console.log(error.message);

    });

  }



  handlingGraphData() {
    // function to initialize graph data
    const months: number[] = []; // all months that has users registered in
    this.users.forEach(
      (user) => {
        const birthDate = new Date(user.dateOfBirth);
        months.push(birthDate.getMonth() + 1);
      }
    );


    months.forEach((month) => {
      if (this.finalCounter[month - 1] === undefined) {
        this.finalCounter[month - 1] = 1;
      } else {
        this.finalCounter[month - 1] += 1;
      }
    });

    for (let i = 0; i < this.finalCounter.length; i++) {
      if (this.finalCounter[i] === undefined) {
        this.finalCounter[i] = 0;
      }
    }
  }

  gettingUsersStates() {
    this.users.forEach((user) => {
      // if (user.userState === true) {
      //   this.usersStates.active += 1;
      // }
      // if (user.pannedState === true) {
      //   this.usersStates.panned += 1;
      // }
    });
  }


}
