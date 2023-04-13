import { Injectable } from '@angular/core';
import { ACTIVITIES } from '../data/activities.data';
import { ACTIVITY_EMPTY, Activity } from '../data/activity.type';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Activity[] {
    return ACTIVITIES;
  }

  getAll$(): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>('http://localhost:3000/activities');
  }

  getPublished(byTitle: string, sortOrder: number): Activity[] {
    return ACTIVITIES
      .filter(a => a.state === 'published')
      .filter(
        activity => activity.title.toLowerCase().includes(byTitle.toLowerCase())
      ).sort((a, b) => (a.price - b.price) * sortOrder);
  }

  getBySlug(slug:string): Activity {
    const foundActivity = ACTIVITIES.find(a => a.slug === slug);
    return foundActivity || ACTIVITY_EMPTY;
  }

  getBySlug$(slug:string): Observable<Activity> {
    const url = 'http://localhost:3000/activities/?slug=' + slug;
    return this.httpClient.get<Activity[]>(url).pipe(
      // tap is a debugging operator
      // map is a transformation operator
      tap((arrayResponse) => console.log(arrayResponse)), 
      map((arrayResponse) => arrayResponse.length>0 ? arrayResponse[0]: ACTIVITY_EMPTY), 
      tap((itemExtracted) => console.log(itemExtracted))
    );
  }

  addNew(activity: Activity): void {
    ACTIVITIES.push(activity);
  }
}
