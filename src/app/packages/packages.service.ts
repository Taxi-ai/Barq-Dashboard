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
    return this.http.post('https://taxi-graduation-project.firebaseio.com/packages.json', companyPackage);
  }

  getAllPackages() {

    return this.http.get('https://taxi-graduation-project.firebaseio.com/packages.json').pipe(
      map((companyPackagesStream: Package[]) => {
        const companyPackagesArray = [];
        // tslint:disable-next-line: forin
        for (const id in companyPackagesStream) {
          companyPackagesArray.push({ id, ...companyPackagesStream[id] });
        }
        return companyPackagesArray;
      }));
  }

  getPackageByID(companyPackageID: string) {
    const companyPackageAPI = 'https://taxi-graduation-project.firebaseio.com/packages/' + companyPackageID + '.json';
    return this.http.get<Package>(companyPackageAPI);
  }


  updatePackageByID(companyPackageID: string, companyPackage: Package) {
    const companyPackageAPI = 'https://taxi-graduation-project.firebaseio.com/packages/' + companyPackageID + '.json';
    return this.http.put(companyPackageAPI, companyPackage);
  }

  deletePackageByID(companyPackageID: string) {
    const companyPackageAPI = 'https://taxi-graduation-project.firebaseio.com/packages/' + companyPackageID + '.json';
    return this.http.delete(companyPackageAPI);
  }


}
