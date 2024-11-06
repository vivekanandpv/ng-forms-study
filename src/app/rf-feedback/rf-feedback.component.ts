import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-rf-feedback',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './rf-feedback.component.html',
  styleUrl: './rf-feedback.component.css',
})
export class RfFeedbackComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18)]],
      newsletter: [false],
      exercise: ['no exercise'],
      comments: [''],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form submitted:', this.myForm.value);
    }
  }
}
