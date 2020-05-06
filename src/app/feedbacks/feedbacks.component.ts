import { Component, OnInit } from '@angular/core';
import { Feedback } from './feedback.model';
import { FeedbacksService } from './feedbacks.service';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {

  feedbacks: Feedback[];

  constructor(private feedbacksService: FeedbacksService) { }

  ngOnInit() {
    this.feedbacks = this.feedbacksService.getAllFeedbacks();
    this.feedbacksService.feedbacksChanged.subscribe(
      (users: Feedback[]) => {
        this.feedbacks = users;
      }
    );
  }

  goToFeedbackProfile() { }

}
