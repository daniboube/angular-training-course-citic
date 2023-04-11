import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsService } from '../core/forms.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;

  constructor(formBuilder: FormBuilder, private fromsService: FormsService) { 
    this.form = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
    });
  }

  onLoginClick() {
    console.log(this.form.value);
  }

  showError(controlName: string): boolean {
    return this.fromsService.showError(this.form, controlName);
  }

  getErrorMessage(controlName: string): string {
    return this.fromsService.getErrorMessage(this.form, controlName);
  }

}
