import { Component, OnInit } from '@angular/core';
import { NotificationsService } from './notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications = [];

  fetchingDataVars = { isFetchingError: false, isFetchingDone: false, arrayLength: 0 };

  constructor(private notificationsService: NotificationsService) { }

  ngOnInit(): void {

    this.notificationsService.getAllNotifications().subscribe(notifications => {
      this.fetchingDataVars.isFetchingError = false;
      // console.log(notifications);
      // console.log(typeof notifications);
      this.notifications = [...notifications];

      if (this.notifications.length > 0) {
        this.fetchingDataVars.arrayLength = this.notifications.length;
        // this.notificationsStates.Issue = this.notifications.length;
        // this.handlingGraphData(); // there is no graph
        // this.gettingNotificationsStates(); //company won't be banned
      }

      this.fetchingDataVars.isFetchingDone = true;

    }, error => {
      this.fetchingDataVars.isFetchingError = true;

      console.log(error.message);

    });
  }

}
