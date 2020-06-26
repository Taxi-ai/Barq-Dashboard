import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompaniesService } from '../../companies.service';
import { Company } from '../../company.model';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.css']
})
export class CompanyPageComponent implements OnInit {
  company: Company;
  spin = true;

  constructor(private route: ActivatedRoute, private router: Router, private companiesService: CompaniesService) { }

  ngOnInit() {

    const companyID = this.route.snapshot.params.id;

    this.companiesService.getCompanyByID(companyID).subscribe(company => {
      // console.log(company);
      this.company = company;
      this.spin = false;

    });

  }


  deleteCompany() {
    this.spin = true;

    this.companiesService.deleteCompanyByID(this.company._id).subscribe(data => {
      // console.log(data);
      this.spin = false;
      this.router.navigate(['../'], { relativeTo: this.route });
    },
      error => {
        this.spin = false;
      });
  }


}


