import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

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
