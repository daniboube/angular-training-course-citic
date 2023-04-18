import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from 'db/activity.type';
import { Observable, tap } from 'rxjs';
import { ActivitiesService } from 'src/app/core/activities.service';
import { AgeCategoriesService } from 'src/app/core/age-categories.service';
import { AgeCategory } from 'src/app/data/activity.type';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.css']
})
export class NewActivityComponent {
  title = 'New Activity';
  ageCategories$: Observable<AgeCategory[]> = this.ageCategoriesService.getAll$();

  constructor(
    private router: Router,
    private activitiesService: ActivitiesService,
    private ageCategoriesService: AgeCategoriesService) { }

  onSave(activity: Partial<Activity>) {
    console.log('Save clicked');
    console.log(activity);
    this.activitiesService.addNew$(activity).subscribe({
      next: (activity) => {
        console.log('Activity created: ', activity);
        this.router.navigate(['/activities'])
      },
      error: (error) => console.log('Error catched: ', error),
    });
  }
}
