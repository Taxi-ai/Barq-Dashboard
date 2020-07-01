import { Component, OnInit, Input } from '@angular/core';
import { Package } from '../package.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-packages-table',
  templateUrl: './packages-table.component.html',
  styleUrls: ['./packages-table.component.css']
})
export class PackagesTableComponent implements OnInit {

  @Input() companyPackages: Package[];


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  companyPackageProfile(companyPackage: Package) {
    console.log(companyPackage._id);
    this.router.navigate([companyPackage._id], { relativeTo: this.route });
  }

}
