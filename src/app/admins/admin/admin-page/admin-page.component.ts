import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminsService } from '../../admins.service';
import { Admin } from '../../admin.model';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  admin: Admin;
  spin = true;


  addIssueForThatAdmin = '../../issues/new/';

  constructor(private route: ActivatedRoute, private router: Router, private adminsService: AdminsService) { }

  ngOnInit() {

    const adminID = this.route.snapshot.params.id;
    this.addIssueForThatAdmin += adminID;

    this.adminsService.getAdminByID(adminID).subscribe(admin => {
      // console.log(admin);
      this.admin = admin;
      this.spin = false;


    });

  }

  deleteAdmin() {
    // console.log(this.admin);

    this.adminsService.deleteAdminByID(this.route.snapshot.params.id).subscribe(data => {
      console.log(data);
      this.router.navigate(['../'], { relativeTo: this.route });
    },
      error => {
        this.spin = false;
      });
  }

}
