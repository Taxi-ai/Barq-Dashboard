import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usersCounters = [
    { name: 'users', counter: 120, icon: 'fa fa-address-book' },
    { name: 'cars', counter: 10, icon: 'fas fa-car' },
    { name: 'partners', counter: 15, icon: 'fas fa-hands-helping' },
    { name: 'issues', counter: 10, icon: 'fas fa-headset' }
  ];
  appCounters = [
    { name: 'android', counter: 52, icon: 'fab fa-android' },
    { name: 'ios', counter: 52, icon: 'fab fa-apple' },
    { name: 'chrome', counter: 52, icon: 'fab fa-chrome' },
    { name: 'firefox', counter: 52, icon: 'fab fa-firefox' }
  ];
  moneyCounters = [
    { name: 'income', counter: 52, icon: 'fas fa-external-link-alt fa-rotate-180' },
    { name: 'outcome', counter: 52, icon: 'fas fa-external-link-alt' },
    { name: 'assets', counter: 52, icon: 'fas fa-chair' },
    { name: 'salaries', counter: 52, icon: 'fas fa-dollar-sign' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
