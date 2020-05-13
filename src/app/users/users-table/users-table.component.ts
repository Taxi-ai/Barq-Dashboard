import { Component, OnInit, Input } from '@angular/core';
import { UserْX } from '../user.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  @Input() users: UserْX[];

  userProfile(user: userX) {
    console.log(user.id);
    this.router.navigate([user.id], { relativeTo: this.route });
  }
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
