import { Component } from '@angular/core';
import { ActivitiesService } from '../core/activities.service';
import { Activity } from '../data/activity.type';
import { ACTIVITY_EMPTY } from 'db/activity.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  order = -1;
  searchTerm = '';

  activities: Activity[] = []

  constructor(private activitiesService: ActivitiesService) {
    this.setActivities();
  }

  setActivities() {
    this.activitiesService.getPublished$(this.searchTerm, this.order).subscribe({
      next: (body) => (this.activities = body),
      error: (err) => (this.activities = [ACTIVITY_EMPTY])
    })
  }

  changeActivitiesOrder() {
    this.order = this.order * -1;
    this.setActivities()
  }

  onSearchChange(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.setActivities()
  }

}
