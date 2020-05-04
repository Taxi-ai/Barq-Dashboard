import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UsersService } from './users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  usersStates = { none: 0, active: 0, panned: 0 };
  finalCounter: number[] = new Array(12); // array with numbers of months duplicates

  constructor(private usersService: UsersService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {

    this.users = this.usersService.getAllUsers();
    this.handlingGraphData();
    this.gettingUsersStates();

    this.usersService.usersChanged.subscribe(
      (users: User[]) => {
        this.users = users;
        this.handlingGraphData();
        this.gettingUsersStates();
      }
    );
  }

  handlingGraphData() {
    // function to initialize graph data
    const months: number[] = []; // all months that has users registered in
    this.users.forEach(
      (user) => {
        months.push(user.registered.month);
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
      switch (user.state) {
        case 'none':
          this.usersStates.none += 1;
          break;
        case 'active':
          this.usersStates.active += 1;
          break;
        case 'panned':
          this.usersStates.panned += 1;
          break;
        default:
          break;
      }
    });
  }


}
