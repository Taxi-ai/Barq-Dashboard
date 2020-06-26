import { Injectable, EventEmitter } from '@angular/core';
import { UserX } from './user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // users = [

  //   new User(912346, 'Mahmoud Samy',
  //     'none',
  //     'mahmoudsamy50@outlook.com',
  //     'Egypt',
  //     'tanta',
  //     '22 / 10 / 1996',
  //     23,
  //     2324286382527,
  //     'El-Galaa',
  //     '01019111816',
  //     'Visa',
  //     23720972472042,
  //     '22/10/2025',
  //     { offerCount: 5, offers: ['offer1', 'offer2'] },
  //     { year: 2018, month: 3, day: 12 }),

  //   new User(197564, 'Mahmoud Samy',
  //     'none',
  //     'mahmoudsamy50@outlook.com',
  //     'Egypt',
  //     'tanta',
  //     '22 / 10 / 1996',
  //     23,
  //     2324286382527,
  //     'El-Galaa',
  //     '01019111816',
  //     'Visa',
  //     23720972472042,
  //     '22/10/2025',
  //     { offerCount: 5, offers: ['offer1', 'offer2'] },
  //     { year: 2018, month: 4, day: 12 }),
  //   new User(654791, 'Mahmoud Samy',
  //     'none',
  //     'mahmoudsamy50@outlook.com',
  //     'Egypt',
  //     'tanta',
  //     '22 / 10 / 1996',
  //     23,
  //     2324286382527,
  //     'El-Galaa',
  //     '01019111816',
  //     'Visa',
  //     23720972472042,
  //     '22/10/2025',
  //     { offerCount: 5, offers: ['offer1', 'offer2'] },
  //     { year: 2018, month: 3, day: 12 }),
  //   new User(347951, 'Mahmoud Samy',
  //     'none',
  //     'mahmoudsamy50@outlook.com',
  //     'Egypt',
  //     'tanta',
  //     '22 / 10 / 1996',
  //     23,
  //     2324286382527,
  //     'El-Galaa',
  //     '01019111816',
  //     'Visa',
  //     23720972472042,
  //     '22/10/2025',
  //     { offerCount: 5, offers: ['offer1', 'offer2'] },
  //     { year: 2018, month: 8, day: 12 }),
  //   new User(264795, 'Mahmoud Samy',
  //     'none',
  //     'mahmoudsamy50@outlook.com',
  //     'Egypt',
  //     'tanta',
  //     '22 / 10 / 1996',
  //     23,
  //     2324286382527,
  //     'El-Galaa',
  //     '01019111816',
  //     'Visa',
  //     23720972472042,
  //     '22/10/2025',
  //     { offerCount: 5, offers: ['offer1', 'offer2'] },
  //     { year: 2018, month: 5, day: 12 }),
  //   new User(657181, 'Mahmoud Samy',
  //     'panned',
  //     'mahmoudsamy50@outlook.com',
  //     'Egypt',
  //     'tanta',
  //     '22 / 10 / 1996',
  //     23,
  //     2324286382527,
  //     'El-Galaa',
  //     '01019111816',
  //     'Visa',
  //     23720972472042,
  //     '22/10/2025',
  //     { offerCount: 5, offers: ['offer1', 'offer2'] },
  //     { year: 2018, month: 8, day: 12 }),
  //   new User(758477, 'Mahmoud Samy',
  //     'active',
  //     'mahmoudsamy50@outlook.com',
  //     'Egypt',
  //     'tanta',
  //     '22 / 10 / 1996',
  //     23,
  //     2324286382527,
  //     'El-Galaa',
  //     '01019111816',
  //     'Visa',
  //     23720972472042,
  //     '22/10/2025',
  //     { offerCount: 5, offers: ['offer1', 'offer2'] },
  //     { year: 2018, month: 12, day: 12 }),

  // ];

  // usersChanged = new EventEmitter<User[]>();

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
}
