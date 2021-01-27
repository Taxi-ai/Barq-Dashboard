import { Injectable } from '@angular/core';
import { Notification } from './notification.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private http: HttpClient) { }

  postNewNotification(notification: Notification) {
    return this.http.post('https://taxi-graduation-project.firebaseio.com/notifications.json', notification);
  }

  getAllNotifications() {

    return this.http.get('https://taxi-graduation-project.firebaseio.com/notifications.json').pipe(
      map((notificationsStream: Notification[]) => {
        const notificationsArray = [];
        // tslint:disable-next-line: forin
        for (const id in notificationsStream) {
          notificationsArray.push({ id, ...notificationsStream[id] });
        }
        console.log(notificationsArray);

        return notificationsArray;
      }));
  }

  getNotificationByID(notificationID: string) {
    const notificationAPI = 'https://taxi-graduation-project.firebaseio.com/notifications/' + notificationID + '.json';
    return this.http.get<Notification>(notificationAPI);
  }


  updateNotificationByID(notificationID: string, notification: Notification) {
    const notificationAPI = 'https://taxi-graduation-project.firebaseio.com/notifications/' + notificationID + '.json';
    return this.http.put(notificationAPI, notification);
  }

  deleteNotificationByID(notificationID: string) {
    const notificationAPI = 'https://taxi-graduation-project.firebaseio.com/notifications/' + notificationID + '.json';
    return this.http.delete(notificationAPI);
  }


}
