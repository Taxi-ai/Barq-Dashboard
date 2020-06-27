import { Injectable, EventEmitter } from '@angular/core';
import { UsersService } from '../users/users.service';
import { Feedback, FeedbackX } from './feedback.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedbacksService {

  feedbacks = [
    new Feedback(123, 'not categorized', 'none', false, 'this app is terrible', 912346, { year: 2020, month: 5, day: 3 }),
    new Feedback(234, 'not categorized', 'none', false, 'this app is incredible', 912346, { year: 2020, month: 5, day: 3 }),
    new Feedback(345, 'normal feedback', 'none', false, 'i hate my self', 657181, { year: 2020, month: 5, day: 3 }),
    new Feedback(456, 'issue', 'carIssue', false, 'this app is perfect', 264795, { year: 2020, month: 5, day: 3 })
  ];

  feedbacksChanged = new EventEmitter<Feedback[]>();

  constructor(private usersService: UsersService, private http: HttpClient) { }

  getFeedbackOwner(ownerID: string) {
    this.usersService.getUserByID(ownerID);
  }


  getAllFeedbacks() {
    return this.http.get('https://barq-api.azurewebsites.net/api/issues').pipe(
      map((companiesStream) => {
        const companiesArray = [];
        // tslint:disable-next-line: forin
        for (const id in companiesStream) {
          companiesArray.push({ ...companiesStream[id] });
        }
        console.log(companiesArray);
        return companiesArray;
      }));
  }


  getFeedbackByID(feedbackID: string) {

    const feedbackAPI = 'https://barq-api.azurewebsites.net/api/issues/' + feedbackID;
    return this.http.get<FeedbackX>(feedbackAPI);



  }

  updateFeedbackByID(feedbackID: number, changedFeedback: Feedback) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.feedbacks.length; i++) {
      if (this.feedbacks[i].feedbackID === feedbackID) {
        this.feedbacks[i] = changedFeedback;
      }
    }
  }

}
