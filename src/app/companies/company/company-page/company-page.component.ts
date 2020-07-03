import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompaniesService } from '../../companies.service';
import { Company, ComponyHistory } from '../../company.model';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.css']
})
export class CompanyPageComponent implements OnInit {
  company: Company;
  spin = true;
  addHistory = false;

  componyHistory: ComponyHistory = {
    companyId: '',
    startingDate: new Date(),
    endingDate: new Date(),
    offerId: '',
    moneyIncome: 0,
  };

  constructor(private route: ActivatedRoute, private router: Router, private companiesService: CompaniesService) { }

  ngOnInit() {

    const companyID = this.route.snapshot.params.id;

    this.companiesService.getCompanyByID(companyID).subscribe(company => {
      console.log(company);
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

  assignOffer() {
    this.spin = true;

    const componyHistory: ComponyHistory = {
      companyId: this.company._id,
      startingDate: this.componyHistory.startingDate,
      endingDate: this.componyHistory.endingDate,
      offerId: this.componyHistory.offerId,
      moneyIncome: this.componyHistory.moneyIncome,
    };

    this.companiesService.postNewCompanyHistory(componyHistory).subscribe(data => {
      // console.log(data);
      this.spin = false;
    },
      error => {
        this.spin = false;
      });
  }

}


