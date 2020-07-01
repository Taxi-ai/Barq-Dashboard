import { Component, OnInit } from '@angular/core';
import { Notification } from '../../notification.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsService } from '../../notifications.service';


@Component({
  selector: 'app-notification-edit',
  templateUrl: './notification-edit.component.html',
  styleUrls: ['./notification-edit.component.css']
})
export class NotificationEditComponent implements OnInit {

  notification: Notification;
  spin = true;

  constructor(private route: ActivatedRoute, private router: Router, private notificationsService: NotificationsService) { }

  ngOnInit(): void {
    const notificationID = this.route.snapshot.params.id;
    this.notificationsService.getNotificationByID(notificationID).subscribe(notification => {
      // console.log(notification);
      this.notification = notification;
      this.spin = false;
    });
  }

  updateNotificationData() {
    this.spin = true;
    const editedNotification: Notification = {
      title: this.notification.title,
      body: this.notification.body,
      image: this.notification.image
    };

    this.notificationsService.updateNotificationByID(this.notification._id, editedNotification).subscribe(data => {
      console.log(data);
      this.spin = false;
      this.router.navigate(['../'], { relativeTo: this.route });
    }
    );



  }

}
