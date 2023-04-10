import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup;
  
  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  }

  onRegisterClick() {
    console.log(this.form.value);
  }

}
