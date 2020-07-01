import { Component, OnInit } from '@angular/core';
import { Notification } from '../../notification.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsService } from '../../notifications.service';

@Component({
  selector: 'app-notification-new',
  templateUrl: './notification-new.component.html',
  styleUrls: ['./notification-new.component.css']
})
export class NotificationNewComponent implements OnInit {

  notification: Notification = {
    title: '',
    body: '',
    image: ''
  };

  spin = false;


  constructor(private route: ActivatedRoute, private router: Router, private notificationsService: NotificationsService) { }

  ngOnInit(): void {

  }


  postNewNotification() {
    console.log(this.notification);
    this.spin = true;

    this.notificationsService.postNewNotification(this.notification).subscribe(data => {
      console.log(data);
      this.spin = false;

      this.router.navigate(['../'], { relativeTo: this.route });
    });

  }

}
