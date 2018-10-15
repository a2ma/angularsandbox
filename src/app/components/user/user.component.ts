import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
    //Properties
    user: User;

    constructor() {

    }

    ngOnInit(){
        this.user = {
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
    }

}

