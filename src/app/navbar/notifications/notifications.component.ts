import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})

export class NotificationsComponent implements OnInit {

  buttonColorsClass1 = { closedFill1: true, openedFill1: false };
  buttonColorsClass2 = { closedFill2: true, openedFill2: false };

  divOpen() {

    const notificationsDivState: string = document.getElementById('notificationsDiv').style.display;

    if (notificationsDivState === 'none' || notificationsDivState === '') {
      document.getElementById('notificationsDiv').style.display = 'block';
      this.buttonColorsClass1.closedFill1 = false;
      this.buttonColorsClass1.openedFill1 = true;
      this.buttonColorsClass2.closedFill2 = false;
      this.buttonColorsClass2.openedFill2 = true;
    } else if (notificationsDivState === 'block') {
      document.getElementById('notificationsDiv').style.display = 'none';
      this.buttonColorsClass1.closedFill1 = true;
      this.buttonColorsClass1.openedFill1 = false;
      this.buttonColorsClass2.closedFill2 = true;
      this.buttonColorsClass2.openedFill2 = false;

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
