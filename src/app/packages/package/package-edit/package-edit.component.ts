import { Component, OnInit } from '@angular/core';
import { Package } from '../../package.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PackagesService } from '../../packages.service';

@Component({
  selector: 'app-package-edit',
  templateUrl: './package-edit.component.html',
  styleUrls: ['./package-edit.component.css']
})
export class PackageEditComponent implements OnInit {

  companyPackage: Package;
  spin = true;

  constructor(private route: ActivatedRoute, private router: Router, private packagesService: PackagesService) { }

  ngOnInit() {
    const companyPackageID = this.route.snapshot.params.id;
    this.packagesService.getPackageByID(companyPackageID).subscribe(companyPackage => {
      // console.log(companyPackage);
      this.companyPackage = companyPackage;
      this.spin = false;
    });
  }


  updatePackageData() {

    this.spin = true;
    const editedCompanyPackage: Package = {
      description: this.companyPackage.description,
      duration: this.companyPackage.duration,
      category: this.companyPackage.category,
      price: this.companyPackage.price,
      numberOfGiftCodes: this.companyPackage.numberOfGiftCodes,
      numberOfRides: this.companyPackage.numberOfRides,
      limitedPricePerRide: this.companyPackage.limitedPricePerRide
    };

    this.packagesService.updatePackageByID(this.companyPackage._id, editedCompanyPackage).subscribe(data => {
      console.log(data);
      this.spin = false;
      this.router.navigate(['../'], { relativeTo: this.route });
    }
    );



  }

}
