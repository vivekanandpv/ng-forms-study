import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-rf-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './rf-contact.component.html',
  styleUrl: './rf-contact.component.css',
})
export class RfContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contacts: this.fb.array([]),
    });
  }

  get contacts(): FormArray {
    return this.contactForm.get('contacts') as FormArray;
  }

  createContact(): FormGroup {
    return this.fb.group({
      typeOfContact: [''],
      phoneNumber: ['', Validators.pattern(/^\d{10}$/)], // Example: Validates 10-digit phone number
    });
  }

  addContact() {
    this.contacts.push(this.createContact());
  }

  removeContact(index: number) {
    this.contacts.removeAt(index);
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
    }
  }

  getTrackIdForFormArray(index: number, item: any) {
    return `${index}-${JSON.stringify(item.value)}`;
  }
}
