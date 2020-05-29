import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../users.service';
import { User, UserX } from '../../user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: UserX;
  changesIsSaved = false;

  constructor(private route: ActivatedRoute, private router: Router, private usersService: UsersService) { }

  ngOnInit() {
    let userID = Number(this.route.snapshot.params.id);
    // this.user = this.usersService.getUserByID(userID);
    this.route.params.subscribe(
      (params) => {
        userID = Number(params.id);
        // this.user = this.usersService.getUserByID(userID);
      }
    );
  }

  updateUserData() {
    console.log(this.user);
    const userID = Number(this.route.snapshot.params.id);
    // this.usersService.updateUserByID(userID, this.user);
    this.changesIsSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
