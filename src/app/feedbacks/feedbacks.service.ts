import { Injectable, EventEmitter } from '@angular/core';
import { UsersService } from '../users/users.service';
import { Feedback } from './feedback.model';

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

  constructor(private usersService: UsersService) { }

  getFeedbackOwner(ownerID: number) {
    this.usersService.getUserByID(ownerID);
  }


  getAllFeedbacks() {
    return this.feedbacks;
  }


  getFeedbackByID(feedbackID: number) {

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.feedbacks.length; i++) {
      if (this.feedbacks[i].feedbackID === feedbackID) {
        return this.feedbacks[i];
      }
    }
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
