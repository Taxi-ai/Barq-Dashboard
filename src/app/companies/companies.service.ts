import { Injectable } from '@angular/core';
import { Company } from './company.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) { }

  randomTrueFalse() {
    // TODO useless function - remove it after removing user constant in postUser function
    if (Math.round(Math.random() * 10) > 5) {
      return true;
    } else {
      return false;
    }
  }

  postCompany() {
    // TODO this function in just for creation of firebase database so delete it after that

    const company = {
      id: 264564,
      name: 'The Great',
      email: 'great@great.com',
      phone: '01019111816',
      address: { country: 'egypt', city: 'tanta', street: 'galaa' },
      numberOfEmployees: 50
    };

    this.http.post('https://taxi-graduation-project.firebaseio.com/companies.json ', company).subscribe(data => console.log(data));
  }


  getAllCompanies() {

    return this.http.get('https://barq-api.azurewebsites.net/api/companies').pipe(
      map((companiesStream: Company[]) => {
        const companiesArray = [];
        // tslint:disable-next-line: forin
        for (const id in companiesStream) {
          companiesArray.push({ ...companiesStream[id] });
        }
        return companiesArray;
      }));

  }



  getCompanyByID(companyID: string) {
    const companyAPI = 'https://barq-api.azurewebsites.net/api/companies/' + companyID;
    return this.http.get<Company>(companyAPI);
  }


}
