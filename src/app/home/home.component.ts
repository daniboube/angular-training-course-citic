import { Component } from '@angular/core';
import { ACTIVITIES } from '../data/activities.data';
import { Activity } from '../data/activity.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  order = -1;
  searchTerm = '';

  activities: Activity[] = []

  constructor() {
    this.setActivities()
  }

  setActivities() {
    this.activities = ACTIVITIES.filter(
      activity => (
        (activity.state === 'published') && 
        (this.searchTerm === '' || activity.title.toLowerCase().includes(this.searchTerm.toLowerCase()))
      )
    ).sort((a, b) => (a.price - b.price) * this.order);
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
