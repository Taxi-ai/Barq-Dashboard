import { Injectable, EventEmitter } from '@angular/core';
import { User, UserX } from './user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users = [

    new User(912346, 'Mahmoud Samy',
      'none',
      'mahmoudsamy50@outlook.com',
      'Egypt',
      'tanta',
      '22 / 10 / 1996',
      23,
      2324286382527,
      'El-Galaa',
      '01019111816',
      'Visa',
      23720972472042,
      '22/10/2025',
      { offerCount: 5, offers: ['offer1', 'offer2'] },
      { year: 2018, month: 3, day: 12 }),

    new User(197564, 'Mahmoud Samy',
      'none',
      'mahmoudsamy50@outlook.com',
      'Egypt',
      'tanta',
      '22 / 10 / 1996',
      23,
      2324286382527,
      'El-Galaa',
      '01019111816',
      'Visa',
      23720972472042,
      '22/10/2025',
      { offerCount: 5, offers: ['offer1', 'offer2'] },
      { year: 2018, month: 4, day: 12 }),
    new User(654791, 'Mahmoud Samy',
      'none',
      'mahmoudsamy50@outlook.com',
      'Egypt',
      'tanta',
      '22 / 10 / 1996',
      23,
      2324286382527,
      'El-Galaa',
      '01019111816',
      'Visa',
      23720972472042,
      '22/10/2025',
      { offerCount: 5, offers: ['offer1', 'offer2'] },
      { year: 2018, month: 3, day: 12 }),
    new User(347951, 'Mahmoud Samy',
      'none',
      'mahmoudsamy50@outlook.com',
      'Egypt',
      'tanta',
      '22 / 10 / 1996',
      23,
      2324286382527,
      'El-Galaa',
      '01019111816',
      'Visa',
      23720972472042,
      '22/10/2025',
      { offerCount: 5, offers: ['offer1', 'offer2'] },
      { year: 2018, month: 8, day: 12 }),
    new User(264795, 'Mahmoud Samy',
      'none',
      'mahmoudsamy50@outlook.com',
      'Egypt',
      'tanta',
      '22 / 10 / 1996',
      23,
      2324286382527,
      'El-Galaa',
      '01019111816',
      'Visa',
      23720972472042,
      '22/10/2025',
      { offerCount: 5, offers: ['offer1', 'offer2'] },
      { year: 2018, month: 5, day: 12 }),
    new User(657181, 'Mahmoud Samy',
      'panned',
      'mahmoudsamy50@outlook.com',
      'Egypt',
      'tanta',
      '22 / 10 / 1996',
      23,
      2324286382527,
      'El-Galaa',
      '01019111816',
      'Visa',
      23720972472042,
      '22/10/2025',
      { offerCount: 5, offers: ['offer1', 'offer2'] },
      { year: 2018, month: 8, day: 12 }),
    new User(758477, 'Mahmoud Samy',
      'active',
      'mahmoudsamy50@outlook.com',
      'Egypt',
      'tanta',
      '22 / 10 / 1996',
      23,
      2324286382527,
      'El-Galaa',
      '01019111816',
      'Visa',
      23720972472042,
      '22/10/2025',
      { offerCount: 5, offers: ['offer1', 'offer2'] },
      { year: 2018, month: 12, day: 12 }),

  ];

  usersChanged = new EventEmitter<User[]>();

  constructor(private http: HttpClient) { }

  randomTrueFalse() {
    // TODO useless function - remove it after removing user constant in postUser function
    if (Math.round(Math.random() * 10) > 5) {
      return true;
    } else {
      return false;
    }
  }

  postUser() {
    // TODO this function in just for creation of firebase database so delete it after that

    const user: UserX = {
      firstName: 'Mahmoud',
      lastName: 'Samy',
      email: 'mahmoudSamy50@outlook.com',
      country: 'Egypt',
      city: 'Tanta',
      age: Math.round(Math.random() * 100),
      wallet: Math.round(Math.random() * 1000),
      phone: Math.round(Math.random() * 100000000000),
      numberOfOffers: Math.round(Math.random() * 10),
      numberOfRides: Math.round(Math.random() * 100),
      numberOfIssue: Math.round(Math.random() * 10),
      userState: this.randomTrueFalse(),
      pannedState: this.randomTrueFalse(),
      registered: new Date()
    };

    this.http.post('https://taxi-graduation-project.firebaseio.com/users.json', user).subscribe(data => console.log(data));
  }


  getAllUsers() {
    // console.log(JSON.stringify(this.users));

    return this.http.get('https://taxi-graduation-project.firebaseio.com/users.json')
      .pipe(map(usersStream => {
        const usersArray = [];
        // tslint:disable-next-line: forin
        for (const userID in usersStream) {
          usersArray.push({ ...usersStream[userID], userID });
        }
        return usersArray;
      }))
      .pipe(map(usersArray => {

        usersArray.forEach(user => {
          // data came as string so we need to convert it to date object
          user.registered = new Date(user.registered);
        });

        return usersArray;
      }
      ));



    // return this.users;
  }

  getUserByID(id: number) {

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].userID === id) {
        return this.users[i];
      }
    }
  }

  updateUserByID(id: number, user: User) {


    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].userID === id) {
        this.users[i] = user;
      }
    }
  }
}
