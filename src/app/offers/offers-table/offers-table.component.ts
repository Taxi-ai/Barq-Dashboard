import { Component, OnInit, Input } from '@angular/core';
import { Offer } from '../offer.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offers-table',
  templateUrl: './offers-table.component.html',
  styleUrls: ['./offers-table.component.css']
})
export class OffersTableComponent implements OnInit {

  @Input() offers: Offer[];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  offerProfile(offer: Offer) {
    console.log(offer._id);
    this.router.navigate([offer._id], { relativeTo: this.route });
  }

}
