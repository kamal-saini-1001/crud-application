import { Service } from '@angular/core';

@Service()
export class Auth {

    users: any[] = [
        {
            name: 'kamal',
            email: 'kamal@gmail.com',
            gender: 'male',
            password: 'kamal123'
        }
    ]

    addUser(user: any) {
        this.users.push(user);
        return true;
    }

    getUser() {
        return this.users;
    }

}
