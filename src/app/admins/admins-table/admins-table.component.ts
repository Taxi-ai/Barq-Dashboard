import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admins-table',
  templateUrl: './admins-table.component.html',
  styleUrls: ['./admins-table.component.css']
})
export class AdminsTableComponent implements OnInit {

  @Input() admins: Admin[];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  adminProfile(admin: Admin) {
    console.log(admin._id);
    this.router.navigate([admin._id], { relativeTo: this.route });
  }

}
