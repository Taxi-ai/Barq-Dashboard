import { Component, OnInit } from '@angular/core';
import { Company } from '../../company.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CompaniesService } from '../../companies.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {

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

  updateCompanyData() {
    this.spin = true;

    const editedCompany: Company = {
      name: this.company.name,
      email: this.company.email,
      phone: this.company.phone,
      address: { country: this.company.address.country, city: this.company.address.city, street: this.company.address.street },
      numberOfEmployees: this.company.numberOfEmployees
    };
    this.companiesService.updateCompanyByID(this.company._id, editedCompany).subscribe(data => {
      console.log(data);
      this.spin = false;
      this.router.navigate(['../'], { relativeTo: this.route });
    }
    );

  }




}
