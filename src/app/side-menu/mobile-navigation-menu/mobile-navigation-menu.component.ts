import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../admin-login/auth.service';

@Component({
  selector: 'app-mobile-navigation-menu',
  templateUrl: './mobile-navigation-menu.component.html',
  styleUrls: ['./mobile-navigation-menu.component.css']
})
export class MobileNavigationMenuComponent implements OnInit {

  superAdmin = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {

    const { adminID, adminName, adminEmail } = this.authService.decodingAdminToken(this.authService.gettingStoredData('jwt'));

    if (adminName === 'mahmoudyoussef97') {
      this.superAdmin = true;
    } else {
      // this.superAdmin = false;
      this.superAdmin = true;
    }

    if (window.innerWidth > 800) {
      console.log(document.body.style.width);
      console.log(window.innerWidth);

      this.router.navigate(['./dashboard']);
    }

  }

}
