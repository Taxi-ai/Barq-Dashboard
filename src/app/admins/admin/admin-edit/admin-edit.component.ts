import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminsService } from '../../admins.service';
import { Admin } from '../../admin.model';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

  admin: Admin;
  spin = true;

  constructor(private route: ActivatedRoute, private router: Router, private adminsService: AdminsService) { }

  ngOnInit() {
    const adminID = this.route.snapshot.params.id;
    this.adminsService.getAdminByID(adminID).subscribe(admin => {
      // console.log(admin);
      this.admin = admin;
      this.spin = false;

    });

  }

  updateAdminData() {
    this.spin = true;

    const editedAdmin: Admin = {
      username: this.admin.username,
      email: this.admin.email,
      dateOfBirth: this.admin.dateOfBirth,
      address: { country: this.admin.address.country, city: this.admin.address.city, street: this.admin.address.street },
      image: this.admin.image,
      phone: this.admin.phone
    };

    this.adminsService.updateAdminByID(this.admin._id, editedAdmin).subscribe(data => {
      console.log(data);
      this.spin = false;
      this.router.navigate(['../'], { relativeTo: this.route });
    }
      , error => {
        this.spin = false;
      });

  }
}
