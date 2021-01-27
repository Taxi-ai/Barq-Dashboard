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
    return this.http.post('https://taxi-graduation-project.firebaseio.com/users.json', user);
  }


  getAllUsers() {

    return this.http.get('https://taxi-graduation-project.firebaseio.com/users.json').pipe(
      map((usersStream: UserX[]) => {

        const usersArray = [];
        // tslint:disable-next-line: forin
        for (const id in usersStream) {
          usersArray.push({id, ...usersStream[id] });
        }
        return usersArray;
      }));

  }

  getUserByID(userID: string) {

    const userAPI = 'https://taxi-graduation-project.firebaseio.com/users/' + userID + '.json';
    return this.http.get<UserX>(userAPI);

  }

  updateUserByID(userID: string, user: UserX) {

    const companyAPI = 'https://taxi-graduation-project.firebaseio.com/users/' + userID + '.json';
    return this.http.put(companyAPI, user);

  }

  deleteUserByID(userID: string) {

    const userAPI = 'https://taxi-graduation-project.firebaseio.com/users/' + userID + '.json';
    return this.http.delete(userAPI);
  }

  getUsersNotifications() { }
  getUsersLocations() { }
  getUsersPackages() { }
  getUsersOffers() { }

}
