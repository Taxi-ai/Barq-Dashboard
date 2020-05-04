import { Injectable, EventEmitter } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users = [

    new User('Mahmoud Samy',
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

    new User('Mahmoud Samy',
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
    new User('Mahmoud Samy',
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
    new User('Mahmoud Samy',
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
    new User('Mahmoud Samy',
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
    new User('Mahmoud Samy',
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
    new User('Mahmoud Samy',
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

  constructor() { }

  getAllUsers() {
    return this.users;
  }

  getUserByID(id: number) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].ID === id) {
        return this.users[i];
      }
    }
  }

  updateUserByID(id: number, user: User) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].ID === id) {
        this.users[i] = user;
      }
    }
  }
}
