import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.users = [
        {
          firstName: "Jane",
          lastName: "Doe",
          age: 34,
          address: {
            street: '5478 Windham Road',
            city: 'Stadengrad',
            state: 'Hibernia',
            zip: 666666
          },
          image: 'http://lorempixel.com/600/600/people/3'
        },
        {
          firstName: "Jane",
          lastName: "Doe",
          age: 34,
          address: {
            street: '5478 Windham Road',
            city: 'Stadengrad',
            state: 'Hibernia',
            zip: 666666
          },
          image: 'http://lorempixel.com/600/600/people/1'
        },
        {
          firstName: "Jane",
          lastName: "Doe",
          age: 34,
          address: {
            street: '5478 Windham Road',
            city: 'Stadengrad',
            state: 'Hibernia',
            zip: 666666
          },
          image: 'http://lorempixel.com/600/600/people/2'
        },
        {
          firstName: "Jane",
          lastName: "Doe",
          age: 34,
          address: {
            street: '5478 Windham Road',
            city: 'Stadengrad',
            state: 'Hibernia',
            zip: 666666
          }
        }
      ]

      this.loaded = true;
    }, 2000);
    
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
