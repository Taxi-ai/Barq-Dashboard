import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../../admin.model';
import { AdminsService } from '../../admins.service';

@Component({
  selector: 'app-admin-new',
  templateUrl: './admin-new.component.html',
  styleUrls: ['./admin-new.component.css']
})
export class AdminNewComponent implements OnInit {

  admin: Admin = {
    username: ' ',
    email: ' ',
    dateOfBirth: new Date(),
    address: { country: ' ', city: ' ', street: ' ' },
    image: ' ',
    password: 'Mm@1234567',
    phone: ' '
  };
  spin = false;

  constructor(private route: ActivatedRoute, private router: Router, private adminsService: AdminsService) { }

  ngOnInit() {
  }

  postNewAdmin() {
    this.spin = true;

    this.adminsService.postNewAdmin(this.admin).subscribe(data => {
      // console.log(data);
      this.spin = false;

      this.router.navigate(['../'], { relativeTo: this.route });
    });

  }

}
