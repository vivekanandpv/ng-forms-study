import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-rf-registration',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './rf-registration.component.html',
  styleUrl: './rf-registration.component.css',
})
export class RfRegistrationComponent {
  registrationForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPassword: new FormControl('', Validators.required),
  });

  onSubmit() {
    // Handle registration submission here, e.g., send data to backend
    if (this.registrationForm.valid) {
      console.log('Registration submitted:', this.registrationForm.value);
    }
  }
}
