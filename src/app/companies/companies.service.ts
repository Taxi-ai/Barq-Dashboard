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

  postCompany(company: Company) {

    return this.http.post('https://barq-api.azurewebsites.net/api/companies ', company);
  }

  updateCompany(companyID: string, company: Company) {

    const companyAPI = 'https://barq-api.azurewebsites.net/api/companies/' + companyID;
    return this.http.put(companyAPI, company);
  }

  deleteCompany(companyID: string) {
    const companyAPI = 'https://barq-api.azurewebsites.net/api/companies/' + companyID;
    return this.http.delete(companyAPI);
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
