import { Component, OnInit } from '@angular/core';
import { Issue } from '../../issue.model';
import { ActivatedRoute, Router } from '@angular/router';
import { IssuesService } from '../../issues.service';

@Component({
  selector: 'app-issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrls: ['./issue-edit.component.css']
})
export class IssueEditComponent implements OnInit {

  issue: Issue;
  changesIsSaved = false;

  constructor(private route: ActivatedRoute, private router: Router, private issuesService: IssuesService) { }

  ngOnInit() {
    const issueID = this.route.snapshot.params.id;
    this.issuesService.getIssueByID(issueID).subscribe(issue => {
      // console.log(issue);
      this.issue = issue;
    });
  }

  updateIssueData() {
    const editedIssue: Issue = {
      label: this.issue.label,
      body: this.issue.body,
      userId: this.issue.userId
    };
    this.issuesService.getIssueOwner(this.issue.userId).subscribe(userData => {
      this.issuesService.updateIssueByID(this.issue._id, editedIssue).subscribe(data => {
        console.log(data);
        this.changesIsSaved = true;
        this.router.navigate(['../'], { relativeTo: this.route });
      }
      );
    },
      error => {
        console.log('user id is not in database!');
      });


  }

}
