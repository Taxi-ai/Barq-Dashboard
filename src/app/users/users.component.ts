import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User, UserX } from './user.model';
import { UsersService } from './users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

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

  constructor(private usersService: UsersService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {

    this.usersService.getAllUsers().subscribe(users => {
      this.users = users;
      this.handlingGraphData();
      this.gettingUsersStates();
    });


    // this.usersService.usersChanged.subscribe(
    //   (users: User[]) => {
    //     this.users = users;
    //     this.handlingGraphData();
    //     this.gettingUsersStates();
    //   }
    // );
  }

  postUser() {
    // remove this method after removing its button in the UI
    this.usersService.postUser();
  }


  handlingGraphData() {
    // function to initialize graph data
    const months: number[] = []; // all months that has users registered in
    this.users.forEach(
      (user) => {
        months.push(user.registered.getMonth() + 1);
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
      if (user.userState === true) {
        this.usersStates.active += 1;
      }
      if (user.pannedState === true) {
        this.usersStates.panned += 1;
      }
    });
  }


}
