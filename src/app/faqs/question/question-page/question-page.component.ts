import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FaqsService } from '../../faqs.service';
import { Question } from '../../question.model';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.css']
})
export class QuestionPageComponent implements OnInit {

  question: Question;
  spin = true;

  constructor(private route: ActivatedRoute, private router: Router, private faqsService: FaqsService) { }

  ngOnInit(): void {
    const questionID = this.route.snapshot.params.id;

    this.faqsService.getQuestionByID(questionID).subscribe(question => {
      console.log(question);
      this.question = question;
      this.spin = false;

    });
  }

  deleteQuestion() {
    this.spin = true;

    this.faqsService.deleteQuestionByID(this.question._id).subscribe(data => {
      // console.log(data);
      this.spin = false;
      this.router.navigate(['../'], { relativeTo: this.route });
    },
      error => {
        this.spin = false;
      });
  }

}
