import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, catchError } from 'rxjs';
import { ActivitiesService } from 'src/app/core/activities.service';
import { UtilService } from 'src/app/core/util.service';
import { ACTIVITY_EMPTY, Activity } from 'src/app/data/activity.type';

@Component({
  selector: 'app-detail-activity',
  templateUrl: './detail-activity.component.html',
  styleUrls: ['./detail-activity.component.css']
})
export class DetailActivityComponent {
  activity$: Observable<Activity>;
  error: string;

  constructor(
    activatedRoute: ActivatedRoute, 
    private activitiesService: ActivitiesService,
    private utilService: UtilService
  ) {
    this.error = '';
    const slug: string = utilService.getParam(activatedRoute, 'slug');
    // this.activity$ = this.activitiesService.getBySlug$(slug);
    this.activity$ = this.activitiesService.getBySlug$(slug).pipe(
      catchError((error) => {
        console.error('Error catched: ', error);
        this.error = error;
        throw error;
      }))
  }
}
