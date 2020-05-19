import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Feedback } from './feedback.model';
import { FeedbacksService } from './feedbacks.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {

  feedbacks: Feedback[];
  overlay = false;

  constructor(private feedbacksService: FeedbacksService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.feedbacks = this.feedbacksService.getAllFeedbacks();
    this.feedbacksService.feedbacksChanged.subscribe(
      (users: Feedback[]) => {
        this.feedbacks = users;
      }
    );
  }

  goToFeedbackProfile(feedback) {
    this.overlay = true;
    this.router.navigate(['page'], { relativeTo: this.route });

  }

}
