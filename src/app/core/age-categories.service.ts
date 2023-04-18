import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AgeCategory } from '../data/activity.type';

@Injectable({
  providedIn: 'root'
})
export class AgeCategoriesService {
  private ageCategoriesUrl: string = 'http://localhost:3000/ageCategories';

  constructor(private httpClient: HttpClient) {}

  getAll$(): Observable<AgeCategory[]> {
    return this.httpClient.get<AgeCategory[]>(this.ageCategoriesUrl);
  }
}
