import { Component, OnInit } from '@angular/core';
import { Company } from '../../company.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CompaniesService } from '../../companies.service';

@Component({
  selector: 'app-company-new',
  templateUrl: './company-new.component.html',
  styleUrls: ['./company-new.component.css']
})
export class CompanyNewComponent implements OnInit {

  company: Company = {
    name: ' ',
    email: ' ',
    phone: ' ',
    address: { country: ' ', city: ' ', street: ' ' },
    numberOfEmployees: 0
  };
  changesIsSaved = false;

  constructor(private route: ActivatedRoute, private router: Router, private companiesService: CompaniesService) { }

  ngOnInit() {

  }

  postNewCompany() {
    this.companiesService.postCompany(this.company).subscribe(data => {
      console.log(data); this.changesIsSaved = true;
      this.router.navigate(['../'], { relativeTo: this.route });
    });

  }

}
