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
    return this.http.post('https://taxi-graduation-project.firebaseio.com/companies.json', company);
  }

  getAllCompanies() {

    return this.http.get('https://taxi-graduation-project.firebaseio.com/companies.json').pipe(
      map((companiesStream: Company[]) => {
        const companiesArray = [];
        // tslint:disable-next-line: forin
        for (const id in companiesStream) {
          companiesArray.push({ id, ...companiesStream[id] });
        }
        return companiesArray;
      }));
  }

  getCompanyByID(companyID: string) {
    const companyAPI = 'https://taxi-graduation-project.firebaseio.com/companies/' + companyID + '.json';
    return this.http.get<Company>(companyAPI);
  }

  updateCompanyByID(companyID: string, company: Company) {
    const companyAPI = 'https://taxi-graduation-project.firebaseio.com/companies/' + companyID + '.json';
    return this.http.put(companyAPI, company);
  }

  deleteCompanyByID(companyID: string) {
    const companyAPI = 'https://taxi-graduation-project.firebaseio.com/companies/' + companyID + '.json';
    return this.http.delete(companyAPI);
  }


  postNewCompanyHistory(componyHistory: ComponyHistory) {

    return this.http.post('https://taxi-graduation-project.firebaseio.com/companiesHistory', componyHistory);

  }

  getCompanyHistoryByID(companyID: string) {
    const historyAPI = 'https://taxi-graduation-project.firebaseio.com/companiesHistory';
    this.http.get<Company>(historyAPI).subscribe((data) => {
      console.log(data);
    });
  }


}

