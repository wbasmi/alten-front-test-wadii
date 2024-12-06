import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {CommonModule, Location} from "@angular/common";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    ToastModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [MessageService],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private messageService: MessageService, private location: Location) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(300)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Demande de contact envoyée avec succès'
      });
      this.location.back()
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Veuillez remplir tous les champs correctement.'
      });
    }
  }

  onClose() {
    this.location.back();
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }
}
