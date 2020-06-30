import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../users.service';
import { UserX } from '../../user.model';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  user: UserX;
  spin = true;


  addIssueForThatUser = '../../issues/new/';

  constructor(private route: ActivatedRoute, private router: Router, private usersService: UsersService) { }

  ngOnInit() {

    const userID = this.route.snapshot.params.id;
    this.addIssueForThatUser += userID;

    this.usersService.getUserByID(userID).subscribe(user => {
      // console.log(user);
      this.user = user;
      this.spin = false;


    });

  }


  deleteUser() {
    // console.log(this.user);

    this.usersService.deleteUserByID(this.route.snapshot.params.id).subscribe(data => {
      console.log(data);
      this.router.navigate(['../'], { relativeTo: this.route });
    },
      error => {
        this.spin = false;
      });
  }

}
