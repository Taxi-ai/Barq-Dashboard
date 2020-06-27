import { Component, OnInit } from '@angular/core';
import { IssuesService } from './issues.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  issues = [];
  fetchingDataVars = { isFetchingError: false, isFetchingDone: false, issuesArrayLength: 0 };

  constructor(private issuesService: IssuesService) { }

  ngOnInit() {
    this.issuesService.getAllIssues().subscribe(issues => {
      this.fetchingDataVars.isFetchingError = false;
      // console.log(issues);
      // console.log(typeof issues);
      this.issues = [...issues];

      if (this.issues.length > 0) {
        this.fetchingDataVars.issuesArrayLength = this.issues.length;
        // this.handlingGraphData(); // there is no graph
        // this.gettingIssuesStates(); //company won't be banned
      }

      this.fetchingDataVars.isFetchingDone = true;

    }, error => {
      this.fetchingDataVars.isFetchingError = true;

      console.log(error.message);

    });
  }

}
