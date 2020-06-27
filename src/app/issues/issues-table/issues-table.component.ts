import { Component, OnInit, Input } from '@angular/core';
import { Issue } from '../issue.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-issues-table',
  templateUrl: './issues-table.component.html',
  styleUrls: ['./issues-table.component.css']
})
export class IssuesTableComponent implements OnInit {
  @Input() issues: Issue[];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  issueProfile(issue: Issue) {
    console.log(issue._id);
    this.router.navigate([issue._id], { relativeTo: this.route });
  }

}
