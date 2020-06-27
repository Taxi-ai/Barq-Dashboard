import { Component, OnInit } from '@angular/core';
import { Issue } from '../../issue.model';
import { ActivatedRoute, Router } from '@angular/router';
import { IssuesService } from '../../issues.service';

@Component({
  selector: 'app-issue-new',
  templateUrl: './issue-new.component.html',
  styleUrls: ['./issue-new.component.css']
})
export class IssueNewComponent implements OnInit {

  issue: Issue = {
    userId: '',
    label: '',
    body: '',
  };

  constructor(private route: ActivatedRoute, private router: Router, private issuesService: IssuesService) { }

  ngOnInit() {
  }
  postNewIssue() {
    console.log(this.issue);

    this.issuesService.getIssueOwner(this.issue.userId).subscribe(userData => {
      this.issuesService.postNewIssue(this.issue).subscribe(data => {
        console.log(data);
        this.router.navigate(['../'], { relativeTo: this.route });
      });
    },
      error => {
        console.log('user id is not in database!');
      });



  }
}
