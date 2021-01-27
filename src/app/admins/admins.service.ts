import { Injectable } from '@angular/core';
import { Admin } from './admin.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IssuesService } from '../issues/issues.service';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  constructor(private issuesService: IssuesService, private http: HttpClient) { }

  issuesNumber: number | null;


  postNewAdmin(admin: Admin) {
    return this.http.post('https://taxi-graduation-project.firebaseio.com/admins.json', admin);
  }


  getAllAdmins() {
    console.log('in service');


    return this.http.get('https://taxi-graduation-project.firebaseio.com/admins.json').pipe(
      map((adminsStream: Admin[]) => {
        console.log(adminsStream);

        const adminsArray = [];
        // tslint:disable-next-line: forin
        for (const id in adminsStream) {
          console.log(id);

          adminsArray.push({ id, ...adminsStream[id] });
        }
        console.log(adminsArray);

        return adminsArray;
      }));

  }

  getAdminByID(adminID: string) {

    const adminAPI = 'https://taxi-graduation-project.firebaseio.com/admins/' + adminID + '.json';
    return this.http.get<Admin>(adminAPI);

  }

  updateAdminByID(adminID: string, admin: Admin) {

    const companyAPI = 'https://taxi-graduation-project.firebaseio.com/admins/' + adminID + '.json';
    return this.http.put(companyAPI, admin);

  }

  deleteAdminByID(adminID: string) {

    const adminAPI = 'https://taxi-graduation-project.firebaseio.com/admins/' + adminID + '.json';
    return this.http.delete(adminAPI);
  }

  getIssuesNumber() {

    return this.issuesService.getAllIssues();
  }

  getAdminsNotifications() { }
  getAdminsLocations() { }
  getAdminsPackages() { }
  getAdminsOffers() { }

}
