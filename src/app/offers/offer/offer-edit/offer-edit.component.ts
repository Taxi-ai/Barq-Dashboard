import { Component, OnInit } from '@angular/core';
import { Offer } from '../../offer.model';
import { ActivatedRoute, Router } from '@angular/router';
import { OffersService } from '../../offers.service';

@Component({
  selector: 'app-offer-edit',
  templateUrl: './offer-edit.component.html',
  styleUrls: ['./offer-edit.component.css']
})
export class OfferEditComponent implements OnInit {

  offer: Offer;
  spin = true;

  constructor(private route: ActivatedRoute, private router: Router, private offersService: OffersService) { }

  ngOnInit(): void {
    const offerID = this.route.snapshot.params.id;
    this.offersService.getOfferByID(offerID).subscribe(offer => {
      // console.log(offer);
      this.offer = offer;
      this.spin = false;
    });
  }

  updateOfferData() {
    this.spin = true;
    const editedOffer: Offer = {
      code: this.offer.code,
      discount: this.offer.discount,
      body: this.offer.body,
      startingDate: this.offer.startingDate,
      endingDate: this.offer.endingDate
    };

    this.offersService.updateOfferByID(this.offer._id, editedOffer).subscribe(data => {
      console.log(data);
      this.spin = false;
      this.router.navigate(['../'], { relativeTo: this.route });
    }
    );



  }

}
