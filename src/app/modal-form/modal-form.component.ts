import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'ModalFormComponent',
  standalone: true,
  imports: [],
  templateUrl: './modal-form.component.html',
  styleUrl: './modal-form.component.css',
})
export class ModalFormComponent {
  @Input() isModalVisible: boolean = false;
  @Output() dataChange: EventEmitter<boolean> = new EventEmitter();

  @Input() modalUser: User = {
    name: { title: '', first: '', last: '' },
    email: '',
    phone: '',
    picture: { large: '', medium: '', thumbnail: '' },
    gender: '',
  };

  closeModal() {
    this.dataChange.emit((this.isModalVisible = false));
  }
}
