import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/admin-login/auth.service';


@Component({
  selector: 'app-navbar-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css']
})

export class ProfilePictureComponent implements OnInit {

  showAdminMenu = false;


  constructor(private authService: AuthService) { }

  ngOnInit() {

  }


  onLogout() {
    this.authService.signingOut();
  }


}
