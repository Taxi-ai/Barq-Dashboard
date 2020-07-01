import { Component, OnInit } from '@angular/core';
import { Package } from '../../package.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PackagesService } from '../../packages.service';

@Component({
  selector: 'app-package-new',
  templateUrl: './package-new.component.html',
  styleUrls: ['./package-new.component.css']
})
export class PackageNewComponent implements OnInit {

  companyPackage: Package = {
    description: '',
    duration: 0,
    category: 'gold',
    price: 0,
    limitedPricePerRide: 0,
    numberOfGiftCodes: 0,
    numberOfRides: 0,
  };

  spin = false;


  constructor(private route: ActivatedRoute, private router: Router, private packagesService: PackagesService) { }

  ngOnInit(): void {

  }


  postNewPackage() {
    console.log(this.companyPackage);
    this.spin = true;

    this.packagesService.postNewPackage(this.companyPackage).subscribe(data => {
      console.log(data);
      this.spin = false;

      this.router.navigate(['../'], { relativeTo: this.route });
    });

  }

}
