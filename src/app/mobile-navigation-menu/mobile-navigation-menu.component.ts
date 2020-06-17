import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-navigation-menu',
  templateUrl: './mobile-navigation-menu.component.html',
  styleUrls: ['./mobile-navigation-menu.component.css']
})
export class MobileNavigationMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    if (window.innerWidth > 800) {
      console.log(document.body.style.width);
      console.log(window.innerWidth);


      this.router.navigate(['./dashboard']);
    }

  }

}
