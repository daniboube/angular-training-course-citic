import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsService } from 'src/app/core/forms.service';
import { Credentials, User } from 'src/app/data/credentials.type';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  @Input() title: string = '';
  @Output() register: EventEmitter<User> = new EventEmitter<User>();
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
    console.log('Register button clicked');
    const password = this.form.value.password;
    const confirmPassword = this.form.value.confirmPassword;
    let errors = null;
    
    if (password !== confirmPassword) {
      errors = { 'mismatch': true };
      this.form.controls['confirmPassword'].setErrors(errors);
      return
    }
    this.form.controls['confirmPassword'].setErrors(errors);
    this.register.emit(this.form.value);
  }

  showError(controlName: string): boolean {
    return this.fromsService.showError(this.form, controlName);
  }

  getErrorMessage(controlName: string): string {
    return this.fromsService.getErrorMessage(this.form, controlName);
  }
}
