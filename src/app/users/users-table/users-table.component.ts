import { Component, OnInit, Input } from '@angular/core';
import { UserX } from '../user.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  @Input() users: UserX[];

  userProfile(user: UserX) {
    console.log(user._id);
    this.router.navigate([user._id], { relativeTo: this.route });
  }
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
