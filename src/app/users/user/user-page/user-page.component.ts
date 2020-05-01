import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../users.service';
import { User } from '../../user.model';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  user: User;
  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {
    let userID = Number(this.route.snapshot.params.id);
    this.user = this.usersService.getUserByID(userID);
    this.route.params.subscribe(
      (params) => {
        userID = Number(params.id);
        this.user = this.usersService.getUserByID(userID);
      }
    );

  }

}
