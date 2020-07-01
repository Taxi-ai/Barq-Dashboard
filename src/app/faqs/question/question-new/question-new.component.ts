import { Component, OnInit } from '@angular/core';
import { Question } from '../../question.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FaqsService } from '../../faqs.service';

@Component({
  selector: 'app-question-new',
  templateUrl: './question-new.component.html',
  styleUrls: ['./question-new.component.css']
})

export class QuestionNewComponent implements OnInit {

  question: Question = {
    question: '',
    answer: ''
  };

  spin = false;

  constructor(private route: ActivatedRoute, private router: Router, private faqsService: FaqsService) { }

  ngOnInit(): void {
  }

  postNewQuestion() {
    console.log(this.question);
    this.spin = true;

    this.faqsService.postNewQuestion(this.question).subscribe(data => {
      console.log(data);
      this.spin = false;

      this.router.navigate(['../'], { relativeTo: this.route });
    });

  }

}
