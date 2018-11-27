import { Injectable } from '@angular/core';
import { Course } from './Course';
import { HttpClient }    from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentDataService {

  constructor(private http: HttpClient) { }

  url= 'v1/courses';
  getAssignment(): Observable<Course[]> {
    return 
  }

}
