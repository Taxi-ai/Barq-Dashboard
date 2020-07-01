import { Component, OnInit } from '@angular/core';
import { Question } from '../../question.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FaqsService } from '../../faqs.service';


@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.css']
})
export class QuestionEditComponent implements OnInit {

  question: Question;
  spin = true;

  constructor(private route: ActivatedRoute, private router: Router, private faqsService: FaqsService) { }

  ngOnInit(): void {
    const questionID = this.route.snapshot.params.id;
    this.faqsService.getQuestionByID(questionID).subscribe(question => {
      // console.log(question);
      this.question = question;
      this.spin = false;
    });
  }

  updateOfferData() {
    this.spin = true;
    const editedQuestion: Question = {
      question: this.question.question,
      answer: this.question.answer
    };

    this.faqsService.updateQuestionByID(this.question._id, editedQuestion).subscribe(data => {
      console.log(data);
      this.spin = false;
      this.router.navigate(['../'], { relativeTo: this.route });
    }
    );



  }

}
