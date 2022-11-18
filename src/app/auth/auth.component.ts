import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  console = console;
  showForm: string = 'SignUp';
  switchForm() {
    this.showForm == 'SignUp'
      ? (this.showForm = 'SignIn')
      : (this.showForm = 'SignUp');
  }
}
