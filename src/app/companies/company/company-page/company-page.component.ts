import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompaniesService } from '../../companies.service';
import { Company } from '../../company.model';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.css']
})
export class CompanyPageComponent implements OnInit {
  company: Company;

  constructor(private route: ActivatedRoute, private companiesService: CompaniesService) { }

  ngOnInit() {

    let companyID = this.route.snapshot.params.id;
    this.companiesService.getCompanyByID(companyID).subscribe(company => {
      console.log(company); this.company = company;
    });
    this.route.params.subscribe(
      (params) => {
        companyID = params.id;
        // this.company = this.companiesService.getCompanyByID(companyID);
      }
    );
  }

}


