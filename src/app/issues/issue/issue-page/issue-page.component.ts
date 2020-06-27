import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssuesService } from '../../issues.service';
import { Issue } from '../../issue.model';

@Component({
  selector: 'app-issue-page',
  templateUrl: './issue-page.component.html',
  styleUrls: ['./issue-page.component.css']
})
export class IssuePageComponent implements OnInit {
  issue: Issue;
  issueOwnerProfileLink = '../../users/';
  spin = true;

  constructor(private route: ActivatedRoute, private router: Router, private issuesService: IssuesService) { }

  ngOnInit() {
    const issueID = this.route.snapshot.params.id;

    this.issuesService.getIssueByID(issueID).subscribe(issue => {
      console.log(issue);
      this.issue = issue;
      this.issueOwnerProfileLink += issue.userId;
      this.spin = false;

    });
  }

  deleteIssue() {
    this.spin = true;

    this.issuesService.deleteIssueByID(this.issue._id).subscribe(data => {
      // console.log(data);
      this.spin = false;
      this.router.navigate(['../'], { relativeTo: this.route });
    },
      error => {
        this.spin = false;
      });
  }
}
