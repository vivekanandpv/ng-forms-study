import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailValidatorDirective } from '../email-validator.directive';

@Component({
  selector: 'app-tf-login',
  standalone: true,
  imports: [FormsModule, NgIf, EmailValidatorDirective],
  templateUrl: './tf-login.component.html',
  styleUrl: './tf-login.component.css',
})
export class TfLoginComponent {
  user = {
    username: '',
    password: '',
  };

  onSubmit() {
    console.log('Login submitted:', this.user);
  }
}
