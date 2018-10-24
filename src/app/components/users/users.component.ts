import { Component, OnInit, ViewChild } from '@angular/core';
import { UserdataService } from '../../services/userdata.service';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    age: null,
    address: {
      street: '',
      city: '',
      state: '',
      zip: null
    },
    isActive: false,
    registered: false,
    hide: true
  };

  newUser: User = {
    firstName: '',
    lastName: '',
    email: '',
    age: null,
    address: {
      street: '',
      city: '',
      state: '',
      zip: null
    },
    isActive: false,
    registered: false,
    hide: true
  };

  users: User[];
  // showExtended = true;
  loaded = false;
  enableAdd = true;
  currentClasses = {};
  currentStyles = {};
  showUserForm = false;
  @ViewChild('userForm') form: any;

  constructor(private userData: UserdataService) { }

  ngOnInit() {

    this.users = this.userData.getUsers();
    this.loaded = true;

    this.setCurrentClasses();
    this.setCurrentStyles();

  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      age: null,
      address: {
        street: '',
        city: '',
        state: '',
        zip: null
      },
    };
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.user.hide
    };
  }
  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.user.hide ? '0' : '40px',
      'big-text': this.user.hide,
    };
    console.log(this.user.hide);
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    if (!valid) {
    } else {
      value.registered = new Date();
      this.userData.addUser(value);
      this.form.reset();
    }
  }

}
