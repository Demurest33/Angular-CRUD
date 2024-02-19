import { Component } from '@angular/core';
import { UserApiService } from '../user-api.service';
import { User } from '../user.model';
import { ModalFormComponent } from '../modal-form/modal-form.component';
@Component({
  selector: 'UserComponent',
  standalone: true,
  imports: [ModalFormComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  users: User[] = [
    {
      gender: 'male',
      name: { title: 'Mr', first: 'Gustavo', last: 'González' },
      email: 'gustavo.gonzalez@example.com',
      phone: '937-749-666',
      picture: {
        large: 'https://i.imgur.com/3PmoWvC.jpg',
        medium: 'https://i.imgur.com/3PmoWvC.jpg',
        thumbnail: 'https://i.imgur.com/3PmoWvC.jpg',
      },
    },
    {
      gender: 'female',
      name: { title: 'Ms', first: 'Emma', last: 'Peltonen' },
      email: 'emma.peltonen@example.com',
      phone: '07-781-882',
      picture: {
        large: 'https://i.imgur.com/3PmoWvC.jpg',
        medium: 'https://i.imgur.com/3PmoWvC.jpg',
        thumbnail: 'https://i.imgur.com/3PmoWvC.jpg',
      },
    },
    {
      gender: 'female',
      name: { title: 'Ms', first: 'Sofie', last: 'Christiansen' },
      email: 'sofie.christiansen@example.com',
      phone: '80641912',
      picture: {
        large: 'https://i.imgur.com/3PmoWvC.jpg',
        medium: 'https://i.imgur.com/3PmoWvC.jpg',
        thumbnail: 'https://i.imgur.com/3PmoWvC.jpg',
      },
    },
    {
      gender: 'male',
      name: { title: 'Mr', first: 'Konsta', last: 'Jarvela' },
      email: 'konsta.jarvela@example.com',
      phone: '04-066-144',
      picture: {
        large: 'https://i.imgur.com/3PmoWvC.jpg',
        medium: 'https://i.imgur.com/3PmoWvC.jpg',
        thumbnail: 'https://i.imgur.com/3PmoWvC.jpg',
      },
    },
    {
      gender: 'female',
      name: { title: 'Ms', first: 'Ljiljana', last: 'Mančić' },
      email: 'ljiljana.mancic@example.com',
      phone: '019-2746-930',
      picture: {
        large: 'https://i.imgur.com/3PmoWvC.jpg',
        medium: 'https://i.imgur.com/3PmoWvC.jpg',
        thumbnail: 'https://i.imgur.com/3PmoWvC.jpg',
      },
    },
    {
      gender: 'female',
      name: { title: 'Ms', first: 'Milla', last: 'Mattila' },
      email: 'milla.mattila@example.com',
      phone: '09-803-574',
      picture: {
        large: 'https://i.imgur.com/3PmoWvC.jpg',
        medium: 'https://i.imgur.com/3PmoWvC.jpg',
        thumbnail: 'https://i.imgur.com/3PmoWvC.jpg',
      },
    },
  ];
  // constructor(private userApiService: UserApiService) {
  //   this.userApiService.getUsers().subscribe((data) => {
  //     this.users = data.results;
  //   });
  // }

  isLogedIn = false;
  isModalVisible = false;
  modalUser: User = {
    name: { title: '', first: '', last: '' },
    email: '',
    phone: '',
    picture: { large: '', medium: '', thumbnail: '' },
    gender: '',
  };

  showModal(user: User) {
    this.isModalVisible = true;
    this.modalUser = user;
  }

  getModalState(isModalVisible: boolean) {
    this.isModalVisible = isModalVisible;
  }

  deleteUser(email: string) {
    this.users = this.users.filter((u) => u.email !== email);
  }

  editUser(email: string) {
    const user = this.users.find((u) => u.email === email);
    if (user) {
      user.name.first = 'Edited';
    }
  }

  login() {
    this.isLogedIn = true;
  }
}
