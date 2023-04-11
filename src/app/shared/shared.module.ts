import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityItemComponent } from './activity-item/activity-item.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LabelControlComponent } from './label-control/label-control.component';



@NgModule({
  declarations: [
    ActivityItemComponent,
    LabelControlComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    ActivityItemComponent,
    LabelControlComponent,
    ReactiveFormsModule,
  ],
})
export class SharedModule { }
