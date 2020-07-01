import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faqs-table',
  templateUrl: './faqs-table.component.html',
  styleUrls: ['./faqs-table.component.css']
})
export class FaqsTableComponent implements OnInit {

  @Input() questions: Question[];


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  questionProfile(question: Question) {
    console.log(question._id);
    this.router.navigate([question._id], { relativeTo: this.route });
  }

}
