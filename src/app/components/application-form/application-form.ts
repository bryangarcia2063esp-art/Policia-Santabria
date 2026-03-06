import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-application-form',
  standalone: false,
  templateUrl: './application-form.html',
  styleUrl: './application-form.css',
})
export class ApplicationForm {
  form: FormGroup;
  submitted = false;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required, Validators.min(16), Validators.max(99)]],
      discord: ['', [Validators.required]],
      rpExperience: ['', [Validators.required]],
      previousUnit: [''],
      motivation: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(500)]],
      acceptRules: [false, [Validators.requiredTrue]]
    });
  }

  isFieldInvalid(field: string): boolean {
    const control = this.form.get(field);
    return !!(control && control.invalid && control.touched);
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitted = true;
    }, 1500);
  }

  resetForm() {
    this.submitted = false;
    this.form.reset();
  }
}
