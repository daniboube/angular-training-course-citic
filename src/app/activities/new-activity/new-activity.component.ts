import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivitiesService } from 'src/app/core/activities.service';
import { FormsService } from 'src/app/core/forms.service';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.css']
})
export class NewActivityComponent {
  form: FormGroup;

  constructor(
    formBuilder: FormBuilder, 
    private fromsService: FormsService, 
    private activitiesService: ActivitiesService
  ) { 
    this.form = formBuilder.group({
      title: ['', [Validators.required]],
      description: '',
      price: [0, [Validators.required, Validators.min(0)]],
      currency: ['', [Validators.required]],
      date: ['', [Validators.required]],
      location: ['', [Validators.required]],
      ageCategory: ['', [Validators.required]],
      minParticipants: [0, [Validators.required]],
      maxParticipants: [0, [Validators.required]],
      state: ['', [Validators.required]]
    });
  }

  onNewClick() {
    // Check if the form control's minParticipants is less or equal than maxParticipants
    if (this.form.value.minParticipants > this.form.value.maxParticipants) {
      this.form.controls['minParticipants'].setErrors({minParticipants: true});
      return
    }

    // Check if the date is in the future
    const today = new Date();
    const date = new Date(this.form.value.date);
    if (date < today) {
      this.form.controls['date'].setErrors({inThePast: true});
      return
    }

    // Parse the date from yyyy-mm-dd to dd-mm-yyyy
    const dateParts = this.form.value.date.split('-');
    this.form.value.date = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    console.log('New activity: ', this.form.value);
  }

  showError(controlName: string): boolean {
    return this.fromsService.showError(this.form, controlName);
  }

  getErrorMessage(controlName: string): string {
    return this.fromsService.getErrorMessage(this.form, controlName);
  }

}
