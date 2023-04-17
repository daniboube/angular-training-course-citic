import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Activity } from 'db/activity.type';
import { FormsService } from 'src/app/core/forms.service';

@Component({
  selector: 'app-new-activity-form',
  templateUrl: './new-activity-form.component.html',
  styleUrls: ['./new-activity-form.component.css']
})
export class NewActivityFormComponent {
  @Input() title: string = '';
  @Input() ageCategories: any[] = [];
  @Output() save: EventEmitter<Partial<Activity>> = new EventEmitter<Partial<Activity>>();
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private fromsService: FormsService
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

  onSaveClick() {
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

    if (this.form.valid) {
      const activity: Partial<Activity> = this.form.value as Partial<Activity>;
      this.save.emit(activity)
    }
  }

  showError(controlName: string): boolean {
    return this.fromsService.showError(this.form, controlName);
  }

  getErrorMessage(controlName: string): string {
    return this.fromsService.getErrorMessage(this.form, controlName);
  }
}
