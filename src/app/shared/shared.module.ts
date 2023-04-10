import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityItemComponent } from './activity-item/activity-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ActivityItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ActivityItemComponent
  ],
})
export class SharedModule { }
