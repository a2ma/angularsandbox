import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})

export class UserdataService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'doe@jane.net',
        age: 34,
        address: {
          street: '5478 Windham Road',
          city: 'Stadengrad',
          state: 'Hibernia',
          zip: 666666
        },
        image: 'http://lorempixel.com/600/600/people/3',
        isActive: true,
        balance: 100,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'doe@jane.net',
        age: 34,
        address: {
          street: '5478 Windham Road',
          city: 'Stadengrad',
          state: 'Hibernia',
          zip: 666666
        },
        image: 'http://lorempixel.com/600/600/people/1',
        isActive: false,
        balance: 200,
        registered: new Date('03/05/2017 08:30:00'),
        hide: true
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'doe@jane.net',
        age: 34,
        address: {
          street: '5478 Windham Road',
          city: 'Stadengrad',
          state: 'Hibernia',
          zip: 666666
        },
        image: 'http://lorempixel.com/600/600/people/2',
        balance: 300,
        registered: new Date('07/14/2016 08:30:00'),
        hide: true
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'doe@jane.net',
        age: 34,
        address: {
          street: '5478 Windham Road',
          city: 'Stadengrad',
          state: 'Hibernia',
          zip: 666666
        },
        balance: 100,
        registered: new Date('09/21/2015 08:30:00'),
        hide: true
      }
    ];


  }

  getUsers(): Observable<User[]> {
    return of(this.users);
    // console.log('From the service.');
    // return this.users;
  }

  addUser(user: User) {
    console.log(user);
    this.users.unshift(user);
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
      setTimeout(() => {
        observer.next(2);
      }, 2000);
      setTimeout(() => {
        observer.next(3);
      }, 3000);
      setTimeout(() => {
        observer.next(4);
      }, 4000);
    });

    return this.data;
  }
}
