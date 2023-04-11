import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsService } from '../core/forms.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup;
  
  constructor(formBuilder: FormBuilder, private fromsService: FormsService) {
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
    return this.fromsService.showError(this.form, controlName);
  }

  getErrorMessage(controlName: string): string {
    return this.fromsService.getErrorMessage(this.form, controlName);
  }

}
