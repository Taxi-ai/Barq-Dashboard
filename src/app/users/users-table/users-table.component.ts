import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  @Input() users: User[];

  userProfile(user) {
    console.log(user.ID);
    this.router.navigate([user.ID], { relativeTo: this.route });
  }
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
