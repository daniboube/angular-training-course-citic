import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivitiesService } from '../core/activities.service';
import { Activity } from '../data/activity.type';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivitiesComponent {
  title = "Activities administration"
  activities$: Observable<Activity[]> = this.activitiesService.getAll$();

  constructor(private activitiesService: ActivitiesService) {  }
}
