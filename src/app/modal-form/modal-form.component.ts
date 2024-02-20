import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ModalFormComponent',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal-form.component.html',
  styleUrl: './modal-form.component.css',
})
export class ModalFormComponent {
  @Input() isModalVisible: boolean = false;
  @Output() visibilityChange: EventEmitter<boolean> = new EventEmitter();

  @Input() modalUser: User = {
    name: { title: '', first: '', last: '' },
    email: '',
    phone: '',
    picture: { large: '', medium: '', thumbnail: '' },
    gender: '',
  };

  FormUser = this.modalUser;

  @Output() modalUserChange: EventEmitter<User> = new EventEmitter();

  closeModal() {
    this.visibilityChange.emit((this.isModalVisible = false));
  }

  submitModal() {
    this.closeModal();

    this.FormUser = {
      name: {
        title: this.FormUser.name.title
          ? this.FormUser.name.title
          : this.modalUser.name.title,
        first: this.FormUser.name.first
          ? this.FormUser.name.first
          : this.modalUser.name.first,
        last: this.FormUser.name.last
          ? this.FormUser.name.last
          : this.modalUser.name.last,
      },
      email: this.FormUser.email ? this.FormUser.email : this.modalUser.email, //como no tenemos id no va ser cambiar el email
      phone: this.FormUser.phone ? this.FormUser.phone : this.modalUser.phone,
      picture: {
        large: this.FormUser.picture.large
          ? this.FormUser.picture.large
          : this.modalUser.picture.large,
        medium: this.FormUser.picture.medium
          ? this.FormUser.picture.medium
          : this.modalUser.picture.medium,
        thumbnail: this.FormUser.picture.thumbnail
          ? this.FormUser.picture.thumbnail
          : this.modalUser.picture.thumbnail,
      },
      gender: this.FormUser.gender
        ? this.FormUser.gender
        : this.modalUser.gender,
    };

    this.modalUserChange.emit(this.FormUser);
  }

  // form to edit the user data
}
