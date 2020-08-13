import { Component, OnInit, HostListener } from '@angular/core';



@Component({
  selector: 'app-navbar-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css']
})

export class ProfilePictureComponent implements OnInit {

  constructor() { }

  // pageScrolled = false;

  showAdminMenu = false;

  // @HostListener('window:scroll', ['$event'])

  // scrollHandler(event) {
  //   this.pageScrolled = true;
  //   console.log('profile');

  // }

  ngOnInit() {


  }

}
