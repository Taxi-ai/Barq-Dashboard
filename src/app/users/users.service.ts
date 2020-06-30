import { Injectable } from '@angular/core';
import { UserX } from './user.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  postNewUser(user: UserX) {
    return this.http.post('https://barq-api.azurewebsites.net/api/users ', user);
  }


  getAllUsers() {

    return this.http.get('https://barq-api.azurewebsites.net/api/users').pipe(
      map((usersStream: UserX[]) => {

        const usersArray = [];
        // tslint:disable-next-line: forin
        for (const id in usersStream) {
          usersArray.push({ ...usersStream[id] });
        }
        return usersArray;
      }));

  }

  getUserByID(userID: string) {

    const userAPI = 'https://barq-api.azurewebsites.net/api/users/' + userID;
    return this.http.get<UserX>(userAPI);

  }

  updateUserByID(userID: string, user: UserX) {

    const companyAPI = 'https://barq-api.azurewebsites.net/api/users/' + userID;
    return this.http.put(companyAPI, user);

  }

  deleteUserByID(userID: string) {

    const userAPI = 'https://barq-api.azurewebsites.net/api/users/' + userID;
    return this.http.delete(userAPI);
  }

  getUsersNotifications() { }
  getUsersLocations() { }
  getUsersPackages() { }
  getUsersOffers() { }

}
