import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsService } from '../../notifications.service';
import { Notification } from '../../notification.model';

@Component({
  selector: 'app-notification-page',
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.css']
})
export class NotificationPageComponent implements OnInit {
  notification: Notification;
  spin = true;

  constructor(private route: ActivatedRoute, private router: Router, private notificationsService: NotificationsService) { }

  ngOnInit(): void {

    const notificationID = this.route.snapshot.params.id;

    this.notificationsService.getNotificationByID(notificationID).subscribe(notification => {
      console.log(notification);
      this.notification = notification;
      this.spin = false;

    });

  }

  deleteNotification() {
    this.spin = true;

    this.notificationsService.deleteNotificationByID(this.notification._id).subscribe(data => {
      // console.log(data);
      this.spin = false;
      this.router.navigate(['../'], { relativeTo: this.route });
    },
      error => {
        this.spin = false;
      });
  }



}