import { Injectable } from '@angular/core';
import { Package } from './package.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  constructor(private http: HttpClient) { }


  postNewPackage(companyPackage: Package) {
    return this.http.post('https://barq-api.azurewebsites.net/api/companyPackages', companyPackage);
  }

  getAllPackages() {

    return this.http.get('https://barq-api.azurewebsites.net/api/companyPackages').pipe(
      map((companyPackagesStream: Package[]) => {
        const companyPackagesArray = [];
        // tslint:disable-next-line: forin
        for (const id in companyPackagesStream) {
          companyPackagesArray.push({ ...companyPackagesStream[id] });
        }
        return companyPackagesArray;
      }));
  }

  getPackageByID(companyPackageID: string) {
    const companyPackageAPI = 'https://barq-api.azurewebsites.net/api/companyPackages/' + companyPackageID;
    return this.http.get<Package>(companyPackageAPI);
  }


  updatePackageByID(companyPackageID: string, companyPackage: Package) {
    const companyPackageAPI = 'https://barq-api.azurewebsites.net/api/companyPackages/' + companyPackageID;
    return this.http.put(companyPackageAPI, companyPackage);
  }

  deletePackageByID(companyPackageID: string) {
    const companyPackageAPI = 'https://barq-api.azurewebsites.net/api/companyPackages/' + companyPackageID;
    return this.http.delete(companyPackageAPI);
  }


}
