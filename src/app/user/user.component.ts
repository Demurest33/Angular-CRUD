import { Component } from '@angular/core';
import { UserApiService } from '../../services/user-api.service';
import { User } from '../user.model';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'UserComponent',
  standalone: true,
  imports: [ModalFormComponent, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // users: User[] = [
  //   {
  //     gender: 'male',
  //     name: { title: 'Mr', first: 'Gustavo', last: 'González' },
  //     email: 'gustavo.gonzalez@example.com',
  //     phone: '937-749-666',
  //     picture: {
  //       large: 'https://i.imgur.com/3PmoWvC.jpg',
  //       medium: 'https://i.imgur.com/3PmoWvC.jpg',
  //       thumbnail: 'https://i.imgur.com/3PmoWvC.jpg',
  //     },
  //   },
  //   {
  //     gender: 'female',
  //     name: { title: 'Ms', first: 'Emma', last: 'Peltonen' },
  //     email: 'emma.peltonen@example.com',
  //     phone: '07-781-882',
  //     picture: {
  //       large: 'https://i.imgur.com/3PmoWvC.jpg',
  //       medium: 'https://i.imgur.com/3PmoWvC.jpg',
  //       thumbnail: 'https://i.imgur.com/3PmoWvC.jpg',
  //     },
  //   },
  //   {
  //     gender: 'female',
  //     name: { title: 'Ms', first: 'Sofie', last: 'Christiansen' },
  //     email: 'sofie.christiansen@example.com',
  //     phone: '80641912',
  //     picture: {
  //       large: 'https://i.imgur.com/3PmoWvC.jpg',
  //       medium: 'https://i.imgur.com/3PmoWvC.jpg',
  //       thumbnail: 'https://i.imgur.com/3PmoWvC.jpg',
  //     },
  //   },
  //   {
  //     gender: 'male',
  //     name: { title: 'Mr', first: 'Konsta', last: 'Jarvela' },
  //     email: 'konsta.jarvela@example.com',
  //     phone: '04-066-144',
  //     picture: {
  //       large: 'https://i.imgur.com/3PmoWvC.jpg',
  //       medium: 'https://i.imgur.com/3PmoWvC.jpg',
  //       thumbnail: 'https://i.imgur.com/3PmoWvC.jpg',
  //     },
  //   },
  //   {
  //     gender: 'female',
  //     name: { title: 'Ms', first: 'Ljiljana', last: 'Mančić' },
  //     email: 'ljiljana.mancic@example.com',
  //     phone: '019-2746-930',
  //     picture: {
  //       large: 'https://i.imgur.com/3PmoWvC.jpg',
  //       medium: 'https://i.imgur.com/3PmoWvC.jpg',
  //       thumbnail: 'https://i.imgur.com/3PmoWvC.jpg',
  //     },
  //   },
  //   {
  //     gender: 'female',
  //     name: { title: 'Ms', first: 'Milla', last: 'Mattila' },
  //     email: 'milla.mattila@example.com',
  //     phone: '09-803-574',
  //     picture: {
  //       large: 'https://i.imgur.com/3PmoWvC.jpg',
  //       medium: 'https://i.imgur.com/3PmoWvC.jpg',
  //       thumbnail: 'https://i.imgur.com/3PmoWvC.jpg',
  //     },
  //   },
  // ];
  users: User[] = [];
  constructor(private userApiService: UserApiService) {
    this.userApiService.getUsers(6).subscribe((data) => {
      //6 users for testing
      this.users = data.results;
    });
  }

  isLogedIn = false;
  isModalVisible = false;
  counter = 0;

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

    document.addEventListener('click', this.closeModalOutside.bind(this));
  }

  closeModalOutside(event: MouseEvent): void {
    const modal = document.getElementById('EditModal') as HTMLDialogElement;

    const target = event.target as HTMLElement;

    // Verifica si el objetivo del clic no es el modal y no es un botón
    if (
      target !== modal &&
      !modal.contains(target) &&
      target.tagName !== 'BUTTON'
    ) {
      this.isModalVisible = false;
      document.removeEventListener('click', this.closeModalOutside.bind(this));
    }
  }

  getModalState(isModalVisible: boolean) {
    this.isModalVisible = isModalVisible;
  }

  getModalUser(modalUser: User) {
    //find the user in the array and update it
    console.log(modalUser);

    const user = this.users.find((u) => u.email === modalUser.email);
    if (user) {
      user.name = modalUser.name;
      user.phone = modalUser.phone;
      user.name = modalUser.name;
    }
  }

  deleteUser(email: string) {
    if (this.isModalVisible) return;
    if (confirm('¿Estás seguro de que quieres eliminar este usuario?'))
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

  //generate random users
  generateUsers() {
    if (this.counter === 0) return;
    this.userApiService.getUsers(this.counter).subscribe((data) => {
      this.users = [...this.users, ...data.results];
      this.counter = 0;
    });
  }

  incrementCounter() {
    this.counter++;
  }

  decrementCounter() {
    if (this.counter === 0) return;
    this.counter--;
  }
}
