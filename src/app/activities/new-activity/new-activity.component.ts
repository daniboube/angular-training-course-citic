import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from 'db/activity.type';
import { tap } from 'rxjs';
import { ActivitiesService } from 'src/app/core/activities.service';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.css']
})
export class NewActivityComponent {
  title = 'New Activity';
  ageCategories = [
    {
      caption: "Adult",
      id: "adult",
      userId: 1,
    },
    {
      caption: "Child",
      id: "child",
      userId: 1,
    },
    {
      caption: "Family",
      id: "family",
      userId: 1,
    },
  ]

  constructor(private router: Router, private activitiesService: ActivitiesService) { }

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
