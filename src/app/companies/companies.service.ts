import { Injectable } from '@angular/core';
import { Company, ComponyHistory } from './company.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) { }

  postNewCompany(company: Company) {
    return this.http.post('https://barq-api.azurewebsites.net/api/companies', company);
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
    this.postNewCompanyHistory(companyID);
    return this.http.get<Company>(companyAPI);
  }

  updateCompanyByID(companyID: string, company: Company) {
    const companyAPI = 'https://barq-api.azurewebsites.net/api/companies/' + companyID;
    return this.http.put(companyAPI, company);
  }

  deleteCompanyByID(companyID: string) {
    const companyAPI = 'https://barq-api.azurewebsites.net/api/companies/' + companyID;
    return this.http.delete(companyAPI);
  }


  postNewCompanyHistory(companyID: string) {

    const company: ComponyHistory = {
      companyId: companyID,
      startingDate: new Date(),
      endingDate: new Date(),
      offerId: companyID,
      moneyIncome: 22,
    };

    this.http.post('https://barq-api.azurewebsites.net/api/companiesHistory', company).subscribe(data => {
      console.log(data);
      this.getCompanyHistoryByID(companyID);

    })
  }

  getCompanyHistoryByID(companyID: string) {
    const historyAPI = 'https://barq-api.azurewebsites.net/api/companiesHistory';
    this.http.get<Company>(historyAPI).subscribe((data) => {
      console.log(data);
    });
  }


}

