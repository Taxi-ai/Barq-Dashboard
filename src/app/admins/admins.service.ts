import { Injectable } from '@angular/core';
import { Admin } from './admin.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  constructor(private http: HttpClient) { }


  postNewAdmin(admin: Admin) {
    return this.http.post('https://barq-api.azurewebsites.net/api/admins ', admin);
  }


  getAllAdmins() {

    return this.http.get('https://barq-api.azurewebsites.net/api/admins').pipe(
      map((adminsStream: Admin[]) => {

        const adminsArray = [];
        // tslint:disable-next-line: forin
        for (const id in adminsStream) {
          adminsArray.push({ ...adminsStream[id] });
        }
        return adminsArray;
      }));

  }

  getAdminByID(adminID: string) {

    const adminAPI = 'https://barq-api.azurewebsites.net/api/admins/' + adminID;
    return this.http.get<Admin>(adminAPI);

  }

  updateAdminByID(adminID: string, admin: Admin) {

    const companyAPI = 'https://barq-api.azurewebsites.net/api/admins/' + adminID;
    return this.http.put(companyAPI, admin);

  }

  deleteAdminByID(adminID: string) {

    const adminAPI = 'https://barq-api.azurewebsites.net/api/admins/' + adminID;
    return this.http.delete(adminAPI);
  }

  getAdminsNotifications() { }
  getAdminsLocations() { }
  getAdminsPackages() { }
  getAdminsOffers() { }

}
