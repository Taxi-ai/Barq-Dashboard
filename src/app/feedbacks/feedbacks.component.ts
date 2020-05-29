import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Feedback, FeedbackX } from './feedback.model';
import { FeedbacksService } from './feedbacks.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {

  feedbacks: FeedbackX[] = [];
  overlay = false;

  constructor(private feedbacksService: FeedbacksService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.feedbacksService.getAllFeedbacks().subscribe(feedbacks => {
      // this.fetchingDataVars.isFetchingError = false;
      console.log(feedbacks);
      console.log(typeof feedbacks);
      this.feedbacks = [...feedbacks];

      if (this.feedbacks.length > 0) {
        // this.fetchingDataVars.feedbacksArrayLength = this.feedbacks.length;
        // this.handlingGraphData(); // there is no graph
        // this.gettingFeedbacksStates(); //company won't be banned
      }

      // this.fetchingDataVars.isFetchingDone = true;

    }, error => {
      // this.fetchingDataVars.isFetchingError = true;

      console.log(error.message);

    });
  }

  goToFeedbackProfile(feedback) {
    this.overlay = true;
    this.router.navigate(['page'], { relativeTo: this.route });

  }

}
