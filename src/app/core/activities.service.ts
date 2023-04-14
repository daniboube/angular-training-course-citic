import { Injectable } from '@angular/core';
import { ACTIVITIES } from '../data/activities.data';
import { ACTIVITY_EMPTY, Activity } from '../data/activity.type';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  private activitiesUrl: string = 'http://localhost:3000/activities';

  constructor(private httpClient: HttpClient) { }

  getAll$(): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>(this.activitiesUrl);
  }

  getPublished$(byTitle: string, sortOrder: number): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>(this.activitiesUrl).pipe(
      catchError((error) => {
        console.error('Error catched: ', error);
        return of([]);
      }),
      map((arrayResponse) => arrayResponse.filter(a => a.state === 'published')),
      map((arrayResponse) => arrayResponse.filter(a => a.title.toLowerCase().includes(byTitle.toLowerCase()))),
      map((arrayResponse) => arrayResponse.sort((a, b) => (a.price - b.price) * sortOrder))
    )
  }

  getBySlug$(slug:string): Observable<Activity> {
    const url = this.activitiesUrl + '?slug=' + slug;
    return this.httpClient.get<Activity[]>(url).pipe(
      catchError((error) => {
        console.error('Error catched: ', error);
        return of([]); 
      }),
      // tap is a 'debugging' operator
      // map is a transformation operator
      tap((arrayResponse) => console.log(arrayResponse)), 
      map((arrayResponse) => arrayResponse[0] || ACTIVITY_EMPTY), 
      tap((itemExtracted) => console.log(itemExtracted))
    );
  }

  addNew$(activity: Activity): Observable<Activity> {
    // TODO: Add the new activity to the server
    return of(ACTIVITY_EMPTY)
  }
}
