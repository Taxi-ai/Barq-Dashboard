import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../users.service';
import { UserX } from '../../user.model';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  user: UserX;
  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {

    const userID = this.route.snapshot.params.id;
    console.log(userID);

    this.usersService.getUserByID(userID).subscribe(user => {
      console.log(user); this.user = user;
    });

  }

}
