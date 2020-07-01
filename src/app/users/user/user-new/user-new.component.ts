import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserX } from '../../user.model';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  user: UserX = {
    username: ' ',
    email: ' ',
    dateOfBirth: new Date(),
    address: { country: ' ', city: ' ', street: ' ' },
    image: ' ',
    password: '1234qwer!@#$',
    phone: ' '
  };
  spin = false;

  constructor(private route: ActivatedRoute, private router: Router, private usersService: UsersService) { }

  ngOnInit() {
  }

  postNewUser() {
    this.spin = true;

    this.usersService.postNewUser(this.user).subscribe(data => {
      // console.log(data);
      this.spin = false;

      this.router.navigate(['../'], { relativeTo: this.route });
    });

  }

}
