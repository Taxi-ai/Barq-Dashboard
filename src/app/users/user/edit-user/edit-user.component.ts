import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../users.service';
import { UserX } from '../../user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: UserX;
  spin = true;

  constructor(private route: ActivatedRoute, private router: Router, private usersService: UsersService) { }

  ngOnInit() {
    const userID = this.route.snapshot.params.id;
    this.usersService.getUserByID(userID).subscribe(user => {
      // console.log(user);
      this.user = user;
      this.spin = false;

    });

  }

  updateUserData() {
    this.spin = true;

    const editedUser: UserX = {
      username: this.user.username,
      email: this.user.email,
      dateOfBirth: this.user.dateOfBirth,
      address: { country: this.user.address.country, city: this.user.address.city, street: this.user.address.street },
      image: this.user.image,
      phone: this.user.phone
    };

    this.usersService.updateUserByID(this.user._id, editedUser).subscribe(data => {
      console.log(data);
      this.spin = false;
      this.router.navigate(['../'], { relativeTo: this.route });
    }
      , error => {
        this.spin = false;
      });

  }
}
