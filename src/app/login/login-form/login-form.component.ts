import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsService } from 'src/app/core/forms.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  @Input() title: string = '';
  @Output() login: EventEmitter<any> = new EventEmitter<any>();
  form: FormGroup;

  constructor(formBuilder: FormBuilder, private fromsService: FormsService) { 
    this.form = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
    });
  }

  onLoginClick() {
    console.log('Login button clicked');
    this.login.emit(this.form.value);
  }

  showError(controlName: string): boolean {
    return this.fromsService.showError(this.form, controlName);
  }

  getErrorMessage(controlName: string): string {
    return this.fromsService.getErrorMessage(this.form, controlName);
  }

}
