import { Component, OnInit, Input } from '@angular/core';
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
  spin = false;

  constructor(private route: ActivatedRoute, private router: Router, private issuesService: IssuesService) { }

  ngOnInit() {
    console.log('before if');

    if (this.route.snapshot.params.ownerID) {
      console.log('in if');
      this.issue.userId = this.route.snapshot.params.ownerID;
    }
  }

  postNewIssue() {
    console.log(this.issue);
    this.spin = true;

    this.issuesService.getIssueOwner(this.issue.userId).subscribe(userData => {
      this.issuesService.postNewIssue(this.issue).subscribe(data => {
        console.log(data);
        this.spin = false;

        this.router.navigate(['../'], { relativeTo: this.route });
      });
    },
      error => {
        console.log('user id is not in database!');
      });



  }
}
