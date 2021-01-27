import { Injectable } from '@angular/core';
import { Offer } from './offer.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ComponyHistory } from '../companies/company.model';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private http: HttpClient) { }

  postNewOffer(offer: Offer) {
    return this.http.post('https://taxi-graduation-project.firebaseio.com/offers.json', offer);
  }

  getAllOffers() {

    return this.http.get('https://taxi-graduation-project.firebaseio.com/offers.json').pipe(
      map((offersStream: Offer[]) => {
        const offersArray = [];
        // tslint:disable-next-line: forin
        for (const id in offersStream) {
          offersArray.push({ id, ...offersStream[id] });
        }
        return offersArray;
      }));
  }

  getOfferByID(offerID: string) {
    const offerAPI = 'https://taxi-graduation-project.firebaseio.com/offers/' + offerID + '.json';
    return this.http.get<Offer>(offerAPI);
  }


  updateOfferByID(offerID: string, offer: Offer) {
    const offerAPI = 'https://taxi-graduation-project.firebaseio.com/offers/' + offerID + '.json';
    return this.http.put(offerAPI, offer);
  }

  deleteOfferByID(offerID: string) {
    const offerAPI = 'https://taxi-graduation-project.firebaseio.com/offers/' + offerID + '.json';
    return this.http.delete(offerAPI);
  }


}
