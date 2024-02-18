import { Component } from '@angular/core';

@Component({
  selector: 'UserComponent',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  users = [
    {
      name: 'John',
      age: 25,
      email: 'John@gmail.com',
    },
    {
      name: 'Jane',
      age: 24,
      email: 'Jane@gmail.com',
    },
    {
      name: 'Jack',
      age: 30,
      email: 'Jack@gmail.com',
    },
  ];
  isLogedIn = false;

  public deleteUser(user: any) {
    this.users = this.users.filter((u) => u.name !== user.name);
  }

  public login() {
    this.isLogedIn = true;
  }
}
