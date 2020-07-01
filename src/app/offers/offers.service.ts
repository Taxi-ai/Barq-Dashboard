import { Injectable } from '@angular/core';
import { Offer } from './offer.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private http: HttpClient) { }



  postNewOffer(offer: Offer) {
    return this.http.post('https://barq-api.azurewebsites.net/api/offers', offer);
  }

  getAllOffers() {

    return this.http.get('https://barq-api.azurewebsites.net/api/offers').pipe(
      map((offersStream: Offer[]) => {
        const offersArray = [];
        // tslint:disable-next-line: forin
        for (const id in offersStream) {
          offersArray.push({ ...offersStream[id] });
        }
        return offersArray;
      }));
  }

  getOfferByID(offerID: string) {
    const offerAPI = 'https://barq-api.azurewebsites.net/api/offers/' + offerID;
    return this.http.get<Offer>(offerAPI);
  }


  updateOfferByID(offerID: string, offer: Offer) {
    const offerAPI = 'https://barq-api.azurewebsites.net/api/offers/' + offerID;
    return this.http.put(offerAPI, offer);
  }

  deleteOfferByID(offerID: string) {
    const offerAPI = 'https://barq-api.azurewebsites.net/api/offers/' + offerID;
    return this.http.delete(offerAPI);
  }
}
