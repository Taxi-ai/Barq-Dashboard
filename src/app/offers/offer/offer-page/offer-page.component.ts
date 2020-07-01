import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OffersService } from '../../offers.service';
import { Offer } from '../../offer.model';

@Component({
  selector: 'app-offer-page',
  templateUrl: './offer-page.component.html',
  styleUrls: ['./offer-page.component.css']
})
export class OfferPageComponent implements OnInit {
  offer: Offer;
  spin = true;

  constructor(private route: ActivatedRoute, private router: Router, private offersService: OffersService) { }

  ngOnInit(): void {

    const offerID = this.route.snapshot.params.id;

    this.offersService.getOfferByID(offerID).subscribe(offer => {
      console.log(offer);
      this.offer = offer;
      this.spin = false;

    });

  }

  deleteOffer() {
    this.spin = true;

    this.offersService.deleteOfferByID(this.offer._id).subscribe(data => {
      // console.log(data);
      this.spin = false;
      this.router.navigate(['../'], { relativeTo: this.route });
    },
      error => {
        this.spin = false;
      });
  }



}
