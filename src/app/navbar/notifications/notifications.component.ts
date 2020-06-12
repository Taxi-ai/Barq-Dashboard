import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})

export class NotificationsComponent implements OnInit {


  divOpen() {

    const notificationsDivState: string = document.getElementById('notificationsDiv').style.display;

    if (notificationsDivState === 'none' || notificationsDivState === '') {
      document.getElementById('notificationsDiv').style.display = 'block';
    } else if (notificationsDivState === 'block') {
      document.getElementById('notificationsDiv').style.display = 'none';
    }
  }

  constructor() {

  }


  ngOnInit() {

    const viewportHeight = window.innerHeight;
    const notificationsDivHeight = viewportHeight - 52;
    document.getElementById('notificationsDiv').style.height = notificationsDivHeight.toString() + 'px';


  }

}
