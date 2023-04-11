import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label-control',
  templateUrl: './label-control.component.html',
  styleUrls: ['./label-control.component.css']
})
export class LabelControlComponent {
  @Input () caption: string = '';
  @Input () controlName: string = '';
  @Input () isRequired: boolean = false;
  @Input () showError: boolean = false;
  @Input () errorMessage: string = '';

  constructor() { }
}
