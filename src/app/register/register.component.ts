import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup;
  
  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
    });
  }

  onRegisterClick() {
    const password = this.form.value.password;
    const confirmPassword = this.form.value.confirmPassword;
    let errors = null;
    
    if (password !== confirmPassword) {
      errors = { 'mismatch': true };
      this.form.controls['confirmPassword'].setErrors(errors);
      return
    }
    this.form.controls['confirmPassword'].setErrors(errors);
    console.log(this.form.value);
  }

  showError(controlName: string): boolean {
    const control = this.form.controls[controlName];
    if (!control) return false;
    return control.invalid && (control.touched || control.dirty);
  }

  getErrorMessage(controlName: string): string {
    const control = this.form.controls[controlName];
    if (!control) return "";
    return JSON.stringify(control.errors);
  }

}
