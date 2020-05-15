import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../company.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-companies-table',
  templateUrl: './companies-table.component.html',
  styleUrls: ['./companies-table.component.css']
})
export class CompaniesTableComponent implements OnInit {

  @Input() companies: Company[];

  constructor() { }

  ngOnInit() {
  }

  companyProfile(company: Company) {
    console.log(company.id);
    // this.router.navigate([company.id], { relativeTo: this.route });
  }

}
