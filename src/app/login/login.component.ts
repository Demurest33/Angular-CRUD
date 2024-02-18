import { Component, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'LoginComponent',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @Input() isLogedIn: boolean = false;
  @Output() dataChange: EventEmitter<boolean> = new EventEmitter();

  handleLogin() {
    this.dataChange.emit((this.isLogedIn = true));
  }

  handleLogOut() {
    this.dataChange.emit((this.isLogedIn = false));
  }
}
