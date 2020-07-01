import { Component, OnInit, Input } from '@angular/core';
import { Notification } from '../notification.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notifications-table',
  templateUrl: './notifications-table.component.html',
  styleUrls: ['./notifications-table.component.css']
})
export class NotificationsTableComponent implements OnInit {

  @Input() notifications: Notification[];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  notificationProfile(notification: Notification) {
    console.log(notification._id);
    this.router.navigate([notification._id], { relativeTo: this.route });
  }

}
