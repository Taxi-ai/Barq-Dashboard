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

  constructor(private route: ActivatedRoute, private router: Router, private companiesService: CompaniesService) { }

  ngOnInit() {

    const companyID = this.route.snapshot.params.id;

    this.companiesService.getCompanyByID(companyID).subscribe(company => {
      console.log(company); this.company = company;
    });

  }


  deleteCompany() {
    this.companiesService.deleteCompany(this.company._id).subscribe(data => {
      console.log(data);
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }


}


