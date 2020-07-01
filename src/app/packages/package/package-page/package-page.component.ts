import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackagesService } from '../../packages.service';
import { Package } from '../../package.model';

@Component({
  selector: 'app-package-page',
  templateUrl: './package-page.component.html',
  styleUrls: ['./package-page.component.css']
})
export class PackagePageComponent implements OnInit {

  companyPackage: Package;
  spin = true;

  constructor(private route: ActivatedRoute, private router: Router, private packagesService: PackagesService) { }

  ngOnInit() {
    const companyPackageID = this.route.snapshot.params.id;

    this.packagesService.getPackageByID(companyPackageID).subscribe(companyPackage => {
      console.log(companyPackage);
      this.companyPackage = companyPackage;
      this.spin = false;

    });
  }


  deleteCompanyPackage() {
    this.spin = true;

    this.packagesService.deletePackageByID(this.companyPackage._id).subscribe(data => {
      // console.log(data);
      this.spin = false;
      this.router.navigate(['../'], { relativeTo: this.route });
    },
      error => {
        this.spin = false;
      });
  }

}
