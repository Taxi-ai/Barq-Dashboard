import { Component, OnInit } from '@angular/core';
import { FeedbackX } from '../feedback.model';
import { FeedbacksService } from '../feedbacks.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feedback-page',
  templateUrl: './feedback-page.component.html',
  styleUrls: ['./feedback-page.component.css']
})
export class FeedbackPageComponent implements OnInit {

  feedback: FeedbackX;


  constructor(private route: ActivatedRoute, private feedbacksService: FeedbacksService) { }

  ngOnInit() {

    const feedbackID = this.route.snapshot.params.id;
    this.feedbacksService.getFeedbackByID(feedbackID).subscribe(feedback => {
      console.log(feedback); this.feedback = feedback;
    });

  }

}
