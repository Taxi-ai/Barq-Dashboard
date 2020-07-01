import { Component, OnInit } from '@angular/core';
import { FaqsService } from './faqs.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {

  questions = [];

  fetchingDataVars = { isFetchingError: false, isFetchingDone: false, arrayLength: 0 };


  constructor(private faqsService: FaqsService) { }

  ngOnInit(): void {
    this.faqsService.getAllQuestions().subscribe(questions => {
      this.fetchingDataVars.isFetchingError = false;
      // console.log(questions);
      // console.log(typeof questions);
      this.questions = [...questions];

      if (this.questions.length > 0) {
        this.fetchingDataVars.arrayLength = this.questions.length;
        // this.questionsStates.Issue = this.questions.length;
        // this.handlingGraphData(); // there is no graph
        // this.gettingQuestionsStates(); //company won't be banned
      }

      this.fetchingDataVars.isFetchingDone = true;

    }, error => {
      this.fetchingDataVars.isFetchingError = true;

      console.log(error.message);

    });
  }

}
