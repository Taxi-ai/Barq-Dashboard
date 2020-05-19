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

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  companyProfile(company: Company) {
    console.log(company._id);
    this.router.navigate([company._id], { relativeTo: this.route });
  }

}
