import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivitiesService } from 'src/app/core/activities.service';
import { UtilService } from 'src/app/core/util.service';
import { ACTIVITY_EMPTY, Activity } from 'src/app/data/activity.type';

@Component({
  selector: 'app-detail-activity',
  templateUrl: './detail-activity.component.html',
  styleUrls: ['./detail-activity.component.css']
})
export class DetailActivityComponent {
  activity: Activity = ACTIVITY_EMPTY;

  constructor(
    activatedRoute: ActivatedRoute, 
    private activitiesService: ActivitiesService,
    private utilService: UtilService
  ) {
    const slug: string = utilService.getParam(activatedRoute, 'slug');
    this.activity = activitiesService.getBySlug(slug);
  }
}
