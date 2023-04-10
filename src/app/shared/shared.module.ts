import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityItemComponent } from './activity-item/activity-item.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ActivityItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    ActivityItemComponent,
    ReactiveFormsModule,
  ],
})
export class SharedModule { }
